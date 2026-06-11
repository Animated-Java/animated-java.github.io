export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33'),
	() => import('./nodes/34'),
	() => import('./nodes/35'),
	() => import('./nodes/36')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/404": [3],
		"/discord": [4],
		"/docs": [5],
		"/docs/[...2]getting-started/[...3]creating-a-blueprint": [7],
		"/docs/[...2]getting-started/[...4]exporting-your-blueprint": [8],
		"/docs/[...2]getting-started/[...2]installing-animated-java": [6],
		"/docs/[...6]legacy-releases/[...2]installing": [32],
		"/docs/[...6]legacy-releases/[...4]legacy-armorstands": [34],
		"/docs/[...6]legacy-releases/[...3]legacy-beta": [33],
		"/docs/[...6]legacy-releases/[...1]versions": [31],
		"/docs/[...5]resources/[...1]faq": [26],
		"/docs/[...5]resources/[...3]installing-pre-releases": [28],
		"/docs/[...5]resources/[...4]migrating-from-older-versions": [29],
		"/docs/[...5]resources/[...5]plugin-json": [30],
		"/docs/[...5]resources/[...2]tutorials/stacking-rigs": [27],
		"/docs/[...4]rigs/[...6]cameras": [24],
		"/docs/[...4]rigs/[...3]controlling-a-rig-instance": [21],
		"/docs/[...4]rigs/[...4]controlling-animation-playback": [22],
		"/docs/[...4]rigs/[...5]locators": [23],
		"/docs/[...4]rigs/[...1]overview": [19],
		"/docs/[...4]rigs/[...2]summoning-a-new-rig-instance": [20],
		"/docs/[...4]rigs/[...7]tags": [25],
		"/docs/[...3]the-blueprint-format/[...5]animations": [14],
		"/docs/[...3]the-blueprint-format/[...8]block-displays": [17],
		"/docs/[...3]the-blueprint-format/[...4]bones": [13],
		"/docs/[...3]the-blueprint-format/[...10]cameras": [9],
		"/docs/[...3]the-blueprint-format/[...7]item-displays": [16],
		"/docs/[...3]the-blueprint-format/[...6]locators": [15],
		"/docs/[...3]the-blueprint-format/[...1]overview": [10],
		"/docs/[...3]the-blueprint-format/[...2]settings": [11],
		"/docs/[...3]the-blueprint-format/[...9]text-displays": [18],
		"/docs/[...3]the-blueprint-format/[...3]variants": [12],
		"/source": [35],
		"/support-us": [36]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';