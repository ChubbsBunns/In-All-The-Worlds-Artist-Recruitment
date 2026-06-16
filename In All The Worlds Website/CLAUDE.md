# In All The Worlds — Recruitment Site

## What this is
A recruitment site for "In All The Worlds," a top-down narrative action RPG,
aimed at 2D artists. It presents the game's world, cast, and current demo to
convince artists to join. Emotion-first: the page leads with mood and story;
the practical "what I'm looking for" details sit lower, not in the header.
Also a personal full-stack learning project, so later phases are deliberately
more complex than the site strictly needs.

## Current phase
Phase 1: frontend only. No backend, no DB. Contact = email link (mailto).
Do NOT scaffold backend / Postgres / Redis yet — that's Phase 2.
No real copy, images, or character data exist yet — use labelled placeholders.

## Stack
- Frontend: Next.js (App Router) + TypeScript + Mantine, on Vercel
- Backend (Phase 2+): Node + Express, persistent server (NOT Vercel serverless)
- DB (Phase 2+): Postgres
- Redis (Phase 2+): rate-limiting the contact endpoint
- Phase 3: Docker + Nginx on a VPS

## Repo structure
```
app/
  layout.tsx          ← Root layout (MantineProvider, ColorSchemeScript, StickyHeader, WelcomePopup)
  page.tsx            ← Single page, composes all sections in order
  providers.tsx       ← 'use client' MantineProvider wrapper (defaultColorScheme="auto")
  globals.css         ← Minimal reset only; Mantine CSS imported in layout.tsx

components/
  Header/
    StickyHeader.tsx  ← Client Component — sticky frosted bar, colour-scheme toggle, smooth-scroll CTA
  Popup/
    WelcomePopup.tsx  ← Client Component — load-time modal, requires button click to dismiss
  Hero/
    HeroSection.tsx   ← Server Component — full-bleed 100vh background placeholder + title/tagline
  Synopsis/
    SynopsisSection.tsx ← Server Component — alternating image/text rows (3 rows)
  Characters/
    CharactersSection.tsx ← Server Component — responsive SimpleGrid shell
    CharacterCard.tsx     ← Client Component — card with click-to-open modal
    CharacterModal.tsx    ← Client Component — modal with variable detailImages array
  MoodBoard/
    MoodBoardSection.tsx ← Server Component — even 3-col SimpleGrid of placeholder tiles
  Contact/
    ContactSection.tsx   ← Server Component — id="contact", mailto link

data/
  characters.ts  ← SINGLE source of truth for all character data (edit here only)
```

## Commands
- `npm run dev`   — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint`  — ESLint

## Conventions
- TypeScript strict mode
- App Router: Server Components by default; Client Components only when interactivity needs it
- Styling via Mantine components + theme; avoid custom CSS files unless necessary
- All placeholder/character content lives in `data/characters.ts` (single file to edit)
- Placeholder text format: `[LABEL TODO] Lorem ipsum...` — grep for "TODO" to find all placeholders
- Prettier + ESLint; keep components small and single-purpose
- **Mantine compound sub-components** (`Grid.Col`, `Card.Section`, etc.) must be imported as flat
  named exports (`GridCol`, `CardSection`) in Server Components — the dot-notation form resolves
  to undefined under Turbopack SSR due to ESM initialisation order

## Do not
- No narrative spoilers in copy (no Crystal Hoarder reveal)
- Don't invent game lore or write final copy — use placeholders, ask if unsure
- Don't add dependencies without flagging
- Don't deploy/configure the backend on Vercel — it's a persistent server for Phase 3
