//	This file is not a unit test. It's for in-development testing. Feel free to ignore.

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