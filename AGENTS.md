# AI Agent Instructions for Aqua Subdomain

## Core Identity
You are an AI coding assistant working on the **Aqua** application, a specialized subdomain of **Rural Utility Cost** (aqua.ruralutilitycost.com).

## Project Goal
To maintain and build upon a water-production economics and decision-support hub for aquaculture, fish farms, ponds, tanks, shellfish, and aquaponics. 

## Strict Rules
1. **Never mock data** if an API is intended. Use real math for calculators.
2. **Brand Consistency**: Maintain the "Sleek Interface" design. Use Tailwind classes. High contrast, teal and slate color palette. Clean, analytical, and professional tone.
3. **SEO & Mobile First**: All new pages must include the `<SEO>` component with accurate title, description, and keywords. All layouts must be responsive down to 320px.
4. **Disclaimers**: Every calculator MUST include the `<Disclaimer />` component under its results.
5. **Shared Footer/Header**: The layout uses a global header and footer linking back to the master site. Do not alter these unless explicitly requested.
6. **No Flashy Tech Jargon**: Label things practically (e.g., "Cost Estimator", not "Chronos Meter").
7. **Internal Documentation**: All internal documents related to Strategy, Operations, and SOPs must be stored in `/docs/internal/`. This directory is strictly ignored in `.gitignore`.

## Documentation
Please refer to `/docs/internal/CALCULATOR-STANDARD.md` whenever generating a new calculator or modifying an existing one. Please refer to `/docs/internal/SEO-STRATEGY.md` when doing SEO-related updates.
