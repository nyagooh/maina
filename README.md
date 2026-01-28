# Ann Maina - Product Designer Portfolio

A modern, editorial-style product designer portfolio built with Next.js, featuring a dark theme with orange accents, glassmorphism effects, and smooth animations. Inspired by modern editorial and western design aesthetics with a focus on clarity and confident presentation.

## 🎨 Design Features

- **Modern Editorial Design** with large typography and strong visual hierarchy
- **Glassmorphism Effects** applied to cards, navigation, and interactive elements
- **Dark Theme** with charcoal black backgrounds and vibrant orange accents
- **Smooth Animations** using Framer Motion for scroll-triggered effects and transitions
- **Grid Backgrounds** with subtle lines in hero sections
- **Horizontal Scrollable Carousels** for Best Work and Design Thoughts sections
- **Responsive Design** optimized for all devices from mobile to desktop
- **Professional Case Studies** with detailed editorial layouts

## 🛠 Tech Stack

- **Next.js 14** (App Router) - React framework for production
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling with custom color palette
- **Framer Motion** - Animation library for smooth interactions
- **Next/Image** - Optimized image loading

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd maina
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**

**Option A - Using the run script (recommended):**
```bash
# Linux/Mac
./run.sh

# Windows
run.bat
```

**Option B - Using npm directly:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

The app will automatically reload when you make changes to the code.

## 📁 Project Structure

```
maina/
├── app/
│   ├── layout.tsx              # Root layout with fonts and metadata
│   ├── page.tsx                # Home page (Hero, Projects, About, Contact)
│   ├── globals.css             # Global styles and glassmorphism utilities
│   ├── about/
│   │   └── page.tsx            # Dedicated About page with experience & skills
│   └── work/
│       ├── page.tsx            # All projects gallery with filters
│       └── [slug]/
│           └── page.tsx        # Dynamic case study detail pages
├── components/
│   ├── Navigation.tsx          # Sticky nav with smooth scroll effects
│   ├── Hero.tsx                # Hero section with phone element & large text
│   ├── BestWork.tsx            # Horizontal scrollable project showcase
│   ├── DesignPhilosophy.tsx    # Orange background philosophy section
│   ├── ProjectCard.tsx         # Glassmorphism project cards
│   ├── About.tsx               # About section with background image
│   ├── Capabilities.tsx        # Grid of design capabilities
│   ├── Writing.tsx             # Design Thoughts carousel (formerly articles)
│   ├── Contact.tsx             # Contact form with glassmorphism
│   ├── Footer.tsx              # Footer with social links
│   └── FilterChip.tsx          # Filter buttons for project categories
├── public/
│   ├── *.jpg, *.png            # Project images and portfolio photos
│   └── Annemainaresume.pdf     # Downloadable resume
├── tailwind.config.ts          # Tailwind configuration with custom colors
└── package.json                # Dependencies and scripts
```

## 🎯 Key Sections

### Home Page
- **Hero Section**: Full-screen with phone element, large outlined text, and grid background
- **Best Work**: Horizontal scrollable carousel with featured projects
- **Design Philosophy**: Orange section with core design principles
- **Selected Work**: Grid of 4 featured projects
- **About**: Preview with background image and link to full about page
- **Capabilities**: Modern grid layout with numbered items
- **Design Thoughts**: Carousel of articles/blog posts with images
- **Contact**: Form with glassmorphism and background image

### About Page
- **Hero**: Large name display with background image and location
- **Experience**: Timeline of professional experience with white cards on grey background
- **Tools I Use**: Grid of design tools and skills
- **Contact**: Integrated contact section

### Work Page
- **Project Gallery**: 2x2 grid of all projects with detailed descriptions
- **Filters**: Filter projects by category (All, Fintech, Dashboards, Mobile)
- **Contact**: Integrated contact section

### Case Study Pages
- **Hero**: Full-screen image background with project title
- **Overview**: Project summary with metadata (role, timeline, team, platform)
- **Problem**: Detailed problem statement with constraint highlights
- **Approach**: Design process explanation with visual steps
- **Key Decisions**: Design rationale cards
- **Solution**: Image gallery (4 images in 2x2 grid)
- **Outcome**: Results with checkmarks, reflection, and next steps

## 🎨 Color Palette

```javascript
{
  black: '#000000',
  white: '#FFFFFF',
  orange: {
    600: '#EA580C',  // Primary accent
  },
  charcoal: {
    900: '#0F0F0F',  // Main background
    800: '#1A1A1A',  // Dark elements
    700: '#2C2C2C',
    300: '#999999',  // Secondary text
  }
}
```

## 🔧 Customization

### Update Your Information

1. **Personal Info** (`components/Hero.tsx`, `components/Footer.tsx`):
   - Name, tagline, location
   - Email, social media links
   - Resume PDF path

2. **Projects** (`app/page.tsx`, `app/work/page.tsx`):
   - Update `featuredProjects` and `allProjects` arrays
   - Add your project images to `/public/`

3. **Case Studies** (`app/work/[slug]/page.tsx`):
   - Update `caseStudies` object with your project details
   - Add project images and ensure paths match

4. **About Page** (`app/about/page.tsx`):
   - Update `experiences` array with your work history
   - Modify skills and tools list

5. **Articles** (`components/Writing.tsx`):
   - Update `articles` array with your blog posts/writings

### Customize Colors

Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  orange: { /* your orange shades */ },
  charcoal: { /* your dark shades */ },
}
```

### Customize Typography

Fonts are loaded in `app/layout.tsx`. The portfolio uses system fonts optimized for web performance.

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Start Production Server

```bash
npm start
```

### Deploy

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or deploy to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 🎭 Design Inspirations

This portfolio draws inspiration from:
- **vanschneider.com** - Color coordination and palette usage
- **tarangvishwakarma.com** - Layout structure and animations
- Modern editorial design and western aesthetics
- iOS glassmorphism and Material Design principles

## 📝 Scripts

### Quick Run Script

For convenience, use the included run scripts:

**Linux/Mac:**
```bash
./run.sh
```

**Windows:**
```bash
run.bat
```

The script provides an interactive menu with the following options:
1. Start Development Server
2. Build for Production
3. Start Production Server
4. Install Dependencies
5. Run Linter
6. Clean Build Cache
7. Exit

### Manual NPM Scripts

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build optimized production bundle
- `npm start` - Start production server (requires build first)
- `npm run lint` - Run ESLint to check code quality

## 🤝 Contributing

This is a personal portfolio project, but feel free to fork and customize for your own use!

## 📄 License

MIT License - feel free to use this as a template for your own portfolio.

## 👤 Author

**Ann Maina**
- Product Designer
- Based in Nairobi, Kenya
- Email: annmaina.info@gmail.com

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
