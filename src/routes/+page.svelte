<script lang="ts">
	import { onDestroy, onMount } from 'svelte'

	// import { Button } from '@svelteness/kit-docs'
	import { inView } from '$lib'
	import Carousel from '../components/VideoCarousel.svelte'
	// import { fly } from 'svelte/transition'

	import MaterialSymbolsClose from '~icons/material-symbols/close'

	let sidebar: HTMLElement | null
	let main: HTMLElement | null

	onMount(() => {
		sidebar = document.querySelector('.on-this-page')
		main = document.querySelector('main')
		if (sidebar) sidebar.style.display = 'none'
		if (main) main.style.overflow = 'visible'
	})

	onDestroy(() => {
		if (sidebar) sidebar.style.display = 'block'
		if (main) main.style.overflow = 'hidden'
	})

	const PANELS: Array<{ title: string; description: string; image: string }> = [
		{
			title: '100% Vanilla Minecraft!',
			description: 'Built for Map Makers and Data Pack Developers.',
			image: '/img/vanilla.png'
		},
		{
			title: 'Variants',
			description: 'Swap out textures on a Rig in-game with a single function call.',
			image: '/img/variants.gif'
		},
		{
			title: 'Advanced Easing Options',
			description: 'Choose from a variety of easing options to make your animations more dynamic.',
			image: '/img/easing.gif'
		},
		{
			title: 'Vanilla Models',
			description:
				'Animated Java supports vanilla item and block models, allowing you to create animated models without a Resource Pack!',
			image: '/img/resourcepackless.png'
		},
		{
			title: 'Heavily Optimized',
			description:
				'Animated Java has had hundreds of hours put into performance testing, and optimization. Worry less about performance and more about creating!',
			image: '/img/performance.png'
		}
	]
</script>

<div class="page">
	<div class="center-container">
		<div class="header-container">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="/img/animated_java_icon.svg" />
			<div>
				<h1>Welcome to Animated Java!</h1>
				<hr />
				<h3>
					A Blockbench plugin that makes complex animation a breeze in Minecraft: Java Edition.
				</h3>
			</div>
		</div>
	</div>

	<div class="panel-container">
		{#each PANELS as panel, i}
			<div class={`panel ${i % 2 == 0 ? 'left' : 'right'}-panel`}>
				{#if i % 2 == 0}
					<img src={panel.image} alt={panel.title} />
				{/if}
				<div>
					<h2>
						{panel.title}
						<!-- <span>{panel.description}</span> -->
					</h2>
					<hr />
					<p>{panel.description}</p>
				</div>
				{#if i % 2 == 1}
					<img src={panel.image} alt={panel.title} />
				{/if}
				<div
					class="in-view"
					use:inView
					on:enter={(e) => {
						if (e.target.parentElement.classList.contains('panel-fade-in')) return
						e.target.parentElement.classList.add('panel-fade-in')
					}}
				/>
			</div>
		{/each}
	</div>

	<div class="made-with-aj">
		<h2 class="section-title">Made with Animated Java!</h2>
		<hr />
		<div class="center-container">
			<Carousel></Carousel>
		</div>
	</div>

	<!-- <div class="discord-widget-container">
		<Button>
			<svelte:component this={MaterialSymbolsClose} />
		</Button>
		<iframe
			class="discord-widget"
			title="Discord Widget"
			src="https://discord.com/widget?id=785339959518953482&theme=dark"
			width="350"
			height="350"
			allowtransparency="true"
			frameborder="200"
			sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
			in:fly|global={{ y: 100, duration: 1000, delay: 1000 }}
		></iframe>
	</div> -->
</div>

<style>
	/* :global(.discord-widget-container) {
		position: fixed;
		bottom: 16px;
		right: 16px;
		background-color: rgb(88, 101, 242);
		border-radius: 16px;
		padding-top: 1rem;
	}
	:global(.discord-widget-container > button) {
		position: absolute;
		top: 0.25rem;
		right: -0.5rem;
	}
	.discord-widget {
		border-radius: 16px;
	}
	.discord-widget :global(.widgetBody-38iyIo) {
		display: none;
	} */

	.in-view {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		/* border: 1px solid red; */
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
	}
	.left-panel {
		align-self: flex-start;
		display: flex;
		flex-direction: row;
		/* Transition Effects */
		opacity: 0;
		transform: translateX(-10%);
	}
	.right-panel {
		align-self: flex-end;
		display: flex;
		flex-direction: row;
		/* Transition Effects */
		opacity: 0;
		transform: translateX(10%);
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
	.panel-fade-in {
		transition:
			opacity 1s ease,
			transform 1s ease;
		opacity: 1;
		transform: translateX(0);
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

	.header-container {
		display: flex;
		align-items: center;
		margin: 6rem 0 0rem 0;
	}
	.header-container div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 2rem;
	}
	.header-container img {
		width: 192px;
		border-radius: 16px;
		box-shadow: 4px 4px 8px -4px black;
	}
	.header-container h1 {
		margin: 0px;
		font-size: 3rem;
	}
	.header-container h3 {
		margin: 0px;
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
		.header-container {
			flex-direction: column;
			margin: 2rem 0 0 0;
		}
		.header-container > div {
			margin-left: unset;
		}
		.header-container img {
			width: 128px;
		}
		.header-container h1 {
			font-size: 2.5rem;
			text-align: center;
			margin-bottom: 0.75rem;
		}
		.header-container h3 {
			font-size: 1.25rem;
			text-align: center;
		}
		.page {
			margin: 0px 16px 0 16px;
		}
		.panel-container {
			margin-top: 2rem;
		}
		.made-with-aj {
			margin-top: 4rem;
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
