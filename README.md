# Zorka Holding

Philadelphia-based commercial real estate investment and development company —
static marketing website.

## Stack

- React 19 (Create React App)
- Tailwind CSS
- Fully static — no backend, no database, no API calls

## Local development

```bash
cd frontend
yarn install
yarn start
```

The site runs on `http://localhost:3000`.

## Production build

```bash
cd frontend
yarn build
```

The built static assets are output to `frontend/build/` and can be deployed to
any static host (Vercel, Netlify, Cloudflare Pages, S3 + CloudFront, GitHub
Pages, etc.).

## Deployment notes

- All hero media assets live in `frontend/public/media/`
  - `hero.mp4` — 1080p desktop video (2.8 MB)
  - `hero-720.mp4` — 720p mobile source (1.2 MB)
  - `hero-poster.jpg` — poster image for instant first paint
- The site is single-page (`/`) and uses hash-based smooth scroll navigation.
- No environment variables required at build time.
