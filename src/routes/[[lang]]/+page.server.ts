import { SUPPORTED_LANGAUGES } from '$lib/docs/docs'
import type { EntryGenerator } from './$types'

export const entries: EntryGenerator = () => {
	return SUPPORTED_LANGAUGES.map(lang => ({ lang }))
}
