#!/bin/bash

echo "🚀 Starting Angular 17+ Migration..."

# Remove old node_modules and package-lock.json
echo "🧹 Cleaning up old dependencies..."
rm -rf node_modules package-lock.json

# Install new dependencies
echo "📦 Installing new Angular 17+ dependencies..."
npm install

# Check for any remaining issues
echo "🔍 Checking for migration issues..."
npm run lint

echo "✅ Migration complete! You may need to address any linting errors manually."
echo "💡 Run 'npm start' to test your application."
