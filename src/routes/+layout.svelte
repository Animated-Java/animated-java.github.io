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
					<Button title="Support Us on Ko-fi!" href="https://ko-fi.com/snavesutit">
						<svg
							width="39"
							height="39"
							viewBox="0 0 39 39"
							class="social-icon"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M36.821 13.9081C35.6615 7.76406 29.5326 7 29.5326 7H2.08442C1.17843 7 1.06593 8.20024 1.06593 8.20024C1.06593 8.20024 0.942933 19.2159 1.03293 25.9812C1.27893 29.627 4.91188 30 4.91188 30C4.91188 30 17.3122 29.9654 22.8606 29.9263C26.5176 29.2856 26.8851 26.0669 26.8476 24.3102C33.3755 24.6711 37.9804 20.0522 36.821 13.9081ZM20.2282 19.1889C18.3592 21.3742 14.2118 25.169 14.2118 25.169C14.2118 25.169 14.0303 25.348 13.7468 25.2036C13.6328 25.1178 13.5848 25.0682 13.5848 25.0682C12.9203 24.4049 8.53283 20.4823 7.53385 19.1212C6.47036 17.6698 5.97237 15.0602 7.39735 13.5411C8.82383 12.022 11.9048 11.9077 13.9418 14.1533C13.9418 14.1533 16.2892 11.4731 19.1437 12.7049C21.9997 13.9382 21.8917 17.2336 20.2282 19.1889ZM29.4876 19.9078C28.0956 20.0823 26.9646 19.9499 26.9646 19.9499V11.4054H29.6196C29.6196 11.4054 32.576 12.2341 32.576 15.3731C32.576 18.2503 31.0985 19.3844 29.4876 19.9078Z"
								fill="currentColor"
							/>
						</svg>
					</Button>
				</div>
			</div>
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
