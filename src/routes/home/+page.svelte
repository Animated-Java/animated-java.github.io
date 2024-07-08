<script lang="ts">
	import Youtube from 'svelte-youtube-embed';
	import { onDestroy, onMount } from 'svelte';

	import { Button } from '@svelteness/kit-docs';
	import { inView } from '$lib';
	import Carousel from '../../components/VideoCarousel.svelte';

	let sidebar: HTMLElement | null;
	let main: HTMLElement | null;

	onMount(() => {
		sidebar = document.querySelector('.on-this-page');
		main = document.querySelector('main');
		if (sidebar) sidebar.style.display = 'none';
		if (main) main.style.overflow = 'visible';
	});

	onDestroy(() => {
		if (sidebar) sidebar.style.display = 'block';
		if (main) main.style.overflow = 'hidden';
	});

	const PANELS: Array<{ title: string; description: string; details: string; image: string }> = [
		{
			title: '100% Vanilla Minecraft!',
			description: 'No mods required!',
			details: 'Built for Map Makers and Data Pack Developers.',
			image: '/img/vanilla.png'
		},
		{
			title: 'Variants',
			description: 'Swap out textures on the fly!',
			details: 'Swap out textures on a Rig in-game with a single function call.',
			image: '/img/variants.gif'
		},
		{
			title: 'Advanced Easing Options',
			description: 'Make your animations pop!',
			details: 'Choose from a variety of easing options to make your animations more dynamic.',
			image: '/img/easing.gif'
		},
		{
			title: 'Vanilla Models',
			description: 'Create animations without a Resource Pack!',
			details:
				'Animated Java supports vanilla item and block models, allowing you to create animated models without a Resource Pack!',
			image: '/img/resourcepackless.png'
		},
		{
			title: 'Heavily Optimized',
			description: 'Worry less about performance!',
			details:
				'Animated Java has had hundreds of hours put into performance testing, and optimization. Worry less about performance and more about creating!',
			image: '/img/performance.png'
		}
	];
</script>

<div class="page">
	<div class="center-container">
		<div class="header-container">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="/img/animated_java_icon.svg" />
			<div>
				<h1>Welcome to Animated Java!</h1>
				<h3>
					A Blockbench plugin that makes complex animation a breeze in Minecraft: Java Edition.
				</h3>
			</div>
		</div>
	</div>

	<div class="panel-container">
		{#each PANELS as panel, i}
			<div
				class={`panel ${i % 2 == 0 ? 'left' : 'right'}-panel`}
				use:inView
				on:enter={(e) => {
					if (e.target.classList.contains('panel-fade-in')) return;
					e.target.classList.add('panel-fade-in');
				}}
			>
				{#if i % 2 == 0}
					<img src={panel.image} alt={panel.title} />
				{/if}
				<div>
					<h2>{panel.title} <span>- {panel.description}</span></h2>
					<hr />
					<p>{panel.details}</p>
				</div>
				{#if i % 2 == 1}
					<img src={panel.image} alt={panel.title} />
				{/if}
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
</div>

<style>
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
	.panel > div {
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
	}
	h2 span {
		font-size: 1rem;
		vertical-align: middle;
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
	hr {
		width: 100%;
		margin: 0rem 0 0.5rem 0;
		border: 1px solid rgb(var(--kd-color-brand));
	}
</style>
