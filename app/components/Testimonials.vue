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
	───────────────────────────────────────────────────────────────────────────-->

<template>
	<section
		class="relative py-16 lg:py-24 bg-linear-to-br from-amber-50 via-orange-50/70 to-white overflow-hidden">
		<div
			class="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_45%)]"></div>
		<div class="max-w-7xl mx-auto px-6 relative">
			<div class="text-center mb-10 lg:mb-14">
				<h2
					class="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
					<span class="text-orange-500">Avaliações Reais</span> dos Nossos
					Clientes
				</h2>
				<p class="text-lg text-gray-700 max-w-3xl mx-auto">
					Feedback direto do Google Meu Negócio, mantendo a confiança da
					comunidade em destaque.
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
