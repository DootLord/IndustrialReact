# Industrial Sci-Fi CSS Library

A comprehensive CSS design system for creating industrial/corporate sci-fi interfaces inspired by movies like Alien, Blade Runner, and modern FUI (Fictional User Interface) design.

## 🎨 Design Philosophy

This library implements a techno-brutalist, Swiss-inspired typographic system featuring:

- **Grid-first layouts** with visible technical patterns
- **High-contrast typography** using grotesque and monospace fonts  
- **Modular component system** for rapid prototyping
- **Blueprint/schematic aesthetic** with registration marks and technical readouts
- **Halftone/noise textures** for authentic sci-fi feel

## 📦 Installation & Usage

### Basic Setup

```html
<!-- Import the library -->
<link rel="stylesheet" href="path/to/industrial-scifi/index.css">

<!-- Wrap your app with the canvas -->
<div class="isf-canvas">
  <!-- Background layers -->
  <div class="isf-bg-grid"></div>
  <div class="isf-bg-noise"></div>
  
  <!-- Optional corner marks -->
  <div class="isf-corner-marks">
    <!-- Add 4 corner mark SVGs here -->
  </div>
  
  <!-- Content -->
  <div class="isf-container">
    <h1 class="isf-text-hero isf-text-display">YOUR CONTENT</h1>
  </div>
</div>
```

### With React/Vue/Modern Framework

```jsx
import 'industrial-scifi/index.css'

function App() {
  return (
    <div className="isf-canvas">
      <div className="isf-bg-grid" />
      <div className="isf-bg-noise" />
      <div className="isf-container">
        {/* Your content */}
      </div>
    </div>
  )
}
```

## 🎯 Core Concepts

### 1. **Design Tokens** (`tokens.css`)
All design decisions are centralized as CSS custom properties:

```css
--isf-color-accent-primary: #FF5722;
--isf-space-8: 32px;
--isf-font-mono: 'Courier New', monospace;
```

### 2. **Base Styles** (`base.css`)
- Canvas setup
- Background patterns (grid, dots, noise, scanlines)
- Corner registration marks
- Containers

### 3. **Components** (`components.css`)
Pre-built UI components:
- Status chips & badges
- Cards & panels
- Feature blocks
- Progress indicators
- Buttons
- Stats displays

### 4. **Utilities** (`utilities.css`)
Helper classes for rapid development:
- Layout (flexbox, grid)
- Spacing (margin, padding)
- Typography
- Colors & opacity

## 🧩 Component Examples

### Status Chips
```html
<span class="isf-chip">SYSTEM READY</span>
<span class="isf-chip isf-chip-active">ACTIVE</span>
<span class="isf-chip isf-chip-outlined">MISSION READY</span>
```

### Cards
```html
<div class="isf-card isf-card-accent-bar">
  <div class="isf-card-header">
    <span class="isf-card-id">UNIT-01-F</span>
  </div>
  <div class="isf-stat-value">24/7</div>
  <div class="isf-stat-label">OPERATIONAL STATUS</div>
</div>
```

### Feature Blocks
```html
<div class="isf-feature-block isf-feature-block-primary">
  <div class="isf-feature-id">R9</div>
  <div class="isf-stripe-pattern"></div>
  <div class="isf-p-16">
    <h2 class="isf-text-8xl isf-text-display">Adaptive Manufacturing</h2>
    <p>Your content here...</p>
  </div>
</div>
```

### Panels
```html
<div class="isf-panel">
  <div class="isf-panel-header">DRONE SWARMS ACTIVE</div>
  <div class="isf-readout">
    <div>LOG 00:02:14</div>
    <div>FORMATION PATTERN: ADAPTIVE GRID</div>
    <div>ALTITUDE BAND: 240 FT</div>
  </div>
</div>
```

## 🎨 Customization

### Override Design Tokens

```css
:root {
  /* Change accent color */
  --isf-color-accent-primary: #00FF00;
  
  /* Adjust spacing scale */
  --isf-space-8: 40px;
  
  /* Use different fonts */
  --isf-font-mono: 'JetBrains Mono', monospace;
}
```

### Create Custom Components

