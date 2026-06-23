# Known Issues & Decisions Log

## Architectural Decisions

### 1. Data Persistence
- **Decision**: Use `localStorage` via custom `useLocalStorage` hook instead of a backend database.
- **Reason**: Allows immediate deployment without requiring user authentication or maintaining a database. Keeps the application completely client-side for rapid prototyping.
- **Trade-off**: Data is lost if the user clears their cache or switches devices.

### 2. Styling Framework
- **Decision**: Tailwind CSS v4.
- **Reason**: Enables rapid UI iteration and enforces the mobile-first requirement seamlessly without managing external stylesheets.

### 3. SEO Implementation
- **Decision**: Global `<SEO />` component using `react-helmet-async`.
- **Reason**: Allows dynamic injection of meta tags and JSON-LD schema per page while maintaining a single page application (SPA) architecture.

### 4. Disclaimer Strategy
- **Decision**: Reusable `<Disclaimer />` component inserted directly below calculator results and simplified in the footer.
- **Reason**: Meets strict legal requirements for visibility and liability protection while centralizing text for easy updates across the application or multiple subdomains.

## Solved Problems
- **AdSense Removal**: Originally implemented ad placeholders, but removed them per project requirement updates to keep the interface cleaner.
- **Routing**: Adopted React Router DOM with a shared Layout component to maintain header/footer consistency.
