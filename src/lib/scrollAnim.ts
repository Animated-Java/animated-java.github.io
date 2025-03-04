import { quartOut } from 'svelte/easing'

interface IScrollAnimatorOptions {
	x?: number
	yOffset?: number
	opacity?: number
	scale?: number
	rate?: number
	easing?: (t: number) => number
}

export function scrollAnimator(element: HTMLElement, options: IScrollAnimatorOptions = {}) {
	const rect = element.getBoundingClientRect()
	const docRect = document.body.getBoundingClientRect()
	element.style.opacity = '0'
	element.style.transition = 'opacity 0.1s ease, transform 0.1s ease'

	const rate = options.rate || 1

	let top = rect.top - docRect.top - window.innerHeight / 2
	if (options.yOffset) top += options.yOffset
	else top += -rect.height / 2

	const moveX = options.x || 0
	const scale = options.scale

	const updateTransform = (t: number) => {
		t = (options.easing ?? quartOut)(t)
		const x = -moveX + moveX * t
		let s = 1
		if (scale) {
			s = scale + (1 - scale) * t
		}
		element.style.transform = `translateX(${x}px) scale(${s})`
	}

	const updateOpacity = (t: number) => {
		element.style.opacity = `${Math.min(t * 1.25, 1)}`
	}

	const observer = () => {
		const scroll = window.scrollY
		const localScroll = Math.min(Math.max(scroll - top, 0), rect.height)
		const percent = Math.min(Math.max(localScroll / (rect.height * rate), 0), 1)
		updateTransform(percent)
		updateOpacity(percent)
	}

	let intervalID: number | undefined
	const setObserver = ({}: IScrollAnimatorOptions) => {
		if (intervalID) clearInterval(intervalID)
		intervalID = setInterval(observer, 16)
		observer()
	}

	setObserver(options)

	return {
		update(args: IScrollAnimatorOptions) {
			setObserver(args)
		},

		destroy() {
			if (intervalID) clearInterval(intervalID)
		},
	}
}
