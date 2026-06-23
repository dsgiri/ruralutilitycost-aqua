# Component Library Spec

## Reusable UI Components

### `<SEO />`
- **Props**: `title` (string), `description` (string), `keywords` (string, optional).
- **Function**: Injects Helmet meta tags, JSON-LD, Open Graph, and Twitter tags.

### `<Disclaimer />`
- **Props**: `customText` (string, optional), `className` (string, optional), `variant` ('light' | 'dark').
- **Function**: Standardized liability text. Used beneath calculator outputs.

### `<ToolCard />`
- **Props**: `tool` (Tool interface object).
- **Function**: Displays available calculators on the home page with an icon, title, description, and link.

### `<CookieBanner />`
- **Props**: None.
- **Function**: Manages GDPR cookie consent utilizing local storage (`cookie-consent`).
