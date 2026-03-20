# Leslie Bookkeeping — Project Instructions

## Stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + custom CSS (`globals.css`)
- **Animations**: Framer Motion
- **Font**: Inter (via `next/font/google`)
- **Icons**: Lucide React + custom Facebook SVG
- **Deployment**: GitHub → `owshstudio/leslie-bookkeeping`

## Key Files
- `src/app/layout.tsx` — Root layout, SEO metadata, JSON-LD schema, viewport
- `src/app/page.tsx` — Entire site (single-page, client component)
- `src/app/globals.css` — All custom styles: hero sphere/arc, particles, cards, buttons, form inputs

## Hero Effect
The hero uses layered CSS elements to create a dark planet/sphere with a white arc line:
1. `.hero-sphere` — Dark ellipse (2400x950px, `bottom: -640px`) same color as bg
2. `.hero-arc` / `.hero-arc-glow` — White border-top on matching ellipse for the visible arc line
3. `.hero-arc-wrapper` — Viewport-width container with horizontal fade mask
4. `.hero-color-glow` / `.hero-color-glow-2` — Animated cyan-to-pink gradients with `blur(100px)`
5. `.hero-bottom-fade` — Gradient overlay to blend hero into sections below

**Do NOT change arc/sphere positioning** — it's been carefully tuned. The arc stays at fixed 2400x950px at all screen sizes.

## Form
Contact form submits to **Formspree**: `https://formspree.io/f/xreydjqq`
Custom dark-themed dropdown for service selection (not native `<select>`).

## Sections
1. Hero (sphere + arc + animated gradient + certifications)
2. Services (4 dark cards with alternating image layout)
3. How I Do It (4 dark glass cards with colored icons)
4. About Me (photo + bio)
5. Contact (Formspree form)
6. Footer

## Design Notes
- Background: `#0a0a0a` everywhere — must be consistent, no visible seams between sections
- Cards: `.card-dark` for services, `.card-dark-glass` for How I Do It
- Buttons: `.btn-light` (white filled), `.btn-dark` (dark with border), `.btn-primary` (purple gradient)
- 30 CSS particles with `position: fixed` floating across the page
- Facebook icon is custom inline SVG, not Lucide — sized at `h-8 w-8`
- Logo in nav/footer sized at `h-10`/`h-11`

## Commands
```bash
npx next dev --turbopack     # Dev server
npx next build               # Production build
```

## External Links
- Facebook: `https://www.facebook.com/profile.php?id=100088005292186`
- Email: `lesliebookkeepingllc@gmail.com`
- OWSH Studio: `https://owshstudio.com`
- Live site: `https://lesliebookkeeping.com`
