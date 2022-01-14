import { OAuth } from "../node-ttv";
import ApiCalls from "./ApiCalls";

export default class Resource
{
	apiCalls: ApiCalls;
	oauth: OAuth;

	constructor(oauth: OAuth)
	{
		this.apiCalls = new ApiCalls(oauth.CLIENT_ID);
		this.oauth = oauth;
	}
}