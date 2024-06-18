<script lang="ts">
	export let text: string;
</script>

<span>
	{#each text.split('') as letter, i}
		<span class="wiggly-text" style="animation-delay:{-5000 + i * 75}ms"
			>{@html letter === ' ' ? '&nbsp;' : letter}</span
		>
	{/each}
</span>

<style>
	@keyframes wave {
		0% {
			transform: translatey(-1px);
		}
		50% {
			transform: translatey(1px);
		}
		100% {
			transform: translatey(-1px);
		}
	}
	.wiggly-text {
		display: inline-block;
		animation: wave 1.5s infinite;
		animation-timing-function: ease-in-out;
	}
</style>
