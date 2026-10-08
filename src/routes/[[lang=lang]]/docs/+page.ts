import { localizeHref, PREFIXED_LANGUAGES } from '$lib/docs/docs'
import { redirect } from '@sveltejs/kit'
import type { EntryGenerator, PageLoad } from './$types'

export const prerender = true

export const entries: EntryGenerator = () => [{}, ...PREFIXED_LANGUAGES.map(lang => ({ lang }))]

export const load: PageLoad = ({ params }) => {
	redirect(302, localizeHref('/docs/welcome', params.lang))
}
