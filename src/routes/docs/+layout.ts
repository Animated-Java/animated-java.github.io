import { docsNavLinks, docsSidebar, flattenDocLinks, type DocLeaf } from '$lib/docs/navigation'

const FLATTENED_DOCS = flattenDocLinks(docsSidebar)

function normalizedPath(pathname: string): string {
	if (!pathname || pathname === '/') return '/docs/welcome'
	if (pathname.endsWith('/')) return pathname.slice(0, -1)
	return pathname
}

export function load({ url }: { url: URL }) {
	const currentPath = normalizedPath(url.pathname)
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
	}
}
