<script lang="ts">
	import '$lib/styles/global.css'
	import '$lib/styles/minecraftUI.css'

	const { children } = $props()
	const siteUrl = 'https://animated-java.github.io'
	const pageTitle = 'Animated Java'
	const pageDescription = 'Effortlessly craft complex animations for Minecraft: Java Edition'
	const socialImage = `${siteUrl}/images/animated_java_icon.svg`
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<link rel="canonical" href={siteUrl} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Animated Java" />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:image" content={socialImage} />
	<meta content="#00ACED" data-react-helmet="true" name="theme-color" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />
	<meta name="twitter:image" content={socialImage} />
</svelte:head>

{@render children?.()}
