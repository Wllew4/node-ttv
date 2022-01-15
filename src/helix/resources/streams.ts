import Resource from "../Resource";

export default class Streams extends Resource
{
	async getStreamKey
	(
		token:			string,
		broadcaster_id:	string
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id
		}

		return this.apiCalls.apiGet(token, "/helix/streams/key", queryParams);
	}

	async getStreams
	(
		after?:			string,
		before?:		string,
		first?:			number,
		game_id?:		string,
		language?:		string,
		user_id?:		string,
		user_login?:	string
	): Promise<string>
	{
		let queryParams = {
			after, before, first, game_id, language, user_id, user_login
		}

		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/streams", queryParams);
	}

	async getFollowedStreams
	(
		token:		string,
		user_id:	string,
		after?:		string,
		first?:		number
	): Promise<string>
	{
		let queryParams = {
			user_id, after, first
		}

		return this.apiCalls.apiGet(token, "/helix/streams/followed", queryParams);
	}

	async createStreamMarker
	(
		token:			string,
		user_id:		string,
		description?:	string
	): Promise<string>
	{
		let queryParams = {
			user_id
		}

		let bodyParams = {
			description
		}

		return this.apiCalls.apiPost(token, "/helix/streams/markers", queryParams, bodyParams);
	}

	async getStreamMarkers
	(
		token: string,
		user_id?: string,
		video_id?: string,
		after?: string,
		before?: string,
		first?: string
	): Promise<string>
	{
		let queryParams = {
			user_id, video_id, after, before, first
		}
		return this.apiCalls.apiGet(token, "/helix/streams/markers", queryParams);
	}
}