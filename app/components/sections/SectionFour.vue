<template>
  <section class="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">

    <!-- Background Decorativo Sutil -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
    </div>

    <div class="max-w-6xl mx-auto px-6 relative z-10">

      <!-- Header -->
      <div class="text-center mb-20">
        <span class="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold mb-4">
          Processo Simplificado
        </span>
        <h2 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
          Seu Caminho para a <span class="text-orange-500">Energia Solar</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Transformamos a complexidade em um processo simples e transparente.
          Acompanhe cada etapa da sua jornada rumo à economia.
        </p>
      </div>

      <!-- Timeline das Fases -->
      <div class="relative">

        <!-- Linha Central (Desktop) -->
        <div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>

        <div class="space-y-12 lg:space-y-24">

          <!-- FASE 1: Planejamento -->
          <div class="relative flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 group">
            <div class="hidden lg:flex absolute left-1/2 top-0 -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-orange-100 z-10 shadow-sm group-hover:border-orange-500 transition-colors duration-300">
              <span class="text-orange-500 font-bold">1</span>
            </div>

            <div class="w-full lg:w-1/2 lg:text-right lg:pr-8 order-2 lg:order-1">
              <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div class="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-xl mb-6">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Planejamento Inicial</h3>
                <p class="text-gray-600 mb-6">Tudo começa com o entendimento da sua necessidade. Analisamos seu consumo e desenhamos a solução ideal.</p>
                <ul class="space-y-3 text-gray-600 lg:justify-end">
                  <li class="flex items-center lg:flex-row-reverse gap-3">
                    <span class="w-2 h-2 rounded-full bg-orange-400 shrink-0"></span>
                    <span>Solicitação de Orçamento</span>
                  </li>
                  <li class="flex items-center lg:flex-row-reverse gap-3">
                    <span class="w-2 h-2 rounded-full bg-orange-400 shrink-0"></span>
                    <span>Elaboração da Proposta Técnica</span>
                  </li>
                  <li class="flex items-center lg:flex-row-reverse gap-3">
                    <span class="w-2 h-2 rounded-full bg-orange-400 shrink-0"></span>
                    <span>Negociação Personalizada</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="hidden lg:block w-1/2 order-1 lg:order-2 pl-16">
              <div class="relative rounded-3xl overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src="/amarelo.webp" alt="Planejamento Inicial" class="w-full h-auto object-cover" />
              </div>
            </div>
          </div>

          <!-- FASE 2: Formalização -->
          <div class="relative flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 group">
            <div class="hidden lg:flex absolute left-1/2 top-0 -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-orange-100 z-10 shadow-sm group-hover:border-orange-500 transition-colors duration-300">
              <span class="text-orange-500 font-bold">2</span>
            </div>

            <div class="hidden lg:block w-1/2 order-1 pr-16">
              <div class="relative rounded-3xl overflow-hidden shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src="/azul.webp" alt="Validação e Burocracia" class="w-full h-auto object-cover" />
              </div>
            </div>

            <div class="w-full lg:w-1/2 lg:pl-8 order-2">
              <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-6">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Validação e Burocracia</h3>
                <p class="text-gray-600 mb-6">Cuidamos de toda a papelada e validações técnicas para garantir segurança jurídica e operacional.</p>
                <ul class="space-y-3 text-gray-600">
                  <li class="flex items-center gap-3">
                    <span class="w-2 h-2 rounded-full bg-blue-400 shrink-0"></span>
                    <span>Visita Técnica Presencial</span>
                  </li>
                  <li class="flex items-center gap-3">
                    <span class="w-2 h-2 rounded-full bg-blue-400 shrink-0"></span>
                    <span>Assinatura de Contrato</span>
                  </li>
                  <li class="flex items-center gap-3">
                    <span class="w-2 h-2 rounded-full bg-blue-400 shrink-0"></span>
                    <span>Entrada de Projeto na Concessionária</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- FASE 3: Execução -->
          <div class="relative flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 group">
            <div class="hidden lg:flex absolute left-1/2 top-0 -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-orange-100 z-10 shadow-sm group-hover:border-orange-500 transition-colors duration-300">
              <span class="text-orange-500 font-bold">3</span>
            </div>

            <div class="w-full lg:w-1/2 lg:text-right lg:pr-8 order-2 lg:order-1">
              <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div class="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-xl mb-6">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Instalação e Ativação</h3>
                <p class="text-gray-600 mb-6">Nossa equipe especializada realiza a instalação e ativação do seu sistema com máxima qualidade.</p>
                <ul class="space-y-3 text-gray-600 lg:justify-end">
                  <li class="flex items-center lg:flex-row-reverse gap-3">
                    <span class="w-2 h-2 rounded-full bg-green-400 shrink-0"></span>
                    <span>Instalação dos Painéis</span>
                  </li>
                  <li class="flex items-center lg:flex-row-reverse gap-3">
                    <span class="w-2 h-2 rounded-full bg-green-400 shrink-0"></span>
                    <span>Homologação e Conexão na Concessionária</span>
                  </li>
                  <li class="flex items-center lg:flex-row-reverse gap-3">
                    <span class="w-2 h-2 rounded-full bg-green-400 shrink-0"></span>
                    <span>Monitoramento e Suporte</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="hidden lg:block w-1/2 order-1 lg:order-2 pl-16">
              <div class="relative rounded-3xl overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src="/verde.webp" alt="Instalação e Ativação" class="w-full h-auto object-cover" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- CTA Final -->
      <div class="mt-20 text-center">
        <div class="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div class="relative z-10">

            <h3 class="text-3xl lg:text-4xl font-bold text-white mb-6">
              Pronto para começar sua economia?
            </h3>
            <p class="text-orange-50 mb-8 text-lg lg:text-xl">
              Realize seu projeto agora e pague depois: até 96x no Belcred/ConnectPag,
              sem entrada e até 120 dias para o primeiro pagamento.
            </p>

            <div class="flex flex-wrap justify-center gap-3 mb-10">
              <div class="bg-white border border-white/40 rounded-xl px-3 py-2 flex items-center hover:bg-white/-50 transition-colors">
                <img src="/visa.webp" alt="Visa" class="h-6 w-auto object-contain" />
              </div>
              <div class="bg-white border border-white/40 rounded-xl px-3 py-2 flex items-center hover:bg-white/-50 transition-colors">
                <img src="/mastercard.webp" alt="Mastercard" class="h-6 w-auto object-contain">
              </div>
              <div class="bg-white border border-white/40 rounded-xl px-3 py-2 flex items-center hover:bg-white/-50 transition-colors">
                <img src="/santander.webp" alt="Santander" class="h-6 w-auto object-contain">
              </div>
              <div class="bg-white border border-white/40 rounded-xl px-3 py-2 flex items-center hover:bg-white/-50 transition-colors">
                <img src="/bv-financeira.webp" alt="BV Financeira" class="h-6 w-auto object-contain">
              </div>
              <div class="bg-white border border-white/40 rounded-xl px-3 py-2 flex items-center hover:bg-white/-50 transition-colors">
                <img src="/connect.webp" alt="ConectePag" class="h-6 w-auto object-contain">
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-5 justify-center">
              <a href="https://api.whatsapp.com/send?phone=556196784216&text=Ol%C3%A1%2C%20quero%20fazer%20meu%20or%C3%A7amento%20para%20energia%20solar"
                class="bg-white text-orange-700 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all hover:scale-105 shadow-lg">
                Solicitar Orçamento
              </a>
              <a href="https://ecoinfenergiasolar.com.br/blog/quanto-custa-um-sistema-de-energia-solar/"
                target="_blank"
                class="bg-white/20 border border-white/40 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-all hover:scale-105 backdrop-blur-sm">
                Saiba Mais
              </a>
            </div>

          </div>

          <!-- Decorativo CTA -->
          <div class="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
          <div class="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-black/10 rounded-full blur-2xl"></div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
  // Componente simplificado, sem lógica complexa de estado
</script>

<style scoped>
  /* Adicionar estilos específicos se necessário, mas Tailwind cobre a maioria */
</style>