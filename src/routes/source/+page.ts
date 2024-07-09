import { redirect } from '@sveltejs/kit'

export const prerender = true

export function load() {
	throw redirect(302, 'https://github.com/Animated-Java/animated-java')
}
