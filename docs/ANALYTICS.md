# Analytics & KPI Spec

## Event Tracking (gtag.js)

### Key Metrics
1. **Page Views**: Tracked automatically on route changes in `<Layout />` using `gtag('event', 'page_view')`.
2. **Tool Engagement**: Track usage of specific calculators (e.g., clicking "Calculate" or interacting with inputs).
3. **Scroll Depth**: Tracking how far users scroll on long educational pages or the Home dashboard.

## Dashboard Specs
- Monitor average session duration on `/tools/profit` vs `/tools/estimate`.
- Track mobile vs desktop usage to ensure responsive design holds up.
- Measure bounce rate on the `/legal` page.
