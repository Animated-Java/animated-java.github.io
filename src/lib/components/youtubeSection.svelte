<script lang="ts">
	import Youtube from 'svelte-youtube-embed'
	import { fade } from 'svelte/transition'

	const VIDEOS = [
		'RFwAM5v5QoQ', // I Coded Minecraft’s Hardest Difficulty
		'dd7pqAPd-p0', // Phantom Manor
		'66eQ9RkyVLI', // Eternity's Divide Showcase
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
		'4VlwyI0EHo4', // Funny Mobile Game
	]

	let selectedVideo = $state(VIDEOS[0])
	let sectionElement: HTMLElement | null = null

	function selectVideo(video: string) {
		selectedVideo = video
		sectionElement?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	}
</script>

<section
	bind:this={sectionElement}
	class="youtube-section"
	aria-label="Animated Java YouTube videos"
	in:fade={{ duration: 800, delay: 1200 }}
>
	<h2>
		<div>See</div>
		<div>Animated Java</div>
		<div>in Action</div>
	</h2>
	<div class="minecraft-box container">
		<div class="minecraft-inset-box youtube-container">
			{#key selectedVideo}
				<Youtube id={selectedVideo} animations={false} />
			{/key}
		</div>
		<div class="video-grid">
			{#each VIDEOS as video}
				<button
					class="video-button minecraft-inset-box"
					onclick={() => selectVideo(video)}
					aria-pressed={selectedVideo === video}
				>
					<img
						src={`https://img.youtube.com/vi/${video}/mqdefault.jpg`}
						alt="YouTube video thumbnail"
					/>
				</button>
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
		padding: 0px 16px;
	}

	@media (width < 480px) {
		section {
			padding: 32px 16px;
		}
	}

	@media (width < 750px) {
		h2 {
			flex-direction: column !important;
		}
	}

	h2 {
		display: flex;
		flex-direction: row;
		font-family: var(--minecraft-font);
		font-weight: normal;
		gap: 0.75em;
		align-items: center;
	}

	h2 div {
		font-size: 32px;
		display: block;
	}

	@media (width >= 750px) {
		h2::after {
			content: '↓';
			animation: bounce 2s infinite;
			display: inline-block;
			margin-left: 1rem;
		}
		h2::before {
			content: '↓';
			animation: bounce 2s infinite;
			display: inline-block;
			margin-right: 1rem;
		}
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(10px);
		}
	}

	.container {
		background: linear-gradient(140deg, #00acedcc 0%, #01678ccc 100%);
	}

	.youtube-container {
		margin: 16px;
		padding: 0;
		aspect-ratio: 16 / 9;
		width: 80vw;
	}

	.video-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 180px), 1fr));
		gap: 12px;
		padding: 0 16px 16px;
		align-items: stretch;
	}

	.video-button {
		border: none;
		padding: 0;
		cursor: pointer;
		width: 100%;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		transition:
			transform 120ms ease,
			filter 120ms ease;
	}

	.video-button:hover {
		transform: translateY(-2px);
		filter: brightness(1.08);
	}

	.video-button[aria-pressed='true'] {
		outline: 3px solid #9fe9ff;
	}

	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border: none;
	}

	@media (width < 640px) {
		.video-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
