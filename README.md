# WebStyle - Industrial Sci-Fi CSS Library Demo

A complete design system and testbed for creating industrial/corporate sci-fi interfaces. This project demonstrates the **Industrial Sci-Fi CSS Library** - a comprehensive, reusable design system you can use in any project.

## ��� What's Included

### ��� Complete CSS Library
Located in `src/lib/industrial-scifi/` - A production-ready design system with:
- **Design tokens** - All colors, spacing, typography in CSS variables
- **Base styles** - Canvas setup, backgrounds (grid, noise, scanlines)
- **50+ components** - Cards, chips, buttons, panels, feature blocks
- **100+ utilities** - Layout, spacing, typography, color helpers
- **React components** - Pre-built SVG components for corners, crosshairs, etc.

### ���️ Demo Pages
- **Landing Page** - Full-featured example showcasing the aesthetic
- **Component Showcase** - Interactive documentation of all components

### ��� Documentation
- **README.md** (library) - Complete library documentation
- **QUICKSTART.md** - Get started in 5 minutes
- **GUIDE.md** - Advanced usage and extension guide

## ��� Quick Start

### Run the Demo
```bash
npm install
npm run dev
```

Open your browser and use the toggle buttons to switch between:
- **LANDING** - Example landing page
- **SHOWCASE** - Component library documentation

### Use the Library in a New Project

**Option 1: Copy the folder**
```bash
cp -r src/lib/industrial-scifi your-project/src/lib/
```

**Option 2: Import and use**
```jsx
import './lib/industrial-scifi/index.css'

function App() {
  return (
    <div className="isf-canvas">
      <div className="isf-bg-grid" />
      <div className="isf-bg-noise" />
      
      <div className="isf-container">
        <h1 className="isf-text-hero isf-text-display isf-color-accent">
          YOUR PROJECT
        </h1>
      </div>
    </div>
  )
}
```

## ��� Design Philosophy

This library implements an **industrial FUI (Fictional User Interface)** design system inspired by:
- Movies: Alien, Blade Runner, The Expanse
- Video Games: Cyberpunk 2077, Deus Ex
- Design styles: Swiss/International Typography, Techno-brutalism, Technical schematics

### Key Features:
✅ **Grid-first layouts** with visible technical patterns  
✅ **High-contrast typography** using grotesque and monospace fonts  
✅ **Modular component system** for rapid prototyping  
✅ **Blueprint/schematic aesthetic** with registration marks  
✅ **Texture layers** (halftone, noise, scanlines)  
✅ **Fully customizable** via CSS variables  
✅ **Responsive** out of the box  
✅ **Zero dependencies** - Pure CSS  

## ��� Project Structure

```
WebStyle/
├── src/
│   ├── lib/
│   │   └── industrial-scifi/     # ��� THE LIBRARY (reusable)
│   │       ├── index.css          # Main entry
│   │       ├── tokens.css         # Design tokens
│   │       ├── base.css           # Base styles
│   │       ├── components.css     # UI components
│   │       ├── utilities.css      # Utility classes
│   │       ├── components.jsx     # React SVG components
│   │       ├── README.md          # Full docs
│   │       ├── QUICKSTART.md      # Quick start
│   │       └── package.json       # Package metadata
│   │
│   ├── components/
│   │   ├── LandingPage.tsx        # Example landing page
│   │   └── ComponentShowcase.tsx  # Library showcase
│   │
│   └── App.tsx                    # Demo app with toggle
│
├── GUIDE.md                       # Extension guide
└── README.md                      # This file
```

## ��� Component Examples

### Status Chips
```jsx
<span className="isf-chip">DEFAULT</span>
<span className="isf-chip isf-chip-active">ACTIVE</span>
<span className="isf-chip isf-chip-outlined">OUTLINED</span>
```

### Stat Cards
```jsx
<div className="isf-card isf-card-accent-bar">
  <div className="isf-stat-value">24/7</div>
  <div className="isf-stat-label">UPTIME</div>
</div>
```

### Feature Blocks
```jsx
<div className="isf-feature-block isf-feature-block-primary">
  <div className="isf-feature-id">01</div>
  <div className="isf-p-16">
    <h2 className="isf-text-8xl isf-text-display">Title</h2>
    <p>Description...</p>
  </div>
</div>
```

## ��� Customization

Override any design token:

```css
:root {
  /* Colors */
  --isf-color-accent-primary: #00FF00;
  
  /* Typography */
  --isf-font-display: 'Inter', sans-serif;
  
  /* Spacing */
  --isf-space-8: 40px;
}
```

## ��� Exporting the Library

### For npm
```bash
cd src/lib/industrial-scifi
npm publish
```

### For other projects
Just copy the `src/lib/industrial-scifi` folder!

## ��� Documentation

- **Library README**: `src/lib/industrial-scifi/README.md`
- **Quick Start**: `src/lib/industrial-scifi/QUICKSTART.md`
- **Usage Guide**: `GUIDE.md`

## ���️ Tech Stack

- **Build**: Vite 6.0
- **Framework**: React 18 + TypeScript
- **Styling**: Pure CSS (no dependencies)

## ��� License

MIT License - Free to use in personal and commercial projects!

---

**Built with ⚡ for creators who love industrial sci-fi aesthetics**

Start building the future! ������✨
