# Create OG Image from Your Hero Section

## Quick Steps:

### 1. Deploy Your Site First
Make sure your portfolio is live at: https://ann-maina.vercel.app

### 2. Take Screenshot of Hero Section

**Using Chrome/Edge:**
1. Open https://ann-maina.vercel.app
2. Press **F12** to open DevTools
3. Press **Ctrl+Shift+M** (Windows) or **Cmd+Shift+M** (Mac) for device toolbar
4. At the top, click "Dimensions" dropdown
5. Select **"Responsive"**
6. Set width: **1200** and height: **630**
7. Press **Ctrl+Shift+P** (Windows) or **Cmd+Shift+P** (Mac)
8. Type: **"Capture screenshot"**
9. Select: **"Capture screenshot"** (not full size, just the viewport)
10. Save as **`og.png`**

**Using Firefox:**
1. Open https://ann-maina.vercel.app
2. Press **F12** to open DevTools
3. Click the **Responsive Design Mode** icon (or Ctrl+Shift+M)
4. Set dimensions to **1200 x 630**
5. Click the **Camera icon** to take screenshot
6. Save as **`og.png`**

**Using Online Tool (Easiest):**
1. Go to: https://www.screenshotmachine.com/
2. Enter: https://ann-maina.vercel.app
3. Set dimensions: 1200 x 630
4. Click "Capture"
5. Download and rename to **`og.png`**

### 3. Position the Hero Section Perfectly
- Make sure your phone mockup is centered
- "ANN MAINA" background text should be visible
- The orange "HELLO! I'M ANN" should be visible
- Your tagline "SOLVING PROBLEMS..." should be visible

### 4. Save the Image
- **Filename:** `og.png` (exactly, lowercase)
- **Location:** Place in the `public` folder
- **Size:** Should be 1200 x 630 pixels
- **Format:** PNG

### 5. Commit and Deploy
```bash
cd /home/nyagooh/maina
git add public/og.png
git commit -m "Add OG image for social media previews"
git push origin main
```

### 6. Verify After Deployment

**Step 1: Check Direct URL**
Visit: https://ann-maina.vercel.app/og.png
- Should show your hero section image

**Step 2: Check Page Source**
1. Visit: https://ann-maina.vercel.app
2. Press **Ctrl+U** (View Source)
3. Search for `og:image` - should find the URL
4. Search for `twitter:card` - should find "summary_large_image"

**Step 3: Test on Twitter/X**
1. Go to: https://cards-dev.twitter.com/validator
2. Enter: https://ann-maina.vercel.app
3. Click **"Preview card"**
4. Should show your hero section!
5. If old cache, click **"Clear cache"**

**Step 4: Test on LinkedIn**
1. Go to: https://www.linkedin.com/post-inspector/
2. Enter: https://ann-maina.vercel.app
3. Should show your hero section preview

---

## Tips for Best Results:

✅ **Do:**
- Take screenshot when page is fully loaded
- Ensure all animations have completed
- Check that phone mockup is centered
- Verify text is crisp and readable

❌ **Don't:**
- Don't crop too much - keep the full hero composition
- Don't use wrong dimensions (must be 1200x630)
- Don't save as JPG (must be PNG)
- Don't name it anything other than `og.png`

---

## Current Status:

✅ Metadata configured in `app/layout.tsx`
⚠️ Waiting for `og.png` to be created and added to `public` folder

Once you add the image and push to GitHub, Vercel will automatically deploy it!
