import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { escapeSvelte, mdsvex } from 'mdsvex'
import { resolve } from 'path'
import rehypeSlug from 'rehype-slug'
import remarkDirective from 'remark-directive'
import remarkGfm from 'remark-gfm'
import remarkAdmonitions from './src/lib/docs/remark-admonitions.ts'
import './src/lib/prismjs/mcfunction.ts'

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [rehypeSlug, remarkAdmonitions],
			remarkPlugins: [remarkGfm, remarkDirective],
			highlight: {
				highlighter: (code, lang) => {
					const language = Prism.languages[lang] ?? Prism.languages.plaintext
					const highlighted = escapeSvelte(Prism.highlight(code, language, lang))
					return `<pre class="language-${lang}"><code>${highlighted}</code></pre>`
				},
			},
		}),
	],
	kit: {
		alias: {
			$lib: resolve('./src/lib'),
		},
		prerender: {
			handleMissingId: 'ignore',
		},
		adapter: adapter({
			pages: 'dist',
		}),
		paths: {
			relative: false,
		},
	},
}

export default config
