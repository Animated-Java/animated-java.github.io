import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		prerender: {
			entries: ['*'],
			handleMissingId: 'warn'
		}
	}
}

export default config
