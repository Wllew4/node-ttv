import Resource from "../Resource";

export default class Channels extends Resource
{
	async getChannelInformation(
		broadcaster_id: string
		): Promise<string>
	{
		let queryParams = {
			broadcaster_id
		}

		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/channels", queryParams);
	}

	async modifyChannelInformation(
		token: string,
		broadcaster_id: string,
		game_id: string,
		broadcaster_language: string,
		title: string,
		delay: number
		): Promise<string>
	{
		let queryParams = {
			broadcaster_id
		}

		let bodyParams = {
			game_id, broadcaster_language, title, delay
		}

		return this.apiCalls.apiPatch(token, "/helix/channels", queryParams, bodyParams);
	}
	
	async getChannelEditors(
		token: string,
		broadcaster_id: string
		): Promise<string>
	{
		let queryParams = {
			broadcaster_id
		}

		return this.apiCalls.apiGet(token, "/helix/channels/editors", queryParams);
	}
}