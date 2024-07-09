import { LEGACY_BETA } from '$lib/downloadLinks'
import { redirect } from '@sveltejs/kit'

export const prerender = true

export function load() {
	throw redirect(302, LEGACY_BETA)
}
