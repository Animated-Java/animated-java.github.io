import type { Element, Root, RootContent, Text } from 'hast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

const ADMONITION_NAMES = new Set(['note', 'tip', 'warning', 'info', 'danger'])

function defaultTitle(name: string): string {
	switch (name) {
		case 'tip':
			return 'Tip'
		case 'warning':
			return 'Warning'
		case 'info':
			return 'Info'
		case 'danger':
			return 'Danger'
		default:
			return 'Note'
	}
}

function asText(node: RootContent | undefined): Text | null {
	if (node?.type !== 'text') return null
	return node
}

function firstTextChildIndex(children: RootContent[]): number {
	return children.findIndex(child => child.type === 'text')
}

function lastTextChildIndex(children: RootContent[]): number {
	for (let index = children.length - 1; index >= 0; index -= 1) {
		if (children[index].type === 'text') return index
	}

	return -1
}

function isWhitespaceText(node: RootContent): boolean {
	return node.type === 'text' && node.value.trim().length === 0
}

function isEmptyParagraph(node: RootContent): boolean {
	if (node.type !== 'element' || node.tagName !== 'p') return false
	if (node.children.length === 0) return true

	return node.children.every(isWhitespaceText)
}

function extractLeadingLabel(value: string): { label: string; body: string; found: boolean } {
	const match = /^\[(.+?)\](?:\r?\n)?([\s\S]*)$/.exec(value)

	if (!match) {
		return { label: '', body: value, found: false }
	}

	return {
		label: match[1].trim(),
		body: match[2],
		found: true,
	}
}

function consumeLeadingLabelFromNode(node: RootContent): { label: string; found: boolean } {
	if (node.type === 'text') {
		const extracted = extractLeadingLabel(node.value.trimStart())

		if (!extracted.found) {
			return { label: '', found: false }
		}

		node.value = extracted.body
		return {
			label: extracted.label,
			found: true,
		}
	}

	if (node.type === 'element') {
		for (const child of node.children) {
			const consumed = consumeLeadingLabelFromNode(child)

			if (consumed.found) {
				return consumed
			}

			if (!isWhitespaceText(child)) {
				return { label: '', found: false }
			}
		}
	}

	return { label: '', found: false }
}

function stripClosingFence(value: string): { stripped: string; removed: boolean } {
	const match = /^(?<content>[\s\S]*?)(?:\n|\r\n)?\s*:::\s*$/.exec(value)
	const inlineMatch = /^(?<content>[\s\S]*?):::\s*$/.exec(value)

	if (match?.groups) {
		return {
			stripped: match.groups.content,
			removed: true,
		}
	}

	if (inlineMatch?.groups) {
		return {
			stripped: inlineMatch.groups.content,
			removed: true,
		}
	}

	return { stripped: value, removed: false }
}

