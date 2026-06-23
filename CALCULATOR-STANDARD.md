---
title: "Business Calculator UI/UX & Engineering Standard"
version: "1.1.0"
status: "Active"
author: "Aqua Engineering & Product Team"
description: "Single source of truth for the design, development, and behavior of all web-based business calculators within the Aqua ecosystem."
---

# 1. FRONTMATTER & OVERVIEW

## Scope
This specification defines the strict architectural, visual, and behavioral standards for all web-based business calculators (e.g., Cost Estimator, Profit & Breakeven, Feed Conversion) in the Aqua platform. 

## Core Principles
- **Instantaneous Feedback:** No submit buttons. Outputs recalculate reactively on every input change.
- **Side-by-Side Clarity:** Desktop layouts rigidly separate parameter inputs (left) from live results (right). 
- **Professional & Analytical Tone:** Zero flashy tech jargon. Labels are practical, objective, and industry-standard.
- **Trust Through Precision:** All calculations must use exact formatting, explicit units, and clear context (tooltips/disclaimers).

## UX Goals
- **Minimize Cognitive Load:** Pre-fill all fields with smart, sensible defaults.
- **Error Prevention:** Clamp inputs to logical minimums/maximums and use inline validation instead of blocking alerts.
- **Mobile Parity:** Stack layouts gracefully on smaller viewports without compromising functionality or touch target sizes.

---

# 2. COMPONENT ARCHITECTURE

Every calculator must adhere to the following structural hierarchy:

### A. Global Sticky Summary (The `<FinancialSummaryBar />`)
- **Position:** Sticky at the top of the viewport (below the main navigation).
- **Function:** Displays the 4 most critical bottom-line metrics (e.g., Total Cost, Gross Revenue, Net Profit, Breakeven) that persist as the user scrolls.

### B. Two-Column Desktop Layout
- **Container:** `max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4 sm:px-6`
- **Left Column (Inputs - `flex-1`)**
  - **Hero Header:** `<h1>` Title and `<p>` subtitle explaining the specific goal of the calculator.
  - **Input Cards:** Grouped logically by phase or category (e.g., "System Parameters", "Fixed Costs"). Uses `bg-white` inside rounded cards (`rounded-xl`).
- **Right Column (Outputs - `w-full lg:w-[400px]`)**
  - **Result Breakdown:** A visually distinct card (`bg-[#f8fffe]`, `border-teal-700`) showcasing intermediate metrics and final calculated totals.
  - **Visualizations (Optional):** Contextual charts (e.g., stacked bars) visualizing the breakdown of costs or revenues.
  - **Disclaimer:** The standard `<Disclaimer variant="light" />` component placed directly below the results.

---

# 3. DATA INTERACTION & STATE LOGIC

### Smart Defaults & Persistence
- **Initial State:** Every input must render with a sensible default value (e.g., Cycles per year: 2, Default Survival: 85%). Empty states or `NaN` are strictly forbidden.
- **Persistence:** Utilize `useLocalStorage` for input states so users do not lose their work upon browser refresh.

### Reactive Math & Formulas
- **Live Recalculation:** Bind all calculations directly to the component render cycle (or memoize via `useMemo` for complex math).
- **Edge Cases & Fallbacks:** 
  - Protect against divide-by-zero errors.
  - If a required value is missing/zero, display `'-'` or `'0'`. Never display `NaN` or `Infinity`.

### Data Formatting
All displayed numbers must run through standard utility formatters:
- **Currency:** `toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 })`. Add `minimumFractionDigits: 2` for precise $/kg metrics.
- **Percentages:** Formatted to exactly 1 decimal place (e.g., `85.0%`).
- **Weights/Volumes:** Formatted to 1 decimal place (e.g., `1,200.5 kg`).
- **Counts:** Standard `toLocaleString()` with no decimals.

---

# 4. UI/UX & ACCESSIBILITY SPECIFICATIONS

### Visual Language & Design Tokens
- **Brand Colors:**
  - Primary / Accent: Teal `#0f766e`
  - Success: Teal `#0f766e`
  - Warning/Loss: Red `#dc2626`
  - Page Background: `#f0faf9`
  - Secondary Surface: `#f8fffe`
- **Typography:**
  - Family: `Inter` or `system-ui`.
  - Weights: `400` (Body), `500` (Labels/Headings), `600` (Key Metric Values).
- **Borders & Radii:** 
  - Standard inputs: `8px` (`rounded-lg`)
  - Cards & Containers: `12px` (`rounded-xl`)

### Mobile Responsiveness
- Viewports `< 1024px`: Columns stack vertically (Inputs on top, Outputs below).
- Viewports `< 768px`: Input grids collapse to a single column. The Sticky Summary bar collapses to a 2x2 grid.
- **Touch Targets:** Minimum height of `44px` for all clickable elements and inputs.

### Accessibility (a11y)
- **Labels:** Every `<input>` or `<select>` MUST have an associated descriptive `<label>` or `aria-label`.
- **Contrast:** Maintain high contrast ratios for all muted text (e.g., `text-slate-500` on white).
- **Focus States:** Distinct focus rings are mandatory (`focus:ring-2 focus:ring-teal-700`).

---

# 5. CODE TEMPLATE (MOCK)

```tsx
import React, { useMemo } from 'react';
import { formatCurrency, formatNumber } from '../lib/utils';
import FinancialSummaryBar from '../components/FinancialSummaryBar';
import Disclaimer from '../components/Disclaimer';

export default function StandardCalculatorTemplate() {
  // 1. State setup with persistence
  const [inputs, setInputs] = React.useState({ units: 10, costPerUnit: 5.5 });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: parseFloat(e.target.value) || 0 });
  };

  // 2. Reactive Calculations
  const totalCost = useMemo(() => inputs.units * inputs.costPerUnit, [inputs]);

  return (
    <>
      <FinancialSummaryBar totalCost={totalCost} />
      
      {/* Container: Side-by-Side on Desktop */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4 sm:px-6 py-6">
        
        {/* LEFT COLUMN: Inputs */}
        <div className="flex-1 space-y-6">
          <header>
            <h1 className="text-3xl font-medium text-slate-900">Standard Calculator</h1>
            <p className="text-slate-600">A brief, objective description of what this model calculates.</p>
          </header>

          <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-medium text-slate-900 border-b border-slate-100 pb-2 mb-4">
              Input Parameters
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Units</label>
                <input 
                  type="number" 
                  name="units" 
                  value={inputs.units} 
                  onChange={handleInput}
                  className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Cost / Unit ($)</label>
                <input 
                  type="number" 
                  name="costPerUnit" 
                  value={inputs.costPerUnit} 
                  onChange={handleInput}
                  className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700" 
                />
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: Outputs */}
        <div className="w-full lg:w-[400px] space-y-6 pt-0 lg:pt-16">
          <section className="bg-[#f8fffe] p-6 rounded-xl border border-teal-700">
            <h3 className="font-medium text-teal-700 mb-4">Results Breakdown</h3>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex justify-between items-center">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Total Calculated</p>
              <p className="text-xl font-semibold text-slate-900">{formatCurrency(totalCost)}</p>
            </div>
          </section>
          
          <Disclaimer variant="light" />
        </div>

      </div>
    </>
  );
}
```
