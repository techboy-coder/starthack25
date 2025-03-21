import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:8000',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		},
	},
	preview: {
		allowedHosts: ["ethack.vsos.ethz.ch", "optiview.shivi.io"] // Add the new host here
	}
});