const remarkAdmonitions: Plugin<[], Root> = () => {
	return (tree: Root) => {
		visit(tree, 'element', (node: Element, index, parent) => {
			if (!parent || typeof index !== 'number') return
			if (node.tagName !== 'p') return
			if (!node.children || node.children.length === 0) return

			const firstTextIndex = firstTextChildIndex(node.children)
			if (firstTextIndex < 0) return

			const firstText = asText(node.children[firstTextIndex])
			if (!firstText) return

			const exp = new RegExp(
				`^\\s*:::\\s*(${Array.from(ADMONITION_NAMES).join('|')})(?:\\[(.+?)\\])?\\s*(?:\\r?\\n([\\s\\S]*))?$`,
				'i'
			)
			const open = exp.exec(firstText.value)
			if (!open) return

			const [, kindRaw, labelRaw, firstBodyPart = ''] = open
			const kind = kindRaw.toLowerCase()
			if (!ADMONITION_NAMES.has(kind)) return

			let resolvedLabel = labelRaw?.trim() || ''
			let adjustedFirstBodyPart = firstBodyPart

			if (!resolvedLabel) {
				const bodyLabelMatch = extractLeadingLabel(adjustedFirstBodyPart)

				if (bodyLabelMatch.found) {
					resolvedLabel = bodyLabelMatch.label
					adjustedFirstBodyPart = bodyLabelMatch.body
				}
			}

			const openingNode: Element = {
				...node,
				children: node.children.map(child => ({ ...child })),
			}

			const openingTextIndex = firstTextChildIndex(openingNode.children)
			if (openingTextIndex < 0) return

			const openingText = asText(openingNode.children[openingTextIndex])
			if (!openingText) return
			openingText.value = adjustedFirstBodyPart

			if (!resolvedLabel) {
				const extracted = extractLeadingLabel(openingText.value)

				if (extracted.found) {
					resolvedLabel = extracted.label
					openingText.value = extracted.body
				}
			}

			const admonitionBody: RootContent[] = []
			if (!isEmptyParagraph(openingNode)) {
				admonitionBody.push(openingNode)
			}

			let closingIndex = -1

			const openingLastTextIndex = lastTextChildIndex(openingNode.children)
			if (openingLastTextIndex >= 0) {
				const openingLastText = asText(openingNode.children[openingLastTextIndex])

				if (openingLastText) {
					const close = stripClosingFence(openingLastText.value)

					if (close.removed) {
						openingLastText.value = close.stripped
						closingIndex = index
					}
				}
			}

			for (
				let siblingIndex = index + 1;
				closingIndex < 0 && siblingIndex < parent.children.length;
				siblingIndex += 1
			) {
				const sibling = parent.children[siblingIndex]

				if (
					sibling.type === 'element' &&
					sibling.tagName === 'p' &&
					sibling.children.length === 1
				) {
					const singleText = asText(sibling.children[0])

					if (singleText && /^\s*:::\s*$/.test(singleText.value)) {
						closingIndex = siblingIndex
						break
					}
				}

				if (sibling.type === 'element') {
					const textIndex = lastTextChildIndex(sibling.children)

					if (textIndex >= 0) {
						const lastText = asText(sibling.children[textIndex])

						if (lastText) {
							const close = stripClosingFence(lastText.value)

							if (close.removed) {
								closingIndex = siblingIndex
								const nextChildren = sibling.children.map((child, childIndex) => {
									if (childIndex === textIndex && child.type === 'text') {
										return { ...child, value: close.stripped }
									}

									return { ...child }
								})

								const replacedClosingSibling: RootContent = {
									...sibling,
									children: nextChildren,
								}

								if (!isEmptyParagraph(replacedClosingSibling)) {
									admonitionBody.push(replacedClosingSibling)
								}
								break
							}
						}
					}
				}

				admonitionBody.push(sibling)
			}

			if (closingIndex < 0) {
				return
			}

			const cleanedChildren = admonitionBody.filter(child => {
				if (child.type === 'text') {
					return child.value.trim().length > 0
				}

				if (isEmptyParagraph(child)) {
					return false
				}

				return true
			})

			if (cleanedChildren.length === 0) return

			if (!resolvedLabel) {
				const consumed = consumeLeadingLabelFromNode(cleanedChildren[0])

				if (consumed.found) {
					resolvedLabel = consumed.label
				}
			}

			const title = resolvedLabel || defaultTitle(kind)

			const asideNode: Element = {
				type: 'element',
				tagName: 'aside',
				properties: {
					className: ['admonition', `admonition-${kind}`],
				},
				children: [
					{
						type: 'element',
						tagName: 'p',
						properties: {
							className: ['admonition-title'],
						},
						children: [{ type: 'text', value: title }],
					},
					{
						type: 'element',
						tagName: 'div',
						properties: {
							className: ['admonition-content'],
						},
						children: cleanedChildren,
					},
				],
			}

			parent.children.splice(index, closingIndex - index + 1, asideNode)
		})
	}
}

export default remarkAdmonitions
