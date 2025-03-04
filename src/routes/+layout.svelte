<script lang="ts">
	import '@docsearch/css' // Must come first.
	import '@svelteness/kit-docs/client/styles/docsearch.css'

	import '@svelteness/kit-docs/client/polyfills/index.js'
	import '@svelteness/kit-docs/client/styles/normalize.css'
	import '@svelteness/kit-docs/client/styles/fonts.css'
	import '@svelteness/kit-docs/client/styles/theme.css'
	import '$lib/styles/kit-docs.css'
	import { Algolia } from '@svelteness/kit-docs/client/algolia'
	import { page } from '$app/stores'
	import { PUBLIC_ALGOLIA_ID, PUBLIC_ALGOLIA_SEARCH_KEY } from '$env/static/public'
	import DiscordIcon from '~icons/ri/discord-fill'
	import GithubIcon from '~icons/ri/github-fill'
	import KofiIcon from '../kit-docs/kofiLogo.svelte'
	import { Button, KitDocs, KitDocsLayout, createSidebarContext } from '@svelteness/kit-docs'
	import { SLOGAN } from '$lib/strings'

	export let data

	$: ({ meta, sidebar } = data)

	const links = [
		{ title: 'Home', slug: '/', icon: false },
		{ title: 'Documentation', slug: '/docs', icon: false },
		{ title: 'Discord', slug: '/discord', icon: DiscordIcon },
		{ title: 'Source', slug: '/source', icon: GithubIcon },
		{ title: 'Ko-fi', slug: 'https://ko-fi.com/snavesutit', icon: KofiIcon },
	]

	console.log(KofiIcon)

	const { activeCategory } = createSidebarContext(sidebar)

	$: category = $activeCategory ? `${$activeCategory}: ` : ''
	$: title = meta ? `Animated Java | ${category}${meta.title}` : 'Animated Java'
	$: description = meta?.description || SLOGAN
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
	<KitDocsLayout navbar={{ links: [] }} {sidebar} search>
		<Algolia
			appId={PUBLIC_ALGOLIA_ID}
			apiKey={PUBLIC_ALGOLIA_SEARCH_KEY}
			indexName="docsearch"
			placeholder="Search the Docs..."
			slot="search"
		/>

		<ul slot="navbar-right" class="nav-links">
			{#each links as link}
				<li>
					<a class={link.slug === $page.url.pathname ? 'active' : ''} href={link.slug}>
						{link.title}
						<svelte:component this={link.icon} />
					</a>
				</li>
			{/each}
		</ul>

		<div class="hide-parent" slot="navbar-right-alt"></div>

		<div class="logo" slot="navbar-left">
			<Button href="/">
				<div class="header-container">
					<img class="icon" src="/img/animated_java_icon.svg" alt="Animated Java Icon" />
					<div>
						<img
							class="banner"
							role="heading"
							aria-level="1"
							aria-label="Animated Java"
							src="/img/animated_java_2025_banner_no_background_no_padding.svg"
							alt="Animated Java"
						/>
					</div>
				</div>
			</Button>
		</div>

		<slot />

		<div class="footer" slot="main-bottom">
			{#if $page.url.pathname !== '/'}
				<div class="footer-wip-warning" style="margin-top: 16px;">
					⚠️ This site only contains the documentation for the latest release of Animated
					Java. ⚠️
					<br />
					Older versions may have different features or behavior.
				</div>
			{/if}
			<div class="footer-social">
				<div class="social-container">
					<Button title="Join our Discord Server!" href="/discord">
						<svelte:component this={DiscordIcon} class="social-icon" />
					</Button>
					<Button title="Check out our Source Code!" href="/source">
						<svelte:component this={GithubIcon} class="social-icon" />
					</Button>
					<Button title="Support Us on Ko-fi!" href="https://ko-fi.com/snavesutit">
						<div class="social-icon">
							<KofiIcon />
						</div>
					</Button>
				</div>
			</div>
			<p class="footer-copywrite">
				© 2025 Titus Evans. All rights reserved. <br />Animated Java is not affiliated with
				Mojang Studios.
			</p>
			{#if $page.url.pathname !== '/'}
				<a class="ko-fi-button" href="https://ko-fi.com/snavesutit">
					<img src="/img/kofi-logo.png" alt="" /> Support Us!
				</a>
			{/if}
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

	:global(:has(> .hide-parent)) {
		display: none;
	}

	.nav-links {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
	.nav-links > li {
		list-style: none;
		color: rgb(var(--kd-color-soft) / var(--tw-text-opacity));
	}
	.nav-links > li > a {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.nav-links > li > a.active {
		color: rgb(var(--kd-color-brand));
		border-bottom: 2px solid rgb(var(--kd-color-brand));
	}
	/* .nav-links > li > img,
	.nav-links > li > :global(svg) {
		color: rgb(var(--kd-color-soft) / var(--tw-text-opacity));
	} */

	.ko-fi-button {
		position: fixed;
		bottom: 16px;
		right: 16px;
		z-index: 1000;
		display: flex;
		align-items: center;
		background-color: #00aced;
		padding: 0 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
		box-shadow: 2px 2px 4px -2px black;
		color: white;
		transition: transform 0.1s cubic-bezier(0.25, 0.68, 0.53, 1.3);
	}
	.ko-fi-button img {
		height: 2em;
		width: 2em;
		margin-right: 0.25em;
		margin-left: -0.25em;
	}
	.ko-fi-button:hover {
		transform: scale(1.05);
	}

	:global(.pt-4) {
		padding-top: 0 !important;
	}

	@media (max-width: 768px) {
		:global(.on-this-page) {
			display: none !important;
		}
		.ko-fi-button {
			width: calc(100% - 16px);
			right: 8px;
			bottom: 8px;
		}
		:global(.aj-welcome-page-header) {
			display: flex;
			align-items: center;
			height: unset !important;
			margin-top: 8px;
			margin-bottom: 0 !important;
		}
		.logo img.banner {
			display: none !important;
		}
	}

	:global(.aj-welcome-page-header) {
		display: flex;
		align-items: center;
		height: 64px;
		margin-top: 8px;
		margin-bottom: 0 !important;
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

	.logo img.icon {
		width: 48px;
		border-radius: 8px;
		box-shadow: 2px 2px 4px -2px black;
	}
	.logo img.banner {
		width: 200px;
		margin: 8px 0;
	}

	.footer {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.footer-wip-warning {
		text-align: center;
	}

	.footer-social {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.footer-copywrite {
		margin: 32px;
		color: var(--kd-color-subtle);
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
