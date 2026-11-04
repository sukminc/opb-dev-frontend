# Collector design notes

This release contains a frozen, owner-supplied snapshot and collection documentation, not an automated collector. Do not overwrite that snapshot with live prices: a fresh API request cannot reproduce a historical capture. The original raw responses and exact price-field basis were not supplied.

## Polymarket: Gamma public search

Use the public Gamma search endpoint with an exact event-title query, then confirm the returned event title, election year, candidate, and settlement rules. Search is discovery, not an exact-match guarantee.

```bash
curl --get 'https://gamma-api.polymarket.com/public-search' \
  --data-urlencode 'q=Texas Senate Election Winner'
```

Repeat with `<State> Senate Election Winner` (for example, `Michigan Senate Election Winner` or `Florida Senate Election Winner`). Verify that Ohio and Florida select the intended special election. Keep the matched event ID, market ID, slug, question, outcome labels, price fields, and request time. If reading Gamma `outcomes` and `outcomePrices`, parse their representation and match by outcome label; never assume the Democrat is at index zero. Control events require separate discovery and rule matching.

Endpoint reference: [Polymarket search API](https://docs.polymarket.com/api-reference/search/search-markets-events-and-profiles).

## Kalshi: Trade API v2

Public market data is available without authentication. The current documented base is `https://external-api.kalshi.com/trade-api/v2`; older integrations may use `https://api.elections.kalshi.com/trade-api/v2`. Keep the host in configuration.

```bash
curl --get 'https://external-api.kalshi.com/trade-api/v2/markets' \
  --data-urlencode 'series_ticker=SENATETX' \
  --data-urlencode 'status=open'
```

Use the returned cursor to paginate. For historical discovery, omit the open-status filter and use the provider’s historical endpoints where required. Inspect each market’s title, `event_ticker`, candidate/YES meaning, and rules. Read the exact event or market to confirm identity before recording a quote.

The following series patterns are supplied project discovery hints, not verified contract IDs or a promise that every series currently exists:

| Purpose | Series pattern / examples |
| --- | --- |
| State Senate winner | `SENATE{ST}`: `SENATETX`, `SENATEMI`, `SENATEME`, `SENATEAK`, `SENATEKS`, `SENATEIA`, `SENATENC`, `SENATEGA`, `SENATESC`, `SENATENH`, `SENATEMN`, `SENATENE` |
| Ohio special | `SENATEOHS` |
| Florida special | `SENATEFLS` |
| Senate control | `CONTROLS` |
| Person-series alternatives | `KX*SENATE`, such as `KXIASENATE`, `KXMISENATE`, `KXAKSENATE`; also `KXMESENATEPERSON` |

Do not manufacture one universal ticker template: person-series naming varies. Verify the 2026 contract and subject. Nebraska targets Ricketts (R), not the independent challenger or a Democrat. No Kalshi House price is supplied for this season.

References: [Public market-data quick start](https://docs.kalshi.com/getting_started/quick_start_market_data), [Get Markets](https://docs.kalshi.com/api-reference/market/get-markets).

## Collection contract for a later implementation

1. Match each venue’s contract to the same binary proposition, election, and resolution rules. Flag incompatible definitions instead of scoring them as equivalent.
2. Record the full request URL and query, raw response, contract identifiers, timezone-aware capture timestamp, quoted side, and exact chosen price field. Store request and provider timestamps separately when available.
3. Declare a comparable price convention before collection (for example, a two-sided midpoint where available). Preserve bid, ask, last trade, spread, and liquidity where available. Never silently substitute last trade for midpoint. Dollar probabilities convert to percent by multiplying by 100; legacy cent values need a different conversion. Keep the original field/unit.
4. Schedule a per-market capture before the declared cutoff; log missing or late captures. Poll close, market close, and event resolution are distinct. Season 1’s Kalshi window crosses the listed 19:00 ET poll closes, so it cannot establish every race’s pre-poll-close price.
5. Persist an immutable snapshot and handle unavailable markets with nulls. Retry bounded read requests with backoff; never retry a historical snapshot by replacing it with a later price.
6. Later, append verified binary outcomes with an authoritative source and resolution time. Never derive an election result from a probability, candidate ordering, or the winner of a price comparison. Leave void, disputed, or unresolved contracts unscored.
7. Only then compute per-venue Brier and log loss, paired averages, and calibration counts. Follow the definitions in the project README; keep chamber control separate from state races.

No credentials, trading endpoints, positions, or order placement are needed for this read-only project.
