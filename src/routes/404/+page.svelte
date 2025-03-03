<script lang="ts">
	export const flavorQuotes = [
		`Uh oh!`,
		`Time to fire up the ol' debugger!`,
		`Your item displays are sad 🥺`,
		`Skill Issue.`,
		`Should'a seen that one comming...`,
		`Snaviewavie did an oopsie poopsie x3`,
		`We to a little trolling.`,
		`execute run execute run execute run execute run say This is fine.`,
		`This is why we can't have nice things. :(`,
		`Have you tried turning it off and on again?`,
		`What if I put my command block next to yours? Haha just kidding... Unless?`,
		`If at first you don't succeed, try, try again!`,
		// We do a little trolling in binary.
		`B:01010111 01100101 00100000 01100100 01101111 00100000 01100001 00100000 01101100 01101001 01110100 01110100 01101100 01100101 00100000 01110100 01110010 01101111 01101100 01101100 01101001 01101110 01100111`,
		`I've decided to stop working for today. Try again tomorrow!`,
		`Every time you see this error message, a developer vanishes in a puff of binary.`,
		`"Flavor Text"? I've never tasted text before...`,
		`( ͡° ͜ʖ ͡°) nice 404 page you got there.`,
		`Some day you'll learn. But until then, I control the cheese.`,
		`Please deposit 5 coins!`,
		`Failed to find global 'pandemic'.`,
		`I'm sorry, Dave. I'm afraid I can't do that.`,
		`<a href="https://xkcd.com/221/"><img src="https://imgs.xkcd.com/comics/random_number.png" alt="https://xkcd.com/221/"/></a>`
	]

	function getRandomFlavorQuote() {
		return flavorQuotes[Math.floor(Math.random() * flavorQuotes.length)]
	}
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
		<q class="quote"><span>{@html getRandomFlavorQuote()}</span></q>
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
