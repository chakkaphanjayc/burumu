import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { d1, r2 } from "@emdash-cms/cloudflare";
import { defineConfig } from "astro/config";
import emdash from "emdash/astro";

export default defineConfig({
	output: "server",
	adapter: cloudflare({ imageService: "passthrough", imagesBindingName: false }),
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	i18n: {
		defaultLocale: "th",
		locales: ["th", "en"],
		fallback: {
			en: "th",
		},
	},
	integrations: [
		react(),
		emdash({
			database: d1({ binding: "DB", session: "auto" }),
			storage: r2({ binding: "MEDIA" }),
			fonts: false,
		}),
	],
	devToolbar: { enabled: false },
});
