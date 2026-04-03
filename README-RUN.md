# Genora Energy (React + Vite + Express)

This is a standalone version (no Base44).

## Requirements
- Node.js 18+ (recommended)

## Setup
```bash
cd genoraenergy-express
npm install
cp .env.example .env
```

Fill `.env`:
- `OPENAI_API_KEY` (for `/api/search`)
- `RESEND_API_KEY` (for `/api/contact`)

## Run (frontend + backend)
```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend:  http://localhost:5174

## Test
- http://localhost:5173/api/health should return `{ ok: true }`

