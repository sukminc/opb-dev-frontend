#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "Deploying one-percent-better-landing from $ROOT_DIR"
cd "$ROOT_DIR"
vercel deploy --prod --yes
