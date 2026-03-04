# Industrial Sci-Fi CSS Library - Usage Guide

## 📁 Project Structure

Your library is organized as follows:

```
src/lib/industrial-scifi/
├── index.css           # Main entry point (imports all other CSS)
├── tokens.css          # Design tokens (colors, spacing, typography)
├── base.css            # Base styles, canvas, backgrounds
├── components.css      # UI components (chips, cards, buttons, etc.)
├── utilities.css       # Utility classes (layout, spacing, colors)
├── components.jsx      # React components for SVGs
├── index.js            # JavaScript exports
├── package.json        # Package metadata
├── README.md           # Full documentation
└── QUICKSTART.md       # Quick start guide
```

## 🚀 How to Use This Library

### In This Project
The library is already integrated! You can:
1. **Use the existing components** - See `LandingPage.tsx` and `ComponentShowcase.tsx`
2. **Create new pages** - Import the library and use the classes
3. **Toggle between views** - Use the navigation buttons to switch between landing and showcase

### In Other Projects

#### Option 1: Copy the folder
```bash
# Copy the entire library folder to your new project
cp -r src/lib/industrial-scifi your-new-project/src/lib/
```

Then import in your app:
```jsx
import './lib/industrial-scifi/index.css'
```

#### Option 2: Publish to npm (optional)
```bash
cd src/lib/industrial-scifi
npm publish --access public
```

Then in other projects:
```bash
npm install @webstyle/industrial-scifi
```

```jsx
import '@webstyle/industrial-scifi'
```

#### Option 3: Use as a git submodule
```bash
# In your library repo
git init
git add .
git commit -m "Initial commit"

# In other projects
git submodule add <your-repo-url> src/lib/industrial-scifi
```

## 🎨 Customizing the Library

### Method 1: Override CSS Variables
Create a `custom-theme.css`:

```css
:root {
  /* Change colors */
  --isf-color-accent-primary: #00FF00;
  --isf-color-base-light: #E0E0E0;
  
  /* Adjust spacing */
  --isf-space-8: 40px;
  
  /* Change fonts */
  --isf-font-display: 'Inter', sans-serif;
  --isf-font-mono: 'Fira Code', monospace;
}
```

Import after the library:
```jsx
import './lib/industrial-scifi/index.css'
import './custom-theme.css'
```

### Method 2: Extend with Custom Components
Create components that use the design system:

```css
/* custom-components.css */
.my-custom-card {
  /* Use library tokens */
  padding: var(--isf-space-8);
  background: var(--isf-color-overlay-light);
  border: var(--isf-border-hairline) solid var(--isf-color-accent-primary);
  font-family: var(--isf-font-mono);
}

.my-custom-button {
  /* Extend existing components */
  @extend .isf-button;
  font-size: var(--isf-text-2xl);
  padding: var(--isf-space-6) var(--isf-space-12);
}
```

### Method 3: Mix Library Classes
Combine existing classes for custom layouts:

```jsx
<div className="isf-card isf-p-12 isf-border-accent">
  <div className="isf-flex isf-flex-between isf-mb-8">
    <span className="isf-chip">CUSTOM</span>
    <span className="isf-system-text">2026</span>
  </div>
  <h2 className="isf-text-6xl isf-weight-black">
    Custom Component
  </h2>
</div>
```

## 🔧 Extending for New Use Cases

### Use Case 1: E-commerce Product Page
```jsx
<div className="isf-canvas">
  <div className="isf-bg-grid" />
  
  <div className="isf-container">
    {/* Product Grid */}
    <div className="isf-grid isf-grid-3 isf-gap-8">
      <div className="isf-card">
        <img src="product.jpg" alt="Product" />
        <h3 className="isf-text-2xl isf-font-display isf-mt-4">
          PRODUCT NAME
        </h3>
        <div className="isf-stat-value isf-mt-2">$299</div>
        <button className="isf-button isf-button-primary isf-mt-4 isf-w-full">
          ADD TO CART
        </button>
      </div>
    </div>
  </div>
</div>
```

