<script lang="ts">
	import { getLanguageName } from '$lib/docs/docs'
	import { getAdmonitionIconUrl } from '$lib/docs/remark-admonitions'

	const TRANSLATION_GUIDE_URL =
		'https://github.com/Animated-Java/animated-java.github.io/blob/main/CONTRIBUTING.md#translating-the-docs'

	const { data } = $props()
</script>

{#if !data.translated}
	<aside class="admonition admonition-info" lang="en">
		<p class="admonition-title">
			<img class="admonition-icon" src={getAdmonitionIconUrl('info')} alt="" />
			Not translated yet
		</p>
		<div class="admonition-content">
			<p>
				This page isn't available in {getLanguageName(data.lang, 'en')} yet, so it's shown in
				English.
			</p>
			<p>
				Want to help? Check out the
				<a href={TRANSLATION_GUIDE_URL}>translation guide</a>.
			</p>
		</div>
	</aside>
{/if}

<data.component />
