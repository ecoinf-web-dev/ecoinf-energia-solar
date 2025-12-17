<script setup lang="ts">
	const { reportConversion } = useGoogleAds();

	const handleCallClick = (event: Event) => {
		event.preventDefault();
		reportConversion(
			"https://api.whatsapp.com/send?phone=556196784216&text=Ol%C3%A1%2C%20quero%20economizar%20na%20minha%20conta%20de%20luz.%20%F0%9F%94%86",
		);
	};
</script>

<template>
	<section
		class="relative min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center overflow-hidden">
		<!-- Imagem de fundo profissional -->
		<div class="absolute inset-0 z-0">
			<img
				src="/img/hero.webp"
				alt="Técnico profissional instalando painéis solares"
				class="w-full h-full brightness-50 object-cover"
				loading="eager"
				fetchpriority="high" />
		</div>

		<!-- Elementos decorativos de fundo (sóis/luzes) - com menor intensidade -->
		<div class="absolute inset-0 overflow-hidden pointer-events-none z-10">
			<div
				class="absolute top-20 left-20 w-32 h-32 bg-linear-to-r from-orange-400 to-amber-400 rounded-full opacity-40 blur-xl"></div>
			<div
				class="absolute top-32 right-32 w-24 h-24 bg-linear-to-r from-yellow-400 to-orange-400 rounded-full opacity-30 blur-lg"></div>
			<div
				class="absolute bottom-40 left-1/4 w-20 h-20 bg-linear-to-r from-amber-400 to-yellow-400 rounded-full opacity-35 blur-lg"></div>
			<div
				class="absolute top-1/2 right-20 w-28 h-28 bg-linear-to-r from-orange-400 to-amber-400 rounded-full opacity-25 blur-xl"></div>
		</div>

		<!-- Conteúdo principal -->
		<div class="relative z-20 max-w-4xl mx-auto px-6 text-center pt-16">
			<h1
				class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
				Energia Solar
				<span
					class="block text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-400 font-extrabold">
					Em Brasília
				</span>
				<span class="block">
					Economize até 95%<br />
					com Energia Solar</span
				>
			</h1>

			<p
				class="text-sm md:text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed px-4">
				<span class="text-amber-400 font-semibold"
					>Reduza sua conta de luz</span
				>
				com energia solar em
				<span class="text-amber-400 font-semibold">Brasília</span>. A Ecoinf
				oferece
				<span class="text-amber-400 font-semibold">orçamento gratuito</span> e
				<span class="text-amber-400 font-semibold">personalizado</span>,
				atendimento local e instalação com
				<span class="text-amber-400 font-semibold">garantia técnica</span>. Faça
				o seu <span class="text-amber-400 font-semibold">orçamento agora</span>!
			</p>

			<!-- Call to Action -->
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<a
					href="https://api.whatsapp.com/send?phone=556196784216&amp;text=Ol%C3%A1%2C%20quero%20economizar%20na%20minha%20conta%20de%20luz.%20%F0%9F%94%86"
					class="inline-flex items-center justify-center px-6 py-4 bg-linear-to-r from-orange-500 to-amber-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
					@click="handleCallClick">
					<svg
						class="w-5 h-5 mr-2 shrink-0"
						fill="currentColor"
						viewBox="0 0 20 20">
						<path
							d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
					</svg>
					<span>Chame Agora</span>
				</a>

				<button
					onclick="window.location.href = '#placas'"
					class="inline-flex items-center px-6 py-4 border-2 border-amber-400 text-amber-400 font-medium rounded-lg hover:bg-amber-400 hover:text-slate-900 transition-all duration-300">
					Saiba Mais
				</button>
			</div>
		</div>

		<!-- Indicador de scroll -->
		<div
			class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
			<svg
				class="w-6 h-6 text-amber-400"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 14l-7 7m0 0l-7-7m7 7V3" />
			</svg>
		</div>
	</section>
</template>

<style scoped>
	@keyframes float {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	.animate-float {
		animation: float 3s ease-in-out infinite;
	}
</style>