### Use Case 2: Dashboard/Analytics
```jsx
<div className="isf-canvas">
  <div className="isf-bg-grid" />
  
  <div className="isf-container">
    {/* Metrics Row */}
    <div className="isf-grid isf-grid-4 isf-gap-4 isf-mb-8">
      <div className="isf-card isf-card-accent-bar">
        <div className="isf-label">TOTAL USERS</div>
        <div className="isf-stat-value">1,284</div>
        <div className="isf-chip isf-chip-active isf-mt-2">+12%</div>
      </div>
      {/* More metrics... */}
    </div>
    
    {/* Charts */}
    <div className="isf-panel">
      <div className="isf-panel-header">ACTIVITY TIMELINE</div>
      {/* Chart component */}
    </div>
  </div>
</div>
```

### Use Case 3: Blog/Documentation Site
```jsx
<div className="isf-canvas">
  <div className="isf-bg-grid" />
  
  <div className="isf-container isf-container-narrow">
    {/* Article Header */}
    <article>
      <div className="isf-chip isf-mb-4">TUTORIAL</div>
      <h1 className="isf-text-6xl isf-text-display isf-mb-6">
        Getting Started Guide
      </h1>
      <div className="isf-flex isf-gap-8 isf-system-text isf-mb-12">
        <span>2026-03-04</span>
        <span>5 MIN READ</span>
      </div>
      
      {/* Article Content */}
      <div className="isf-readout isf-text-lg">
        <p>Your article content here...</p>
      </div>
    </article>
  </div>
</div>
```

### Use Case 4: Portfolio Site
```jsx
<div className="isf-canvas">
  <div className="isf-bg-grid" />
  <div className="isf-bg-noise" />
  <div className="isf-corner-marks">{/* Corners */}</div>
  
  <div className="isf-container">
    {/* Hero */}
    <section className="isf-text-center isf-mb-20">
      <div className="isf-chip isf-mb-8">DESIGNER / DEVELOPER</div>
      <h1 className="isf-text-hero isf-text-display isf-color-accent">
        YOUR NAME
      </h1>
    </section>
    
    {/* Projects Grid */}
    <section className="isf-grid isf-grid-2 isf-gap-8">
      <div className="isf-feature-block isf-feature-block-primary">
        <div className="isf-p-16">
          <h2 className="isf-text-5xl isf-text-display">
            Project Name
          </h2>
          <p className="isf-mt-4">Description...</p>
        </div>
      </div>
      {/* More projects... */}
    </section>
  </div>
</div>
```

## 📦 Packaging for Distribution

### Create a standalone package:

1. **Copy library to its own repo:**
```bash
mkdir industrial-scifi-lib
cp -r src/lib/industrial-scifi/* industrial-scifi-lib/
cd industrial-scifi-lib
```

2. **Update package.json:**
```json
{
  "name": "@yourname/industrial-scifi",
  "version": "1.0.0",
  "main": "index.css",
  "files": ["*.css", "*.jsx", "*.js", "*.md"],
  ...
}
```

3. **Publish:**
```bash
npm publish
```

### Or create a CDN version:
```html
<!-- In any HTML file -->
<link rel="stylesheet" href="https://your-cdn.com/industrial-scifi/index.css">
```

## 🎓 Learning Path

1. **Start with the basics** - Use `ComponentShowcase.tsx` to see all components
2. **Study the landing page** - See how components combine in `LandingPage.tsx`
3. **Experiment** - Toggle between landing and showcase, modify components
4. **Customize** - Override tokens, create custom components
5. **Build** - Create your own pages using the library
6. **Extend** - Add new components following the patterns

## 💡 Tips for Extension

- **Keep the prefix** - Use `isf-` for all your custom classes
- **Use design tokens** - Always reference CSS variables, not hard-coded values
- **Follow the patterns** - Look at existing components for structure
- **Build composable** - Small, focused utilities combine into complex UIs
- **Document as you go** - Add examples for your custom components

---

Your library is ready to use! Start building amazing industrial sci-fi interfaces. 🚀
