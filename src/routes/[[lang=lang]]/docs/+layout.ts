import { DEFAULT_LANGUAGE, stripLanguage } from '$lib/docs/docs'
import { docsNavLinks, docsSidebar, flattenDocLinks, type DocLeaf } from '$lib/docs/navigation'
import type { LayoutLoad } from './$types'

const FLATTENED_DOCS = flattenDocLinks(docsSidebar)

export const load: LayoutLoad = ({ params, url }) => {
	const lang = params.lang ?? DEFAULT_LANGUAGE
	const currentPath = stripLanguage(url.pathname, params.lang)
	const currentIndex = FLATTENED_DOCS.findIndex(doc => doc.to === currentPath)
	const currentDoc = currentIndex >= 0 ? FLATTENED_DOCS[currentIndex] : null

	let previous: DocLeaf | null = null
	let next: DocLeaf | null = null

	if (currentIndex >= 0) {
		previous = currentIndex > 0 ? FLATTENED_DOCS[currentIndex - 1] : null
		next = currentIndex < FLATTENED_DOCS.length - 1 ? FLATTENED_DOCS[currentIndex + 1] : null
	}

	return {
		docsNavLinks,
		docsSidebar,
		currentPath,
		currentDoc,
		previous,
		next,
		lang,
	}
}
