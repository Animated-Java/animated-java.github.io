<script lang="ts">
	import Footer from '$lib/components/footer.svelte'
	import IntroSection from '$lib/components/introSection.svelte'
	import MinecraftIcon from '$lib/components/minecraftIcon.svelte'
	import YoutubeSection from '$lib/components/youtubeSection.svelte'
	import { docsNavLinks } from '$lib/docs/navigation'
	import { onMount } from 'svelte'
	import { backOut } from 'svelte/easing'
	import { fade, fly } from 'svelte/transition'

	let startTransition = $state(false)

	onMount(() => {
		startTransition = true
	})
</script>

<div class="home-page-shell">
	<div class="bg-layer bg-base" aria-hidden="true"></div>
	<div class="bg-layer bg-aurora bg-aurora-a" aria-hidden="true"></div>
	<div class="bg-layer bg-aurora bg-aurora-b" aria-hidden="true"></div>
	<div class="bg-layer bg-grid" aria-hidden="true"></div>

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

			<div in:fade={{ duration: 800, delay: 600 }}>
				<IntroSection></IntroSection>
			</div>

			<section class="nav-buttons" in:fade={{ duration: 800, delay: 400 }}>
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

	.home-page-shell {
		position: relative;
		isolation: isolate;
		padding: 24px 0 48px;
		min-height: 100vh;
		overflow: clip;
	}

	.home-page-content {
		position: relative;
		z-index: 1;
	}

	.bg-layer {
		position: absolute;
		inset: -8% -10%;
		pointer-events: none;
		z-index: 0;
	}

	.bg-base {
		background:
			radial-gradient(circle at 15% 12%, #5fd8ff22 0%, #5fd8ff00 40%),
			radial-gradient(circle at 85% 10%, #87f2d522 0%, #87f2d500 34%),
			linear-gradient(160deg, #05111d 0%, #072338 45%, #123d5a 100%);
	}

	.bg-aurora {
		mix-blend-mode: screen;
		filter: blur(36px);
		opacity: 0.55;
	}

	.bg-aurora-a {
		background:
			radial-gradient(46% 32% at 24% 30%, #2bc2ff88 0%, #2bc2ff00 72%),
			radial-gradient(30% 28% at 74% 56%, #69ffd388 0%, #69ffd300 74%);
	}

	.bg-aurora-b {
		background:
			radial-gradient(38% 30% at 74% 24%, #74b8ff66 0%, #74b8ff00 72%),
			radial-gradient(36% 26% at 20% 76%, #00ffe466 0%, #00ffe400 74%);
	}

	.bg-grid {
		opacity: 0.2;
		background-image:
			linear-gradient(#b8f5ff33 1px, transparent 1px),
			linear-gradient(90deg, #b8f5ff33 1px, transparent 1px);
		background-size: 32px 32px;
		mask-image: radial-gradient(circle at center, #000 40%, transparent 92%);
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
