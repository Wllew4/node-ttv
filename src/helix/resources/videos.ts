import Resource from "../Resource";

export default class Videos extends Resource
{
	async getVideos
	(
		id:			string,
		user_id:	string,
		game_id:	string,
		after?:		string,
		before?:	string,
		first?:		string,
		language?:	string,
		period?:	string,
		sort?:		string,
		type?:		string
	): Promise<string>
	{
		let queryParams = {
			id, user_id, game_id, after, before, first, language, period, sort, type
		}

		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/videos", queryParams);
	}

	async deleteVideos
	(
		token:	string, 
		id:		string
	): Promise<string>
	{
		let queryParams = {
			id
		}

		return this.apiCalls.apiDelete(token, "/helix/videos", queryParams);
	}
}