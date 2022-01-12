const Twitch = require('../').default
const { readFileSync } = require('fs')

let secret;
let client_id;

if(process.env.GITHUB_ACTIONS)
{
	client_id	= process.argv[2]
	secret 		= process.argv[3]
}
else
{
	client_id	= readFileSync('./tests/.client_id').toString()
	secret 		= readFileSync('./tests/.secret')	.toString()
}

const t = new Twitch(client_id, secret)

t.helix.games.getTopGames({}).then(console.log).catch()