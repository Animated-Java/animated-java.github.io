import staticAdapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	preprocess: vitePreprocess({
		script: true,
	}),

	kit: {
		adapter: staticAdapter(),
		prerender: {
			handleMissingId: 'warn',
		},
	},
}

export default config
