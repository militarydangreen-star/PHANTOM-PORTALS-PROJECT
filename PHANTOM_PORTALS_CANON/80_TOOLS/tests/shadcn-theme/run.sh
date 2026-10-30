#!/usr/bin/env bash
# Compile the shadcn adapter with real Tailwind v4 and check the rendered page in Chromium.
# Needs Node 22+ and Playwright's Chromium (require('playwright')). Exit 1 on any mismatch.
set -euo pipefail
cd "$(dirname "$0")"
trap 'rm -rf out.css fonts globals.css phantom-fonts.css proof.png result.txt' EXIT  # leave only the test sources
[ -d node_modules/tailwindcss ] || npm install --no-fund --no-audit
A=../../../10_DESIGN_SYSTEM/adapters/shadcn
cp "$A/globals.css" "$A/phantom-fonts.css" .
rm -rf fonts && cp -r ../../../30_ASSETS/fonts fonts
npx @tailwindcss/cli -i globals.css -o out.css
node check.js "$PWD" | tee result.txt
! grep -q '^FAIL' result.txt && grep -q 'radius button/input/card: 0px 0px 8px' result.txt && grep -q 'errors \[\]' result.txt
