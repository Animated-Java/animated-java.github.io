import type { Root } from 'hast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

const rehypeDocLinks: Plugin<[], Root> = () => tree => {
	visit(tree, 'element', node => {
		if (node.tagName !== 'a') return
		const href = node.properties?.href as string | undefined
		if (!href || href.startsWith('http') || href.startsWith('#')) return

		// Mark as a doc-internal link; store the path for runtime resolution
		node.properties['data-doc-link'] = href
	})
}

export default rehypeDocLinks
