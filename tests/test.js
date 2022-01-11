const { Twitch } = require('../')
const { readFileSync } = require('fs')

const secret 	= readFileSync('./tests/.secret')	.toString()
const client_id = readFileSync('./tests/.client_id').toString()
const oauth 	= readFileSync('./tests/.oauth')	.toString()

Twitch.init(oauth, client_id, secret)

Twitch.games.getTopGames({}).then(console.log).catch()