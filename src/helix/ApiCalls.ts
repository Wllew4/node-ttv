import {
	Get,
	Post,
	Patch,
	Delete } from "../util/web-requests"
import { getOauth } from "../authentication/getOauth"

export default class ApiCalls
{
	CLIENT_ID: string;
	SECRET: string;

	constructor(CLIENT_ID: string, SECRET: string)
	{
		this.CLIENT_ID = CLIENT_ID;
		this.SECRET = SECRET;
	}

	async apiGet(path: string, queryParams: any)
	{
		let reqPath = path + "?";
	
		for(let key in queryParams){
			if(queryParams[key] != ""){
				reqPath += "&" + key + "=" + queryParams[key];
			}
		}
	
		let TOKEN = await getOauth(this.CLIENT_ID, this.SECRET);
		try {
			const response = await Get(
				"api.twitch.tv",
				reqPath,
				{
					"Authorization": "Bearer " + TOKEN,
					"Client-ID": this.CLIENT_ID,
					"Content-Type": "application/json"
				}
			);
		
			const json = JSON.parse(response);
			return json;
		} catch (error){
			console.log(error);
		}
	}

	async apiPost(path: string, queryParams: any, bodyParams: any) {
		let reqPath = path + "?";
	
		for(let key in queryParams){
			if(queryParams[key] != ""){
				reqPath += "&" + key + "=" + queryParams[key];
			}
		}
	
		let TOKEN = await getOauth(this.CLIENT_ID, this.SECRET);
		try {
			const response = await Post(
				"api.twitch.tv",
				reqPath,
				JSON.stringify(bodyParams),
				{
					"Authorization": "Bearer " + TOKEN,
					"Client-ID": this.CLIENT_ID,
					"Content-Type": "application/json"
				}
			);
		
			const json = JSON.parse(response);
			return json;
		} catch (error){
			console.log(error);
		}
	}

	async apiPatch(path: string, queryParams: any, bodyParams: any) {
		let reqPath = path + "?";
	
		for(let key in queryParams){
			if(queryParams[key] != ""){
				reqPath += "&" + key + "=" + queryParams[key];
			}
		}
	
		let TOKEN = await getOauth(this.CLIENT_ID, this.SECRET);
		try {
			const response = await Patch(
				"api.twitch.tv",
				reqPath,
				JSON.stringify(bodyParams),
				{
					"Authorization": "Bearer " + TOKEN,
					"Client-ID": this.CLIENT_ID,
					"Content-Type": "application/json"
				}
			);
		
			const json = JSON.parse(response);
			return json;
		} catch (error){
			console.log(error);
		}
	}

	async apiPut(path: string, queryParams: any, bodyParams: any) {
		let reqPath = path + "?";
	
		for(let key in queryParams){
			if(queryParams[key] != ""){
				reqPath += "&" + key + "=" + queryParams[key];
			}
		}
	
		let TOKEN = await getOauth(this.CLIENT_ID, this.SECRET);
		try {
			const response = await Post(
				"api.twitch.tv",
				reqPath,
				JSON.stringify(bodyParams),
				{
					"Authorization": "Bearer " + TOKEN,
					"Client-ID": this.CLIENT_ID,
					"Content-Type": "application/json"
				}
			);
		
			const json = JSON.parse(response);
			return json;
		} catch (error){
			console.log(error);
		}
	}

	async apiDelete(path: string, queryParams: any) {
		let reqPath = path + "?";
	
		for(let key in queryParams){
			if(queryParams[key] != ""){
				reqPath += "&" + key + "=" + queryParams[key];
			}
		}
	
		let TOKEN = await getOauth(this.CLIENT_ID, this.SECRET);
		try {
			const response = await Delete(
				"api.twitch.tv",
				reqPath,
				{
					"Authorization": "Bearer " + TOKEN,
					"Client-ID": this.CLIENT_ID
				}
			);
		
			const json = JSON.parse(response);
			return json;
		} catch (error){
			console.log(error);
		}
	}
}