<template>
	<section
		id="placas"
		class="py-16 lg:py-24 bg-linear-to-br from-slate-800 via-slate-900 to-slate-800 overflow-hidden">
		<div class="max-w-7xl mx-auto px-6">
			<div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
				<!-- Coluna do Conteúdo -->
				<div class="order-2 lg:order-1">
					<h2
						class="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
						Veja Outros
						<span
							class="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-400 font-extrabold">
							Benefícios
						</span>
						<br />em ter Energia Solar.
					</h2>

					<div class="space-y-6 mb-8">
						<p class="text-lg text-gray-300 leading-relaxed">
							Os painéis solares podem ser instalados em uma variedade de
							locais, como telhados residenciais, comerciais ou industriais,
							além de áreas rurais e terrenos não utilizados.
						</p>

						<p class="text-lg text-gray-300 leading-relaxed">
							A maioria dos painéis solares tem uma vida útil de pelo menos 25
							anos ou mais, o que significa que eles continuam a gerar energia
							por um longo período após o retorno do investimento inicial.
						</p>

						<p class="text-lg text-gray-300 leading-relaxed">
							Ao produzir sua própria eletricidade com energia solar, os
							proprietários de sistemas solares podem alcançar um certo grau de
							independência energética e ser menos afetados por flutuações nos
							preços dos combustíveis e nas políticas energéticas.
						</p>
					</div>

					<!-- Call to Action -->
					<div class="flex flex-col sm:flex-row gap-4">
						<a
							href="https://api.whatsapp.com/send?phone=556196784216&amp;text=Ol%C3%A1%2C%20quero%20economizar%20na%20minha%20conta%20de%20luz.%20%F0%9F%94%86"
							class="inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
							@click="handleWhatsAppClick">
							<svg
								class="w-5 h-5 mr-3"
								fill="currentColor"
								viewBox="0 0 24 24">
								<path
									d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
							</svg>
							Quero Aproveitar
						</a>

						<!--<a
							href="tel:+556199678-4216"
							class="inline-flex items-center justify-center px-6 py-4 border-2 border-orange-400 text-orange-400 font-medium rounded-lg hover:bg-orange-400 hover:text-slate-900 transition-all duration-300">
							<svg
								class="w-5 h-5 mr-3"
								fill="currentColor"
								viewBox="0 0 20 20">
								<path
									d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
							</svg>
							Consultar Especialista
						</a>-->
					</div>
				</div>

				<!-- Coluna dos Cards -->
				<div class="relative order-1 lg:order-2">
					<!-- Elementos decorativos de fundo -->
					<div
						class="absolute -top-8 -right-8 w-32 h-32 bg-linear-to-br from-orange-400/20 to-amber-400/20 rounded-full blur-xl"></div>
					<div
						class="absolute -bottom-8 -left-8 w-24 h-24 bg-linear-to-br from-orange-400/30 to-amber-400/30 rounded-full blur-lg"></div>

					<!-- Container dos cards -->
					<div class="relative z-10">
						<img
							src="/img/cards.webp"
							alt="Cards mostrando benefícios da energia solar: Flexibilidade de Instalação, Longa Vida Útil e Independência Energética"
							class="w-full h-auto"
							loading="lazy" />

						<!-- Efeito de brilho sutil -->
						<div
							class="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
					</div>
				</div>
			</div>
		</div>

		<!-- Elemento decorativo de fundo inferior -->
		<div
			class="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-orange-500 via-amber-500 to-orange-500 opacity-30"></div>
	</section>
</template>

<script setup lang="ts">
	const { reportConversion, trackEvent } = useGoogleAds();

	const handleWhatsAppClick = (event: Event) => {
		event.preventDefault();

		const whatsappUrl =
			"https://api.whatsapp.com/send?phone=556196784216&text=Ol%C3%A1%2C%20quero%20economizar%20na%20minha%20conta%20de%20luz.%20%F0%9F%94%86";

		// Trackeia o evento no Google Analytics
		trackEvent("whatsapp_click", {
			event_category: "engagement",
			event_label: "section_three_cta",
			value: 1,
		});

		// Reporta a conversão do Google Ads e redireciona
		reportConversion(whatsappUrl);
	};
</script>
