# NFC Implementation Spec

*(Note: Specific for physical asset tracking in aquaculture if implemented)*

## Tag Formats
- **Type**: NTAG213 or NTAG215 (Standard for environmental resistance).
- **Encoding**: NDEF formatted URL pointing to specific batch records or equipment specs on the platform.

## Tap-Page Behavior
- When an operator taps a tagged tank/pond:
  1. Opens a dynamic URL: `https://aqua.ruralopstools.com/asset/{id}`.
  2. Displays current stocking density, feeding schedule, and last FCR check.
  3. Provides quick links to the `FeedCalculator` pre-filled with the asset's data.
