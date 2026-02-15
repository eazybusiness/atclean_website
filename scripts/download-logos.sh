#!/bin/bash

# Script to download client logos
# Run this script to fetch logos from client websites

LOGO_DIR="public/assets/logos"

echo "Downloading client logos..."

# Sparkasse Celle
echo "Attempting to download Sparkasse Celle logo..."
curl -L "https://www.sparkasse-celle.de/etc/designs/s-sparkasse/images/logo.svg" \
  -o "$LOGO_DIR/sparkasse-celle.svg" 2>/dev/null || echo "Manual download needed"

# Klinikum Celle
echo "Attempting to download Klinikum Celle logo..."
curl -L "https://www.akh-celle.de/fileadmin/templates/img/logo.png" \
  -o "$LOGO_DIR/klinikum-celle.png" 2>/dev/null || echo "Manual download needed"

echo ""
echo "Logo download complete!"
echo "Please manually add the following logos to $LOGO_DIR:"
echo "  - autohaus-mueller.png (from client website or request)"
echo "  - grundschule-suedheide.png (from school website)"
echo "  - techpark-hannover.png (from TechPark website)"
echo "  - hotel-celler-hof.png (from hotel website)"
echo ""
echo "Recommended: Use placeholder logos or request from clients directly"
