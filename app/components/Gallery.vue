<!--────────────────────────────────────────────────────────────────────────────
  🖼️ Gallery.vue — Grade Responsiva de Projetos
  ────────────────────────────────────────────────────────────────────────────
  Descrição: Exibe a galeria em grid responsivo, apenas imagens limpas e foco
  visual, mantendo consistência com o fundo claro do site.
  ----------------------------------------------------------------------------
  Estrutura:
  • Título e descrição da seção
  • Grid responsivo (masonry-like) com controle de colapso no mobile
  ----------------------------------------------------------------------------
  Dependências: Nenhuma externa; utiliza utilitários de estilo para layout e
  efeitos sutis de hover.
  ----------------------------------------------------------------------------
  ───────────────────────────────────────────────────────────────────────────-->

<template>
	<section
		id="galeria"
		class="py-16 lg:py-24 bg-linear-to-br from-amber-50 via-orange-50/70 to-white">
		<div class="max-w-7xl mx-auto px-6">
			<div class="text-center mb-14">
				<h2
					class="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
					Nossos Últimos <span class="text-orange-500">Projetos</span>
				</h2>
				<p class="text-xl text-gray-600 max-w-2xl mx-auto">
					Confira instalações que geram resultados.
				</p>
			</div>

			<!--
  ---------------------------------------------------------------------------
   🧩 Grid Responsivo — Galeria Clean
  ---------------------------------------------------------------------------
   Layout em colunas (masonry-like) que preserva o aspect ratio original das
   imagens. Em telas estreitas, aplicamos colapso com fade e botão de mostrar
   tudo para evitar scroll excessivo.
  -->
			<div class="relative">
				<div :class="[gridBaseClass, mobileCollapseClass]">
					<div
						v-for="(image, index) in galleryImages"
						:key="index"
						class="group mb-6 break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-md shadow-amber-100/70 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
						<img
							:src="image.src"
							:alt="image.alt"
							class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
							loading="lazy" />
					</div>
				</div>
				<div
					v-if="shouldShowFade"
					class="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-amber-50 via-amber-50/80 to-transparent"></div>
			</div>

			<div class="mt-6 flex justify-center">
				<button
					type="button"
					class="px-5 py-2.5 rounded-full bg-orange-500 text-white text-sm font-semibold shadow-lg shadow-orange-200/70 hover:bg-orange-600 active:translate-y-[1px] transition-all duration-200"
					@click="toggleShowAll">
					{{ showAll ? "Mostrar menos" : "Mostrar tudo" }}
				</button>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { computed, ref } from "vue";

	/**
	 * 🖼️ Lista de Imagens — Fonte da galeria
	 */
	interface GalleryImage {
		readonly src: string;
		readonly alt: string;
	}

	const gridBaseClass: string =
		"columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 lg:gap-8 [column-fill:_balance]";

	/**
	 * 📱 Controle de colapso — Otimiza altura no mobile com fade e botão
	 */
	const showAll = ref<boolean>(false);

	const mobileCollapseClass = computed<string>(() =>
		showAll.value ?
			"sm:columns-2 lg:columns-3 xl:columns-4"
		:	"max-h-[1600px] sm:max-h-[2000px] lg:max-h-[2400px] xl:max-h-[2600px] overflow-hidden",
	);

	const shouldShowFade = computed<boolean>(() => !showAll.value);

	const toggleShowAll = (): void => {
		showAll.value = !showAll.value;
	};

	const galleryImages: readonly GalleryImage[] = [
		{
			src: "/galeria/galeria1.webp",
			alt: "Instalação fotovoltaica — Projeto 1",
		},
		{
			src: "/galeria/galeria3.webp",
			alt: "Instalação fotovoltaica — Projeto 3",
		},
		{
			src: "/galeria/galeria4.webp",
			alt: "Instalação fotovoltaica — Projeto 4",
		},
		{
			src: "/galeria/galeria5.webp",
			alt: "Instalação fotovoltaica — Projeto 5",
		},
		{
			src: "/galeria/galeria6.webp",
			alt: "Instalação fotovoltaica — Projeto 6",
		},
		{
			src: "/galeria/galeria7.webp",
			alt: "Instalação fotovoltaica — Projeto 7",
		},
		{
			src: "/galeria/galeria8.webp",
			alt: "Instalação fotovoltaica — Projeto 8",
		},
		{
			src: "/galeria/galeria9.webp",
			alt: "Instalação fotovoltaica — Projeto 9",
		},
		{
			src: "/galeria/galeria10.webp",
			alt: "Instalação fotovoltaica — Projeto 10",
		},
		{
			src: "/galeria/galeria11.webp",
			alt: "Instalação fotovoltaica — Projeto 11",
		},
		{
			src: "/galeria/galeria12.webp",
			alt: "Instalação fotovoltaica — Projeto 12",
		},
		{
			src: "/galeria/galeria13.webp",
			alt: "Instalação fotovoltaica — Projeto 13",
		},
		{
			src: "/galeria/galeria14.webp",
			alt: "Instalação fotovoltaica — Projeto 14",
		},
		{
			src: "/galeria/galeria15.webp",
			alt: "Instalação fotovoltaica — Projeto 15",
		},
		{
			src: "/galeria/galeria16.webp",
			alt: "Instalação fotovoltaica — Projeto 16",
		},
		{
			src: "/galeria/galeria17.webp",
			alt: "Instalação fotovoltaica — Projeto 17",
		},
		{
			src: "/galeria/galeria18.webp",
			alt: "Instalação fotovoltaica — Projeto 18",
		},
		{
			src: "/galeria/galeria19.webp",
			alt: "Instalação fotovoltaica — Projeto 19",
		},
		{
			src: "/galeria/galeria20.webp",
			alt: "Instalação fotovoltaica — Projeto 20",
		},
		{
			src: "/galeria/galeria21.webp",
			alt: "Instalação fotovoltaica — Projeto 21",
		},
	];
</script>
