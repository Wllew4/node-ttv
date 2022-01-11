import { Post } from '../util/web-requests'

export {
	getOauth
}

async function getOauth(CLIENT_ID: string, SECRET: string)
{
	let path = "/oauth2/token"
	+ "?grant_type=client_credentials"
	+ "&client_id=" + CLIENT_ID
	+ "&client_secret=" + SECRET;

	const response = await Post(
		"id.twitch.tv",
		path,
		undefined,
		undefined
	);
	const json = JSON.parse(response);
	
	let OAUTH = json.access_token;

	return OAUTH;
}