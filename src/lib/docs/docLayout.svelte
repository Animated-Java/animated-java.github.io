<!--
	@component
	mdsvex layout for every doc page. Its module exports replace the matching
	markdown elements, so `a` makes doc links follow the current language.
-->
<script module lang="ts">
	export { default as a } from './docLink.svelte'
</script>

<script lang="ts">
	import type { Snippet } from 'svelte'

	const { children }: { children?: Snippet } = $props()
</script>

{@render children?.()}
