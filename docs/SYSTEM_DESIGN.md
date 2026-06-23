# Design System / Style Guide

## Colors
- **Primary**: Teal (Tailwind `teal-600`, `teal-700`, `teal-900`)
- **Background**: Slate (Tailwind `slate-50`, `white`)
- **Text**: Slate (Tailwind `slate-900` for headings, `slate-600` for body)
- **Accents**: Blue, Amber, Emerald for specific data visualization points.

## Fonts
- **Primary**: Sans-serif (Tailwind `font-sans`)
- **Headings**: Bold, tight tracking (`tracking-tight`)

## Spacing & Layout
- Mobile-first approach using Tailwind utility classes.
- Standard container: `max-w-7xl mx-auto p-4 md:p-6`.
- Two-column layouts on desktop collapsing to single-column on mobile.

## Component Rules
- Use `lucide-react` for iconography.
- Forms should use `w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500`.
- All outputs must feature the `<Disclaimer />` component.
