# Zorka Holding — Landing Page PRD

## Problem Statement
Build a premium, modern, minimalist landing page for Zorka Holding, a Philadelphia-based commercial real estate investment and development company. The design should resemble institutional real estate firms such as Blackstone Real Estate, Prologis, or Brookfield.

## User Personas
- **Prospective sellers / property owners** — evaluating whether to bring an asset to Zorka
- **Investors, lenders, brokers** — assessing the firm's positioning and track record
- **Community stakeholders** — understanding the firm's approach and mission

## Design Constraints (locked)
- Palette: navy `#0F2742`, charcoal `#30343B`, gold `#B38B45`, white bg
- Font: Inter throughout
- No CTAs in hero. Full-width video background of Philadelphia skyline
- Static contact only (no form)
- Neutral gray/monochrome portfolio placeholders (no stock imagery)

## Section Order (locked)
Hero → Investment Criteria → About → Mission → Portfolio → Contact → Footer

## What's Been Implemented (2026-07-13)
- Fixed navigation (transparent over hero → white/scrolled) with mobile hamburger
- Hero: autoplay looping video (with elegant navy gradient fallback) + subtle scroll indicator
- Investment Criteria: 11 minimal cards, gold hover accent, grouped labels
- About: founder photo (Paul Skapets) + institutional bio
- Mission: navy full-bleed "Value First" statement
- Portfolio: 2 monochrome placeholders with architectural SVG marks
- Contact: static phone/email/location, phone & email as clickable links
- Footer: minimalist typographic logo + tagline + copyright
- Framer-free reveal-on-scroll via IntersectionObserver
- Full responsive layout (mobile menu, stacked grids)
- 40+ data-testids across all interactive/visible elements
- Verified 100% pass on frontend testing agent

## Prioritized Backlog (Deferred)
- **P1:** Replace portfolio placeholders with actual project photos + case studies (2 slots ready)
- **P1:** Add optimized poster image / lower-res video for faster first paint (current mp4 is 57MB)
- **P2:** Add press / news section for institutional credibility
- **P2:** Investor login / private data room (behind auth)
- **P2:** Investment thesis PDF download / newsletter signup
- **P3:** Multi-page navigation (dedicated /portfolio, /about routes)

## Notes
- Backend intentionally unmodified — this is a pure static marketing site
- Email uses `acquisitions@zorkaholding.com` (corrected per user request).
