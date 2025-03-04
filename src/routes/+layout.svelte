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
	import HeadMeta from '../components/HeadMeta.svelte'

	export let data

	const links = [
		{ label: 'Home', title: 'Home', slug: '/', match: /^\/$/, icon: false },
		{
			label: 'Documentation',
			title: 'Documentation',
			slug: '/docs',
			match: /^\/docs\S*/,
			icon: false,
		},
		{ icon: DiscordIcon, title: 'Join our Discord!', slug: '/discord', match: /^\/discord$/ },
		{
			icon: GithubIcon,
			title: 'View Source Code (Github)',
			slug: '/source',
			match: /^\/source$/,
		},
		{ icon: KofiIcon, title: 'Support Us!', slug: '/support-us', match: /^\/support-us$/ },
	]

	let currentRelease = '1.X.X'

	const PACKAGE_URL =
		'https://raw.githubusercontent.com/Animated-Java/animated-java/refs/heads/main/package.json'

	function getCurrentRelease() {
		try {
			fetch(PACKAGE_URL)
				.then(res => res.json())
				.then(data => {
					currentRelease = data.version
				})
		} catch (error) {
			console.error(error)
		}
	}
	getCurrentRelease()

	const { activeCategory } = createSidebarContext(data.sidebar)

	$: category = $activeCategory ? `${$activeCategory} — ` : ''
	$: title = data.meta ? `Animated Java | ${category}${data.meta.title}` : 'Animated Java'
	$: description = data.meta?.description || SLOGAN
</script>

<HeadMeta {title} {description} />

<KitDocs meta={data.meta}>
	<KitDocsLayout navbar={{ links: [] }} sidebar={data.sidebar} search>
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
					<a
						class={!!link.match.exec($page.url.pathname) ? 'active' : ''}
						title={link.title}
						href={link.slug}
					>
						{link.label ?? ''}
						<svelte:component this={link.icon} />
					</a>
				</li>
			{/each}
		</ul>

		<div class="hide-parent" slot="navbar-right-alt"></div>

		<ul
			slot="sidebar-top"
			class={'custom-sidebar-top' + ($page.url.pathname === '/docs' ? ' active' : '')}
		>
			<li>
				<a href="/docs">
					<h5 class="">Welcome!</h5>
				</a>
			</li>
		</ul>

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
				<div class="footer-version-warning">
					This documentation is for the latest release of Animated Java.
					<br />
					Versions older than {currentRelease}, or
					<a class="link" href="/docs/legacy-releases/versions">legacy</a> versions may have
					different features or behavior.
				</div>
			{/if}
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

	.custom-sidebar-top {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		/* font-size: 1.125rem; */
		font-weight: 400;
		margin-bottom: 2rem;
		color: rgb(var(--kd-color-soft) / var(--tw-text-opacity));
		border-left: 1px solid rgb(var(--kd-color-elevate));
		padding-left: 1rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
	}
	.custom-sidebar-top > li {
		flex-grow: 1;
	}
	.custom-sidebar-top:hover {
		color: rgb(var(--kd-color-inverse) / var(--tw-text-opacity));
		border-color: rgb(var(--kd-color-inverse) / var(--tw-border-opacity));
	}
	.custom-sidebar-top.active {
		color: rgb(var(--kd-color-brand));
		border-color: rgb(var(--kd-color-brand));
		font-weight: 600;
	}

	.nav-links {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
	.nav-links > li {
		list-style: none;
		display: flex;
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

	.footer-version-warning {
		text-align: center;
		border: 2px dashed #facc15aa;
		padding: 4px 8px;
		border-radius: 8px;
		font-style: italic;
		margin-top: -32px;
		color: var(--kd-color-subtle);
	}

	.footer-copywrite {
		margin: 32px;
		color: var(--kd-color-subtle);
		text-align: center;
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
</style>
