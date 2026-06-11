<script lang="ts">
	interface Props {
		path: string
	}
	const { path }: Props = $props()
</script>

<i>
	<img
		src={`https://github.com/FuncFusion/mc-dp-icons-assets/blob/main/${path}?raw=true`}
		alt={path}
	/>
</i>

<style>
	i {
		width: 32px;
		margin-right: 8px;
		vertical-align: middle;
	}
	img {
		width: 100%;
		image-rendering: pixelated;
		vertical-align: middle;
	}
</style>
