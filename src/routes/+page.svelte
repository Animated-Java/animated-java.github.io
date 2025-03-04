<script lang="ts">
	import Carousel from '../components/VideoCarousel.svelte'
	import Arrow from '~icons/ri/arrow-down-s-line'
	import { SLOGAN } from '$lib/strings'
	import { fade } from 'svelte/transition'
	import { scrollAnimator } from '$lib/scrollAnim'

	let scroll: number

	const PANELS: Array<{ title: string; description: string; image: string }> = [
		{
			title: 'No Mods Required!',
			description:
				"Designed for Map Makers and Data Pack Developers, Animated Java leverages Minecraft's Data Pack and Resource Pack systems to animate your creations seamlessly.",
			image: '/img/vanilla.png',
		},
		{
			title: 'Variants',
			description:
				'Easily swap textures and models on model in-game with a single function call.',
			image: '/img/variants.gif',
		},
		{
			title: 'Advanced Easing Options',
			description:
				'Enhance your animations with a wide range of easing options for more dynamic and fluid motion.',
			image: '/img/easing.gif',
		},
		{
			title: 'Vanilla Models',
			description:
				'Animated Java allows you to preview vanilla item and block models, enabling the creation of animated models without a Resource Pack!',
			image: '/img/resourcepackless.png',
		},
		{
			title: 'Heavily Optimized',
			description:
				'Animated Java has undergone extensive performance testing and optimization, allowing you to focus on creativity without worrying about performance.',
			image: '/img/performance.png',
		},
	]
</script>

<svelte:window bind:scrollY={scroll} />

