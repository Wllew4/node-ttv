import {
	Method,
	webRequest } from "../util/webRequest"

export default class ApiCalls
{
	private readonly CLIENT_ID;

	constructor(cliendID: string)
	{
		this.CLIENT_ID = cliendID;
	}

	private removeUndefined(object: any)
	{
		for(const key in object)
		{
			if(typeof object[key] === 'undefined')
				delete object[key]
		}
	}

	async apiCall(token: string, path: string, queryParams: any, bodyParams: any, method: Method): Promise<any>
	{
		this.removeUndefined(queryParams)
		this.removeUndefined(bodyParams)

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
					"Authorization": "Bearer " + token,
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

	async apiGet(token: string, path: string, queryParams: any)
	{
		return this.apiCall(token, path, queryParams, null, Method.GET)
	}

	async apiPost(token: string, path: string, queryParams: any, bodyParams: any)
	{
		return this.apiCall(token, path, queryParams, bodyParams, Method.POST)
	}

	async apiPut(token: string, path: string, queryParams: any, bodyParams: any)
	{
		return this.apiCall(token, path, queryParams, bodyParams, Method.PUT)
	}

	async apiPatch(token: string, path: string, queryParams: any, bodyParams: any)
	{
		return this.apiCall(token, path, queryParams, bodyParams, Method.PATCH)
	}

	async apiDelete(token: string, path: string, queryParams: any)
	{
		return this.apiCall(token, path, queryParams, null, Method.DELETE)
	}
}