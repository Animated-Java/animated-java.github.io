import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useEffectOnce } from 'react-use'
import { getKeyFactoryFor } from '../util/getKeyFor'
import styles from './theme-select.module.scss'
import classnames from 'classnames'

const getKeyFor = getKeyFactoryFor('ThemeSelect')
const LS_KEY_THEME = getKeyFor('theme')

export const ThemeContext = createContext({
	theme: 'dark',
	setTheme: () => {},
})
export function ThemeSelectToggle() {
	const { theme, setTheme } = useContext(ThemeContext)
	return (
		<button
			className={styles.root}
			onClick={() => {
				setTheme(theme === 'dark' ? 'light' : 'dark')
			}}
		>
			<fieldset className={styles.hidden}>
				<legend>Select Theme</legend>
				<input
					type="radio"
					id="ThemeSelect-dark"
					onChange={() => setTheme('dark')}
					checked={theme === 'dark'}
				></input>
				<label htmlFor={'ThemeSelect-dark'}>Dark</label>
				<input
					type="radio"
					id="ThemeSelect-light"
					onChange={() => setTheme('light')}
					checked={theme === 'light'}
				></input>
				<label htmlFor={'ThemeSelect-light'}>Light</label>
			</fieldset>
			<div className={classnames(styles[theme], styles.common)} aria-hidden="true">
				<div className={styles.slider}>
					<div className={styles.slide}>
						<div className={styles.moon}>🌑</div>
						<div className={styles.sun}>☀</div>
					</div>
				</div>
			</div>
		</button>
	)
}

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState('dark')
	useEffectOnce(() => {
		if (localStorage.getItem(LS_KEY_THEME) === 'light') {
			setTheme('light')
		}
	})
	const _setTheme = useCallback(() => {
		const newTheme = theme === 'dark' ? 'light' : 'dark'
		localStorage.setItem(LS_KEY_THEME, newTheme)
		setTheme(newTheme)
	}, [setTheme, theme])
	return (
		<ThemeContext.Provider value={{ theme, setTheme: _setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
