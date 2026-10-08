import { PREFIXED_LANGUAGES } from '$lib/docs/docs'
import type { ParamMatcher } from '@sveltejs/kit'

export const match: ParamMatcher = param => PREFIXED_LANGUAGES.includes(param)
