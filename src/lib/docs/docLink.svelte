<script lang="ts">
	import { page } from '$app/state'
	import { localizeHref } from '$lib/docs/docs'
	import type { Snippet } from 'svelte'
	import type { HTMLAnchorAttributes } from 'svelte/elements'

	interface Props extends HTMLAnchorAttributes {
		children?: Snippet
	}

	const { href, children, ...rest }: Props = $props()
</script>

<a href={localizeHref(href ?? '', page.params.lang)} {...rest}>{@render children?.()}</a>
