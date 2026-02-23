# 🎨 Anchovy Design System

A comprehensive, spectrum-based design system built on the natural harmony of ROY G BIV. **Anchovy** provides a complete foundation of colors, typography, spacing, and sizing tokens to create beautiful, accessible, and consistent user interfaces.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![npm version](https://img.shields.io/npm/v/@minnow-labs/anchovy-design-system.svg)](https://www.npmjs.com/package/@minnow-labs/anchovy-design-system)
[![Design Tokens](https://img.shields.io/badge/design%20tokens-217-blueviolet)](public/anchovy-design-tokens.json)

---

## ✨ Features

- **🌈 7 Color Families** — Based on ROY G BIV with 10 shades each (70 total colors)
- **📐 16 Typography Levels** — From Display Large (72px) to Caption (12px)
- **📏 23 Spacing Tokens** — 4px-based grid system (0px to 384px)
- **🎯 17 Sizing Tokens** — Icons, components, and layout dimensions
- **🌓 Dark Mode Ready** — Every token optimized for light and dark themes
- **♿ WCAG AA Compliant** — Accessible contrast ratios built-in
- **🔧 CSS Custom Properties** — Zero build step required
- **📦 Framework Agnostic** — Works with React, Vue, vanilla HTML, or anything

---

## 🚀 Quick Start

### Installation

```bash
npm install @minnow-labs/anchovy-design-system
```

### Basic Usage

Import the CSS file in your application:

```javascript
// ES6 / React / Vue
import '@minnow-labs/anchovy-design-system/dist/theme.css';
```

```html
<!-- HTML -->
<link rel="stylesheet" href="path/to/anchovy-design-system/dist/theme.css">
```

That's it! All design tokens are now available as CSS custom properties.

---

## 🎨 Colors

### Color Families

Anchovy includes 7 color families following the ROY G BIV spectrum:

| Family | Name | Shades | Use Cases |
|--------|------|--------|-----------|
| 🔴 **Red** | Signal | 50–900 | Errors, warnings, critical actions |
| 🟠 **Orange** | Ember | 50–900 | Energy, calls-to-action, highlights |
| 🟡 **Yellow** | Solar | 50–900 | Warnings, optimism, attention |
| 🟢 **Green** | Matrix | 50–900 | Success, growth, confirmation |
| 🔵 **Blue** | Neural | 50–900 | Primary brand, links, trust |
| 🟣 **Indigo** | Logic | 50–900 | Focus, intelligence, depth |
| 🟪 **Violet** | Synapse | 50–900 | Creativity, luxury, innovation |

### Usage Examples

```css
/* Direct color usage */
.button-primary {
  background-color: var(--blue-500);
  color: var(--blue-50);
}

.error-message {
  color: var(--red-600);
  background-color: var(--red-50);
}

/* Gradient combinations */
.hero-gradient {
  background: linear-gradient(135deg, var(--blue-500), var(--violet-500));
}

.sunset-gradient {
  background: linear-gradient(90deg, var(--orange-500), var(--yellow-500));
}
```

### Semantic Color Tokens

Use semantic tokens for automatic dark mode adaptation:

```css
.card {
  background-color: var(--surface-bg);
  border: 1px solid var(--surface-border);
  color: var(--text-primary);
}

.heading {
  color: var(--text-heading-primary);
}

.muted-text {
  color: var(--text-muted);
}
```

**Available semantic tokens:**
- `--surface-bg`, `--surface-secondary`, `--surface-tertiary`
- `--surface-border`, `--surface-divider`
- `--text-primary`, `--text-secondary`, `--text-muted`
- `--text-heading-primary`, `--text-heading-secondary`

---

## 📝 Typography

### Type Scale

Anchovy provides 16 carefully crafted type levels:

| Level | Size | Weight | Usage |
|-------|------|--------|-------|
| **Display Large** | 72px | 700 | Hero sections, splash screens |
| **Display Medium** | 56px | 700 | Page titles |
| **Display Small** | 48px | 700 | Section intros |
| **H1** | 36px | 700 | Main headings |
| **H2** | 30px | 600 | Sub-headings |
| **H3** | 24px | 600 | Section headings |
| **H4** | 20px | 600 | Card titles |
| **H5** | 18px | 600 | List headers |
| **H6** | 16px | 600 | Small headers |
| **Body Large** | 18px | 400 | Intro paragraphs |
| **Body Base** | 16px | 400 | Default body text |
| **Body Small** | 14px | 400 | Secondary text |
| **Label** | 14px | 500 | Form labels |
| **Caption** | 12px | 400 | Metadata, timestamps |
| **Overline** | 12px | 500 | Eyebrows, categories |
| **Code** | 14px | 400 | Monospace code |

### Usage Examples

```css
/* Using typography tokens */
h1 {
  font-size: var(--type-h1-size);
  font-weight: var(--type-h1-weight);
  line-height: var(--type-h1-line-height);
  letter-spacing: var(--type-h1-letter-spacing);
}

.hero-title {
  font-size: var(--type-display-lg-size);
  font-weight: var(--type-display-lg-weight);
  line-height: var(--type-display-lg-line-height);
  letter-spacing: var(--type-display-lg-letter-spacing);
}

.body-text {
  font-size: var(--type-body-base-size);
  line-height: var(--type-body-base-line-height);
}

.caption {
  font-size: var(--type-caption-size);
  line-height: var(--type-caption-line-height);
  color: var(--text-muted);
}
```

### Font Families

```css
/* System font stack (default) */
body {
  font-family: var(--font-family-base);
  /* Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", ... */
}

/* Monospace for code */
code, pre {
  font-family: var(--font-family-mono);
  /* "JetBrains Mono", "Fira Code", monospace */
}
```

---

## 📏 Spacing & Sizing

### Spacing Scale

Built on a **4px grid system** for consistent rhythm:

```css
/* Common spacing patterns */
.card {
  padding: var(--space-6);        /* 24px */
  gap: var(--space-4);            /* 16px */
  margin-bottom: var(--space-8);  /* 32px */
}

.section {
  margin-top: var(--space-16);    /* 64px */
  margin-bottom: var(--space-16); /* 64px */
}

.button {
  padding: var(--space-3) var(--space-5);  /* 12px 20px */
  gap: var(--space-2);                      /* 8px */
}

.compact-list {
  gap: var(--space-1);  /* 4px */
}
```

**Available spacing tokens:**
```
--space-0      (0px)
--space-px     (1px)
--space-0-5    (2px)
--space-1      (4px)
--space-1-5    (6px)
--space-2      (8px)
--space-2-5    (10px)
--space-3      (12px)
--space-4      (16px)
--space-5      (20px)
--space-6      (24px)
--space-8      (32px)
--space-10     (40px)
--space-12     (48px)
--space-16     (64px)
--space-20     (80px)
--space-24     (96px)
--space-32     (128px)
--space-40     (160px)
--space-48     (192px)
--space-64     (256px)
--space-80     (320px)
--space-96     (384px)
```

### Sizing Tokens

Predefined sizes for common UI elements:

```css
/* Icons */
.icon-small  { width: var(--size-icon-sm); }  /* 16px */
.icon-medium { width: var(--size-icon-md); }  /* 20px */
.icon-large  { width: var(--size-icon-lg); }  /* 24px */
.icon-xl     { width: var(--size-icon-xl); }  /* 32px */

/* Avatars */
.avatar-small  { width: var(--size-avatar-sm); }  /* 28px */
.avatar-medium { width: var(--size-avatar-md); }  /* 36px */
.avatar-large  { width: var(--size-avatar-lg); }  /* 48px */

/* Buttons */
.button-small  { height: var(--size-btn-sm); }  /* 32px */
.button-medium { height: var(--size-btn-md); }  /* 40px */
.button-large  { height: var(--size-btn-lg); }  /* 48px */

/* Inputs */
.input {
  height: var(--size-input);  /* 40px */
}

/* Layout */
.sidebar {
  width: var(--size-sidebar);  /* 280px */
}

.navbar {
  height: var(--size-nav);  /* 64px */
}

.content-container {
  max-width: var(--size-content-lg);  /* 1024px */
}
```

### Touch Targets

Accessible touch targets for interactive elements:

```css
.touch-target-small  { min-width: var(--size-touch-sm); }   /* 32px */
.touch-target-medium { min-width: var(--size-touch-md); }   /* 44px */
.touch-target-large  { min-width: var(--size-touch-lg); }   /* 56px */
```

---

## 🎯 Border Radius

Consistent corner rounding across all components:

```css
.rounded-small  { border-radius: var(--radius-sm); }   /* 4px */
.rounded-medium { border-radius: var(--radius-md); }   /* 8px */
.rounded-large  { border-radius: var(--radius-lg); }   /* 12px */
.rounded-xl     { border-radius: var(--radius-xl); }   /* 16px */
.rounded-2xl    { border-radius: var(--radius-2xl); }  /* 20px */
.rounded-3xl    { border-radius: var(--radius-3xl); }  /* 24px */
.rounded-full   { border-radius: var(--radius-full); } /* 9999px */
```

---

## 🌓 Dark Mode

Anchovy automatically adapts to dark mode using CSS custom properties:

```css
/* Automatic theme switching */
:root {
  /* Light mode values */
  --surface-bg: #FFFFFF;
  --text-primary: #1E293B;
}

:root.dark {
  /* Dark mode values */
  --surface-bg: #0F172A;
  --text-primary: #F8FAFC;
}
```

### Implementing Dark Mode

**Option 1: Class-based (recommended)**
```javascript
// Toggle dark mode by adding/removing class on <html> or <body>
document.documentElement.classList.toggle('dark');
```

**Option 2: Media query**
```css
/* Automatically follows system preference */
@media (prefers-color-scheme: dark) {
  :root {
    --surface-bg: #0F172A;
    --text-primary: #F8FAFC;
    /* ... other dark mode overrides */
  }
}
```

---

## 📦 Complete Example

Here's a full component using Anchovy tokens:

```html
<div class="product-card">
  <img src="product.jpg" alt="Product" class="product-image">
  <div class="product-content">
    <span class="product-category">Electronics</span>
    <h3 class="product-title">Wireless Headphones</h3>
    <p class="product-description">
      Premium sound quality with active noise cancellation.
    </p>
    <div class="product-footer">
      <span class="product-price">$299</span>
      <button class="product-button">Add to Cart</button>
    </div>
  </div>
</div>

<style>
.product-card {
  background-color: var(--surface-bg);
  border: 1px solid var(--surface-border);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  gap: var(--space-4);
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;
}

.product-card:hover {
  border-color: var(--blue-300);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.15);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-4);
}

.product-category {
  font-size: var(--type-overline-size);
  font-weight: var(--type-overline-weight);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--blue-500);
  font-family: var(--font-family-mono);
}

.product-title {
  font-size: var(--type-h4-size);
  font-weight: var(--type-h4-weight);
  line-height: var(--type-h4-line-height);
  color: var(--text-heading-primary);
  margin-top: var(--space-2);
}

.product-description {
  font-size: var(--type-body-sm-size);
  line-height: var(--type-body-sm-line-height);
  color: var(--text-secondary);
  margin-top: var(--space-3);
}

.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: var(--space-6);
  gap: var(--space-4);
}

.product-price {
  font-size: var(--type-h3-size);
  font-weight: var(--type-h3-weight);
  color: var(--text-heading-primary);
}

.product-button {
  background: linear-gradient(135deg, var(--blue-500), var(--blue-600));
  color: white;
  padding: var(--space-3) var(--space-5);
  border-radius: var(--radius-lg);
  border: none;
  font-size: var(--type-body-sm-size);
  font-weight: 600;
  height: var(--size-btn-md);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.product-button:active {
  transform: translateY(0);
}
</style>
```

---

## 🛠️ Framework Examples

### React

```jsx
import '@minnow-labs/anchovy-design-system/dist/theme.css';

function Button({ children, variant = 'primary' }) {
  const styles = {
    padding: 'var(--space-3) var(--space-5)',
    borderRadius: 'var(--radius-lg)',
    fontSize: 'var(--type-body-sm-size)',
    fontWeight: 600,
    height: 'var(--size-btn-md)',
    border: 'none',
    cursor: 'pointer',
    background: variant === 'primary' 
      ? 'linear-gradient(135deg, var(--blue-500), var(--blue-600))'
      : 'var(--surface-secondary)',
    color: variant === 'primary' ? 'white' : 'var(--text-primary)',
  };

  return <button style={styles}>{children}</button>;
}
```

### Vue

```vue
<template>
  <div class="card">
    <h2 class="card-title">{{ title }}</h2>
    <p class="card-description">{{ description }}</p>
  </div>
</template>

<script>
import '@minnow-labs/anchovy-design-system/dist/theme.css';

export default {
  props: ['title', 'description']
}
</script>

<style scoped>
.card {
  background-color: var(--surface-bg);
  border: 1px solid var(--surface-border);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
}

.card-title {
  font-size: var(--type-h3-size);
  font-weight: var(--type-h3-weight);
  color: var(--text-heading-primary);
  margin-bottom: var(--space-3);
}

.card-description {
  font-size: var(--type-body-base-size);
  color: var(--text-secondary);
}
</style>
```

### Tailwind CSS (with custom config)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'signal': {
          50: 'var(--red-50)',
          100: 'var(--red-100)',
          // ... etc
        },
        'neural': {
          50: 'var(--blue-50)',
          500: 'var(--blue-500)',
          // ... etc
        }
      },
      spacing: {
        '1': 'var(--space-1)',
        '2': 'var(--space-2)',
        '3': 'var(--space-3)',
        // ... etc
      }
    }
  }
}
```

---

## 🎨 Design Tokens Export

All design tokens are available in JSON format for use in other tools:

```javascript
// Import the full token set
import tokens from '@minnow-labs/anchovy-design-system/public/anchovy-design-tokens.json';

