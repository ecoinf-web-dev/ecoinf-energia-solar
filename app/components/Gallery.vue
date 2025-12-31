<!--────────────────────────────────────────────────────────────────────────────
  🖼️ Gallery.vue — Grade Responsiva de Projetos
  ────────────────────────────────────────────────────────────────────────────
  Descrição: Exibe a galeria em grid responsivo, apenas imagens limpas e foco
  visual, mantendo consistência com o fundo claro do site.
  ----------------------------------------------------------------------------
  Estrutura:
  • Título e descrição da seção
  • Grid responsivo de imagens
  ----------------------------------------------------------------------------
  Dependências: Nenhuma externa; utiliza utilitários de estilo para layout e
  efeitos sutis de hover.
  ----------------------------------------------------------------------------
  ────────────────────────────────────────────────────────────────────────────-->

<template>
	<section
		id="galeria"
		class="py-16 lg:py-24 bg-linear-to-br from-amber-50 via-orange-50/70 to-white">
		<div class="max-w-7xl mx-auto px-6">
			<div class="text-center mb-14">
				<h2
					class="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
					Alguns dos painéis Instalados
				</h2>
				<p class="text-xl text-gray-600 max-w-2xl mx-auto">
					Veja nossos projetos com um layout limpo e responsivo.
				</p>
			</div>

			<!--
  ---------------------------------------------------------------------------
   🧩 Grid Responsivo — Galeria Clean
  ---------------------------------------------------------------------------
   Layout em colunas (masonry-like) que preserva o aspect ratio original das
   imagens, usando breakpoints para dinamismo e hover sutil.
  -->
			<div
				class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 lg:gap-8 [column-fill:_balance]">
				<div
					v-for="(image, index) in galleryImages"
					:key="index"
					class="mb-6 break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-md shadow-amber-100/70 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
					<img
						:src="image.src"
						:alt="image.alt"
						class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
						loading="lazy" />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	/**
	 * 🖼️ Lista de Imagens — Fonte da galeria
	 */
	interface GalleryImage {
		readonly src: string;
		readonly alt: string;
	}

	const galleryImages: readonly GalleryImage[] = [
		{
			src: "/galeria/galeria1.webp",
			alt: "Instalação fotovoltaica — Projeto 1 (WEBP)",
		},
		{
			src: "/galeria/galeria1.jpeg",
			alt: "Instalação fotovoltaica — Projeto 1 (JPEG)",
		},
		{
			src: "/galeria/galeria2.webp",
			alt: "Instalação fotovoltaica — Projeto 2 (WEBP)",
		},
		{
			src: "/galeria/galeria3.webp",
			alt: "Instalação fotovoltaica — Projeto 3 (WEBP)",
		},
		{
			src: "/galeria/galeria6.webp",
			alt: "Instalação fotovoltaica — Projeto 6 (WEBP)",
		},
		{
			src: "/galeria/galeria7.webp",
			alt: "Instalação fotovoltaica — Projeto 7 (WEBP)",
		},
		{
			src: "/galeria/galeria8.webp",
			alt: "Instalação fotovoltaica — Projeto 8 (WEBP)",
		},
		{
			src: "/galeria/galeria9.webp",
			alt: "Instalação fotovoltaica — Projeto 9 (WEBP)",
		},
		{
			src: "/galeria/galeria10.jpeg",
			alt: "Instalação fotovoltaica — Projeto 10 (JPEG)",
		},
		{
			src: "/galeria/galeria11.jpeg",
			alt: "Instalação fotovoltaica — Projeto 11 (JPEG)",
		},
		{
			src: "/galeria/galeria12.jpeg",
			alt: "Instalação fotovoltaica — Projeto 12 (JPEG)",
		},
		{
			src: "/galeria/galeria13.jpeg",
			alt: "Instalação fotovoltaica — Projeto 13 (JPEG)",
		},
	];
</script>
