import { redirect } from '@sveltejs/kit'

export const prerender = true

export function load() {
	throw redirect(302, '/docs/introduction/what-is-animated-java')
}
