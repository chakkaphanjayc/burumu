# Burumu

Thai-first bilingual service website for Burumu, built with [EmDash CMS](https://emdashcms.com/) on Astro and deployed as a Cloudflare Worker.

## Services on the site

- Odoo ERP installation, migration, and training
- Marketing analysis
- Graphic design, SEO, and social content
- Game development for Unity and the web

Thai is the default language at `/`. English is available at `/en/`. Homepage copy and service cards are editable in EmDash at `/_emdash/admin`.

If no EmDash homepage entry exists yet, the site renders the same bilingual service blocks as a public fallback. During the first owner setup, choose the starter content option to add the editable homepage entries.

## Local development

```sh
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321). EmDash initializes the local D1 database and applies the bundled seed when the site first starts. The admin interface is at [http://localhost:4321/_emdash/admin](http://localhost:4321/_emdash/admin).

Add one or more enquiry destinations to `.env` before building:

```sh
PUBLIC_CONTACT_EMAIL=chakkaphan@burumu.net
PUBLIC_CONTACT_LINE_URL=https://line.me/R/ti/p/your-account
PUBLIC_CONTACT_PHONE=0612801715
```

These values are public contact details embedded in the rendered site. Copy `.env.example` to `.env` and fill only the channels Burumu uses. If none are set, the Contact page shows that contact details still need configuration.

## Cloudflare deployment

The Worker is named `burumu-web`. Wrangler provisions the D1 database `burumu-web-db` and R2 bucket `burumu-web-media` from `wrangler.jsonc` on first deployment.

```sh
pnpm exec wrangler login
pnpm typecheck
pnpm build
pnpm deploy
```

After deployment, open `https://burumu-web.chakkaphan-pocki.workers.dev/_emdash/admin` to finish the EmDash owner setup and create the first admin passkey. Choose the starter content option to add the editable bilingual homepage entries. Complete passkey setup on the final public hostname. Set the contact details before the production build so the public enquiry links are included.

## Useful commands

- `pnpm typecheck` — Astro and TypeScript diagnostics
- `pnpm build` — production Cloudflare Worker bundle
- `pnpm deploy` — build and publish to Cloudflare Workers
