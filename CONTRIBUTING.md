# Contributing to Anchovy Design System

Thank you for your interest in contributing to the Anchovy Design System!

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/MinnowRuss/anchovy-design-system.git
   cd anchovy-design-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run build
   ```

## Project Structure

```
anchovy-design-system/
├── src/
│   ├── styles/              # CSS design tokens
│   │   ├── theme.css        # Main theme variables
│   │   ├── fonts.css        # Font imports
│   │   ├── tailwind.css     # Tailwind directives
│   │   └── index.css        # CSS entry point
│   ├── app/
│   │   └── components/
│   │       ├── ui/          # Reusable UI components (exported)
│   │       └── figma/       # Figma integration utilities
│   └── index.ts             # Main package entry point
├── public/
│   └── anchovy-design-tokens.json  # Figma token export
└── package.json
```

## Design Tokens

The design system is built on CSS custom properties defined in `/src/styles/theme.css`:

- **Colors**: 70 shades across ROY G BIV spectrum (Signal, Ember, Solar, Matrix, Neural, Logic, Synapse)
- **Typography**: 16 type levels with composite tokens
- **Spacing**: 23 tokens on 4px base grid
- **Sizing**: Icon, avatar, button, input, and layout sizes
- **Primitives**: Border radius, width, opacity, shadows

## Adding New Components

1. Create component in `/src/app/components/ui/`
2. Use design tokens from theme.css
3. Export from `/src/index.ts`
4. Update documentation

## Publishing

To publish a new version:

1. Update version in `package.json`
2. Commit changes
3. Run: `npm publish`

The `prepublishOnly` script will automatically build the package.

## Design Philosophy

Anchovy follows these principles:

- **Token-first**: All values reference design tokens
- **Accessible**: WCAG AA compliant color contrasts
- **Consistent**: 4px base grid for spacing
- **Flexible**: Light/dark mode by default
- **Professional**: Production-ready components
