<script lang="ts">
	import clsx from 'clsx';

	// @ts-expect-error
	import NoteIcon from '~icons/ri/sticky-note-fill';
	// @ts-expect-error
	import HeroiconsSolidCode from '~icons/heroicons-solid/code';
	// @ts-expect-error
	import TipIcon from '~icons/ri/lightbulb-flash-fill';
	// @ts-expect-error
	import WarningIcon from '~icons/ri/error-warning-fill';
	// @ts-expect-error
	import DangerIcon from '~icons/ri/skull-2-fill';
	// @ts-expect-error
	import ExperimentalIcon from '~icons/ri/test-tube-fill';
	import { getI18nContext } from '@svelteness/kit-docs';

	export let type: 'note' | 'info' | 'tip' | 'warning' | 'danger' | 'experimental';
	export let title: string | null = null;

	const i18n = getI18nContext();

	const icons = {
		note: NoteIcon,
		info: HeroiconsSolidCode,
		tip: TipIcon,
		warning: WarningIcon,
		danger: DangerIcon,
		experimental: ExperimentalIcon
	};

	$: heading = title ?? $i18n.admonition[type];
</script>

<div
	class={clsx(
		'admonition bg-elevate my-8 mx-auto rounded-md border-2 border-l-8 p-4',
		type === 'note' && 'border-pink-600 dark:border-pink-400',
		type === 'info' && 'border-blue-600 dark:border-blue-400',
		type === 'tip' && 'border-green-600 dark:border-green-400',
		type === 'warning' && 'border-yellow-600 dark:border-yellow-400',
		type === 'danger' && 'border-red-600 dark:border-red-400',
		type === 'experimental' && 'border-indigo-600 dark:border-indigo-400'
	)}
>
	<div
		class={clsx(
			'flex h-full items-center font-bold',
			type === 'note' && 'text-pink-600 dark:text-pink-400',
			type === 'info' && 'text-blue-600 dark:text-blue-400',
			type === 'tip' && 'text-green-600 dark:text-green-400',
			type === 'warning' && 'text-yellow-600 dark:text-yellow-400',
			type === 'danger' && 'text-red-600 dark:text-red-400',
			type === 'experimental' && 'text-indigo-600 dark:text-indigo-400'
		)}
	>
		<svelte:component this={icons[type]} class="mr-1.5 text-xl" />
		<span class="flex items-center">
			{heading}
		</span>
	</div>

	<div class="text-inverse pl-1 text-lg">
		<slot />
	</div>
</div>
