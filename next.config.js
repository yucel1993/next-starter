/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// Bildgrößen, hier ist es überlegenswert, den größten Wert
		// aus der Standard Konfiguration (3840) zu verkleinern.
		// https://nextjs.org/docs/pages/api-reference/components/image#devicesizes
		deviceSizes: [640, 768, 1080, 1200, 1920, 2048, 2560],
		formats: ['image/avif', 'image/webp'],
		// https://nextjs.org/docs/app/api-reference/components/image#remotepatterns
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'burhan.webworker.berlin',
			},
		],
	},
	// https://nextjs.org/docs/app/api-reference/next-config-js/redirects
	/* 	async redirects() {
		return [

		];
	}, */
};

module.exports = nextConfig;
