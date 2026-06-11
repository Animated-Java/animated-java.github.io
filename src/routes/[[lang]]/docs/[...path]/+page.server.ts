import { SUPPORTED_LANGAUGES } from '$lib/docs/docs'
import { redirect, type ServerLoad } from '@sveltejs/kit'
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
		...SUPPORTED_LANGAUGES.map(lang => ({ lang, path })),
	])
}

export const load: ServerLoad = ({ params, url }) => {
	if (params.lang === 'en') {
		throw redirect(302, url.pathname.replace('/en', ''))
	}

	return {
		lang: params.lang,
		path: params.path,
	}
}