```css
.my-custom-component {
  /* Use existing tokens */
  padding: var(--isf-space-8);
  border: var(--isf-border-hairline) solid var(--isf-color-overlay-heavy);
  font-family: var(--isf-font-mono);
  color: var(--isf-color-accent-primary);
}
```

## 🔧 Utility Class Reference

### Layout
- `isf-flex`, `isf-flex-col`, `isf-flex-between`, `isf-flex-center`
- `isf-grid`, `isf-grid-2`, `isf-grid-3`, `isf-grid-auto`
- `isf-gap-4`, `isf-gap-8`, `isf-gap-16`

### Spacing
- `isf-m-{size}`, `isf-mt-{size}`, `isf-mb-{size}`
- `isf-p-{size}`, `isf-pt-{size}`, `isf-pb-{size}`
- Sizes: 2, 4, 6, 8, 12, 16, 20

### Typography
- Font sizes: `isf-text-xs` through `isf-text-8xl`, `isf-text-hero`
- Weights: `isf-weight-normal` through `isf-weight-black`
- Tracking: `isf-tracking-tight` through `isf-tracking-widest`
- Families: `isf-font-display`, `isf-font-mono`

### Colors
- `isf-color-accent`, `isf-color-light`, `isf-color-dark`
- `isf-bg-accent`, `isf-bg-light`, `isf-bg-dark`, `isf-bg-mid`

### Borders
- `isf-border`, `isf-border-t`, `isf-border-b`, `isf-border-accent`

## 📱 Responsive Design

Built-in responsive utilities:
```html
<div class="isf-grid-3 isf-mobile-grid-1">
  <!-- 3 columns on desktop, 1 on mobile -->
</div>

<div class="isf-mobile-hidden">
  <!-- Hidden on mobile -->
</div>
```

## 🎯 Use Cases

Perfect for:
- ✅ Sci-fi game interfaces
- ✅ Cyberpunk/industrial websites
- ✅ Tech company landing pages
- ✅ Dashboard/control panel UIs
- ✅ Portfolio sites with a technical edge
- ✅ Event/conference sites (tech-focused)
- ✅ Product launch pages

## 🎨 Color Palette

```
Base Dark:    #1a1a1a (backgrounds)
Base Light:   #D4C5B0 (text, UI elements)
Accent:       #FF5722 (highlights, CTAs)
Mid Tone:     #2a2a2a (panels, cards)
```

## 📐 Spacing Scale

Based on 4px increments:
```
1 → 4px    6 → 24px   16 → 64px
2 → 8px    8 → 32px   20 → 80px
3 → 12px   10 → 40px  24 → 96px
4 → 16px   12 → 48px  32 → 128px
```

## 🔤 Typography

**Display Font:** System sans-serif stack (Helvetica Neue, Arial)
- Used for headlines, titles, stats
- Ultra-bold weights (900)
- Tight letter spacing

**Mono Font:** Courier New, Monaco, Consolas
- Used for labels, IDs, technical readouts
- Wider letter spacing for readability
- OCR/terminal aesthetic

## 🚀 Advanced Patterns

### Layered Backgrounds
```html
<div class="isf-canvas">
  <div class="isf-bg-grid"></div>
  <div class="isf-bg-noise"></div>
  <div class="isf-bg-scanlines"></div>
</div>
```

### Complex Cards
```html
<div class="isf-card isf-card-accent-bar">
  <div class="isf-card-header">
    <span class="isf-card-id">LOG-001</span>
    <div class="isf-crosshair"><!-- SVG --></div>
  </div>
  <!-- Content -->
  <div class="isf-progress-dots">
    <div class="isf-progress-dot isf-progress-dot-active"></div>
    <div class="isf-progress-dot isf-progress-dot-active"></div>
    <div class="isf-progress-dot"></div>
  </div>
</div>
```

## 📄 License

MIT License - Feel free to use in personal and commercial projects!

## 🤝 Contributing

To extend the library:
1. Follow the naming convention (`isf-*`)
2. Use design tokens for all values
3. Keep components modular and composable
4. Add examples to this README

---

**Built for creators who love industrial sci-fi aesthetics** 🤖🏭
