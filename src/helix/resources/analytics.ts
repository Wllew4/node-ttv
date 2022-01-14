import Resource from "../Resource";

export default class Analytics extends Resource
{
	async getExtensionAnalytics(
		token: string,
		after?: string,
		ended_at?: string,
		extension_id?: string,
		first?: number,
		started_at?: string,
		type?: string
		): Promise<string>
	{
		let queryParams = {
			after, ended_at, extension_id, first, started_at, type
		}

		return this.apiCalls.apiGet(token, "/helix/analytics/extensions", queryParams);
	}

	async getGameAnalytics(
		token: string,
		after?: string,
		ended_at?: string,
		extension_id?: string,
		first?: number,
		started_at?: string,
		type?: string
		): Promise<string>
	{
		let queryParams = {
			after, ended_at, extension_id, first, started_at, type
		}

		return this.apiCalls.apiGet(token, "/helix/analytics/games", queryParams);
	}
}