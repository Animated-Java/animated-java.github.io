import { DEFAULT_LANGUAGE, getDocModule, SUPPORTED_LANGUAGES } from '$lib/docs/docs'
import { error } from '@sveltejs/kit'
import type { PageLoad } from '../$types'
import type { EntryGenerator } from './$types'

export const prerender = true

const MODULES = import.meta.glob('/src/docs/**/*.md')

export const entries: EntryGenerator = () => {
	const paths = [
		...new Set(
			Object.keys(MODULES).map(path =>
				path.replace(/^\/src\/docs\//, '').replace(/\/[^/]+\.md$/, '')
			)
		),
	]

	return paths.flatMap(path => [
		{ lang: undefined, path },
		...SUPPORTED_LANGUAGES.map(lang => ({ lang, path })),
	])
}

export const load: PageLoad = async ({ params }) => {
	const lang = params.lang ?? DEFAULT_LANGUAGE
	const mod = getDocModule(lang, params.path)

	if (!mod) throw error(404, 'Documentation not found')

	const { default: component, metadata } = await mod()

	return {
		component,
		metadata,
		lang,
	}
}
