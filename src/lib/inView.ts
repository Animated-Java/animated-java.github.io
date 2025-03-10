interface ISetObserverOptions {
	root?: HTMLElement
	top?: number
	bottom?: number
}

export function inView(node: HTMLElement, options: ISetObserverOptions = {}) {
	let observer: IntersectionObserver

	const handleIntersect: IntersectionObserverCallback = e => {
		const v = e[0].isIntersecting ? 'enter' : 'exit'
		node.dispatchEvent(new CustomEvent(v))
	}

	const setObserver = ({ root, top, bottom }: ISetObserverOptions) => {
		const marginTop = top ? top * -1 : 0
		const marginBottom = bottom ? bottom * -1 : 0
		const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`
		const options = { root, rootMargin }
		if (observer) observer.disconnect()
		observer = new IntersectionObserver(handleIntersect, options)
		observer.observe(node)
	}

	setObserver(options)

	return {
		update(args: ISetObserverOptions) {
			setObserver(args)
		},

		destroy() {
			if (observer) observer.disconnect()
		},
	}
}
