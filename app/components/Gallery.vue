<template>
	<section
		id="galeria"
		class="py-16 lg:py-24 bg-linear-to-br from-amber-50 to-orange-50">
		<div class="max-w-7xl mx-auto px-6">
			<!-- Título da Seção -->
			<div class="text-center mb-16">
				<h2 class="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
					Alguns dos painéis
					<span
						class="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500 font-extrabold">
						Instalados
					</span>
					Pela Ecoinf.
				</h2>
				<p class="text-xl text-gray-600 max-w-2xl mx-auto">
					Confira alguns dos nossos projetos realizados com excelência e
					qualidade.
				</p>
			</div>

			<!-- Container da Galeria -->
			<div class="relative group/gallery">
				<!-- Botão de navegação esquerda -->
				<button
					class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 opacity-0 group-hover/gallery:opacity-100 focus:opacity-100"
					aria-label="Anterior"
					@click="scrollLeft">
					<svg
						class="w-6 h-6 text-gray-700"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7" />
					</svg>
				</button>

				<!-- Botão de navegação direita -->
				<button
					class="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 opacity-0 group-hover/gallery:opacity-100 focus:opacity-100"
					aria-label="Próximo"
					@click="scrollRight">
					<svg
						class="w-6 h-6 text-gray-700"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7" />
					</svg>
				</button>

				<!-- Container scrollável da galeria -->
				<div
					ref="galleryContainer"
					class="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-8 px-4"
					style="scrollbar-width: none; -ms-overflow-style: none">
					<!-- Imagens da galeria -->
					<div
						v-for="(image, index) in galleryImages"
						:key="index"
						class="shrink-0 group cursor-pointer relative"
						@click="openModal(index)">
						<div
							class="relative w-72 h-56 md:w-80 md:h-60 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
							<NuxtImg
								:src="image.src"
								:alt="image.alt"
								class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
								loading="lazy"
								format="webp" />
							<!-- Overlay com efeito hover -->
							<div
								class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
								<div
									class="bg-white/20 backdrop-blur-md rounded-full p-3 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
									<svg
										class="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
									</svg>
								</div>
							</div>
						</div>
						<div class="mt-3 px-1">
							<h3 class="font-semibold text-gray-800 text-lg truncate">
								{{ image.title }}
							</h3>
							<p class="text-sm text-gray-500 truncate">
								{{ image.description }}
							</p>
						</div>
					</div>
				</div>

				<!-- Indicadores de progresso -->
				<div class="flex justify-center mt-4 gap-0">
					<button
						v-for="(_, index) in Math.ceil(galleryImages.length / 3)"
						:key="index"
						class="p-3 focus:outline-none group"
						:aria-label="'Ir para slide ' + (index + 1)"
						@click="scrollToSlide(index)">
						<span
							class="block h-1.5 rounded-full transition-all duration-300"
							:class="
								currentSlide === index ? 'bg-orange-500 w-8' : (
									'bg-gray-300 w-2 group-hover:bg-orange-300'
								)
							"></span>
					</button>
				</div>
			</div>
		</div>

		<!-- Modal para visualização ampliada (Lightbox) -->
		<Transition
			enter-active-class="transition duration-300 ease-out"
			enter-from-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="transition duration-200 ease-in"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0">
			<div
				v-if="modalOpen"
				ref="modalRef"
				class="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
				tabindex="0"
				@click.self="closeModal"
				@keydown.esc="closeModal">
				<!-- Botão fechar -->
				<button
					class="absolute top-4 right-4 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all duration-300"
					aria-label="Fechar"
					@click="closeModal">
					<svg
						class="w-8 h-8"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>

				<!-- Navegação Esquerda -->
				<button
					class="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300 hidden md:block"
					aria-label="Imagem Anterior"
					@click.stop="prevImage">
					<svg
						class="w-8 h-8"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7" />
					</svg>
				</button>

				<!-- Navegação Direita -->
				<button
					class="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300 hidden md:block"
					aria-label="Próxima Imagem"
					@click.stop="nextImage">
					<svg
						class="w-8 h-8"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7" />
					</svg>
				</button>

				<!-- Container da Imagem -->
				<div
					class="relative max-w-6xl max-h-[85vh] w-full flex flex-col items-center"
					@touchstart="touchStart"
					@touchend="touchEnd">
					<Transition
						mode="out-in"
						enter-active-class="transition duration-300 ease-out"
						enter-from-class="opacity-0 scale-95"
						enter-to-class="opacity-100 scale-100"
						leave-active-class="transition duration-200 ease-in"
						leave-from-class="opacity-100 scale-100"
						leave-to-class="opacity-0 scale-95">
						<div
							:key="selectedImage"
							class="relative w-full h-full flex flex-col items-center justify-center">
							<NuxtImg
								:src="galleryImages[selectedImage]?.src"
								:alt="galleryImages[selectedImage]?.alt"
								class="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
								format="webp"
								quality="90" />

							<!-- Legenda -->
							<div class="mt-4 text-center">
								<h3 class="text-white text-xl font-bold">
									{{ galleryImages[selectedImage]?.title }}
								</h3>
								<p class="text-gray-300 text-sm mt-1">
									{{ galleryImages[selectedImage]?.description }}
								</p>
								<p class="text-gray-500 text-xs mt-2">
									{{ selectedImage + 1 }} / {{ galleryImages.length }}
								</p>
							</div>
						</div>
					</Transition>
				</div>
			</div>
		</Transition>
	</section>
</template>

