<!--────────────────────────────────────────────────────────────────────────────
	💬 Testimonials.vue — Widget de Avaliações Google
	────────────────────────────────────────────────────────────────────────────
	Descrição: Exibe o widget do Elfsight para comentários do Google
	Meu Negócio, garantindo carregamento apenas no cliente.
	----------------------------------------------------------------------------
	Estrutura:
	• Seção de título e contexto
	• Container do widget com ClientOnly
	----------------------------------------------------------------------------
	Dependências: script do Elfsight carregado via useHead para disponibilizar
	o widget durante a renderização no cliente.
	----------------------------------------------------------------------------
	────────────────────────────────────────────────────────────────────────────-->

<template>
	<section
		class="relative py-16 lg:py-24 bg-linear-to-br from-amber-50 via-orange-50/70 to-white overflow-hidden">
		<div
			class="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_45%)]"></div>
		<div class="max-w-7xl mx-auto px-6 relative">
			<div class="text-center mb-10 lg:mb-14">
				<h2
					class="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
					Avaliações Reais dos Nossos Clientes
				</h2>
				<p class="text-lg text-gray-700 max-w-3xl mx-auto">
					Feedback coletado direto do Google Meu Negócio, mantendo a confiança
					da comunidade em destaque.
				</p>
			</div>

			<div class="flex flex-col items-center gap-6 mb-8">
				<div
					class="inline-flex items-center gap-3 rounded-full bg-white shadow-lg shadow-amber-100 px-5 py-2 border border-orange-100">
					<span
						class="text-sm font-semibold uppercase tracking-wide text-orange-600">
						Google Meu Negócio
					</span>
					<span class="flex items-center gap-2 text-gray-800 font-bold text-lg">
						<span class="text-amber-500 text-xl">★</span>
						4,9/5
					</span>
					<span class="text-sm text-gray-500">Avaliações verificadas</span>
				</div>
				<p class="text-center text-gray-600 text-base max-w-3xl">
					Mantemos o widget sempre atualizado para que você veja opiniões reais
					e recentes sobre nossos serviços.
				</p>
			</div>

			<!--
--------------------------------------------------------------------------------
 💬 Seção de Avaliações — Widget Google Meu Negócio
--------------------------------------------------------------------------------
 Exibe o container do widget do Elfsight dentro de ClientOnly para evitar
 renderização no lado do servidor enquanto o script externo carrega.
-->
			<ClientOnly>
				<div
					class="relative border border-orange-100 rounded-2xl bg-white shadow-2xl shadow-amber-100/60 px-4 py-10 lg:p-14">
					<div
						:class="[widgetAppClass, 'w-full min-h-[420px]']"
						data-elfsight-app-lazy></div>
				</div>
				<template #fallback>
					<p class="text-center text-gray-600 text-base">
						Carregando avaliações do Google...
					</p>
				</template>
			</ClientOnly>
		</div>
	</section>
</template>

<script setup lang="ts">
	/**
	 * 🔌 Configuração do Widget — Injeta o script do Elfsight na página
	 */
	const widgetScriptSrc: string = "https://elfsightcdn.com/platform.js";
	const widgetScriptKey: string = "elfsight-platform-google-reviews";
	const widgetAppClass: string =
		"elfsight-app-cb1bccd4-f4fd-4fc4-8da1-e52439d7f30c";

	useHead({
		script: [
			{
				key: widgetScriptKey,
				src: widgetScriptSrc,
				async: true,
				defer: true,
			},
		],
	});
</script>
