import { DEFAULT_LANGUAGE } from '$lib/docs/docs'
import type { Handle } from '@sveltejs/kit'

export const handle: Handle = ({ event, resolve }) => {
	const lang = event.params.lang ?? DEFAULT_LANGUAGE
	return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', lang) })
}
