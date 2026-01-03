# Bennie-UI

**Bennie-UI is still in active development**

Bennie-UI is a modern React component library built with **PandaCSS** for type-safe, performant styling. Components are designed to be composable, accessible, and easy to customize while maintaining excellent developer experience.

## Features

- ✨ **PandaCSS Integration** - Type-safe styling with static CSS extraction
- 🎨 **Variant-Based Design** - Consistent design tokens across components
- 🔧 **Fully Typed** - Complete TypeScript support
- 📦 **Tree-Shakeable** - Import only what you need
- 🎭 **Storybook Documentation** - Interactive component playground
- ♿ **Accessible** - Built with accessibility in mind
- 🎯 **Minimal Dependencies** - Lean and focused

## Quick Example

```tsx
import { Button } from "@bennie-ui/button";
import { Toast } from "@bennie-ui/toast";

// Using variant-based styling
<Button variant="primary" size="medium">
  Click Me
</Button>

// With custom PandaCSS styles
<Toast
  action="success"
  scale="medium"
  dismissable
  rounded
  css={{
    boxShadow: "lg",
    _hover: { transform: "translateY(-2px)" }
  }}
>
  Success! Your changes have been saved.
</Toast>
```

## Architecture

Bennie-UI uses **PandaCSS** for styling, which provides:

- **Static CSS Extraction** - Styles are extracted at build time for optimal performance
- **Type Safety** - Full TypeScript support for style properties
- **Design Tokens** - Consistent theming through token-based design
- **Zero Runtime** - No runtime CSS-in-JS overhead

### Component Structure

Each component follows a consistent pattern:

```
component/
├── src/
│   ├── component.tsx        # Component implementation
│   ├── component.styles.ts  # PandaCSS style definitions
│   ├── component.types.ts   # TypeScript interfaces
│   └── index.ts            # Public exports
└── package.json
```

## Available Components

### Primitives
- **Button** - Variant-based button with multiple sizes and colors
- **Section** - Container component with PandaCSS support
- **Text** - Typography component with multiple text tags
- **Heading** - Semantic heading component (h1-h6)
- **Link** - Anchor component with target support
- **Icon** - Icon component with outline and solid variants

### Composites

#### Forms
- **Input** - Text input with label, placeholder, and clear button
- **RadioGroup** - Radio button group with row/column layouts

#### Feedback
- **Toast** - Notification component with auto-dismiss and variants

## Documentation

To review all available components and their properties:

**[Visit our Storybook](https://storybook.bennie-ui.com/)**

## Benefits

- **Type-Safe Styling** - Catch styling errors at compile time with PandaCSS
- **Consistent API** - All components follow the same patterns (`variant`, `size`, `css` props)
- **Performance** - Static CSS extraction means zero runtime overhead
- **Developer Experience** - IntelliSense support for all style properties
- **Flexible** - Use variants for common styles, `css` prop for custom styling
- **Minimal Bundle** - Tree-shakeable exports and optimized builds

## Installation

### Using Git Submodule

If you have an existing Bun project, you can add Bennie-UI as a git submodule:

```bash
git submodule add https://github.com/bennie-ui/bennie-ui.git packages/bennie-ui
```

Add the Bennie-UI packages to your project's `package.json` workspaces:

```json
{
  "workspaces": [
    "packages/bennie-ui/libraries/*",
    "packages/bennie-ui/components/primitives/*",
    "packages/bennie-ui/components/composites/*",
    "packages/bennie-ui/components/composites/forms/*",
    "packages/bennie-ui/components/composites/feedback/*"
  ]
}
```

Install dependencies:

```bash
bun install
```

### PandaCSS Setup

Bennie-UI requires PandaCSS to be configured in your project. Add the following to your `panda.config.ts`:

```typescript
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./packages/bennie-ui/**/*.{js,jsx,ts,tsx}",
  ],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          // Your custom color tokens
        },
      },
    },
  },
  outdir: "styled-system",
});
```

## Usage

Import components directly from their packages:

```tsx
import { Button } from "@bennie-ui/button";
import { Input } from "@bennie-ui/inputs";
import { Toast } from "@bennie-ui/toast";
import { Section } from "@bennie-ui/section";
import { Text, Heading, Link } from "@bennie-ui/text";

function MyApp() {
  return (
    <Section css={{ padding: "4", maxWidth: "1200px", margin: "0 auto" }}>
      <Heading tag="h1">Welcome to My App</Heading>
      
      <Input
        name="email"
        label="Email Address"
        placeholder="you@example.com"
        withClearMark
      />
      
      <Button variant="primary" size="large">
        Submit
      </Button>
      
      <Toast action="success" scale="medium" dismissable rounded>
        Form submitted successfully!
      </Toast>
    </Section>
  );
}
```

### Custom Styling

All components accept a `css` prop for custom PandaCSS styles:

```tsx
<Button
  variant="primary"
  css={{
    borderRadius: "full",
    paddingX: "8",
    _hover: {
      transform: "scale(1.05)",
      boxShadow: "xl",
    },
  }}
>
  Custom Styled Button
</Button>
```

### Creating Custom Components

Use Bennie-UI primitives to build your own components:

```tsx
// MyCard.tsx
import { Section } from "@bennie-ui/section";
import { Heading } from "@bennie-ui/text";
import { css } from "styled-system/css";

export const MyCard = ({ title, children }) => {
  return (
    <Section
      className={css({
        padding: "6",
        borderRadius: "lg",
        boxShadow: "md",
        backgroundColor: "white",
        _hover: { boxShadow: "lg" },
      })}
    >
      <Heading tag="h3">{title}</Heading>
      {children}
    </Section>
  );
};
```

## Development

### Install Dependencies

```bash
bun install
```

### Run Storybook

```bash
bun dev
```

This will start Storybook at `http://localhost:6006` where you can browse and test all components.

### Build

```bash
bun run build
```

### Testing

```bash
bun test
```

## Project Structure

```
bennie-ui/
├── components/
│   ├── primitives/       # Basic building blocks
│   │   ├── button/
│   │   ├── section/
│   │   ├── text/
│   │   └── icons/
│   └── composites/       # Complex components
│       ├── forms/
│       │   └── inputs/
│       └── feedback/
│           └── toast/
├── libraries/
│   ├── types/           # Shared TypeScript types
│   └── constants/       # Shared constants
├── stories/             # Storybook stories
├── styled-system/       # Generated PandaCSS output
└── .storybook/          # Storybook configuration
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes following the PandaCSS patterns
4. Add stories for new components
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Component Guidelines

When creating new components:

1. Use PandaCSS for all styling
2. Create variant-based styles in `*.styles.ts`
3. Support the `css` prop for custom styling
4. Add comprehensive TypeScript types
5. Create Storybook stories with multiple examples
6. Follow the existing component structure

## Migration from Attribute-Utils

If you're upgrading from the old attribute-utils pattern:

**Before:**
```tsx
<Section
  padding={{ all: "4" }}
  margin={{ bottom: "2" }}
  colors={{ background: { color: "blue", weight: "500" } }}
>
```

**After:**
```tsx
<Section
  css={{
    padding: "4",
    marginBottom: "2",
    backgroundColor: "blue.500",
  }}
>
```

The new approach uses PandaCSS directly, which provides better performance, type safety, and developer experience.

## License

See the LICENSE file for details.

## Links

- [Storybook Documentation](https://storybook.bennie-ui.com/)
- [PandaCSS Documentation](https://panda-css.com/)
- [GitHub Repository](https://github.com/bennie-ui/bennie-ui)
