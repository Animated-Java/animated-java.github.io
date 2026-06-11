<script lang="ts">
	import { browser } from '$app/environment'
	import { afterNavigate, goto } from '$app/navigation'
	import { resolve } from '$app/paths'
	import Footer from '$lib/components/footer.svelte'
	import MinecraftIcon from '$lib/components/minecraftIcon.svelte'
	import { DEFAULT_LANGUAGE, docHref } from '$lib/docs/docs'
	import { onDestroy, onMount, setContext, tick } from 'svelte'

	interface TocHeading {
		id: string
		text: string
		level: 2 | 3
	}

	const { children, data } = $props()
	const siteUrl = 'https://animated-java.dev'
	const docsTitle = 'Animated Java Docs'
	const defaultDescription = 'Effortlessly craft complex animations for Minecraft: Java Edition'
	const socialImage = `${siteUrl}/images/animated_java_icon.svg`

	const lang = $derived(data.params.lang ?? DEFAULT_LANGUAGE)
	$effect(() => {
		setContext('lang', lang)
		console.log(`Current language set to: ${lang}`)
	})

	function handleClick(event: MouseEvent): void {
		const target = (event.target as HTMLElement).closest('a')
		if (!target) return
		const path = target.getAttribute('data-doc-link')
		if (!path) return

		event.preventDefault()
		const prefix = lang === DEFAULT_LANGUAGE ? '' : `/${lang}`
		void goto(resolve(`${prefix}/docs/${path}`))
	}

	const pageTitle = $derived(
		data.currentDoc?.title ? `${data.currentDoc.title} | ${docsTitle}` : docsTitle
	)
	const pageDescription = $derived(
		data.currentDoc?.title ? `${data.currentDoc.title}` : defaultDescription
	)
	const canonicalUrl = $derived(`${siteUrl}${data.currentPath ?? '/docs/welcome'}`)

	let tocHeadings = $state<TocHeading[]>([])
	let activeHeadingId = $state('')
	let isMobileNavOpen = $state(false)
	let isMobileSidebarOpen = $state(false)
	let headingObserver: IntersectionObserver | null = null
	let observedTargets: HTMLElement[] = []

	function getHeadingLevel(heading: HTMLHeadingElement): 2 | 3 {
		return heading.tagName === 'H3' ? 3 : 2
	}

	function collectTocHeadings(): void {
		if (!browser) return

		const headings = Array.from(
			document.querySelectorAll<HTMLHeadingElement>('.docs-content h2, .docs-content h3')
		)

		tocHeadings = headings
			.map(heading => {
				const text = heading.textContent?.trim() ?? ''
				if (!heading.id || !text) return null

				return {
					id: heading.id,
					text,
					level: getHeadingLevel(heading),
				}
			})
			.filter((heading): heading is TocHeading => heading !== null)

		const hashId = decodeURIComponent(window.location.hash.replace('#', ''))
		activeHeadingId =
			tocHeadings.find(heading => heading.id === hashId)?.id ?? tocHeadings[0]?.id ?? ''
	}

	function syncActiveHeadingFromScroll(): void {
		if (!browser || tocHeadings.length === 0) return

		const offsetTop = 140
		let candidateId = tocHeadings[0].id

		for (const heading of tocHeadings) {
			const element = document.getElementById(heading.id)
			if (!element) continue

			if (element.getBoundingClientRect().top <= offsetTop) {
				candidateId = heading.id
			} else {
				break
			}
		}

		activeHeadingId = candidateId
	}

	function setupHeadingObserver(): void {
		if (!browser) return

		headingObserver?.disconnect()
		observedTargets = []

		const targets = tocHeadings
			.map(heading => document.getElementById(heading.id))
			.filter((element): element is HTMLElement => element !== null)

		if (targets.length === 0) return
		observedTargets = targets

		headingObserver = new IntersectionObserver(
			entries => {
				const visible = entries
					.filter(entry => entry.isIntersecting)
					.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

				if (visible[0]?.target instanceof HTMLElement) {
					activeHeadingId = visible[0].target.id
				}
			},
			{
				rootMargin: '-15% 0px -70% 0px',
				threshold: [0.1, 0.5, 1],
			}
		)

		for (const target of targets) {
			headingObserver.observe(target)
		}
	}

	function handleTocClick(id: string): void {
		activeHeadingId = id
	}

	function handleHashChange(): void {
		if (!browser) return

		const hashId = decodeURIComponent(window.location.hash.replace('#', ''))
		if (hashId && tocHeadings.some(heading => heading.id === hashId)) {
			activeHeadingId = hashId
			return
		}

		syncActiveHeadingFromScroll()
	}

	function toggleMobileNav(): void {
		isMobileNavOpen = !isMobileNavOpen
	}

	function closeMobileNav(): void {
		isMobileNavOpen = false
	}

	function toggleMobileSidebar(): void {
		isMobileSidebarOpen = !isMobileSidebarOpen
	}

	function closeMobileSidebar(): void {
		isMobileSidebarOpen = false
	}

	async function refreshToc(): Promise<void> {
		await tick()
		collectTocHeadings()
		setupHeadingObserver()
		syncActiveHeadingFromScroll()
	}

	onMount(() => {
		window.addEventListener('scroll', syncActiveHeadingFromScroll, { passive: true })
		window.addEventListener('resize', syncActiveHeadingFromScroll)
		window.addEventListener('hashchange', handleHashChange)
		void refreshToc()
	})

	afterNavigate(() => {
		closeMobileNav()
		closeMobileSidebar()
		void refreshToc()
	})

	onDestroy(() => {
		headingObserver?.disconnect()
		for (const target of observedTargets) {
			headingObserver?.unobserve(target)
		}

		if (browser) {
			window.removeEventListener('scroll', syncActiveHeadingFromScroll)
			window.removeEventListener('resize', syncActiveHeadingFromScroll)
			window.removeEventListener('hashchange', handleHashChange)
		}
	})
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<link rel="canonical" href={canonicalUrl} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Animated Java" />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={socialImage} />

	<meta content="#00ACED" data-react-helmet="true" name="theme-color" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />
	<meta name="twitter:image" content={socialImage} />
