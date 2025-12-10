<template>
	<!-- Seção CTA Final -->
	<section
		class="py-16 lg:py-24 bg-linear-to-r from-orange-400 via-orange-500 to-amber-500">
		<div class="max-w-4xl mx-auto px-6 text-center">
			<h2 class="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
				Agora Que Já Sabe Tudo
			</h2>
			<p class="text-xl lg:text-2xl text-white/90 mb-8 font-medium">
				Faça um <span class="font-bold">Orçamento</span> Sem Compromisso.
			</p>

			<a
				href="https://api.whatsapp.com/send?phone=556196784216&amp;text=Ol%C3%A1%2C%20quero%20economizar%20na%20minha%20conta%20de%20luz.%20%F0%9F%94%86"
				class="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-700 font-bold rounded-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
				@click="handleWhatsAppClick">
				<svg
					class="w-6 h-6 mr-3"
					fill="currentColor"
					viewBox="0 0 20 20">
					<path
						d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
						clip-rule="evenodd" />
				</svg>
				Quero Aproveitar
			</a>
		</div>
	</section>

	<!-- Footer Principal -->
	<footer class="bg-gray-900 text-white">
		<div class="max-w-7xl mx-auto px-6 py-16">
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
				<!-- Logo e Descrição -->
				<div class="lg:col-span-1">
					<!-- Logo Ecoinf -->
					<div class="mb-6">
						<div
							class="flex items-center justify-center space-x-3 bg-white/95 backdrop-blur-sm px-4 py-3 lg:px-6 lg:py-4 rounded-br-3xl rounded-tl-3xl shadow-md">
							<img
								src="/img/logo-final.png"
								alt="ECOINF Energia Solar Fotovoltaica"
								class="w-auto h-14"
								loading="lazy" />
						</div>
					</div>

					<p class="text-gray-300 leading-relaxed mb-6">
						Especialistas em energia solar fotovoltaica, oferecendo soluções
						sustentáveis e econômicas para residências, comércios e indústrias
						em todo o Distrito Federal. </p
					><hr />
					<p class="text-gray-300 leading-relaxed mt-6">
						<span class="text-orange-400">CNPJ</span>: 51.882.097/0001-44<br />
						<a
							class="text-orange-400 underline"
							href="./politica-privacidade.html"
							>Política de Privacidade</a
						>
					</p>

					<!-- Redes Sociais
					<div class="flex space-x-4">
						<a
							href="#"
							class="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-300">
							<svg
								class="w-5 h-5 text-white"
								fill="currentColor"
								viewBox="0 0 24 24">
								<path
									d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
							</svg>
						</a>
						<a
							href="#"
							class="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-300">
							<svg
								class="w-5 h-5 text-white"
								fill="currentColor"
								viewBox="0 0 24 24">
								<path
									d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.197-1.559-.187-.237-.318-.513-.384-.808-.065-.295-.065-.602 0-.897.131-.59.448-1.125.897-1.513.449-.387 1.017-.633 1.636-.695.619-.062 1.248.062 1.784.351.267.144.507.336.707.566.2-.23.44-.422.707-.566.536-.289 1.165-.413 1.784-.351.619.062 1.187.308 1.636.695.449.388.766.923.897 1.513.065.295.065.602 0 .897-.066.295-.197.571-.384.808-.749.948-1.9 1.559-3.197 1.559s-2.448-.611-3.197-1.559c-.187-.237-.318-.513-.384-.808-.065-.295-.065-.602 0-.897.131-.59.448-1.125.897-1.513z" />
							</svg>
						</a>
					</div>-->
				</div>

				<!-- Contato -->
				<div>
					<h3 class="text-xl font-bold mb-6 text-orange-400">Contato</h3>
					<div class="space-y-4">
						<div class="flex items-start space-x-3">
							<svg
								class="w-5 h-5 text-orange-400 mt-1 shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20">
								<path
									d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
							</svg>
							<div>
								<a
									href="tel:61996784216"
									class="text-gray-300"
									>+55 (61) 9 9678-4216</a
								>
							</div>
						</div>

						<div class="flex items-start space-x-3">
							<svg
								class="w-5 h-5 text-orange-400 mt-1 shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20">
								<path
									d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
								<path
									d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
							</svg>
							<div>
								<a
									href="mailto:energiasolar@ecoinf.com.br"
									class="text-gray-300"
									>energiasolar@ecoinf.com.br</a
								>
							</div>
						</div>

						<div class="flex items-start space-x-3">
							<svg
								class="w-5 h-5 text-orange-400 mt-1 shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
									clip-rule="evenodd" />
							</svg>
							<div>
								<p class="text-gray-300">Quadra 203 Lote 12 Sala 103</p>
								<p class="text-gray-300">Recanto das Emas, Brasília - DF</p>
							</div>
						</div>
					</div>
				</div>

				<div>
					<h3 class="text-xl font-bold mb-6 text-orange-400">Localização</h3>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1709.237169722652!2d-48.06296577938661!3d-15.903428511941707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a33f85f1e1bf7%3A0x7148680c7ba9fdd1!2sEcoinf%20Energia%20Solar!5e0!3m2!1spt-BR!2sbr!4v1748882147847!5m2!1spt-BR!2sbr"
						width="100%"
						height="auto"
						style="border: 0"
						class="rounded-lg shadow-lg"
						allowfullscreen="true"
						loading="lazy"
						title="Localização da Ecoinf Energia Solar"
						referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</div>
		</div>

		<!-- Rodapé Inferior -->
		<div class="border-t border-gray-800">
			<div class="max-w-7xl mx-auto px-6 py-6">
				<div
					class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
					<p class="text-gray-400 text-sm text-center md:text-left">
						© 2024 Ecoinf. Todos os direitos reservados.
					</p>
					<p class="text-gray-400 text-sm text-center md:text-right">
						© Desenvolvido Pela
						<span class="text-orange-400 font-semibold"
							><a href="https://ecoinf.com.br">Ecoinf</a></span
						>
					</p>
				</div>
			</div>
		</div>
	</footer>
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
			event_label: "footer_cta",
			value: 1,
		});

		// Reporta a conversão do Google Ads e redireciona
		reportConversion(whatsappUrl);
	};
</script>
