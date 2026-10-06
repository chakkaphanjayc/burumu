# Burumu site notes

## Stack

- Astro server rendering on Cloudflare Workers
- EmDash CMS for editable page content
- Cloudflare D1 binding `DB` and R2 binding `MEDIA`
- Thai is the default locale; English pages use the `/en/` prefix

## Content model

`seed/seed.json` defines the `pages` collection and the homepage blocks: hero, services, and enquiry call to action. The homepage has Thai and English entries linked through EmDash translations. Keep user-facing claims grounded in the service list the owner provided.

## Project-specific guidance

- Keep CMS content routes server-rendered; do not use `getStaticPaths()` for EmDash data.
- Preserve both locales when changing page copy or routes.
- Pass EmDash cache hints to `Astro.cache.set()` when route caching is enabled.
- Sanitize URLs from editable CTA fields with EmDash's `sanitizeHref()`.
- Public contact links come from `PUBLIC_CONTACT_EMAIL`, `PUBLIC_CONTACT_LINE_URL`, and `PUBLIC_CONTACT_PHONE` at build time. Never add sample or invented contact details.
- Read `.agents/skills/building-emdash-site/SKILL.md` before changing EmDash schema, seeds, queries, or rendering patterns.

## Commands

```sh
pnpm dev
pnpm typecheck
pnpm build
pnpm deploy
```
