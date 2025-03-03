import type { PageLoad } from './$types'

export const ssr = false

const flavorQuotes = [
	`Uh oh!`,
	`Time to fire up the ol' debugger!`,
	`Your item displays are sad 🥺`,
	`Skill Issue.`,
	`Should'a seen that one comming...`,
	`Snaviewavie did an oopsie poopsie x3`,
	`We to a little trolling.`,
	`execute run execute run execute run execute run say This is fine.`,
	`This is why we can't have nice things. :(`,
	`Have you tried turning it off and on again?`,
	`What if I put my command block next to yours? Haha just kidding... Unless?`,
	`If at first you don't succeed, try, try again!`,
	// We do a little trolling in binary.
	`B:01010111 01100101 00100000 01100100 01101111 00100000 01100001 00100000 01101100 01101001 01110100 01110100 01101100 01100101 00100000 01110100 01110010 01101111 01101100 01101100 01101001 01101110 01100111`,
	`I've decided to stop working for today. Try again tomorrow!`,
	`Every time you see this error message, a developer vanishes in a puff of binary.`,
	`"Flavor Text"? I've never tasted text before...`,
	`( ͡° ͜ʖ ͡°) nice 404 page you got there.`,
	`Some day you'll learn. But until then, I control the cheese.`,
	`Please deposit 5 coins!`,
	`Failed to find global 'pandemic'.`,
	`I'm sorry, Dave. I'm afraid I can't do that.`,
	`<a href="https://xkcd.com/221/"><img src="https://imgs.xkcd.com/comics/random_number.png" alt="https://xkcd.com/221/"/></a>`
]

function getRandomFlavorQuote() {
	return flavorQuotes[Math.floor(Math.random() * flavorQuotes.length)]
}

export const load: PageLoad = () => {
	return {
		flavorQuote: getRandomFlavorQuote()
	}
}
