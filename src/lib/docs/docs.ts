import type { Component } from 'svelte'

const MODULES = import.meta.glob('/src/docs/**/*.md')

export const DEFAULT_LANGUAGE = 'en'
export const SUPPORTED_LANGUAGES = ['en', 'de', 'nl', 'ru', 'uk', 'zh-cn']
/** Languages served under a `/<lang>` prefix. The default language has no prefix. */
export const PREFIXED_LANGUAGES = SUPPORTED_LANGUAGES.filter(lang => lang !== DEFAULT_LANGUAGE)

type DocModule = () => Promise<{ default: Component; metadata?: Record<string, any> }>

/** Every doc page path relative to `/docs` (e.g. `nodes/cubes`) that has at least one language file. */
export const DOC_PATHS = [
	...new Set(
		Object.keys(MODULES).map(key =>
			key.replace(/^\/src\/docs\//, '').replace(/\/[^/]+\.md$/, '')
		)
	),
]

/**
 * Finds the doc module for `path` in `lang`, falling back to the default language.
 * `translated` is false when the fallback was used.
 */
export function getDocModule(path: string, lang: string) {
	const translatedModule = MODULES[`/src/docs/${path}/${lang}.md`] as DocModule | undefined
	if (translatedModule) return { load: translatedModule, translated: true }

	const fallback = MODULES[`/src/docs/${path}/${DEFAULT_LANGUAGE}.md`] as DocModule | undefined
	if (fallback) return { load: fallback, translated: false }
}

/** Prefixes a site-absolute `/docs` path with `lang`. Every other href is returned unchanged. */
export function localizeHref(href: string, lang: string | undefined): string {
	if (!lang || lang === DEFAULT_LANGUAGE || !/^\/docs(?=[/#?]|$)/.test(href)) return href
	return `/${lang}${href}`
}

/** Removes a leading `/<lang>` prefix and any trailing slash from a pathname. */
export function stripLanguage(pathname: string, lang: string | undefined): string {
	let path = pathname
	if (lang && lang !== DEFAULT_LANGUAGE && path.startsWith(`/${lang}/`)) {
		path = path.slice(lang.length + 1)
	}
	if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1)
	return path
}

/** The name of `lang` written in `inLang`, e.g. `Deutsch` for `de` by default, or `German` in `en`. */
export function getLanguageName(lang: string, inLang = lang): string {
	const name = new Intl.DisplayNames([inLang], { type: 'language' }).of(lang) ?? lang
	return name.charAt(0).toLocaleUpperCase(inLang) + name.slice(1)
}
