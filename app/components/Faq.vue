<template>
	<section
		id="faq"
		class="py-16 lg:py-24 bg-linear-to-br from-amber-50 to-orange-50">
		<div class="max-w-4xl mx-auto px-6">
			<!-- Título da Seção -->
			<div class="text-center mb-16">
				<h2
					class="text-3xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
					Ainda Tem Alguma
					<span
						class="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500 font-extrabold">
						Dúvida
					</span>
					<br />Antes de Fecharmos Negócio?
				</h2>
			</div>

			<!-- Container das Perguntas -->
			<div class="space-y-4">
				<!-- FAQ Item 1 -->
				<div
					class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
					<button
						class="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
						@click="toggleFaq(0)">
						<h3 class="text-lg lg:text-xl font-semibold text-gray-800 pr-4">
							O que são placas solares e como funcionam?
						</h3>
						<div class="shrink-0">
							<svg
								:class="openFaqs.includes(0) ? 'rotate-45' : ''"
								class="w-6 h-6 text-orange-500 transition-transform duration-300"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
							</svg>
						</div>
					</button>
					<div
						v-show="openFaqs.includes(0)"
						class="px-6 pb-6 border-t border-orange-100">
						<p class="text-gray-600 leading-relaxed pt-4">
							As placas solares, também conhecidas como painéis solares
							fotovoltaicos, são dispositivos que convertem a luz solar em
							eletricidade por meio de células fotovoltaicas feitas de materiais
							semicondutores, como o silício, que absorvem a luz solar e liberam
							elétrons, gerando corrente elétrica contínua. Um inversor converte
							essa corrente contínua em corrente alternada, que é a forma de
							eletricidade usada em residências e negócios.
						</p>
					</div>
				</div>

				<!-- FAQ Item 2 -->
				<div
					class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
					<button
						class="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
						@click="toggleFaq(1)">
						<h3 class="text-lg lg:text-xl font-semibold text-gray-800 pr-4">
							Quais são os benefícios de instalar placas solares?
						</h3>
						<div class="shrink-0">
							<svg
								:class="openFaqs.includes(1) ? 'rotate-45' : ''"
								class="w-6 h-6 text-orange-500 transition-transform duration-300"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
							</svg>
						</div>
					</button>
					<div
						v-show="openFaqs.includes(1)"
						class="px-6 pb-6 border-t border-orange-100">
						<p class="text-gray-600 leading-relaxed pt-4">
							Os principais benefícios incluem: redução significativa na conta
							de energia (até 95%), retorno financeiro do investimento,
							valorização do imóvel, contribuição para o meio ambiente,
							independência energética, vida útil longa (25+ anos), baixa
							manutenção e possibilidade de vender energia excedente de volta à
							rede elétrica.
						</p>
					</div>
				</div>

				<!-- FAQ Item 3 -->
				<div
					class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
					<button
						class="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
						@click="toggleFaq(2)">
						<h3 class="text-lg lg:text-xl font-semibold text-gray-800 pr-4">
							Quanto custa para instalar placas solares e quanto tempo leva para
							recuperar o investimento?
						</h3>
						<div class="shrink-0">
							<svg
								:class="openFaqs.includes(2) ? 'rotate-45' : ''"
								class="w-6 h-6 text-orange-500 transition-transform duration-300"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
							</svg>
						</div>
					</button>
					<div
						v-show="openFaqs.includes(2)"
						class="px-6 pb-6 border-t border-orange-100">
						<p class="text-gray-600 leading-relaxed pt-4">
							O custo de um sistema de energia solar varia conforme diversos
							fatores como tamanho do sistema, consumo energético e
							características específicas da instalação. Para entender todos os
							detalhes sobre preços e retorno do investimento, entre em contato
							conosco!
							<a
								href="https://ecoinfenergiasolar.com.br/blog/quanto-custa-um-sistema-de-energia-solar/"
								target="_blank"
								class="text-orange-500 font-medium hover:text-orange-600 transition-colors duration-200 underline">
								confira nosso guia completo sobre custos de energia solar </a
							>.
						</p>
					</div>
				</div>

				<!-- FAQ Item 4 -->
				<div
					class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
					<button
						class="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
						@click="toggleFaq(3)">
						<h3 class="text-lg lg:text-xl font-semibold text-gray-800 pr-4">
							Como escolher um sistema de energia solar adequado?
						</h3>
						<div class="shrink-0">
							<svg
								:class="openFaqs.includes(3) ? 'rotate-45' : ''"
								class="w-6 h-6 text-orange-500 transition-transform duration-300"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
							</svg>
						</div>
					</button>
					<div
						v-show="openFaqs.includes(3)"
						class="px-6 pb-6 border-t border-orange-100">
						<p class="text-gray-600 leading-relaxed pt-4">
							Para escolher o sistema ideal, analise: seu consumo energético
							mensal, área disponível para instalação, orçamento disponível,
							qualidade dos equipamentos, experiência da empresa instaladora,
							garantias oferecidas e certificações dos produtos. A Ecoinf
							oferece consultoria gratuita para dimensionar o sistema perfeito
							para você.
						</p>
					</div>
				</div>
			</div>

			<!-- Call to Action Final -->
			<div class="text-center mt-12">
				<p class="text-lg text-gray-600 mb-6">
					Ainda tem dúvidas? Fale com nossos especialistas!
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a
						onclick="
							return gtag_report_conversion(
								'https://api.whatsapp.com/send?phone=556196784216&amp;text=Ol%C3%A1%2C%20quero%20economizar%20na%20minha%20conta%20de%20luz.%20%F0%9F%94%86',
							);
						"
						href="https://api.whatsapp.com/send?phone=556196784216&amp;text=Ol%C3%A1%2C%20quero%20economizar%20na%20minha%20conta%20de%20luz.%20%F0%9F%94%86"
						class="inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
						<svg
							class="w-5 h-5 mr-3"
							fill="currentColor"
							viewBox="0 0 20 20">
							<path
								d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
						</svg>
						Chame Agora +55 (61) 9 9678-4216
					</a>

					<!--<button
						class="inline-flex items-center justify-center px-6 py-4 border-2 border-orange-500 text-orange-500 font-medium rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
						<svg
							class="w-5 h-5 mr-3"
							fill="currentColor"
							viewBox="0 0 20 20">
							<path
								d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
								clip-rule="evenodd" />
						</svg>
						Solicitar Orçamento
					</button>-->
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { ref } from "vue";

	const openFaqs = ref<number[]>([0]); // Primeiro item aberto por padrão

	const toggleFaq = (index: number) => {
		const faqIndex = openFaqs.value.indexOf(index);
		if (faqIndex > -1) {
			openFaqs.value.splice(faqIndex, 1);
		} else {
			openFaqs.value.push(index);
		}
	};
</script>
