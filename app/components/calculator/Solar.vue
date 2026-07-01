<template>
	<section
		id="calculadora"
		class="py-16 lg:py-24 bg-gray-50">
		<div class="max-w-7xl mx-auto px-6">
			<!-- Título Principal -->
			<div class="text-center mb-16">
				<h2 class="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
					Faça Agora Mesmo a sua <span class="text-orange-700">Simulação*</span
					><br />
					e Saiba quanto <span class="text-orange-700">Economizará!</span>
				</h2>
			</div>

			<!-- Container Principal - Layout Desktop/Mobile -->
			<div class="gap-8 max-w-7xl mx-auto flex justify-center">
				<!-- Formulário -->
				<div class="max-w-2xl w-full">
					<div
						class="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 transform">
						<form @submit.prevent="handleSubmit">
							<!-- Tipo de Telhado -->
							<div class="mb-10">
								<label
									for="roofType"
									class="flex items-center text-xl font-bold text-gray-800 mb-6">
									<div
										class="w-8 h-8 bg-linear-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
										<span class="text-white font-bold text-sm">1</span>
									</div>
									Qual é o tipo do seu telhado?
								</label>
								<div class="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
									<button
										v-for="option in roofTypeOptions"
										:key="option.value"
										type="button"
										:class="[
											'p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 text-center hover:shadow-lg transform hover:scale-105',
											form.roofType === option.value ?
												'border-orange-500 bg-orange-50 text-orange-700 shadow-lg scale-105'
											:	'border-gray-300 bg-white text-gray-700 hover:border-orange-300',
										]"
										@click="selectRoofType(option.value)">
										<div class="flex flex-col items-center">
											<i
												:class="[
													option.icon,
													'text-xl sm:text-2xl mb-2 text-orange-500',
												]"></i>
											<div>
												<div
													class="font-semibold text-xs sm:text-sm leading-tight">
													{{ option.label }}
												</div>
												<div
													class="text-[10px] sm:text-xs text-gray-500 leading-tight mt-0.5">
													{{ option.description }}
												</div>
											</div>
										</div>
									</button>
								</div>
							</div>

							<!-- Tipo de Estrutura (Condicional) -->
							<div
								v-if="showStructureType"
								class="mb-10">
								<label
									for="structureType"
									class="flex items-center text-xl font-bold text-gray-800 mb-6">
									<div
										class="w-8 h-8 bg-linear-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
										<span class="text-white font-bold text-sm">2</span>
									</div>
									Qual é o tipo da estrutura do telhado?
								</label>
								<div class="grid grid-cols-2 gap-3 sm:gap-4">
									<button
										v-for="option in structureTypeOptions"
										:key="option.value"
										type="button"
										:class="[
											'p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 text-center hover:shadow-lg transform hover:scale-105',
											form.structureType === option.value ?
												'border-orange-500 bg-orange-50 text-orange-700 shadow-lg scale-105'
											:	'border-gray-300 bg-white text-gray-700 hover:border-orange-300',
										]"
										@click="selectStructureType(option.value)">
										<div class="flex flex-col items-center">
											<i
												:class="[
													option.icon,
													'text-xl sm:text-2xl mb-2 text-orange-500',
												]"></i>
											<div>
												<div
													class="font-semibold text-xs sm:text-sm leading-tight">
													{{ option.label }}
												</div>
												<div
													class="text-[10px] sm:text-xs text-gray-500 leading-tight mt-0.5">
													{{ option.description }}
												</div>
											</div>
										</div>
									</button>
								</div>
							</div>

							<!-- CEP -->
							<div class="mb-10">
								<label
									for="cep"
									class="flex items-center text-xl font-bold text-gray-800 mb-6">
									<div
										class="w-8 h-8 bg-linear-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
										<span class="text-white font-bold text-sm">{{
											cepStepNumber
										}}</span>
									</div>
									Qual é o seu CEP?
								</label>
								<div class="relative group">
									<div
										class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
										<Icon
											name="i-heroicons-map-pin"
											class="w-6 h-6 text-orange-400 group-focus-within:text-orange-500 transition-colors duration-300" />
									</div>
									<input
										id="cep"
										v-model="form.cep"
										type="text"
										placeholder="Digite o CEP"
										maxlength="10"
										class="w-full pl-14 pr-12 py-5 border-2 border-gray-300 rounded-2xl focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all duration-300 text-lg font-medium shadow-inner bg-linear-to-r from-gray-50 to-white hover:from-white hover:to-gray-50 placeholder:text-gray-500 placeholder:opacity-100 placeholder:font-medium text-gray-900 caret-orange-500"
										required
										@input="onCepInput" />
									<div
										v-if="cepLoading"
										class="absolute right-4 top-1/2 transform -translate-y-1/2">
										<Icon
											name="i-heroicons-arrow-path"
											class="w-6 h-6 animate-spin text-orange-500" />
									</div>
								</div>
								<div
									v-if="locationInfo"
									class="mt-3 p-3 bg-linear-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl shadow-sm">
									<div
										class="flex items-center text-sm text-green-700 font-medium">
										<Icon
											name="i-heroicons-check-circle"
											class="w-5 h-5 mr-2 text-green-500" />
										📍 {{ locationInfo.localidade }}, {{ locationInfo.uf }}
									</div>
								</div>
								<div
									v-if="cepError"
									class="mt-3 p-3 bg-linear-to-r from-red-50 to-rose-50 border border-red-200 rounded-xl shadow-sm">
									<div
										class="flex items-center text-sm text-red-700 font-medium">
										<Icon
											name="i-heroicons-exclamation-triangle"
											class="w-5 h-5 mr-2 text-red-500" />
										{{ cepError }}
									</div>
								</div>
							</div>

							<!-- Valor da Conta -->
							<div class="mb-10">
								<label
									for="averageBill"
									class="flex items-center text-xl font-bold text-gray-800 mb-6">
									<div
										class="w-8 h-8 bg-linear-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
										<span class="text-white font-bold text-sm">{{
											billStepNumber
										}}</span>
									</div>
									Quanto é o seu gasto médio mensal com conta de luz?
								</label>
								<div class="relative group">
									<div
										class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
										<span
											class="text-orange-400 group-focus-within:text-orange-500 transition-colors duration-300 font-bold text-lg"
											>R$</span
										>
									</div>
									<input
										id="averageBill"
										v-model.number="form.averageBill"
										type="number"
										placeholder="300.00"
										step="0.01"
										min="1"
										class="w-full pl-16 pr-6 py-5 border-2 border-gray-300 rounded-2xl focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all duration-300 text-lg font-medium shadow-inner bg-linear-to-r from-gray-50 to-white hover:from-white hover:to-gray-50 placeholder:text-gray-500 placeholder:opacity-100 placeholder:font-medium text-gray-900 caret-orange-500"
										required />
									<div
										class="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
										<Icon
											name="i-heroicons-bolt"
											class="w-6 h-6 text-orange-400 group-focus-within:text-orange-500 transition-colors duration-300" />
									</div>
								</div>
								<div class="mt-3 text-sm text-gray-500 italic">
									💡 Verifique sua conta de luz dos últimos meses para um
									cálculo mais preciso
								</div>
							</div>

							<!-- Botão Calcular -->
							<button
								type="submit"
								:disabled="!isFormValid"
								class="w-full bg-linear-to-r from-orange-400 via-orange-500 to-orange-600 text-white font-bold py-6 px-10 rounded-2xl hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-2xl hover:shadow-3xl disabled:shadow-lg relative overflow-hidden group">
								<!-- Efeito de brilho -->
								<div
									class="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>

								<span class="flex items-center justify-center relative z-10">
									<Icon
										name="i-heroicons-calculator"
										class="w-6 h-6 mr-3" />
									<span class="text-xl">Calcular minha economia</span>
									<Icon
										name="i-heroicons-sparkles"
										class="w-6 h-6 ml-3" />
								</span>
							</button>
						</form>
					</div>
				</div>

				<!-- Resultados removidos: redirecionamento direto ao WhatsApp no submit -->
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	interface LocationInfo {
		cep: string;
		logradouro: string;
		complemento: string;
		bairro: string;
		localidade: string;
		uf: string;
		ibge: string;
		gia: string;
		ddd: string;
		siafi: string;
	}

	// Estado reativo
	const form = reactive({
		roofType: "",
		structureType: "",
		cep: "",
		averageBill: null as number | null,
	});

	const cepLoading = ref(false);
	const cepError = ref("");
	const locationInfo = ref<LocationInfo | null>(null);

	// WhatsApp Config
	const whatsappPhone = "556196784216";
	const { reportConversion, trackEvent } = useGoogleAds();

	// Opções do formulário
	const roofTypeOptions = [
		{
			value: "fibrocimento",
			label: "Fibrocimento",
			description: "Telhas tipo eternit",
			icon: "fa-solid fa-layer-group",
		},
		{
			value: "ceramico",
			label: "Cerâmico",
			description: "Telhas de barro/cimento",
			icon: "fa-solid fa-house-chimney",
		},
		{
			value: "metal",
			label: "Metal",
			description: "Telhas metálicas",
			icon: "fa-solid fa-warehouse",
		},
		{
			value: "laje",
			label: "Laje",
			description: "Cobertura em laje",
			icon: "fa-solid fa-building",
		},
		{
			value: "solo",
			label: "Solo",
			description: "Instalação no solo",
			icon: "fa-solid fa-seedling",
		},
		{
			value: "outro",
			label: "Outro",
			description: "Outro tipo de cobertura",
			icon: "fa-solid fa-circle-question",
		},
	];

	const structureTypeOptions = [
		{
			value: "metal",
			label: "Metal",
			description: "Estrutura metálica",
			icon: "fa-solid fa-screwdriver-wrench",
		},
		{
			value: "madeira",
			label: "Madeira",
			description: "Estrutura de madeira",
			icon: "fa-solid fa-tree",
		},
	];

	// Computed properties
	const showStructureType = computed(() => {
		return form.roofType === "fibrocimento" || form.roofType === "ceramico";
	});

	const cepStepNumber = computed(() => {
		return showStructureType.value ? "3" : "2";
	});

	const billStepNumber = computed(() => {
		return showStructureType.value ? "4" : "3";
	});

	const isFormValid = computed(() => {
		const basicValidation =
			form.roofType
			&& form.cep
			&& form.cep.length >= 8
			&& form.averageBill
			&& form.averageBill > 0;

		// Se precisar de tipo de estrutura, validar também
		if (showStructureType.value) {
			return basicValidation && form.structureType;
		}

		return basicValidation;
	});

	// Métodos auxiliares para obter labels
	const getRoofTypeLabel = (value: string) => {
		const option = roofTypeOptions.find((opt) => opt.value === value);
		return option ? option.label : value;
	};

	const getStructureTypeLabel = (value: string) => {
		const option = structureTypeOptions.find((opt) => opt.value === value);
		return option ? option.label : value;
	};

	// Métodos de seleção
	const selectRoofType = (value: string) => {
		form.roofType = value;
		// Limpar tipo de estrutura se não for mais necessário
		if (!showStructureType.value) {
			form.structureType = "";
		}
	};

	const selectStructureType = (value: string) => {
		form.structureType = value;
	};

	// Máscara do CEP
	const applyCepMask = (value: string): string => {
		const cleanValue = value.replace(/\D/g, "");
		return cleanValue.replace(/^(\d{5})(\d)/, "$1-$2");
	};

	// Handler do input do CEP
	const onCepInput = (event: Event) => {
		const target = event.target as HTMLInputElement;
		const maskedValue = applyCepMask(target.value);
		form.cep = maskedValue;
		target.value = maskedValue;

		// Buscar informações do CEP quando estiver completo
		const cleanCep = maskedValue.replace(/\D/g, "");
		if (cleanCep.length === 8) {
			fetchCepInfo(cleanCep);
		} else {
			locationInfo.value = null;
			cepError.value = "";
		}
	};

	// Buscar informações do CEP
	const fetchCepInfo = async (cep: string) => {
		cepLoading.value = true;
		cepError.value = "";
		locationInfo.value = null;

		try {
			const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
			const data = await response.json();

			if (data.erro) {
				cepError.value = "CEP não encontrado";
			} else {
				locationInfo.value = data;
			}
		} catch {
			cepError.value = "Erro ao buscar informações do CEP";
		} finally {
			cepLoading.value = false;
		}
	};

	// Formatação de moeda
	const formatCurrency = (value: string | number): string => {
		const numValue = typeof value === "string" ? parseFloat(value) : value;
		return numValue.toLocaleString("pt-BR", {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		});
	};

	// Monta a mensagem do WhatsApp com os dados preenchidos
	const buildWhatsAppMessage = () => {
		const cidadeUf =
			locationInfo.value ?
				` (${locationInfo.value.localidade}/${locationInfo.value.uf})`
			:	"";

		return `Olá! Quero minha simulação de energia solar. 🔆\n- Tipo de telhado: ${getRoofTypeLabel(
			form.roofType,
		)}\n${
			form.structureType ?
				`- Tipo de estrutura: ${getStructureTypeLabel(form.structureType)}\n`
			:	""
		}- CEP: ${form.cep}${cidadeUf}\n- Gasto médio mensal: R$ ${formatCurrency(
			form.averageBill || 0,
		)}\n\nPode me chamar por aqui? Obrigado(a)!`;
	};

	// Envia para o WhatsApp ao submeter o formulário
	const handleSubmit = () => {
		if (!isFormValid.value) return;

		const message = buildWhatsAppMessage();
		const url = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(
			message,
		)}`;

		// Analytics
		trackEvent("whatsapp_click", {
			event_category: "engagement",
			event_label: "calculator_submit",
			value: 1,
			roofType: form.roofType,
			structureType: form.structureType || null,
			cep: form.cep,
			averageBill: form.averageBill,
		});

		// Abre imediatamente em nova aba para garantir funcionamento
		if (typeof window !== "undefined") {
			window.open(url, "_blank");
		}

		// Conversão Google Ads (não bloqueia a abertura)
		reportConversion();
	};
</script>

<style scoped>
	/* Sombras customizadas */
	.shadow-3xl {
		box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
	}

	/* Efeito de borda para os cards selecionados */
	.border-3 {
		border-width: 3px;
	}

	/* Animação de pulso suave para elementos ativos */
	@keyframes gentle-pulse {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.02);
		}
	}

	.animate-gentle-pulse {
		animation: gentle-pulse 2s ease-in-out infinite;
	}
</style>
