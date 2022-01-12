import { webRequest, Method } from '../util/webRequest'

export {
	appAccessToken
}

async function appAccessToken(CLIENT_ID: string, SECRET: string)
{
	let path = "/oauth2/token"
	+ "?grant_type=client_credentials"
	+ "&client_id=" + CLIENT_ID
	+ "&client_secret=" + SECRET;

	const response = await webRequest(
		"id.twitch.tv",
		path,
		null,
		null,
		Method.POST
	);
	const json = JSON.parse(response);
	
	let OAUTH = json.access_token;

	return OAUTH;
}