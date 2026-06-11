<script lang="ts">
	import MinecraftIcon from './minecraftIcon.svelte'
</script>

<section class="footer">
	<p>© 2026 Titus Evans. All rights reserved.</p>
	<p>Animated Java is not affiliated with Mojang Studios.</p>
	<p>
		This website uses <a href="https://github.com/FuncFusion/mc-dp-icons-assets"
			><MinecraftIcon path="icons/current/generic_folder_closed.svg"></MinecraftIcon> DP Icons</a
		>
	</p>
</section>

<style>
	.footer {
		text-align: center;
		font-size: 14px;
		color: #ffffff55;
		margin-top: 48px;
		align-self: end;
		margin-bottom: 16px;
	}

	.footer p {
		margin: 0;
	}

	.footer a {
		color: #00acedaa;
		text-decoration: underline;
		display: inline-flex;
		align-items: center;
	}

	.footer a :global(div) {
		margin-right: 2px;
	}
</style>
