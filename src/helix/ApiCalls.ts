import {
	Method,
	webRequest } from "../util/webRequest"
import { appAccessToken } from "../authentication/appAccessToken"

export default class ApiCalls
{
	CLIENT_ID: string;
	SECRET: string;

	constructor(CLIENT_ID: string, SECRET: string)
	{
		this.CLIENT_ID = CLIENT_ID;
		this.SECRET = SECRET;
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
					"Authorization": "Bearer " + await appAccessToken(this.CLIENT_ID, this.SECRET),
					"Client-ID": this.CLIENT_ID,
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