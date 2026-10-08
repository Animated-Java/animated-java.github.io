<script lang="ts">
	import Footer from '$lib/components/footer.svelte'
	import IntroSection from '$lib/components/introSection.svelte'
	import MinecraftIcon from '$lib/components/minecraftIcon.svelte'
	import YoutubeSection from '$lib/components/youtubeSection.svelte'
	import { docsNavLinks } from '$lib/docs/navigation'
	import { onMount } from 'svelte'
	import { backOut } from 'svelte/easing'
	import { fade, fly } from 'svelte/transition'

	const siteUrl = 'https://animated-java.dev'
	const pageTitle = 'Animated Java'
	const pageDescription = 'Effortlessly craft complex animations for Minecraft: Java Edition'
	const socialImage = `${siteUrl}/images/animated_java_icon.svg`

	let startTransition = $state(false)

	onMount(() => {
		startTransition = true
	})
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

<div class="home-page-shell">
	<div class="home-page-content">
		{#if startTransition}
			<div class="header" in:fade={{ duration: 1000 }}>
				<div class="title" in:fly={{ duration: 1000, x: -25, easing: backOut }}>
					<div>Animated Java</div>
					<p>Effortlessly craft complex animations for Minecraft: Java Edition</p>
				</div>
				<img
					class="icon"
					in:fly={{ duration: 1000, x: 25, easing: backOut }}
					src="/images/animated_java_icon.svg"
					alt="Animated Java Icon"
				/>
			</div>

			<div in:fade={{ duration: 800, delay: 400 }}>
				<IntroSection></IntroSection>
			</div>

			<section class="nav-buttons" in:fade={{ duration: 800, delay: 800 }}>
				{#each docsNavLinks as link}
					<a href={link.to} class="minecraft-button">
						{#if link.icon}
							<MinecraftIcon path={link.icon}></MinecraftIcon>
						{/if}
						{link.title}
					</a>
				{/each}
			</section>

			<YoutubeSection></YoutubeSection>

			<Footer></Footer>
		{/if}
	</div>
</div>

<style>
	@media (width < 950px) {
		div.header {
			flex-direction: column-reverse;
			text-align: center;
		}

		div.title div {
			font-size: 48px;
			margin-top: 16px;
			align-self: center;
		}

		img.icon {
			width: 150px;
			height: 150px;
			margin-top: 8px;
		}

		div.title p {
			font-size: 18px;
			max-width: 100%;
		}
	}

	@media (width < 640px) {
		.nav-buttons {
			margin: 24px 0;
		}
	}

	.nav-buttons {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 12px;
		margin: 32px 0;
	}

	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin: 48px 0px;
	}

	/* Blueprint paper: minor lines every 32px, major lines every 128px */
	.home-page-shell {
		padding: 24px 0 48px;
		min-height: 100vh;
		background-color: #0d3150;
		background-image:
			linear-gradient(#7fd3ff33 2px, transparent 2px),
			linear-gradient(90deg, #7fd3ff33 2px, transparent 2px),
			linear-gradient(#7fd3ff17 1px, transparent 1px),
			linear-gradient(90deg, #7fd3ff17 1px, transparent 1px);
		background-size:
			128px 128px,
			128px 128px,
			32px 32px,
			32px 32px;
	}

	.title {
		font-family: 'MinecraftFull', sans-serif;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.title div {
		vertical-align: middle;
		font-size: 64px;
		background: linear-gradient(90deg, #00aced, #6ed8ff);
		filter: drop-shadow(3px 3px 0px white);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		margin-bottom: 16px;
	}

	.title p {
		font-size: 24px;
		line-height: 1.5;
		max-width: 600px;
		margin: auto;
		font-style: italic;
	}

	.icon {
		width: 200px;
		height: 200px;
		margin-top: 0px;
		background: unset;
		padding: unset;
	}

	:global(body) {
		background: #06111b;
	}
</style>
