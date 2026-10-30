#!/usr/bin/env bash
# Build the design tokens (10_DESIGN_SYSTEM/tokens/tokens.json -> build/*) with Style Dictionary.
# Requires Node 22+ (Style Dictionary 5.6.1) and Python 3.11+. Installs the pinned toolchain on first run, then works offline.
set -euo pipefail
cd "$(dirname "$0")"

if [ ! -d node_modules/style-dictionary ]; then
  echo "Installing pinned build tools (style-dictionary 5.6.1)…"
  if [ -f package-lock.json ]; then npm ci --no-fund --no-audit; else npm install --no-fund --no-audit; fi
fi

node build-tokens.mjs
python3 contrast-matrix.py
python3 build-adapters.py
echo "Done. Run python3 80_TOOLS/validate-canon.py before committing."
