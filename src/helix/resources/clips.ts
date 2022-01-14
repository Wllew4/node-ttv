import Resource from "../Resource";

export default class Clips extends Resource
{
	async createClip(
		token: string,
		broadcaster_id: string,
		has_delay?: boolean
		): Promise<string>
	{
		let queryParams = {
			broadcaster_id, has_delay
		}

		return this.apiCalls.apiPost(token, "/helix/clips", queryParams, {});
	}

	async getClips(
		broadcaster_id?: string,
		game_id?: string,
		id?: string,
		after?: string,
		before?: string,
		ended_at?: string,
		first?: number,
		started_at?: string
		): Promise<string>
	{
		let queryParams = {
			broadcaster_id, game_id, id, after, before, ended_at, first, started_at
		}

		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/clips", queryParams);
	}
}