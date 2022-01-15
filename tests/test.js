const {Twitch, OAuth, Scopes} = require('../')

const { readFileSync } = require('fs')

let secret;
let client_id;
let token;

if(process.env.GITHUB_ACTIONS)
{
	client_id	= process.argv[2]
	secret 		= process.argv[3]
	token		= process.argv[4]
}
else
{
	client_id	= readFileSync('./tests/.client_id').toString()
	secret 		= readFileSync('./tests/.secret')	.toString()
	token 		= readFileSync('./tests/.token')	.toString()
}

const t = new Twitch(client_id, secret)

// t.helix.ads.startCommercial(token, '139982308', 30)
// t.helix.bits.getBitsLeaderboard(token).then(console.log).catch()
// t.helix.channel_points.getCustomReward(token, '139982308', false).then(console.log).catch()
// t.helix.chat.getGlobalEmotes().then(console.log)

// t.helix.games.getTopGames({}).then(console.log).catch()

// let link = t.oauth.implicitUserAccessToken('http://localhost', [Scopes.CHANNEL_READ_REDEMPTIONS])
// console.log(link)