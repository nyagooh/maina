# Premium Product Designer Portfolio

A world-class product designer portfolio built with Next.js, featuring an editorial, minimal, and premium aesthetic inspired by high-end fashion lookbooks and architecture studio websites.

## Features

- **Ultra-clean, modern design** with generous whitespace and large typography
- **Glassmorphism effects** (iOS-style liquid glass) applied to navigation, project cards, and filters
- **Editorial layout** with strong typographic hierarchy
- **Smooth animations** using Framer Motion
- **Responsive design** that works beautifully on all devices
- **Premium color palette** with neutral base and lilac accent

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** for animations
- **Cormorant Garamond** (display font)
- **Figtree** (body font)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page
│   ├── work/
│   │   ├── page.tsx        # Work gallery page
│   │   └── [slug]/
│   │       └── page.tsx    # Case study template
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Glass navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── ProjectCard.tsx     # Glass project card
│   ├── FilterChip.tsx      # Glass filter chip
│   ├── Capabilities.tsx    # Capabilities section
│   ├── Impact.tsx          # Impact/metrics section
│   ├── Writing.tsx        # Writing/articles section
│   └── Footer.tsx          # Minimal footer
└── public/                 # Static assets
```

## Design Principles

- **Editorial**: Large typography, strong hierarchy, minimal elements
- **Glassmorphism**: Subtle blur, low opacity, soft borders (iOS-style)
- **Premium**: Neutral colors, generous spacing, calm animations
- **Confident**: Bold statements, clear messaging, professional presentation

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:
- `base.light` / `base.dark`: Base colors
- `lilac.*`: Accent color variations

### Typography
Fonts are loaded in `app/layout.tsx`. Modify the font imports to use different typefaces.

### Content
Update project data in:
- `app/page.tsx` (featured projects)
- `app/work/page.tsx` (all projects)

## Build for Production

```bash
npm run build
npm start
```

## License

MIT
