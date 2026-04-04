# Build the Vite client, then run the Express API + static dist (required for Fly / Docker).
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev
COPY --from=builder /app/dist ./dist
COPY server ./server
ENV PORT=8080
EXPOSE 8080
CMD ["node", "server/index.js"]
