<script lang="ts">
</script>

<div class="page">
	<div class="center-container">
		<div class="header-container">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="/img/animated_java_icon.svg" />
			<div>
				<h1>Uh oh :(</h1>
				<p>Something's missing here.</p>
			</div>

		</div>
	</div>
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
	hr {
		width: 100%;
		margin: 0rem 0 0.5rem 0;
		border: 1px solid rgb(var(--kd-color-brand));
	}

	@media (max-width: 768px) {
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
	}
</style>
