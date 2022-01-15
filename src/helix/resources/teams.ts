import Resource from "../Resource";

export default class Teams extends Resource
{
	async getChannelTeams(broadcaster_id: string): Promise<string>
	{
		let queryParams = {
			broadcaster_id
		}

		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/teams/channel", queryParams);
	}

	async getTeams
	(
		name:	string,
		id:		string
	): Promise<string>
	{
		let queryParams = {
			name, id
		}

		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/teams", queryParams);
	}
}