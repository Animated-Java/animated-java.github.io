import { createKitDocsLoader } from '@svelteness/kit-docs'

export const prerender = true
export const ssr = false

export const load = createKitDocsLoader({
	sidebar: {
		'/': null,
		'/docs': '/docs',
		'/404': '/docs'
	}
})