</svelte:head>

<svelte:window onclick={handleClick} />

<div class="docs-shell">
	<header class="docs-header minecraft-box">
		<a href="/" class="brand-link">
			<img
				src="/images/animated_java_icon.svg"
				alt="Animated Java logo"
				width="64"
				height="64"
			/>
			<span>Animated Java</span>
		</a>
		<button
			type="button"
			class="docs-nav-toggle minecraft-button"
			aria-label="Toggle primary navigation"
			aria-controls="docs-primary-nav"
			aria-expanded={isMobileNavOpen}
			onclick={toggleMobileNav}
		>
			☰ Menu
		</button>
		<nav
			id="docs-primary-nav"
			class={`docs-nav ${isMobileNavOpen ? 'open' : ''}`}
			aria-label="Primary navigation"
		>
			{#each data.docsNavLinks as link}
				<a
					class="minecraft-button {data.currentPath === link.to ? 'active' : ''}"
					onclick={closeMobileNav}
					href={link.to}
				>
					{#if link.icon}
						<MinecraftIcon path={link.icon} />
					{/if}
					{link.title}
				</a>
			{/each}
		</nav>
	</header>

	<div class="docs-body">
		<aside class="docs-sidebar minecraft-box" aria-label="Documentation sidebar">
			<button
				type="button"
				class="docs-sidebar-toggle minecraft-button"
				aria-label="Toggle documentation sidebar"
				aria-controls="docs-sidebar-content"
				aria-expanded={isMobileSidebarOpen}
				onclick={toggleMobileSidebar}
			>
				☰ Sidebar
			</button>

			<div
				id="docs-sidebar-content"
				class={`docs-sidebar-content ${isMobileSidebarOpen ? 'open' : ''}`}
			>
				{#each data.docsSidebar as section}
					<section class="sidebar-section">
						{#if section.to}
							<a
								class={`section-link ${data.currentPath === section.to ? 'active' : ''}`}
								onclick={closeMobileSidebar}
								href={docHref(section.to, lang)}
								>{section.title}

								{#if data.currentPath === section.to}
									<i class="minecraft-left-arrow"></i>
								{/if}
							</a>
						{:else}
							<h2>{section.title}</h2>
						{/if}

						{#if section.items}
							<ul>
								{#each section.items as item}
									<li>
										<a
											class:active={data.currentPath === item.to}
											onclick={closeMobileSidebar}
											href={docHref(item.to, lang)}
											>{item.title}

											{#if data.currentPath === item.to}
												<i class="minecraft-left-arrow"></i>
											{/if}
										</a>
									</li>
								{/each}
							</ul>
						{/if}
					</section>
				{/each}
			</div>
		</aside>

		<main class="docs-main">
			<article class="docs-content minecraft-box">
				{@render children?.()}
			</article>

			{#if data.previous ?? data.next}
				<nav class="docs-pagination" aria-label="Previous and next page links">
					{#if data.previous}
						<a class="minecraft-button" href={docHref(data.previous.to, lang)}
							>&larr; {data.previous.title}</a
						>
					{:else}
						<div></div>
					{/if}

					{#if data.next}
						<a class="minecraft-button" href={docHref(data.next.to, lang)}
							>{data.next.title} &rarr;</a
						>
					{/if}
				</nav>
			{/if}

			<Footer></Footer>
		</main>

		{#if tocHeadings.length > 0}
			<aside class="docs-on-this-page minecraft-box" aria-label="On this page">
				<h2>On this page</h2>
				<ul>
					{#each tocHeadings as heading}
						<li>
							<a
								href={`#${heading.id}`}
								onclick={() => handleTocClick(heading.id)}
								class={`toc-link ${heading.level === 3 ? 'depth-3' : ''} ${activeHeadingId === heading.id ? 'active' : ''}`}
							>
								{heading.text}
							</a>
						</li>
					{/each}
				</ul>
			</aside>
		{/if}
	</div>
</div>

<style>
	.docs-shell {
		margin: 0 auto;
		padding: 16px;
		display: grid;
		gap: 16px;
	}

	.docs-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		padding: 14px;
	}

	.brand-link {
		display: flex;
		align-items: center;
		gap: 12px;
		font-size: 24px;
		text-decoration: none;
		font-family: var(--minecraft-font);
		text-wrap: nowrap;
	}

	.brand-link span {
		font-size: 24px;
		background: linear-gradient(45deg, #00aced, #6ed8ff);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.docs-nav {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		justify-content: flex-end;
	}

	.docs-nav-toggle {
		display: none;
		font-family: var(--minecraft-font);
		font-size: var(--font-size-small);
		line-height: 1;
	}

	.docs-nav a {
		font-family: var(--minecraft-font);
		font-size: var(--font-size-small);
		text-decoration: none;
		color: var(--minecraft-button-text-color);
	}

	.docs-nav a.active {
		color: var(--minecraft-text-color);
		background-color: #00aced;
		/* prettier-ignore */
		box-shadow:
			0px 0px 0 4px #ffffff55 inset,
			0 0 0 4px #1e1e1f;
		padding: calc(4px + 8px) 16px calc(8px + 4px) 16px;
		margin-top: 12px;
	}

	.docs-nav a.active::after {
		content: '';
		display: block;
		position: relative;
		bottom: -12px;
		margin: -4px 0 0 0;
		border-bottom: 4px solid var(--minecraft-text-color);
	}

	.docs-body {
		display: grid;
		grid-template-columns: minmax(220px, 280px) minmax(0, 1fr) minmax(200px, 260px);
		gap: 16px;
	}

	.docs-sidebar {
		position: sticky;
		top: 10px;
		height: fit-content;
		max-height: 85vh;
		overflow: auto;
		padding: 12px 0px;
	}

	.docs-sidebar-toggle {
		display: none;
		font-family: var(--minecraft-font);
		font-size: var(--font-size-small);
		line-height: 1;
	}

	.docs-sidebar-content {
		display: block;
	}

	.sidebar-section {
		padding: 0px 16px;
	}

	.sidebar-section + .sidebar-section {
		margin-top: 8px;
		padding: 16px 16px;

		border-top: 4px solid var(--minecraft-border-bottom-color);
		box-shadow: inset 0 4px 0 0 var(--minecraft-border-top-color);
	}

	.sidebar-section h2 {
		font-family: var(--minecraft-font);
		font-size: var(--font-size-medium);
		font-weight: normal;
		margin-top: 0px;
		margin-bottom: 8px;
		line-height: 2rem;
		text-wrap: nowrap;
	}

	.section-link {
		font-family: var(--minecraft-font);
		font-size: var(--font-size-medium);
		text-decoration: none;
		color: #dfe7ea;
	}

	.section-link.active {
		background: linear-gradient(90deg, #00aced, #6ed8ff);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	ul {
		list-style: none;
		margin: 8px 0 0;
		padding-left: 8px;
		display: grid;
		gap: 5px;
	}

	li a {
		font-family: var(--minecraft-font);
		font-size: var(--font-size-small);
		text-decoration: none;
		color: #dfe7ea;
		text-wrap: nowrap;
		white-space: nowrap;
	}

	li a.active {
		background: linear-gradient(45deg, #00aced, #6ed8ff);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.docs-main {
		display: grid;
		gap: 16px;
		min-width: 0;
	}

	.docs-on-this-page {
		position: sticky;
		top: 10px;
		height: fit-content;
		max-height: 85vh;
		padding: 14px 16px;
	}

	.docs-on-this-page h2 {
		margin: 0;
		font-size: var(--font-size-medium);
		font-family: var(--minecraft-font);
		font-weight: normal;
	}

	.docs-on-this-page ul {
		list-style: none;
		margin: 14px 0 0;
		padding: 0;
		display: grid;
		gap: 6px;
	}

	.docs-on-this-page li {
		margin: 0;
	}

	.docs-on-this-page a {
		text-wrap: normal;
		white-space: normal;
	}

	.toc-link {
		display: block;
		text-decoration: none;
		color: #dfe7ea;
		font-family: var(--minecraft-font);
		font-size: var(--font-size-small);
		line-height: 1.3;
	}

	.toc-link.depth-3 {
		padding-left: 12px;
		opacity: 0.9;
	}

	.toc-link.active {
		background: linear-gradient(45deg, #00aced, #6ed8ff);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.docs-content {
		padding-left: 24px;
		padding-right: 24px;
		padding-bottom: 24px;
		overflow: hidden;
	}

	.docs-pagination {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
	}

	@media (width < 1410px) {
		.docs-pagination {
			display: grid;
			grid-template-columns: 1fr;
		}
	}

	@media (width < 1400px) {
		.docs-body {
			grid-template-columns: minmax(220px, 280px) minmax(0, 1fr);
		}
		.docs-on-this-page {
			display: none;
		}
		.docs-pagination div {
			display: none;
		}
	}

	@media (width < 1140px) {
		.docs-body {
			grid-template-columns: 1fr;
		}

		.docs-nav-toggle {
			display: inline-flex;
			align-items: center;
			justify-content: center;
		}

		.docs-nav {
			display: none;
			grid-column: 1 / -1;
			width: 100%;
			padding-top: 10px;
		}

		.docs-nav.open {
			display: flex;
		}

		.docs-nav.open {
			display: grid;
			grid-template-columns: 1fr;
		}

		.docs-header {
			display: grid;
			grid-template-columns: minmax(0, 1fr) auto;
			align-items: center;
		}

		.docs-sidebar {
			position: static;
			max-height: unset;
			display: flex;
			align-items: stretch;
			flex-direction: column;
			gap: 8px;
		}

		.docs-on-this-page {
			display: none;
		}
		.docs-sidebar {
			padding: 12px;
		}

		.docs-sidebar-toggle {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			flex-grow: 1;
		}

		.docs-sidebar-content {
			display: none;
			padding-top: 10px;
		}

		.docs-sidebar-content.open {
			display: block;
		}
	}

	@media (width < 480px) {
		.brand-link {
			gap: 0;
		}

		.brand-link span {
			display: none;
		}
	}

	@media (width < 640px) {
		.docs-shell {
			padding: 8px;
		}

		.docs-nav a {
			display: block;
			margin-top: 0;
		}

		.docs-nav a.active {
			margin-top: 0;
		}

		.docs-nav a.active::after {
			display: none;
		}

		.docs-content {
			padding: 14px;
		}

		.docs-pagination {
			grid-template-columns: 1fr;
		}
	}
</style>
