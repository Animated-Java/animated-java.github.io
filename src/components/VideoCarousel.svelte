<script lang="ts" context="module">
	import { Button } from '@svelteness/kit-docs'
</script>

<script lang="ts">
	import Youtube from 'svelte-youtube-embed'
	import { writable } from 'svelte/store'

	let index = writable(0)
	let container: HTMLDivElement

	const VIDEOS = [
		'RFwAM5v5QoQ', // I Coded Minecraft’s Hardest Difficulty
		'dd7pqAPd-p0', // Phantom Manor
		'XdABXLbS_ok', // I Coded Five Nights at Freddy's in Minecraft
		'M2R3zgvbZ30', // How to Mine a Tree
		'biJ41HIeu3E', // Minecraft: Fabled Lands - Lord Veridian Boss Fight
		'0UCrI7NJ5KI', // New Boss Test
		'0xPyRA-he5c', // Cataclysmic Emissary
		'fthlphRmsjY', // I Added Mr Beast to Minecraft...
		'yfaQM3aHgxE', // Mordecai the Unending
		'CO2kYUMpYPk', // Excuse me Sir
		'-6pLFvW5_Dk', // Camera Animation Test
		'sC3FqzpDrpQ', // Diamond Golem
		'fs0NUGmsa10', // Butter Dog
		'4VlwyI0EHo4' // Funny Mobile Game
	]

	async function getYoutubeVideoTitle(id: string) {
		const res = await fetch(
			`//www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
		)
		const videoInfo = await res.json()
		return videoInfo?.title
	}

	function setSelectedVideo(id: string) {
		$index = VIDEOS.indexOf(id)
		container?.scrollIntoView({ behavior: 'smooth' })
	}
</script>

<div class="container" bind:this={container}>
	<Youtube id={VIDEOS[$index]} animations={false} />
	{#await getYoutubeVideoTitle(VIDEOS[$index])}
		<p class="main-title loading">Loading Title...</p>
	{:then title}
		<p class="main-title">{title}</p>
	{:catch error}
		<!--  -->
	{/await}
	<!-- {#key $index}
	{/key} -->
	<div class="grid">
		{#each VIDEOS as id}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="thumbnail-container"
				on:click={() => {
					setSelectedVideo(id)
				}}
			>
				<Button class="thumbnail-button">
					<div
						class="thumbnail-image"
						style={`background-image: url(https://img.youtube.com/vi/${id}/0.jpg);`}
					></div>
					{#await getYoutubeVideoTitle(id)}
						<p class="loading">Loading Title...</p>
					{:then title}
						<p>{title}</p>
					{:catch error}
						<!--  -->
					{/await}
				</Button>
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
	}
	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
		margin-top: 2rem;
		gap: 0.5rem;
	}
	p {
		text-align: center;
		text-transform: capitalize;
	}
	.thumbnail-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.thumbnail-container :global(button span) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.thumbnail-image {
		height: 148px;
		aspect-ratio: 16 / 9;
		background-size: cover;
		background-position: center;
		border-radius: 8px;
		box-shadow: 2px 2px 8px -4px black;
	}
	:global(.you__tube) {
		border-radius: 16px;
		box-shadow: 2px 2px 8px -4px black;
	}
	:global(.v__title) {
		display: none;
		text-align: left;
		font-size: 1.5rem;
		backdrop-filter: blur(4px);
		background: rgba(var(--kd-color-elevate) / 0.5) !important;
		padding-bottom: 0.25rem;
		text-transform: capitalize;
	}
	.main-title {
		font-size: 1.5rem;
		text-align: center;
	}
	.loading {
		color: rgb(139, 139, 139);
	}

	@media (max-width: 768px) {
		.grid {
			grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
		}
		.thumbnail-image {
			width: 128px;
			height: 72px;
		}
		.thumbnail-container p {
			text-align: center;
			text-transform: capitalize;
			max-width: 128px;
			font-size: 0.9rem;
		}
		:global(.v__title) {
			font-size: 1rem;
		}
	}
</style>
