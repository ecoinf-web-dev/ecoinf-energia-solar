/**
 * Composable para Google Ads
 * Facilita o uso da função de conversão em componentes Vue
 */
export const useGoogleAds = () => {
	/**
	 * Reporta uma conversão do Google Ads
	 * @param url - URL para redirecionar após a conversão (opcional)
	 * @returns boolean - sempre retorna false para prevenir o comportamento padrão
	 */
	const reportConversion = (url?: string): boolean => {
		if (typeof window !== "undefined" && window.gtag_report_conversion) {
			return window.gtag_report_conversion(url);
		}

		// Fallback caso a função não esteja disponível
		if (url) {
			window.location.href = url;
		}
		return false;
	};

	/**
	 * Envia um evento personalizado para o Google Analytics
	 * @param eventName - Nome do evento
	 * @param parameters - Parâmetros adicionais do evento
	 */
	const trackEvent = (
		eventName: string,
		parameters: Record<string, any> = {},
	) => {
		if (typeof window !== "undefined" && window.gtag) {
			window.gtag("event", eventName, parameters);
		}
	};

	return {
		reportConversion,
		trackEvent,
	};
};

// Declaração de tipos para TypeScript
declare global {
	interface Window {
		gtag_report_conversion: (url?: string) => boolean;
		gtag: (...args: any[]) => void;
		dataLayer: any[];
	}
}
