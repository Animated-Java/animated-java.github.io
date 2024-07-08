/// <reference types="@svelteness/kit-docs/globals" />
import type { CompositionEventHandler } from 'svelte/elements'

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	declare namespace svelteHTML {
		interface HTMLProps<T> {
			'on:enter'?: CompositionEventHandler<T>
			'on:exit'?: CompositionEventHandler<T>
		}
	}
}

export {}
