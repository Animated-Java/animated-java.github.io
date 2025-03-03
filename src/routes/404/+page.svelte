<script lang="ts">
	import { page } from '$app/stores'

	const flavorQuote = $page.data.flavorQuote as string
</script>

<div class="page">
	<div class="center-container">
		<div class="header-container">
			<img src="/img/animated_java_icon.svg" alt="Animated Java icon" />
			<div>
				<h1>Uh oh :(</h1>
				<p>Looks like that page doesn't exist!</p>
				<p>
					Try <a href="/docs">searching our documentation</a> or return to the
					<a href="/">home page</a>.
				</p>
			</div>
		</div>
		<q class="quote"><span>{@html flavorQuote}</span></q>
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
	a {
		color: var(--tw-prose-links);
		text-decoration: none;
		font-weight: 400;
		border-bottom: 1px solid rgb(var(--kd-color-brand));
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
		margin-top: 2rem;
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

	q {
		margin: 1rem 0;
		color: var(--kd-color-subtle);
		font-size: 1.25rem;
		font-style: italic;
	}

	q span {
		margin: 0 0.25em;
	}

	@media (max-width: 768px) {
		.header-container {
			flex-direction: column;
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
