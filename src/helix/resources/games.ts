import Resource from "../Resource";

export default class Games extends Resource
{
	async getTopGames
	(
		after?:		string,
		before?:	string,
		first?:		number
	): Promise<string>
	{
		let queryParams = {
			after, before, first
		}

		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/games/top", queryParams);
	}

	async getGames
	(
		id:		string,
		name:	string
	): Promise<string>
	{
		let queryParams = {
			id, name
		}

		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/games", queryParams);
	}
}