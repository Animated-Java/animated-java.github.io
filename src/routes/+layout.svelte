<script lang="ts">
	import '@svelteness/kit-docs/client/polyfills/index.js'
	import '@svelteness/kit-docs/client/styles/normalize.css'
	import '@svelteness/kit-docs/client/styles/fonts.css'
	import '@svelteness/kit-docs/client/styles/theme.css'
	import '$lib/styles/kit-docs.css'

	import { page } from '$app/stores'

	import DiscordIcon from '~icons/ri/discord-fill'
	import GithubIcon from '~icons/ri/github-fill'

	import {
		Button,
		KitDocs,
		KitDocsLayout,
		createSidebarContext,
		type NavbarConfig
	} from '@svelteness/kit-docs'
	import type { LayoutData } from './$types'

	export let data: LayoutData

	$: ({ meta, sidebar } = data)

	const navbar: NavbarConfig = {
		links: [
			{ title: 'Home', slug: '/', match: /\// },
			{ title: 'Documentation', slug: '/docs', match: /\/docs/ }
		]
	}

	const { activeCategory } = createSidebarContext(sidebar)

	$: category = $activeCategory ? `${$activeCategory}: ` : ''
	$: title = meta ? `Animated Java | ${category}${meta.title}` : 'Animated Java'
	$: description =
		meta?.description ||
		'A Blockbench plugin that makes complex animation a breeze in Minecraft: Java Edition.'
</script>

<svelte:head>
	{#key $page.url.pathname}
		{#if title}
			<title>{title}</title>
		{/if}
		{#if description}
			<meta name="description" content={description} />
		{/if}
		<meta property="og:type" content="website" />
		<meta content={title} property="og:title" />
		<meta content={description} property="og:description" />
		<meta content={$page.url} property="og:url" />
		<meta
			content="https://animated-java.github.io/img/animated_java_animated_icon.png"
			property="og:image"
		/>
		<meta content="#00ACED" data-react-helmet="true" name="theme-color" />
	{/key}
</svelte:head>

<KitDocs {meta}>
	<KitDocsLayout {navbar} {sidebar}>
		<div class="logo" slot="navbar-left">
			<Button href="/">
				<div class="header-container">
					<!-- svelte-ignore a11y-missing-attribute -->
					<img src="/img/animated_java_icon.svg" />
					<div>
						<h1>Animated Java</h1>
					</div>
				</div>
			</Button>
		</div>

		<slot />

		<div class="footer" slot="main-bottom">
			<div class="header-wip-warning" style="margin-top: 16px;">
				⚠️ This website is a work in progress. Some pages may be incomplete or missing. ⚠️
			</div>
			<div class="footer-social">
				<div class="social-container">
					<Button title="Join our Discord Server!" href="/discord">
						<svelte:component this={DiscordIcon} class="social-icon" />
					</Button>
					<Button title="Check out our Source Code!" href="/source">
						<svelte:component this={GithubIcon} class="social-icon" />
					</Button>
				</div>
			</div>
		</div>
	</KitDocsLayout>
</KitDocs>

<style>
	:global(:root) {
		--kd-color-brand-rgb: 233, 127, 6;
	}

	:global(:root.dark) {
		--kd-color-brand-rgb: 213, 149, 76;
	}

	@media (max-width: 768px) {
		:global(.on-this-page) {
			display: none !important;
		}
	}

	.logo :global(a) {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.logo :global(svg) {
		height: 36px;
		overflow: hidden;
	}

	.footer {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.header-wip-warning {
		margin-bottom: 1rem;
		text-align: center;
	}

	.footer-social {
		display: flex;
		justify-content: center;
		margin-bottom: 2rem;
	}

	.header-container {
		display: flex;
		align-items: center;
		margin-bottom: 2rem;
		position: relative;
		top: 16px;
	}
	.header-container div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 1rem;
	}
	.header-container img {
		width: 48px;
		border-radius: 8px;
		box-shadow: 2px 2px 4px -2px black;
	}
	.header-container h1 {
		font-size: 1.5rem;
	}

	.social-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 2rem;
	}

	.social-container > :global(a) {
		font-size: 2rem;
	}
</style>