<div class="page">
	<div class="center-container">
		<div class="title">
			<img
				class="icon"
				src="/img/animated_java_icon.svg"
				aria-label="Animated Java Icon"
				alt="Animated Java Logo"
			/>
			<div>
				<img
					class="banner"
					role="heading"
					aria-level="1"
					aria-label="Animated Java"
					src="/img/animated_java_2025_banner_no_background_no_padding.svg"
					alt="Animated Java"
				/>
				<p>
					{SLOGAN}
				</p>
			</div>
		</div>
	</div>

	<div class="center">
		<h1>What is Animated Java?</h1>
	</div>

	<div class="center">
		<div class="blurb">
			<p>
				Animated Java is a Blockbench plugin that enables the creation of intricate animated
				models for Vanilla Minecraft: Java Edition. With a wide range of features and
				options, Animated Java is the perfect tool for Map Makers and Data Pack Developers
				looking to add a touch of life to their creations.
			</p>
		</div>
	</div>

	{#if scroll < 100}
		<div class="scroll-indicator" transition:fade={{ duration: 1000, delay: 500 }}>
			<svelte:component this={Arrow} />
			<p>Scroll to see more</p>
			<svelte:component this={Arrow} />
		</div>
	{/if}

	<div class="panel-container">
		{#each PANELS as panel, i}
			{@const isLeftSide = i % 2 == 0}
			<div
				class={`panel ${isLeftSide ? 'left' : 'right'}-panel`}
				use:scrollAnimator={{
					x: isLeftSide ? 200 : -200,
					yOffset: -200,
					rate: 1,
					scale: 0.95,
				}}
			>
				{#if isLeftSide}
					<img src={panel.image} alt={panel.title} />
				{/if}
				<div>
					<h2>
						{panel.title}
					</h2>
					<hr />
					<p>{panel.description}</p>
				</div>
				{#if !isLeftSide}
					<img src={panel.image} alt={panel.title} />
				{/if}
			</div>
		{/each}
	</div>

	<div class="made-with-aj" use:scrollAnimator={{ x: 0, scale: 0.95, rate: 0.25, yOffset: -250 }}>
		<h2 class="section-title">Made with Animated Java!</h2>
		<hr />
		<div class="center-container">
			<Carousel></Carousel>
		</div>
	</div>
</div>

<style>
	.center {
		display: flex;
		justify-content: center;
	}

	h1 {
		font-size: 2.5rem;
		margin-top: 4rem;
		text-align: center;
		border-bottom: 2px solid rgb(var(--kd-color-brand));
		margin-bottom: 1rem;
	}

	.blurb {
		max-width: 630px;
		margin-bottom: 3em;
		text-align: center;
		color: var(--kd-color-subtle);
		& p {
			font-size: 1.1rem;
			line-height: 1.5;
			margin: 1em 0;
		}
	}

	.scroll-indicator {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 100;

		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 4rem;
		font-size: 2rem;
		color: var(--kd-color-subtle);
		font-style: italic;
		gap: 1rem;
		margin-bottom: 2rem;
		opacity: 0.75;
	}

	.scroll-indicator :global(svg) {
		animation: scroll-arrows 2s infinite;
	}

	@keyframes scroll-arrows {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(1rem);
		}
	}

	.in-view {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
	}

	.section-title {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 4rem 0 2rem 0;
	}
	.section-title h2 {
		font-size: 2.5rem;
		font-weight: 500;
	}

	.panel-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 6rem;
		overflow: visible;
		margin-top: 4rem;
	}
	.panel {
		overflow: visible;
		opacity: 0;
	}
	.left-panel {
		align-self: flex-start;
		display: flex;
		flex-direction: row;
	}
	.right-panel {
		align-self: flex-end;
		display: flex;
		flex-direction: row;
	}
	.panel > div:first-of-type {
		align-self: center;
		display: flex;
		flex-direction: column;
		margin: 32px;
		flex-grow: 1;
	}
	.panel img {
		border-radius: 16px;
		box-shadow: 2px 2px 8px -4px black;
		width: 50%;
	}
	.panel p {
		color: var(--kd-color-subtle);
	}
	h2 {
		font-size: 1.5rem;
		margin-bottom: 0.25rem;
	}

	.page {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		margin: 0px 32px 0 16px;
		width: auto;
		overflow: visible;
	}

	.center-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: visible;
	}

	.title {
		display: flex;
		align-items: center;
		margin: 6rem 0 0rem 0;
	}
	.title div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 2rem;
	}
	.title img.icon {
		width: 192px;
		border-radius: 16px;
		box-shadow: 4px 4px 8px -4px black;
	}
	.title img.banner {
		width: 512px;
		margin: 8px 0;
		padding-bottom: 8px;
		border-bottom: 2px solid rgb(var(--kd-color-brand));
	}
	.title p {
		margin: 0px;
		font-size: 1.25rem;
		font-style: italic;
		color: var(--kd-color-subtle);
	}

	.made-with-aj {
		display: flex;
		flex-direction: column;
		margin-top: 8rem;
	}
	.made-with-aj h2 {
		font-size: 2rem;
		margin: 0px;
	}
	hr {
		width: 100%;
		margin: 0rem 0 0.5rem 0;
		border: 1px solid rgb(var(--kd-color-brand));
	}

	@media (max-width: 768px) {
		.in-view {
			top: 50%;
		}
		.panel img {
			width: 100%;
		}
		.panel {
			flex-direction: column;
		}
		.right-panel {
			flex-direction: column-reverse;
		}
		.panel > div {
			margin: 16px;
		}
		.panel > div > h2 {
			display: flex;
			flex-direction: column;
			align-items: stretch;
			text-align: center;
		}
		.panel-container {
			gap: 2rem;
		}
		.title {
			flex-direction: column;
			margin: 2rem 0 0 0;
		}
		.title > div {
			margin-left: unset;
		}
		.title img {
			width: 128px;
		}
		.title p {
			font-size: 1.25rem;
			text-align: center;
		}
		.page {
			margin-left: 32px;
		}
		.panel-container {
			margin-top: 2rem;
		}
		.made-with-aj {
			margin-top: 4rem;
		}
		.scroll-indicator {
			display: none;
		}
	}

	@media (max-height: 768px) {
		.panel-container {
			margin-top: 2rem;
		}
		.made-with-aj {
			margin-top: 4rem;
		}

		.panel img {
			width: 50%;
		}
		.panel {
			display: flex;
			align-items: center;
			text-align: center;
		}
	}
</style>
