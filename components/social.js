import styles from './social.module.scss'
import DiscordIcon from '../assets/ico/discord.svg'
import GitHubIcon from '../assets/ico/github.svg'
import GitHubIconDark from '../assets/ico/github.dark.svg'
import PatreonIcon from '../assets/ico/patreon.svg'
import Link from 'next/link'
import { useContext } from 'react'
import { ThemeContext } from './theme-select'
function social(name, Icon, href, dmicon) {
	return function SocialIcon() {
		const { theme } = useContext(ThemeContext)
		let Ico = Icon
		if (theme === 'dark') Ico = dmicon || Icon
		return (
			<Link href={href} alt={name}>
				<a>
					<div className={styles.root}>
						<Ico size={40}></Ico>
					</div>
				</a>
			</Link>
		)
	}
}
export const DiscordSocial = social('discord', DiscordIcon, 'https://discord.gg/jFgY4PXZfp')
export const GithubSocial = social(
	'github',
	GitHubIcon,
	'https://github.com/animated-java',
	GitHubIconDark
)
export const PatreonSocial = social('patreon', PatreonIcon, 'https://www.patreon.com/animatedjava')
