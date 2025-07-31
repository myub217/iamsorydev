#!/bin/bash

# Clean.sh — JP-System Production Cleanup Script
# Use this before builds or when resetting environments.

echo "🧹 Starting clean process..."

# Exit immediately on error
set -euo pipefail

# Define root dir (optional)
PROJECT_ROOT="$(pwd)"

echo "📁 Project root: $PROJECT_ROOT"

# === Remove build output ===
echo "🗑️ Removing dist/, build/, coverage/..."
rm -rf dist build coverage

# === Remove Vite, TypeScript, and framework caches ===
echo "🗑️ Removing cache directories..."
rm -rf node_modules/.vite
rm -rf node_modules/.cache
rm -rf .turbo
rm -rf .eslintcache
rm -rf .parcel-cache
rm -rf .next
rm -rf .vite
rm -rf .svelte-kit
rm -rf .nuxt
rm -rf .cache

# === Optional: remove lock files if full reset ===
# echo "🧷 Removing lockfiles..."
# rm -f package-lock.json yarn.lock pnpm-lock.yaml

# === Remove leftover logs ===
echo "🗑️ Cleaning up logs..."
rm -f *.log npm-debug.log* yarn-debug.log* pnpm-debug.log*

# === Recreate dist/ folder (optional for CI/CD) ===
mkdir -p dist

echo "✅ Clean completed successfully."