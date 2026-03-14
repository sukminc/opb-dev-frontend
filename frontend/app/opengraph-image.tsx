import { ImageResponse } from "next/og";
import { BRAND } from "./lib/brand";

export const runtime = "edge";
export const alt = "1% Better — Small apps. Fast loops.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(180deg, #f7f5f1 0%, #f3efe7 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "22px",
              border: `3px solid ${BRAND.ink}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: BRAND.ink,
              background: BRAND.surface,
              boxShadow: "0 18px 42px rgba(24, 21, 17, 0.06)",
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "-0.12em",
            }}
          >
            1%
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span
              style={{
                color: BRAND.ink,
                fontSize: "24px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              1% Better
            </span>
            <span
              style={{
                color: BRAND.muted,
                fontSize: "12px",
                fontFamily: "monospace",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
              }}
            >
              ship small. learn fast.
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: BRAND.ink,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Small apps.
            <span style={{ color: BRAND.muted }}> Fast loops.</span>
          </div>
          <div style={{ fontSize: "24px", color: BRAND.muted, maxWidth: "760px", lineHeight: 1.4 }}>
            A minimal product studio for learning in public, shipping quickly,
            and getting one percent better on every cycle.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: BRAND.surfaceStrong,
              border: `1px solid ${BRAND.border}`,
              borderRadius: "14px",
              padding: "12px 20px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "12px",
                border: `1.5px solid ${BRAND.ink}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: BRAND.ink,
                background: BRAND.surface,
                fontSize: "11px",
                fontWeight: 700,
              }}
            >
              SY
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ color: BRAND.ink, fontSize: "14px", fontWeight: 600 }}>
                Chris S. Yoon
              </span>
              <span style={{ color: BRAND.muted, fontSize: "12px" }}>
                Product studio · funding page · linkedin.com/in/sukminyoon
              </span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "32px" }}>
            {[
              { value: "ship", label: "small ideas" },
              { value: "learn", label: "fast loops" },
            ].map((s) => (
              <div
                key={s.label}
                style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}
              >
                <span style={{ color: BRAND.ink, fontSize: "22px", fontWeight: 700, fontFamily: "monospace" }}>
                  {s.value}
                </span>
                <span style={{ color: BRAND.mutedSoft, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
