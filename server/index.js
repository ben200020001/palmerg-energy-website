import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "../dist");

/** In dev (`npm run dev`), Vite on 5173 is the UI; this server is API-only unless you opt in to serving `dist/`. */
const serveStaticDist =
  process.env.NODE_ENV === "production" ||
  process.env.SERVE_DIST === "1" ||
  process.env.SERVE_DIST === "true";

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/search", async (req, res) => {
  const q = String(req.body?.q ?? "").trim();
  if (!q) return res.status(400).json({ error: "Missing q" });

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Server missing OPENAI_API_KEY" });
  }

  const prompt = `You are a helpful assistant for Palmerg Energy & Resources Limited, a fuel and energy company in Ghana.
The user searched for: "${q}"

Generate a helpful, informative response about this topic as it relates to Palmerg Energy's services and operations.
Palmerg Energy offers: fuel stations, bulk fuel supply, engine oils & lubricants, LPG services, haulage/logistics, salt mining, and related downstream products.
They are located at No.1 Papaya Street, East Legon, Accra, Ghana. Phone: 059 477 4032 / 020 511 7212.

Return JSON with:
- summary: string (2-3 sentences)
- did_you_mean: string or null
- results: array of 3-5 objects with title, description, page_path, category.
Allowed page_path values: /Home, /About, /Services, /Contact, /Stations, /Gallery, /FuelingStations, /BulkFuelSupply, /EngineOils, /LPGServices, /PalmergHaulage, /PalmergPrestige, /SaltMining`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        temperature: 0.4,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: "Return valid JSON only." },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(502).json({ error: "LLM request failed", detail: text });
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content;
    if (!content) return res.status(502).json({ error: "No LLM content" });

    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch {
      return res.status(502).json({ error: "Invalid JSON from LLM", raw: content });
    }

    return res.json(parsed);
  } catch (err) {
    return res.status(500).json({ error: "Server error", detail: String(err?.message || err) });
  }
});

app.post("/api/contact", async (req, res) => {
  const form = req.body ?? {};
  const name = String(form.name ?? "").trim();
  const email = String(form.email ?? "").trim();
  const subject = String(form.subject ?? "").trim();
  const message = String(form.message ?? "").trim();

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    return res.status(500).json({ error: "Server missing RESEND_API_KEY" });
  }

  const to = process.env.CONTACT_TO || "info@palmergenergy.com";
  const from = process.env.CONTACT_FROM || "Palmerg Energy <onboarding@resend.dev>";

  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(String(form.phone || "Not provided"))}</p>
    <p><strong>Address:</strong> ${escapeHtml(String(form.address || "Not provided"))}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <hr />
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `New Contact Form: ${subject}`,
        html,
        reply_to: email,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(502).json({ error: "Email send failed", detail: text });
    }

    return res.json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Server error", detail: String(err?.message || err) });
  }
});

function escapeHtml(input) {
  return String(input).replace(/[&<>"']/g, (ch) => {
    switch (ch) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return ch;
    }
  });
}

if (serveStaticDist && fs.existsSync(distDir)) {
  app.use(express.static(distDir));
  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api")) return next();
    res.sendFile(path.join(distDir, "index.html"), (err) => next(err));
  });
} else if (serveStaticDist && !fs.existsSync(distDir)) {
  // eslint-disable-next-line no-console
  console.warn("[server] dist/ missing — run `npm run build` before production.");
} else if (fs.existsSync(distDir)) {
  // eslint-disable-next-line no-console
  console.warn(
    "[server] dev mode: not serving dist/ (avoids stale UI vs Vite). Use http://localhost:5173 for the app. API: /api/*",
  );
}

if (!serveStaticDist) {
  const vitePort = Number(process.env.VITE_DEV_PORT || 5173);
  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api")) return next();
    res.status(200).type("html").send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Palmerg — API server (dev)</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 40rem; margin: 2rem auto; padding: 0 1rem; line-height: 1.5; color: #0f172a; }
    code { background: #f1f5f9; padding: 0.15rem 0.35rem; border-radius: 4px; }
    a { color: hsl(221, 83%, 38%); }
  </style>
</head>
<body>
  <h1>This port is the API in development</h1>
  <p>
    The website runs on <strong>Vite</strong> at
    <a href="http://localhost:${vitePort}">http://localhost:${vitePort}</a>
    — open that URL for the Palmerg app (search, contact, etc. use <code>/api/*</code> via the Vite proxy).
  </p>
  <p>Quick check: <a href="/api/health"><code>/api/health</code></a> should return <code>${'{ ok: true }'}</code>.</p>
  <p>To serve the built site from this process: <code>npm run build</code> then <code>npm run start:dist</code> (or set <code>NODE_ENV=production</code>).</p>
</body>
</html>`);
  });
}

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

const port = Number(process.env.PORT || 5174);
const host = process.env.HOST || "0.0.0.0";
app.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.log(`[server] listening on http://${host}:${port}`);
  if (serveStaticDist && fs.existsSync(distDir)) {
    // eslint-disable-next-line no-console
    console.log(`[server] serving static from ${distDir}`);
  }
});

