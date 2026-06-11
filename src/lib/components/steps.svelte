<script lang="ts">
	interface Props {
		steps: Array<{
			title: string
			description: string
			image?: string
			imageSlot?: 'side' | 'below'
		}>
	}
	let { steps }: Props = $props()
</script>

{#snippet stepSnippet(
	title: string,
	description: string,
	image?: string,
	imageSlot: 'side' | 'below' = 'side'
)}
	<div>
		<div class="step">
			<div>
				<h3>{title}</h3>
				<p>{@html description}</p>
			</div>
			{#if image && imageSlot === 'side'}
				<img src={image} alt={title} />
			{/if}
		</div>
		{#if image && imageSlot === 'below'}
			<img src={image} alt={title} />
		{/if}
	</div>
{/snippet}

<div class="steps">
	{#each steps as step (step.title)}
		{@render stepSnippet(step.title, step.description, step.image, step.imageSlot)}
	{/each}
</div>

<style>
	.steps {
		display: flex;
		flex-direction: column;
		border-left: 2px dashed #555555;
		padding-left: 16px;
		gap: 32px;
	}

	.step {
		display: flex;
		flex-direction: row;
		gap: 16px;
	}

	.step h3 {
		font-size: 24px;
		margin: 0;
	}

	.step p {
		font-size: 18px;
		max-width: 600px;
		padding-left: 16px;
		border-left: 2px solid #00aced;
	}
</style>
