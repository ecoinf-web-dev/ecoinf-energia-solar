<template>
	<UApp
		:ui="{ root: 'bg-white' }"
		lang="pt-BR">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</template>

<script setup lang="ts">
	// Google tag (gtag.js)
	// Carrega os scripts apenas no cliente e após o carregamento inicial para não bloquear a renderização
	if (import.meta.client) {
		const { onLoaded, load } = useScript(
			"https://www.googletagmanager.com/gtag/js?id=AW-17545357031",
			{
				trigger: "manual",
			},
		);

		onMounted(() => {
			// Delay loading to prioritize LCP and reduce TBT
			setTimeout(() => {
				load();
			}, 2000);
		});

		onLoaded(() => {
      window.dataLayer = window.dataLayer || [];
      // eslint-disable-any
			function gtag(..._args: any[]) {
				// eslint-disable-next-line prefer-rest-params
				window.dataLayer.push(arguments);
			}
			window.gtag = gtag;
			gtag("js", new Date());
			gtag("config", "AW-17545357031");

			// Event snippet for Contato conversion page
			window.gtag_report_conversion = function (url) {
				const callback = function () {
					if (typeof url != "undefined") {
						window.location.href = url;
					}
				};
				gtag("event", "conversion", {
					send_to: "AW-17545357031/SH--CJS6zpcbEOfNo65B",
					event_callback: callback,
				});
				return false;
			};
		});
	}
</script>
