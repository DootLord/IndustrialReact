# Industrial Sci-Fi CSS Library - Quick Start

## 🚀 Installation

### Option 1: Copy into your project
Copy the entire `industrial-scifi` folder into your project:
```
your-project/
  src/
    lib/
      industrial-scifi/
        index.css
        tokens.css
        base.css
        components.css
        utilities.css
        components.jsx (optional)
        README.md
```

### Option 2: Import from npm (if published)
```bash
npm install @webstyle/industrial-scifi
```

## 📝 Basic Usage

### 1. Import the CSS
```jsx
// In your main app file
import './lib/industrial-scifi/index.css'

// OR if installed via npm
import '@webstyle/industrial-scifi'
```

### 2. Set up your canvas
```jsx
function App() {
  return (
    <div className="isf-canvas">
      {/* Background layers */}
      <div className="isf-bg-grid" />
      <div className="isf-bg-noise" />
      
      {/* Your content */}
      <div className="isf-container">
        <h1 className="isf-text-hero isf-text-display">
          YOUR TITLE
        </h1>
      </div>
    </div>
  )
}
```

### 3. Use components
```jsx
{/* Status chips */}
<span className="isf-chip isf-chip-active">ACTIVE</span>

{/* Cards */}
<div className="isf-card isf-card-accent-bar">
  <div className="isf-stat-value">24/7</div>
  <div className="isf-stat-label">UPTIME</div>
</div>

{/* Buttons */}
<button className="isf-button isf-button-primary">
  LAUNCH
</button>
```

## 🎨 Common Patterns

### Full Page Layout
```jsx
<div className="isf-canvas">
  <div className="isf-bg-grid" />
  <div className="isf-bg-noise" />
  
  {/* Optional corner marks */}
  <div className="isf-corner-marks">
    {/* 4 SVG corner marks */}
  </div>
  
  <div className="isf-container">
    {/* Header */}
    <header className="isf-flex isf-flex-between isf-mb-16">
      <div className="isf-chip">SYSTEM ACTIVE</div>
      <nav className="isf-flex isf-gap-4">
        <a href="#" className="isf-system-text">ABOUT</a>
        <a href="#" className="isf-system-text">CONTACT</a>
      </nav>
    </header>
    
    {/* Hero */}
    <section className="isf-text-center isf-mb-20">
      <h1 className="isf-text-hero isf-text-display isf-color-accent">
        YOUR PROJECT
      </h1>
      <p className="isf-readout">Your description here</p>
    </section>
    
    {/* Stats Grid */}
    <section className="isf-grid isf-grid-auto isf-gap-8">
      <div className="isf-card isf-card-accent-bar">
        <div className="isf-stat-value">99.9%</div>
        <div className="isf-stat-label">UPTIME</div>
      </div>
      {/* More cards... */}
    </section>
  </div>
</div>
```

### Dashboard Layout
```jsx
<div className="isf-grid isf-grid-3 isf-gap-8">
  {/* Stat cards */}
  <div className="isf-card isf-card-accent-bar">
    <div className="isf-card-header">
      <span className="isf-card-id">UNIT-01</span>
    </div>
    <div className="isf-stat-value">128</div>
    <div className="isf-stat-label">ACTIVE UNITS</div>
  </div>
  
  {/* Panel with readouts */}
  <div className="isf-panel">
    <div className="isf-panel-header">SYSTEM LOG</div>
    <div className="isf-readout">
      <div>LOG 00:02:14</div>
      <div>STATUS: OPERATIONAL</div>
      <div>LOAD: 78%</div>
    </div>
  </div>
</div>
```

### Feature Block
```jsx
<div className="isf-feature-block isf-feature-block-primary">
  <div className="isf-feature-id">01</div>
  <div className="isf-stripe-pattern"></div>
  <div className="isf-p-16">
    <h2 className="isf-text-8xl isf-text-display isf-mb-6">
      Feature Title
    </h2>
    <p className="isf-text-2xl isf-mb-8">
      Feature description goes here...
    </p>
    <button className="isf-button isf-button-primary">
      LEARN MORE
    </button>
  </div>
</div>
```

## 🎨 Customization

### Override colors
```css
:root {
  --isf-color-accent-primary: #00FF00; /* Change accent color */
  --isf-color-base-light: #FFFFFF;     /* Change text color */
}
```

### Adjust spacing
```css
:root {
  --isf-space-8: 40px;  /* Make spacing larger */
  --isf-grid-size: 48px; /* Larger grid */
}
```

### Use different fonts
```css
:root {
  --isf-font-display: 'Inter', sans-serif;
  --isf-font-mono: 'JetBrains Mono', monospace;
}
```

## 📚 Component Reference

### Essential Classes

**Layout:**
- `isf-canvas` - Root wrapper
- `isf-container` - Content container
- `isf-flex` - Flexbox container
- `isf-grid` - Grid container

**Components:**
- `isf-chip` - Status badge
- `isf-card` - Content card
- `isf-panel` - Info panel
- `isf-button` - Button

**Typography:**
- `isf-text-hero` - Hero size
- `isf-text-display` - Display font
- `isf-font-mono` - Monospace font

**Colors:**
- `isf-color-accent` - Accent color
- `isf-bg-accent` - Accent background

## 💡 Tips

1. **Start simple** - Use `isf-canvas` + `isf-container` + basic components
2. **Use utilities** - Combine utility classes for quick layouts
3. **Customize tokens** - Override CSS variables for your brand
4. **Layer backgrounds** - Combine grid, noise, and scanlines for depth
5. **Mind the scale** - Use the spacing scale consistently

## 🔗 Resources

- Full README: `README.md`
- Component showcase: See `ComponentShowcase.tsx`
- Example landing page: See `LandingPage.tsx`

## 🐛 Common Issues

**Text too large:**
```css
.isf-text-hero { font-size: 80px; } /* Override */
```

**Grid too prominent:**
```css
.isf-bg-grid { opacity: 0.3; } /* Reduce opacity */
```

**Want lighter theme:**
```css
:root {
  --isf-color-base-dark: #f5f5f5;
  --isf-color-base-light: #1a1a1a;
}
```

---

Happy building! 🚀🤖
