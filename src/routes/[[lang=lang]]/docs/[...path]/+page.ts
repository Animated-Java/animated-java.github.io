import { DEFAULT_LANGUAGE, DOC_PATHS, getDocModule, PREFIXED_LANGUAGES } from '$lib/docs/docs'
import { error } from '@sveltejs/kit'
import type { EntryGenerator, PageLoad } from './$types'

export const prerender = true

export const entries: EntryGenerator = () =>
	DOC_PATHS.flatMap(path => [{ path }, ...PREFIXED_LANGUAGES.map(lang => ({ lang, path }))])

export const load: PageLoad = async ({ params }) => {
	const lang = params.lang ?? DEFAULT_LANGUAGE
	const doc = getDocModule(params.path, lang)

	if (!doc) error(404, 'Documentation not found')

	const { default: component, metadata } = await doc.load()

	return {
		component,
		metadata,
		lang,
		translated: doc.translated || lang === DEFAULT_LANGUAGE,
	}
}