console.log(tokens.colors.signal['500'].value);  // "#EF4444"
console.log(tokens.typography.display.large.size.value);  // "72"
console.log(tokens.spacing.scale['6'].value);  // "24"
```

**Token structure:**
- `colors` → All 7 color families with 10 shades each
- `typography` → All 16 type levels with size, weight, line-height, letter-spacing
- `spacing` → 23 spacing tokens on 4px grid
- `sizing` → 17 sizing tokens for UI elements
- `radius` → 7 border radius values
- `semantic` → Semantic color mappings for light/dark modes

---

## 📚 Documentation

- **Live Documentation**: [https://your-site.com/anchovy-design](https://your-site.com/anchovy-design)
- **Color Explorer**: Browse all 70 colors with accessibility info
- **Typography Scale**: See all 16 type levels with live examples
- **Spacing Guide**: Interactive spacing playground
- **Component Examples**: Real-world usage patterns

---

## 🏗️ Project Structure

```
anchovy-design-system/
├── public/
│   └── anchovy-design-tokens.json   # Complete token export
├── src/
│   ├── app/                         # Documentation site
│   └── styles/
│       ├── theme.css                # Main design tokens (217 tokens)
│       ├── fonts.css                # Font imports
│       └── global.css               # Base styles
├── dist/                            # Build output (npm package)
│   ├── theme.css
│   └── tokens.json
├── package.json
└── README.md
```

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** following the design system principles
4. **Test thoroughly** in both light and dark modes
5. **Commit with clear messages**: `git commit -m 'Add new spacing token'`
6. **Push to your fork**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Design Principles

When contributing, follow these core principles:

- ✅ **Maintain the 4px grid** for all spacing values
- ✅ **Ensure WCAG AA compliance** for all color combinations
- ✅ **Test in both light and dark modes**
- ✅ **Use semantic naming** for new tokens
- ✅ **Document with examples** in the live site
- ✅ **Keep the ROY G BIV harmony** for color additions

---

## 📄 License

MIT License © minnow labs.

This design system is free to use in commercial and personal projects.

---

## 🙌 Acknowledgments

- **ROY G BIV color model** for natural spectral harmony
- **Inter font** by Rasmus Andersson
- **JetBrains Mono** for code typography
- **WCAG Guidelines** for accessibility standards

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourorg/anchovy-design-system/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourorg/anchovy-design-system/discussions)
- **Email**: design-system@minnowlabs.com

---

## 🗺️ Roadmap

- [ ] Figma library with all tokens as variables
- [ ] Sketch library support
- [ ] Adobe XD plugin
- [ ] Style Dictionary integration for multi-platform export
- [ ] React component library
- [ ] Vue component library
- [ ] Svelte component library
- [ ] iOS/Android token exports
- [ ] Storybook documentation
- [ ] Figma Plugin for token sync

---

**Made with 🎨 by minnow labs**

*Bringing spectral harmony to digital experiences*
