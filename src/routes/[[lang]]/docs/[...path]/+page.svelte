<script lang="ts">
	interface Props {
		data: {
			lang: string
			path: string
		}
	}
	const { data }: Props = $props()
</script>

<div>Hello, world!</div>
<p>{data.lang}</p>
<p>{data.path}</p>
<p>{JSON.stringify(data)}</p>
