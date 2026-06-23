# SEO Strategy Document

## Keyword Targets
- aquaculture costs
- fish farming economics
- aquaponics budget
- feed conversion ratio calculator
- aquaculture profit
- fish farm breakeven cost

## Meta Formulas
Each page uses the `<SEO>` component:
- **Title**: `[Tool Name] - Optimized for search` (Appended globally) / `[Tool Name] | Aqua by Rural Utility Cost`
- **Description**: 150-160 characters describing the tool's exact function.
- **Canonical URL**: Self-referencing full URL (`https://aqua.ruralutilitycost.com/...`).

## Schema Specs (JSON-LD)
Implemented globally in `<SEO>` component:
- `@context`: `https://schema.org`
- `@type`: `WebPage`
- `name`: Page Title
- `description`: Page Description
- `url`: Canonical URL
