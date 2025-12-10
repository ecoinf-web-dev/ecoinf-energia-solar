import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
	compatibilityDate: "2025-11-21",
	modules: [
		"@nuxt/eslint",
		"@nuxt/scripts",
		"@nuxtjs/seo",
		"@nuxt/icon",
		"@nuxt/ui",
	],

	css: ["~/assets/css/index.css"],

	site: { url: "ecoinfenergiasolar.com.br" },

	routeRules: {
		"/": { prerender: true },
		"/assets/**": {
			headers: { "cache-control": "public, max-age=31536000, immutable" },
		},
		"/_nuxt/**": {
			headers: { "cache-control": "public, max-age=31536000, immutable" },
		},
		"/img/**": {
			headers: { "cache-control": "public, max-age=31536000, immutable" },
		},
		"/img/logo-sol.webp": {
			headers: { "cache-control": "public, max-age=31536000, immutable" },
		},
	},

	app: {
		head: {
			htmlAttrs: {
				lang: "pt-BR",
			},
			title:
				"ECOINF Energia Solar Fotovoltaica – Soluções de Energia Solar em Brasília, DF",
			titleTemplate: "%s | ECOINF Energia Solar",
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{
					name: "description",
					content:
						"ECOINF oferece soluções completas em energia solar fotovoltaica em Brasília, DF. Instalação, manutenção e consultoria em sistemas de energia renovável.",
				},
				{
					name: "keywords",
					content:
						"energia solar, painéis solares, fotovoltaica, Brasília, DF, energia renovável, sustentabilidade, ECOINF",
				},
				{ name: "author", content: "ECOINF Energia Solar" },
				{ property: "og:type", content: "website" },
				{
					property: "og:title",
					content:
						"ECOINF Energia Solar Fotovoltaica – Soluções de Energia Solar em Brasília, DF",
				},
				{
					property: "og:description",
					content:
						"ECOINF oferece soluções completas em energia solar fotovoltaica em Brasília, DF. Instalação, manutenção e consultoria em sistemas de energia renovável.",
				},
				{ property: "og:site_name", content: "ECOINF Energia Solar" },
				{ name: "twitter:card", content: "summary_large_image" },
				{
					name: "twitter:title",
					content:
						"ECOINF Energia Solar Fotovoltaica – Soluções de Energia Solar em Brasília, DF",
				},
				{
					name: "twitter:description",
					content:
						"ECOINF oferece soluções completas em energia solar fotovoltaica em Brasília, DF. Instalação, manutenção e consultoria em sistemas de energia renovável.",
				},
			],
			link: [
				{
					rel: "stylesheet",
					href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
				},
			],
		},
	},

	seo: {
		meta: {
			title:
				"ECOINF Energia Solar Fotovoltaica – Soluções de Energia Solar em Brasília, DF",
			description:
				"ECOINF oferece soluções completas em energia solar fotovoltaica em Brasília, DF. Instalação, manutenção e consultoria em sistemas de energia renovável.",
			ogTitle:
				"ECOINF Energia Solar Fotovoltaica – Soluções de Energia Solar em Brasília, DF",
			ogDescription:
				"ECOINF oferece soluções completas em energia solar fotovoltaica em Brasília, DF. Instalação, manutenção e consultoria em sistemas de energia renovável.",
			twitterTitle:
				"ECOINF Energia Solar Fotovoltaica – Soluções de Energia Solar em Brasília, DF",
			twitterDescription:
				"ECOINF oferece soluções completas em energia solar fotovoltaica em Brasília, DF. Instalação, manutenção e consultoria em sistemas de energia renovável.",
		},
	},

	devtools: {
		enabled: true,
	},

	vite: {
		build: {
			cssCodeSplit: true,
			chunkSizeWarningLimit: 500,
		},
	},

	nitro: {
		compressPublicAssets: true,
		minify: true,
	},
});
