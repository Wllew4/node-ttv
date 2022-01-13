import { webRequest, Method } from '../util/webRequest'

import Scopes from './Scopes'

/**
 * Used to distinguish implicit and authorization OAuth flows
 */
enum RESPONSE_TYPE
{
	token	= "token",
	code	= "code"
}

/**
 * Handle your application's OAuth 2.0 credentials
 */
export default class OAuth
{
	/**
	 * Your application's client id
	 */
	readonly CLIENT_ID: string;
	/**
	 * Your application's secret
	 */
	readonly SECRET: string;

	/**
	 * Create a new handle for OAuth 2.0 credentials
	 * @param clientID Your application's client id
	 * @param secret Your application's secret
	 */
	constructor(clientID: string, secret: string)
	{
		this.CLIENT_ID = clientID;
		this.SECRET = secret;
	}

	/**
	 * Fetch your app's App Access Token.
	 * Used for queries that are not user-specific.
	 * @returns Your app's App Access Token
	 */
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

	/**
	 * OAuth implicit code flow link
	 * @params See Twitch.tv's documentation here: https://dev.twitch.tv/docs/authentication/getting-tokens-oauth
	 * @returns A link to give your users for authentication
	 */
	implicitUserAccessToken(
		redirectURI: string,
		scopes: Scopes[],
		force_verify: boolean = false,
		state: string = ''): string
	{
		return OAuth.getUserToken(this.CLIENT_ID, RESPONSE_TYPE.token, redirectURI, scopes, force_verify, state);
	}
	
	/**
	 * OAuth authorization code flow link
	 * @params See Twitch.tv's documentation here: https://dev.twitch.tv/docs/authentication/getting-tokens-oauth
	 * @returns A link to give your users for authentication
	 */
	authorizationUserAccessToken(
		redirectURI: string,
		scopes: Scopes[],
		force_verify: boolean = false,
		state: string = ''): string
	{
		return OAuth.getUserToken(this.CLIENT_ID, RESPONSE_TYPE.code, redirectURI, scopes, force_verify, state);
	}

	/**
	 * OAuth implicit code flow link
	 * @params See Twitch.tv's documentation here: https://dev.twitch.tv/docs/authentication/getting-tokens-oauth
	 * @returns A link to give your users for authentication
	 */
	static implicitUserAccessToken(
		clientID: string,
		redirectURI: string,
		scopes: Scopes[],
		force_verify: boolean = false,
		state: string = ''): string
	{
		return OAuth.getUserToken(clientID, RESPONSE_TYPE.token, redirectURI, scopes, force_verify, state);
	}

	/**
	 * OAuth authorization code flow link
	 * @params See Twitch.tv's documentation here: https://dev.twitch.tv/docs/authentication/getting-tokens-oauth
	 * @returns A link to give your users for authentication
	 */
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