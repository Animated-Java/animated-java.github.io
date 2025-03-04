import staticAdapter from '@sveltejs/adapter-static'
import type { Config } from '@sveltejs/kit'
import preprocess from 'svelte-preprocess'

const config: Config = {
	extensions: ['.svelte', '.md'],

	preprocess: preprocess({
		typescript: true,
	}),

	kit: {
		adapter: staticAdapter(),
		prerender: {
			entries: ['*'],
			handleMissingId: 'warn',
		},
	},
}

export default config
