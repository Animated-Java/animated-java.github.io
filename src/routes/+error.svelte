<script lang="ts">
	import { redirect } from '@sveltejs/kit'

	export const prerender = true

	throw redirect(302, '/404')
</script>
