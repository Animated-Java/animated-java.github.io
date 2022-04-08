import classNames from 'classnames'
import { useContext, useState } from 'react'
import styles from './footer.module.scss'
import { DiscordSocial, GithubSocial, PatreonSocial } from './social'
import { ThemeContext } from './theme-select'
import { navItems } from '../data/links'
import Link from 'next/link'
import { useEffectOnce, useMedia } from 'react-use'

export function Footer({ minimal }) {
	const { theme } = useContext(ThemeContext)
	const [isFirstRender, setIsFirstRender] = useState(true)
	let medium = useMedia('(max-width:850px)', false)
	let small = useMedia('(max-width:450px)', false)
	useEffectOnce(() => {
		setIsFirstRender(false)
	})
	if (isFirstRender) medium = small = false
	if (minimal) {
		return (
			<div className={classNames(styles.root, styles[theme])}>
				<div className={styles.center}>
					<p>2021 Animated Java</p>
				</div>
				<div className={styles.notice}>
					<p>
						Neither this website nor the animated-java project is affiliated with Mojang
						Studios or Minecraft.
					</p>
				</div>
			</div>
		)
	}
	return (
		<div
			className={classNames(
				styles.root,
				styles[theme],
				minimal && styles.minimal,
				medium && styles.tablet
			)}
		>
			{!medium ? (
				<>
					<div className={styles.content}>
						{!minimal && !medium && (
							<div className={styles.socials}>
								<DiscordSocial></DiscordSocial>
								<GithubSocial></GithubSocial>
								<PatreonSocial></PatreonSocial>
							</div>
						)}
						<div className={styles.about}>
							<div className={styles.nav}>
								{navItems.map(item => (
									<Link key={item.id} href={item.href}>
										<a className={styles.navItem}>
											<div>{item.title}</div>
										</a>
									</Link>
								))}
							</div>
							<p>2021 Animated Java</p>
						</div>
					</div>
					<div className={styles.notice}>
						<p>
							Niether this website nor the animated-java project is affiliated with
							Mojang Studios or Minecraft.
						</p>
					</div>
				</>
			) : !small ? (
				<>
					<div className={classNames(styles.about, styles.medium)}>
						<div className={styles.nav}>
							{navItems.map(item => (
								<Link key={item.id} href={item.href}>
									<a className={styles.navItem}>
										<div>{item.title}</div>
									</a>
								</Link>
							))}
						</div>
					</div>
					<div className={styles.row}>
						<div className={styles.socials}>
							<DiscordSocial></DiscordSocial>
							<GithubSocial></GithubSocial>
							<PatreonSocial></PatreonSocial>
						</div>
						<div>
							<p>2021 Animated Java</p>
						</div>
					</div>

					<div className={styles.notice}>
						<p>
							Niether this website nor the animated-java project is affiliated with
							Mojang Studios or Minecraft.
						</p>
					</div>
				</>
			) : (
				<>
					<div className={classNames(styles.about, styles.small)}>
						<div className={styles.nav}>
							{navItems.map(item => (
								<Link key={item.id} href={item.href}>
									<a className={styles.navItem + ' test'} key={item.id}>
										<div>{item.title}</div>
									</a>
								</Link>
							))}
						</div>
					</div>

					<div className={classNames(styles.socials, styles.small)}>
						<DiscordSocial></DiscordSocial>
						<GithubSocial></GithubSocial>
						<PatreonSocial></PatreonSocial>
					</div>
					<div className={styles.center}>
						<p>2021 Animated Java</p>
					</div>
					<div className={styles.notice}>
						<p>
							Niether this website nor the animated-java project is affiliated with
							Mojang Studios or Minecraft.
						</p>
					</div>
				</>
			)}
		</div>
	)
}
