export interface DocLeaf {
	title: string
	to: string
	icon?: string
}

export interface DocSection {
	title: string
	to?: string
	items?: DocLeaf[]
}

export const docsNavLinks: DocLeaf[] = [
	{ title: 'Documentation', to: '/docs/welcome', icon: 'icons/current/database_file.svg' },
	{ title: 'Discord', to: '/discord', icon: 'misc/discord_us.png' },
	{ title: 'Source', to: '/source', icon: 'misc/antbot/upscaled/github.png' },
	{ title: 'Support Us', to: '/support-us', icon: 'icons/current/loot_table_file.svg' },
]

export const docsSidebar: DocSection[] = [
	{
		title: 'Welcome',
		to: '/docs/welcome',
	},
	{
		title: 'Getting Started',
		items: [
			{ title: 'Installing', to: '/docs/getting-started/installing' },
			{ title: 'Your First Blueprint', to: '/docs/getting-started/your-first-blueprint' },
		],
	},
	{
		title: 'Core Concepts',
		items: [
			{ title: 'Blueprints', to: '/docs/core-concepts/blueprints' },
			{ title: 'Exporting', to: '/docs/core-concepts/exporting' },
			{ title: 'Rigs', to: '/docs/core-concepts/rigs' },
			{ title: 'Animations', to: '/docs/core-concepts/animations' },
			{ title: 'Variants', to: '/docs/core-concepts/variants' },
			{ title: 'Tags', to: '/docs/core-concepts/tags' },
		],
	},
	{
		title: 'Nodes',
		items: [
			{ title: 'Cubes', to: '/docs/nodes/cubes' },
			{ title: 'Groups', to: '/docs/nodes/groups' },
			{ title: 'Item Displays', to: '/docs/nodes/item-displays' },
			{ title: 'Block Displays', to: '/docs/nodes/block-displays' },
			{ title: 'Text Displays', to: '/docs/nodes/text-displays' },
			{ title: 'Locators', to: '/docs/nodes/locators' },
			{ title: 'Interactions', to: '/docs/nodes/interactions' },
			{ title: 'Cameras', to: '/docs/nodes/cameras' },
		],
	},
	{
		title: 'Function API',
		items: [
			{ title: 'Summon', to: '/docs/function-api/summon' },
			{ title: 'Remove', to: '/docs/function-api/remove' },
			{ title: 'Animations', to: '/docs/function-api/animations' },
			{ title: 'Variants', to: '/docs/function-api/variants' },
			{ title: 'Utilities', to: '/docs/function-api/utilities' },
		],
	},
	{
		title: 'Configs',
		items: [
			{ title: 'Animation', to: '/docs/configs/animation' },
			{ title: 'Display Entity', to: '/docs/configs/display-entity' },
		],
	},
	{
		title: 'Guides',
		items: [{ title: 'Stacking Rigs', to: '/docs/guides/stacking-rigs' }],
	},
	{
		title: 'Resources',
		items: [
			{ title: 'FAQ', to: '/docs/resources/faq' },
			{ title: 'Legacy Releases', to: '/docs/resources/legacy-releases' },
		],
	},
]

export function flattenDocLinks(sections: DocSection[]): DocLeaf[] {
	const links: DocLeaf[] = []

	for (const section of sections) {
		if (section.to) {
			links.push({ title: section.title, to: section.to })
		}

		if (section.items) {
			for (const item of section.items) {
				links.push(item)
			}
		}
	}

	return links
}
