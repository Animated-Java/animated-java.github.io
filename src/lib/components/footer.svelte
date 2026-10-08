<script lang="ts">
	import MinecraftIcon from './minecraftIcon.svelte'
</script>

<section class="footer minecraft-box">
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
		display: grid;
		gap: 4px;
		width: fit-content;
		max-width: calc(100% - 32px);
		box-sizing: border-box;
		margin: 48px auto 16px;
		padding: 12px 24px 14px;
		align-self: end;
		text-align: center;
		font-size: 14px;
		color: var(--minecraft-text-subtle-color);
	}

	.footer p {
		margin: 0;
	}

	.footer a {
		color: #6ed8ff;
		text-decoration: underline;
		display: inline-flex;
		align-items: center;
	}

	.footer a :global(i) {
		width: 20px;
		margin-right: 4px;
	}
</style>
