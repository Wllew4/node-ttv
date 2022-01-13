import {
	Method,
	webRequest } from "../util/webRequest"
import OAuth from "../authentication/OAuth"

export default class ApiCalls
{
	private oauth: OAuth;

	constructor(oauth: OAuth)
	{
		this.oauth = oauth;
	}

	async apiCall(path: string, queryParams: any, bodyParams: any, method: Method): Promise<any>
	{
		let reqPath = path + "?";
	
		for(let key in queryParams){
			if(queryParams[key] != ""){
				reqPath += "&" + key + "=" + queryParams[key];
			}
		}
	
		try {
			const response = await webRequest(
				"api.twitch.tv",
				reqPath,
				JSON.stringify(bodyParams),
				{
					"Authorization": "Bearer " + await this.oauth.appAccessToken(),
					"Client-ID": this.oauth.CLIENT_ID,
					"Content-Type": "application/json"
				},
				method
			);
		
			const json = JSON.parse(response);
			return json;
		} catch (error){
			console.log(error);
		}
	}

	async apiGet(path: string, queryParams: any)
	{
		return this.apiCall(path, queryParams, null, Method.GET)
	}

	async apiPost(path: string, queryParams: any, bodyParams: any)
	{
		return this.apiCall(path, queryParams, bodyParams, Method.POST)
	}

	async apiPut(path: string, queryParams: any, bodyParams: any)
	{
		return this.apiCall(path, queryParams, bodyParams, Method.PUT)
	}

	async apiPatch(path: string, queryParams: any, bodyParams: any)
	{
		return this.apiCall(path, queryParams, bodyParams, Method.PATCH)
	}

	async apiDelete(path: string, queryParams: any)
	{
		return this.apiCall(path, queryParams, null, Method.DELETE)
	}
}