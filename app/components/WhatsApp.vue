<template>
	<a
		href="https://api.whatsapp.com/send?phone=556196784216&text=Ol%C3%A1%2C%20quero%20economizar%20na%20minha%20conta%20de%20luz.%20%F0%9F%94%86"
		class="btn-whatsapp-pulse"
		aria-label="Fale conosco no WhatsApp"
		@click="handleWhatsAppClick">
		<Icon
			name="fa6-brands:whatsapp"
			class="text-white text-4xl" />
	</a>
</template>

<script setup lang="ts">
	const { reportConversion, trackEvent } = useGoogleAds();

	const handleWhatsAppClick = (event: Event) => {
		// Previne o comportamento padrão temporariamente
		event.preventDefault();

		const whatsappUrl =
			"https://api.whatsapp.com/send?phone=556196784216&text=Ol%C3%A1%2C%20quero%20economizar%20na%20minha%20conta%20de%20luz.%20%F0%9F%94%86";

		// Trackeia o evento no Google Analytics
		trackEvent("whatsapp_click", {
			event_category: "engagement",
			event_label: "floating_button",
			value: 1,
		});

		// Reporta a conversão do Google Ads e redireciona
		reportConversion(whatsappUrl);
	};
</script>

<style>
	.btn-whatsapp-pulse {
		z-index: 999;
		background: #25d366;
		color: white;
		position: fixed;
		bottom: 20px;
		right: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 70px;
		height: 70px;
		text-decoration: none;
		border-radius: 50%;
		animation-name: pulse;
		animation-duration: 1.5s;
		animation-timing-function: ease-out;
		animation-iteration-count: infinite;
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
		}
		80% {
			box-shadow: 0 0 0 14px rgba(37, 211, 102, 0);
		}
	}
</style>
