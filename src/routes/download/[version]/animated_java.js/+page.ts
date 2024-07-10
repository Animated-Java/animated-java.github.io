import { redirect } from '@sveltejs/kit'

const LATEST_RELEASE =
	'https://github.com/Animated-Java/animated-java/releases/latest/download/animated_java.js'
const SPECIFIC_VERSION =
	'https://github.com/Animated-Java/animated-java/releases/download/{VERSION}/animated_java.js'

export const prerender = true

export function entries() {
	return [{ version: 'latest' }, { version: 'legacy-beta' }, { version: 'legacy-armorstands' }]
}

export function load({ params }) {
	console.log(params.version)
	if (params.version === 'latest') {
		throw redirect(302, LATEST_RELEASE)
	} else {
		throw redirect(302, SPECIFIC_VERSION.replace('{VERSION}', params.version))
	}
}
