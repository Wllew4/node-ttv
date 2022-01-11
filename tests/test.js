const Twitch = require('../').default
const { readFileSync } = require('fs')

const secret 	= readFileSync('./tests/.secret')	.toString()
const client_id = readFileSync('./tests/.client_id').toString()

const t = new Twitch(client_id, secret)

t.helix.games.getTopGames({}).then(console.log).catch()