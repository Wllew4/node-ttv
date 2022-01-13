import { webRequest, Method } from '../util/webRequest'

import Scopes from './Scopes'

enum RESPONSE_TYPE
{
	token	= "token",
	code	= "code"
}

export default class OAuth
{
	readonly CLIENT_ID: string;
	readonly SECRET: string;

	constructor(clientID: string, secret: string)
	{
		this.CLIENT_ID = clientID;
		this.SECRET = secret;
	}
	
	async appAccessToken (): Promise<string>
	{
		let path = "/oauth2/token"
		+ "?grant_type=client_credentials"
		+ "&client_id=" + this.CLIENT_ID
		+ "&client_secret=" + this.SECRET;

		const response = await webRequest(
			"id.twitch.tv",
			path,
			null,
			null,
			Method.POST
		);

		return JSON.parse(response).access_token;
	}

	implicitUserAccessToken(
		redirectURI: string,
		scopes: Scopes[],
		force_verify: boolean = false,
		state: string = ''): string
	{
		return OAuth.getUserToken(this.CLIENT_ID, RESPONSE_TYPE.token, redirectURI, scopes, force_verify, state);
	}
	
	authorizationUserAccessToken(
		redirectURI: string,
		scopes: Scopes[],
		force_verify: boolean = false,
		state: string = ''): string
	{
		return OAuth.getUserToken(this.CLIENT_ID, RESPONSE_TYPE.code, redirectURI, scopes, force_verify, state);
	}

	static implicitUserAccessToken(
		clientID: string,
		redirectURI: string,
		scopes: Scopes[],
		force_verify: boolean = false,
		state: string = ''): string
	{
		return OAuth.getUserToken(clientID, RESPONSE_TYPE.token, redirectURI, scopes, force_verify, state);
	}

	static authorizationUserAccessToken(
		clientID: string,
		redirectURI: string,
		scopes: Scopes[],
		force_verify: boolean = false,
		state: string = ''): string
	{
		return OAuth.getUserToken(clientID, RESPONSE_TYPE.token, redirectURI, scopes, force_verify, state);
	}

	private static getUserToken(
		clientID: string,
		response_type: RESPONSE_TYPE,
		redirectURI: string,
		scopes: Scopes[],
		force_verify: boolean,
		state: string): string
	{
		return "id.twitch.tv"
			+ "/oauth2/authorize"
			+ "?response_type=" + response_type
			+ "&client_id=" + clientID
			+ "&redirect_uri=" + redirectURI
			+ "&scope=" + scopes.join('%20')
			+ (state!='' ? "&state=" + state : '')
			+ "&force_verify=" + (force_verify ? "true" : "false");
	}
}