# OG Image Instructions

## Required Image: `og.png`

**Location:** `/public/og.png`  
**Size:** 1200 x 630 pixels  
**Format:** PNG

## How to Create Your OG Image:

### Option 1: Screenshot Your Hero Section (Recommended)

1. **Open your deployed site**: https://ann-maina.vercel.app
2. **Open your browser DevTools** (F12)
3. **Set device dimensions**:
   - Click the device toolbar icon (or Ctrl+Shift+M)
   - Set custom dimensions: 1200 x 630
4. **Take a screenshot** of your hero section
5. **Save as** `og.png` in the `public` folder
6. **Replace** the existing `og.png` file

### Option 2: Create in Figma/Design Tool

1. Create a 1200 x 630 px canvas
2. Design with:
   - Your hero section elements
   - Your name "ANN MAINA" 
   - "Product Designer" subtitle
   - Your profile image
   - Background matching your site design
3. Export as PNG at 1x resolution
4. Save as `og.png` in the `public` folder

### Option 3: Use Online OG Image Generator

1. Go to: https://www.opengraph.xyz/ or https://og-playground.vercel.app/
2. Customize with your portfolio information
3. Download the generated image
4. Rename to `og.png` and place in `public` folder

## Verification After Upload:

1. **Direct URL Test**: Visit https://ann-maina.vercel.app/og.png
   - Should show your image directly

2. **View Page Source**: Visit https://ann-maina.vercel.app
   - Press Ctrl+U (or View > Developer > View Source)
   - Search for `og:image` - should find: `https://ann-maina.vercel.app/og.png`
   - Search for `twitter:card` - should find: `summary_large_image`

3. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
   - Enter: https://ann-maina.vercel.app
   - Click "Preview card"
   - Should show your OG image

4. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
   - Enter your URL to see how it appears on LinkedIn

## Current Status:

⚠️ **PLACEHOLDER IMAGE NEEDED**

The `og.png` file needs to be created and added to the `public` folder.

Once you create the image following the instructions above:
1. Save it as `og.png` (exactly this name, lowercase)
2. Place it in the `public` folder
3. Commit and push to GitHub
4. Vercel will automatically deploy the new image
5. Clear Twitter cache using the Card Validator tool

---

**Tip:** The best OG images show your hero section with the phone mockup, your name, and professional title clearly visible!
