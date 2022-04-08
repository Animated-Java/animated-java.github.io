function hash(str) {
	let hash = 0,
		i,
		chr
	for (i = 0; i < str.length; i++) {
		chr = str.charCodeAt(i)
		hash = (hash << 5) - hash + chr
		hash |= 0 // Convert to 32bit integer
	}
	return hash
}
export function getKeyFor(key) {
	if (process.env.NODE_ENV === 'development') return 'DEV<' + key + '>'
	return 'PROD<' + key + '>'
}
export function getKeyFactoryFor(type) {
	return key => getKeyFor(`${type}<${key}>`)
}
