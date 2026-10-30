# Build the design tokens (10_DESIGN_SYSTEM/tokens/tokens.json -> build/*) with Style Dictionary.
# Requires Node 22+ (Style Dictionary 5.6.1) and Python 3.11+. Installs the pinned toolchain on first run, then works offline.
# Usage:  powershell -ExecutionPolicy Bypass -File .\80_TOOLS\build-tokens.ps1
$ErrorActionPreference = 'Stop'
Set-Location -Path $PSScriptRoot

if (-not (Test-Path 'node_modules/style-dictionary')) {
    Write-Host 'Installing pinned build tools (style-dictionary 5.6.1)…'
    if (Test-Path 'package-lock.json') { npm ci --no-fund --no-audit } else { npm install --no-fund --no-audit }
    if ($LASTEXITCODE -ne 0) { throw 'npm install failed' }
}

node build-tokens.mjs
if ($LASTEXITCODE -ne 0) { throw 'Token build failed' }

$python = if (Get-Command py -ErrorAction SilentlyContinue) { 'py' } else { 'python' }
& $python contrast-matrix.py
if ($LASTEXITCODE -ne 0) { throw 'Contrast matrix failed' }
& $python build-adapters.py
if ($LASTEXITCODE -ne 0) { throw 'Adapter build failed' }

Write-Host 'Done. Run python 80_TOOLS\validate-canon.py before committing.'
