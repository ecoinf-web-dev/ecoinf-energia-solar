<template>
	<header
		class="fixed top-0 left-0 right-0 z-50 flex items-center bg-slate-900/70 backdrop-blur-xl shadow-lg border-b border-white/10 transition-all duration-300 ease-in-out">
		<!-- Logo Container com fundo claro -->
		<div
			class="shrink-0 bg-white/95 backdrop-blur-sm px-4 py-3 lg:px-6 lg:py-4 rounded-br-3xl shadow-md">
			<img
				src="/img/logo-final.png"
				alt="ECOINF Energia Solar Fotovoltaica"
				class="w-auto h-14"
				loading="lazy" />
		</div>

		<!-- Área de navegação -->
		<div
			class="flex flex-1 items-center justify-center px-4 py-3 lg:px-8 lg:py-4 relative">
			<!-- Mobile Menu Button -->
			<button
				class="relative z-10 p-2 text-yellow-400 transition-colors duration-300 md:hidden"
				:aria-expanded="isMobileMenuOpen"
				aria-label="Toggle navigation menu"
				@click="toggleMobileMenu">
				<span class="sr-only">Menu</span>
				<div
					class="w-6 h-5 relative"
					:class="{ 'hamburger--active': isMobileMenuOpen }">
					<span
						class="block absolute h-0.5 text-2xl w-full bg-current transition-all duration-300 ease-in-out origin-left top-0"
						:class="{ 'rotate-45': isMobileMenuOpen }"></span>
					<span
						class="block absolute h-0.5 w-full bg-current transition-all duration-300 ease-in-out origin-left top-2"
						:class="{ 'opacity-0': isMobileMenuOpen }"></span>
					<span
						class="block absolute h-0.5 w-full bg-current transition-all duration-300 ease-in-out origin-left top-4"
						:class="{ '-rotate-45': isMobileMenuOpen }"></span>
				</div>
			</button>

			<!-- Navigation -->
			<nav
				class="absolute md:relative -translate-x-24 top-full md:top-auto left-0 md:left-auto w-full md:w-auto bg-gray-900 md:bg-transparent border-t border-gray-700 md:border-none transform md:transform-none -translate-y-full md:translate-y-0 opacity-0 md:opacity-100 invisible md:visible transition-all duration-300 ease-in-out"
				:class="{ 'translate-y-0! opacity-100! visible!': isMobileMenuOpen }">
				<ul
					class="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-8 p-4 md:p-0 list-none">
					<li class="w-full md:w-auto">
						<a
							href="#"
							class="block w-full md:w-auto py-3 px-4 md:py-2 md:px-0 text-yellow-400 font-medium text-sm lg:text-xl transition-all duration-300 border-l-4 border-transparent md:border-none hover:border-yellow-400 md:hover:border-none hover:bg-gray-800 md:hover:bg-transparent hover:md:scale-105"
							@click="closeMobileMenu">
							Home
						</a>
					</li>
					<li class="w-full md:w-auto">
						<a
							href="#placas"
							class="block w-full md:w-auto py-3 px-4 md:py-2 md:px-0 text-yellow-400 font-medium text-sm lg:text-xl transition-all duration-300 border-l-4 border-transparent md:border-none hover:border-yellow-400 md:hover:border-none hover:bg-gray-800 md:hover:bg-transparent hover:md:scale-105"
							@click="closeMobileMenu">
							Placas Solares
						</a>
					</li>
					<li class="w-full md:w-auto">
						<a
							href="#galeria"
							class="block w-full md:w-auto py-3 px-4 md:py-2 md:px-0 text-yellow-400 font-medium text-sm lg:text-xl transition-all duration-300 border-l-4 border-transparent md:border-none hover:border-yellow-400 md:hover:border-none hover:bg-gray-800 md:hover:bg-transparent hover:md:scale-105"
							@click="closeMobileMenu">
							Galeria
						</a>
					</li>
					<li class="w-full md:w-auto">
						<a
							href="#faq"
							class="block w-full md:w-auto py-3 px-4 md:py-2 md:px-0 text-yellow-400 font-medium text-sm lg:text-xl transition-all duration-300 border-l-4 border-transparent md:border-none hover:border-yellow-400 md:hover:border-none hover:bg-gray-800 md:hover:bg-transparent hover:md:scale-105"
							@click="closeMobileMenu">
							FAQ
						</a>
					</li>
					<!--li class="w-full md:w-auto">
						<a
							href="https://ecoinfenergiasolar.com.br/blog/"
							class="block w-full md:w-auto py-3 px-4 md:py-2 md:px-0 text-yellow-400 font-medium text-sm lg:text-xl transition-all duration-300 border-l-4 border-transparent md:border-none hover:border-yellow-400 md:hover:border-none hover:bg-gray-800 md:hover:bg-transparent hover:md:scale-105"
							@click="closeMobileMenu">
							Blog
						</a>
					</li>-->
				</ul>
			</nav>

			<!-- CTA Button -->
			<div class="absolute right-4 lg:right-8 shrink-0">
				<button
					class="bg-linear-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-xl rounded-lg hover:from-yellow-400 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900 transform transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 active:scale-95"
					@click="handleQuoteRequest">
					<span class="hidden sm:inline">Fazer Orçamento</span>
					<span class="sm:hidden">Orçamento</span>
				</button>
			</div>
		</div>
	</header>
</template>

<script lang="ts" setup>
	import { onMounted, onUnmounted, ref } from "vue";

	// 📱 Mobile Menu State
	const isMobileMenuOpen = ref(false);

	// Google Ads composable
	const { reportConversion, trackEvent } = useGoogleAds();

	// 🎯 Methods
	const toggleMobileMenu = () => {
		isMobileMenuOpen.value = !isMobileMenuOpen.value;
	};

	const closeMobileMenu = () => {
		isMobileMenuOpen.value = false;
	};

	const handleQuoteRequest = () => {
		const whatsappUrl =
			"https://api.whatsapp.com/send?phone=556196784216&text=Ol%C3%A1%2C%20quero%20fazer%20um%20or%C3%A7amento%20para%20energia%20solar.";

		// Trackeia o evento no Google Analytics
		trackEvent("whatsapp_click", {
			event_category: "engagement",
			event_label: "header_quote_button",
			value: 1,
		});

		// Reporta a conversão do Google Ads e redireciona
		reportConversion(whatsappUrl);
	};

	// 🔄 Close mobile menu on escape key
	const handleEscapeKey = (event: KeyboardEvent) => {
		if (event.key === "Escape") {
			closeMobileMenu();
		}
	};

	// 🎛️ Lifecycle
	onMounted(() => {
		document.addEventListener("keydown", handleEscapeKey);
	});

	onUnmounted(() => {
		document.removeEventListener("keydown", handleEscapeKey);
	});
</script>
