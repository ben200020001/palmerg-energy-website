# Palmerg Energy (React + Vite + Express)

## Requirements
- Node.js 18+ (recommended)

## Setup
```bash
cd palmerg-energy-website
npm install
```

Create a `.env` file in the project root (see `.env.example`; optional for static browsing; required for APIs):

- `OPENAI_API_KEY` (for `/api/search`)
- `RESEND_API_KEY` (for `/api/contact`)
- `CONTACT_TO`, `CONTACT_FROM` (optional; Resend “to”/“from” for contact form — verify domain in Resend for production)
- `VITE_RECAPTCHA_SITE_KEY`, `RECAPTCHA_SECRET_KEY` (recommended production: [reCAPTCHA v3](https://www.google.com/recaptcha/admin); register site hostname including `localhost` for dev). If the secret is unset, the server skips verification (local convenience).

## Run (frontend + backend)
```bash
npm run dev
```

- **Website (use this in dev):** http://localhost:5173 — Vite serves the app; `/api/*` is proxied to the Express server.
- **API server:** http://localhost:5174 — in development it does **not** serve `dist/` (so you never see a stale build). Only `/api/*` is used from the browser via the proxy.

## Test
- http://localhost:5173/api/health should return `{ ok: true }`

## Preview the production build locally
After `npm run build`, run `NODE_ENV=production npm start` (or `SERVE_DIST=1 npm start`) and open the URL logged by the server — it will serve `dist/`.
