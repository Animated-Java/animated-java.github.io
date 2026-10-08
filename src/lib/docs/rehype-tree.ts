import type { Element, ElementContent, Root, RootContent, Text } from 'hast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

const MCDP_ICON_URL = 'https://github.com/FuncFusion/mc-dp-icons-assets/blob/main/icons/current'
const NOTE_SEPARATOR = ' — '

/** Resolves `mcdp:<name>` to an icon in the MCDP set (github.com/FuncFusion/mc-dp-icons-assets). */
export function resolveTreeIconUrl(src: string): string {
	if (!src.startsWith('mcdp:')) return src
	return `${MCDP_ICON_URL}/${src.slice('mcdp:'.length)}.svg?raw=true`
}

function isWhitespaceText(node: RootContent): boolean {
	return node.type === 'text' && node.value.trim().length === 0
}

function isElement(node: RootContent | undefined, tagName: string): node is Element {
	return node?.type === 'element' && node.tagName === tagName
}

function isParagraphWithText(node: RootContent | undefined, exp: RegExp): boolean {
	if (!isElement(node, 'p') || node.children.length !== 1) return false
	const [child] = node.children
	return child.type === 'text' && exp.test(child.value)
}

function nextContentIndex(children: RootContent[], from: number): number {
	let index = from
	while (index < children.length && isWhitespaceText(children[index])) index += 1
	return index
}

/** The fence's closing `:::` lazily continues into the last list item, so strip it from there. */
function stripTrailingFence(node: Element): boolean {
	for (let index = node.children.length - 1; index >= 0; index -= 1) {
		const child = node.children[index]

		if (child.type === 'text') {
			if (child.value.trim().length === 0) continue

			const match = /^([\s\S]*?)\s*:::\s*$/.exec(child.value)
			if (!match) return false

			child.value = match[1]
			return true
		}

		if (child.type === 'element') return stripTrailingFence(child)

		return false
	}

	return false
}

/** Splits a trailing ` — note` off the label into its own muted span. */
function splitNote(children: ElementContent[]): ElementContent[] {
	const textIndex = children.findIndex(
		child => child.type === 'text' && child.value.includes(NOTE_SEPARATOR)
	)
	if (textIndex < 0) return children

	const text = children[textIndex] as Text
	const separatorIndex = text.value.indexOf(NOTE_SEPARATOR)
	const before = text.value.slice(0, separatorIndex)
	const after = text.value.slice(separatorIndex + NOTE_SEPARATOR.length)

	const note: Element = {
		type: 'element',
		tagName: 'span',
		properties: { className: ['tree-note'] },
		children: [{ type: 'text', value: after }, ...children.slice(textIndex + 1)],
	}

	return [...children.slice(0, textIndex), { type: 'text', value: before }, note]
}

function transformItem(item: Element): Element {
	const sublists: Element[] = []
	let label: ElementContent[] = []

	for (const child of item.children) {
		if (isElement(child, 'ul') || isElement(child, 'ol')) {
			sublists.push(transformList(child))
		} else if (isElement(child, 'p')) {
			// Loose lists wrap item content in paragraphs.
			label.push(...child.children)
		} else {
			label.push(child)
		}
	}

	while (label.length > 0 && isWhitespaceText(label[0])) label.shift()
	while (label.length > 0 && isWhitespaceText(label[label.length - 1])) label.pop()

	let floating = false
	const first = label[0]
	if (first?.type === 'text' && first.value.startsWith('~')) {
		floating = true
		first.value = first.value.slice(1).trimStart()
		if (first.value.length === 0) label.shift()
	}

	const icon = label[0]
	if (isElement(icon, 'img')) {
		icon.properties = {
			...icon.properties,
			className: ['tree-icon'],
			src: resolveTreeIconUrl(String(icon.properties.src ?? '')),
			alt: icon.properties.alt ?? '',
		}
		const afterIcon = label[1]
		if (afterIcon?.type === 'text') afterIcon.value = afterIcon.value.trimStart()
	}

	label = splitNote(label)

	return {
		type: 'element',
		tagName: 'li',
		properties: { className: floating ? ['tree-item', 'tree-item-floating'] : ['tree-item'] },
		children: [
			{
				type: 'element',
				tagName: 'span',
				properties: { className: ['tree-label'] },
				children: label,
			},
			...sublists,
		],
	}
}

function transformList(list: Element): Element {
	return {
		type: 'element',
		tagName: 'ul',
		properties: {},
		children: list.children.filter(child => isElement(child, 'li')).map(transformItem),
	}
}

/**
 * Turns a `:::tree` fence around a nested list into a tree diagram.
 * Items starting with `~` get a dashed branch, a leading image becomes the item's icon,
 * and text after ` — ` becomes a muted note.
 */
const rehypeTree: Plugin<[], Root> = () => {
	return (tree: Root) => {
		visit(tree, 'element', (node: Element, index, parent) => {
			if (!parent || typeof index !== 'number') return
			if (!isParagraphWithText(node, /^\s*:::\s*tree\s*$/i)) return

			const listIndex = nextContentIndex(parent.children, index + 1)
			const list = parent.children[listIndex]
			if (!isElement(list, 'ul')) return

			let closingIndex = nextContentIndex(parent.children, listIndex + 1)
			if (!isParagraphWithText(parent.children[closingIndex], /^\s*:::\s*$/)) {
				if (!stripTrailingFence(list)) return
				closingIndex = listIndex
			}

			const treeNode: Element = {
				type: 'element',
				tagName: 'div',
				properties: { className: ['tree'] },
				children: [transformList(list)],
			}

			parent.children.splice(index, closingIndex - index + 1, treeNode)
			return index + 1
		})
	}
}

export default rehypeTree
