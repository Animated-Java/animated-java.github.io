<script>
	import '@svelteness/kit-docs/client/polyfills/index.js';
	import '@svelteness/kit-docs/client/styles/normalize.css';
	import '@svelteness/kit-docs/client/styles/fonts.css';
	import '@svelteness/kit-docs/client/styles/theme.css';
	import '$lib/styles/kit-docs.css';

	import { page } from '$app/stores';
	import AnimatedJavaBanner from '$img/Animated Java 2024 Banner.svg?raw';

	import {
		Button,
		KitDocs,
		KitDocsLayout,
		SocialLink,
		createSidebarContext
	} from '@svelteness/kit-docs';

	/** @type {import('./$types').LayoutData} */
	export let data;

	$: ({ meta, sidebar } = data);

	/** @type {import('@svelteness/kit-docs').NavbarConfig} */
	const navbar = {
		links: [{ title: 'Documentation', slug: '/docs', match: /\/docs/ }]
	};

	const { activeCategory } = createSidebarContext(sidebar);

	$: category = $activeCategory ? `${$activeCategory}: ` : '';
	$: title = meta ? `${category}${meta.title} | KitDocs` : null;
	$: description = meta?.description;
</script>

<svelte:head>
	{#key $page.url.pathname}
		{#if title}
			<title>{title}</title>
		{/if}
		{#if description}
			<meta name="description" content={description} />
		{/if}
	{/key}
</svelte:head>

<KitDocs {meta}>
	<KitDocsLayout {navbar} {sidebar}>
		<div class="logo" slot="navbar-left">
			<Button href="/">
				{@html AnimatedJavaBanner}
			</Button>
		</div>

		<slot />
		<div class="header" slot="main-top">
			<div class="header-wip-warning">
				⚠️ This website is a work in progress. Some pages may be incomplete or missing. ⚠️
			</div>
		</div>
		<div class="footer" slot="main-bottom">
			<div class="footer-social">
				<SocialLink type="discord" href="https://discord.com/invite/jFgY4PXZfp" />
				<SocialLink type="gitHub" href="https://github.com/Animated-Java/animated-java" />
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
</style>
