import Resource from "../Resource";

export default class Search extends Resource
{
	async searchCategories
	(
		query:	string,
		first?:	number,
		after?:	string
	)
	{
		let queryParams = {
			query, first, after
		}
		
		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/search/categories", queryParams);
	}

	async searchChannels
	(
		query:		string,
		first?:		number,
		after?:		string,
		live_only?:	boolean
	)
	{
		let queryParams = {
			query, first, after, live_only
		}

		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/search/categories", queryParams);
	}
}