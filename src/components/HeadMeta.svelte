<script lang="ts">
	import { page } from '$app/stores'

	export let title: string | undefined
	export let description: string | undefined
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