<script setup lang="ts">
	import { onMounted, onUnmounted, ref } from "vue";

	const galleryContainer = ref<HTMLElement>();
	const modalRef = ref<HTMLElement>();
	const modalOpen = ref(false);
	const selectedImage = ref(0);
	const currentSlide = ref(0);

	// Touch handling
	const touchStartX = ref(0);
	const touchEndX = ref(0);

	const galleryImages = [
		{
			src: "/galeria/galeria1.webp",
			alt: "Instalação de painéis solares - Projeto 1",
			title: "Projeto Residencial 1",
			description: "Instalação completa de painéis solares",
		},
		{
			src: "/galeria/galeria3.webp",
			alt: "Instalação de painéis solares - Projeto 3",
			title: "Projeto Residencial 3",
			description: "Instalação completa de painéis solares",
		},
		{
			src: "/galeria/galeria4.webp",
			alt: "Instalação de painéis solares - Projeto 4",
			title: "Projeto Residencial 4",
			description: "Instalação completa de painéis solares",
		},
		{
			src: "/galeria/galeria5.webp",
			alt: "Instalação de painéis solares - Projeto 5",
			title: "Projeto Residencial 5",
			description: "Instalação completa de painéis solares",
		},
		{
			src: "/galeria/galeria6.webp",
			alt: "Instalação de painéis solares - Projeto 6",
			title: "Projeto Residencial 6",
			description: "Instalação completa de painéis solares",
		},
		{
			src: "/galeria/galeria7.webp",
			alt: "Instalação de painéis solares - Projeto 7",
			title: "Projeto Residencial 7",
			description: "Instalação completa de painéis solares",
		},
		{
			src: "/galeria/galeria9.webp",
			alt: "Instalação de painéis solares - Projeto 9",
			title: "Projeto Residencial 9",
			description: "Instalação completa de painéis solares",
		},
		{
			src: "/galeria/galeria10.webp",
			alt: "Instalação de painéis solares - Projeto 10",
			title: "Projeto Residencial 10",
			description: "Instalação completa de painéis solares",
		},
		{
			src: "/galeria/galeria12.webp",
			alt: "Instalação de painéis solares - Projeto 12",
			title: "Projeto Residencial 12",
			description: "Instalação completa de painéis solares",
		},
		{
			src: "/galeria/galeria13.webp",
			alt: "Instalação de painéis solares - Projeto 13",
			title: "Projeto Residencial 13",
			description: "Instalação completa de painéis solares",
		},
		{
			src: "/galeria/galeria14.webp",
			alt: "Instalação de painéis solares - Projeto 14",
			title: "Projeto Residencial 14",
			description: "Instalação completa de painéis solares",
		},
	];

	const scrollLeft = () => {
		if (galleryContainer.value) {
			galleryContainer.value.scrollBy({ left: -320, behavior: "smooth" });
			updateCurrentSlide();
		}
	};

	const scrollRight = () => {
		if (galleryContainer.value) {
			galleryContainer.value.scrollBy({ left: 320, behavior: "smooth" });
			updateCurrentSlide();
		}
	};

	const scrollToSlide = (index: number) => {
		if (galleryContainer.value) {
			const itemWidth = 320; // Largura aproximada do item + gap
			const scrollPos = index * itemWidth * 3;
			galleryContainer.value.scrollTo({ left: scrollPos, behavior: "smooth" });
		}
	};

	const updateCurrentSlide = () => {
		if (galleryContainer.value) {
			const scrollLeft = galleryContainer.value.scrollLeft;
			const itemWidth = 320;
			currentSlide.value = Math.floor(scrollLeft / (itemWidth * 3));
		}
	};

	const openModal = (index: number) => {
		selectedImage.value = index;
		modalOpen.value = true;
		document.body.style.overflow = "hidden"; // Previne scroll do body
		// Focar no modal para capturar eventos de teclado
		setTimeout(() => {
			modalRef.value?.focus();
		}, 100);
	};

	const closeModal = () => {
		modalOpen.value = false;
		document.body.style.overflow = ""; // Restaura scroll do body
	};

	const nextImage = () => {
		selectedImage.value = (selectedImage.value + 1) % galleryImages.length;
	};

	const prevImage = () => {
		selectedImage.value =
			(selectedImage.value - 1 + galleryImages.length) % galleryImages.length;
	};

	// Keyboard navigation
	const handleKeydown = (e: KeyboardEvent) => {
		if (!modalOpen.value) return;

		if (e.key === "ArrowRight") nextImage();
		if (e.key === "ArrowLeft") prevImage();
		if (e.key === "Escape") closeModal();
	};

	// Touch navigation
	const touchStart = (e: TouchEvent) => {
		touchStartX.value = e.changedTouches[0].screenX;
	};

	const touchEnd = (e: TouchEvent) => {
		touchEndX.value = e.changedTouches[0].screenX;
		handleSwipe();
	};

	const handleSwipe = () => {
		const threshold = 50;
		if (touchStartX.value - touchEndX.value > threshold) {
			nextImage(); // Swipe Left -> Next
		}
		if (touchEndX.value - touchStartX.value > threshold) {
			prevImage(); // Swipe Right -> Prev
		}
	};

	onMounted(() => {
		if (galleryContainer.value) {
			galleryContainer.value.addEventListener("scroll", updateCurrentSlide);
		}
		window.addEventListener("keydown", handleKeydown);
	});

	onUnmounted(() => {
		if (galleryContainer.value) {
			galleryContainer.value.removeEventListener("scroll", updateCurrentSlide);
		}
		window.removeEventListener("keydown", handleKeydown);
	});
</script>

<style scoped>
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
</style>
