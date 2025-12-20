# Favicon Generation Instructions

A basic SVG favicon has been created at `public/favicon.svg`.

## To Generate Additional Favicon Formats:

You have two options:

### Option 1: Use Online Tools (Easiest)
1. Go to https://realfavicongenerator.net/
2. Upload the `public/favicon.svg` file
3. Configure your settings (use default is fine)
4. Generate and download all favicon sizes
5. Extract and place these files in the `public/` folder:
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`
   - `android-chrome-192x192.png`
   - `android-chrome-512x512.png`

### Option 2: Use ImageMagick (Command Line)
If you have ImageMagick installed:

```bash
# Navigate to the public folder
cd public

# Convert SVG to PNG at various sizes
convert favicon.svg -resize 16x16 favicon-16x16.png
convert favicon.svg -resize 32x32 favicon-32x32.png
convert favicon.svg -resize 180x180 apple-touch-icon.png
convert favicon.svg -resize 192x192 android-chrome-192x192.png
convert favicon.svg -resize 512x512 android-chrome-512x512.png
```

### Option 3: Use Figma/Design Tool
1. Open Figma/Sketch/Adobe Illustrator
2. Create a 512x512px canvas
3. Design your icon (use the red gradient #e50914 to #ff6b6b)
4. Export at multiple sizes listed above

## Current Icon Design
The current SVG shows a film strip icon with:
- Red gradient background (#e50914 to #ff6b6b)
- White film strip with sprocket holes
- Modern, minimalistic style

Feel free to customize the design to match your brand!

## Testing
After generating the favicons, test them at:
- https://realfavicongenerator.net/favicon_checker


