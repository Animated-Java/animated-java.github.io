<script lang="ts" context="module">
	import { Button } from '@svelteness/kit-docs';
</script>

<script lang="ts">
	import Youtube from 'svelte-youtube-embed';
	import { writable } from 'svelte/store';

	let index = writable(0);

	const VIDEOS = [
		'fthlphRmsjY',
		'dd7pqAPd-p0',
		'M2R3zgvbZ30',
		'0UCrI7NJ5KI',
		'0xPyRA-he5c',
		'CO2kYUMpYPk',
		'fs0NUGmsa10',
		'4VlwyI0EHo4'
	];

	async function getYoutubeVideoTitle(id: string) {
		const res = await fetch(
			`//www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
		);
		const videoInfo = await res.json();

		return videoInfo?.title;
	}
</script>

<div class="container">
	<Youtube id={VIDEOS[$index]} animations={false} />
	<div class="grid">
		{#each VIDEOS as id}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="thumbnail-container"
				on:click={(e) => {
					index.set(VIDEOS.indexOf(id));
				}}
			>
				<Button class="thumbnail-button">
					<div
						class="thumbnail-image"
						style={`background-image: url(https://img.youtube.com/vi/${id}/0.jpg);`}
					></div>
					{#await getYoutubeVideoTitle(id)}
						<p>Loading...</p>
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
	.thumbnail-image {
		min-height: 148px;
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
		text-align: left;
		font-size: 1.5rem;
		backdrop-filter: blur(4px);
		background: rgba(var(--kd-color-elevate) / 0.5) !important;
		padding-bottom: 0.25rem;
		text-transform: capitalize;
	}
</style>
