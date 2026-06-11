import { SUPPORTED_LANGUAGES } from '$lib/docs/docs'
import type { EntryGenerator } from './$types'

export const entries: EntryGenerator = () => {
	return SUPPORTED_LANGUAGES.map(lang => ({ lang }))
}
