import { resolve, dirname } from 'path';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { imagetools } from 'vite-imagetools';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		prerender: {
			crawl: true,
			enabled: true,
			default: true,  
			onError: 'fail'
			// entries: ['*']
		},
		vite: () => ({
			resolve: {
				alias: {
					$stores: resolve(__dirname, './src/stores'),
					$components: resolve(__dirname, './src/lib/components'),
					$data: resolve(__dirname, './src/lib/data'),
					$utils: resolve(__dirname, './src/lib/utils')
				}
			},
			plugins: [imagetools({ force: true })]
		}),
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
