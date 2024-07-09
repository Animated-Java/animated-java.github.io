import { LATEST_RELEASE } from '$lib/downloadLinks'
import { redirect } from '@sveltejs/kit'

export const prerender = true

export function load() {
	throw redirect(302, LATEST_RELEASE)
}
