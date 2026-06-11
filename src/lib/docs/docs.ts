const MODULES = import.meta.glob('/src/docs/**/*.md')

export const DEFAULT_LANGUAGE = 'en'
export const SUPPORTED_LANGAUGES = ['de', 'en', 'nl', 'ru', 'uk', 'zh-cn']

export function getDocModule(lang = 'en', path: string) {
	const normalizedLang = SUPPORTED_LANGAUGES.includes(lang) ? lang : DEFAULT_LANGUAGE
	const key = `/src/docs/${path}/${normalizedLang}.md`

	return MODULES[key] ?? MODULES[`/src/docs/${path}/${DEFAULT_LANGUAGE}.md`]
}
