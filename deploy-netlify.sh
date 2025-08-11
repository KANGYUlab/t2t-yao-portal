#!/bin/bash

echo "🚀 T2T-YAO Portal Netlify Deployment Script"
echo "============================================="

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "❌ Netlify CLI not found. Installing..."
    npm install -g netlify-cli
fi

# Check if user is logged in to Netlify
if ! netlify status &> /dev/null; then
    echo "🔐 Please login to Netlify..."
    netlify login
fi

# Check if site is already initialized
if [ ! -f ".netlify/state.json" ]; then
    echo "🏗️  Initializing Netlify site..."
    netlify init
else
    echo "✅ Netlify site already initialized"
fi

# Deploy to production
echo "🚀 Deploying to production..."
netlify deploy --prod

echo "✅ Deployment complete!"
echo "🌐 Your site should be live at the URL shown above"
echo ""
echo "💡 To update your site in the future, just run:"
echo "   netlify deploy --prod" 