import Resource from "../Resource";

export default class Bits extends Resource
{
	async getBitsLeaderboard
	(
		token:			string,
		count?:			number,
		period?:		string,
		started_at?:	string,
		user_id?:		string
	): Promise<string>
	{
		let queryParams = {
			count, period, started_at, user_id
		}

		return this.apiCalls.apiGet(token, "/helix/bits/leaderboard", queryParams);
	}

	async getCheermotes(broadcaster_id?: string): Promise<string>
	{
		let queryParams = {
			broadcaster_id
		}

		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/bits/cheermotes", queryParams);
	}

	async getExtensionTransactions
	(
		extension_id:	string,
		id?:			string,
		after?:			string,
		first?:			number
	): Promise<string>
	{
		let queryParams = {
			extension_id, id, after, first
		}

		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/extensions/transactions", queryParams);
	}
}