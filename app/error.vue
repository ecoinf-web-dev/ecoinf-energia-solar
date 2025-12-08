<!-- ~/error.vue -->
<script setup lang="ts">
	/* ------------ Imports ------------ */
	import type { NuxtError } from "#app";
	import { useHead } from "#imports";
	import { computed } from "vue";

	/* ------------ Strict props ------------ */
	interface ErrorPageProps {
		error: NuxtError;
	}
	const { error } = defineProps<ErrorPageProps>();

	/* ------------ State / computed ------------ */
	const statusCode = computed(() => error.statusCode ?? 500);
	const statusMsg = computed(
		() => error.statusMessage ?? "Internal Server Error",
	);

	/* ------------ SEO & meta ------------ */
	useHead({
		title: `${statusCode.value} | Algo deu errado`,
		meta: [{ name: "robots", content: "noindex" }],
	});
</script>

<template>
	<main
		class="flex min-h-screen flex-col items-center justify-center gap-6 text-center"
		role="alert"
		aria-live="assertive">
		<!-- Código / mensagem -->
		<h1 class="text-6xl font-extrabold tracking-tight">
			{{ statusCode }}
		</h1>
		<p class="text-xl text-gray-500">
			{{ statusMsg }}
		</p>

		<!-- CTA para Home -->
		<NuxtLink
			to="/"
			class="inline-flex items-center gap-2 rounded-md bg-primary-600 px-6 py-3 font-medium text-white shadow hover:bg-primary-700 focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary-500 transition">
			🏠 Voltar à Home
		</NuxtLink>
	</main>
</template>

<style scoped>
	/* Se estiver usando Tailwind, este bloco é opcional */
</style>
