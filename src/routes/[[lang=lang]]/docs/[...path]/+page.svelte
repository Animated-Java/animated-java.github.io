<script lang="ts">
	import { getLanguageName } from '$lib/docs/docs'

	const { data } = $props()
</script>

{#if !data.translated}
	<aside class="admonition admonition-info" lang="en">
		<p class="admonition-title">Not translated yet</p>
		<div class="admonition-content">
			<p>
				This page isn't available in {getLanguageName(data.lang, 'en')} yet, so it's shown in
				English.
			</p>
		</div>
	</aside>
{/if}

<data.component />
