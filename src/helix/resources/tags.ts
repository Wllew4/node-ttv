import Resource from "../Resource";

export default class Tags extends Resource
{
	async getAllStreamTags
	(
		after?:		string,
		first?:		number,
		tag_id?:	string
	): Promise<string>
	{
		let queryParams = {
			after, first, tag_id
		}

		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/tags/streams", queryParams);
	}

	async getStreamTags(broadcaster_id: string): Promise<string>
	{
		let queryParams = {
			broadcaster_id
		}

		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/streams/tags", queryParams);
	}

	async replaceStreamTags
	(
		token:			string,
		broadcaster_id:	string,
		tag_ids?:		string[]
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id
		}

		let bodyParams = {
			tag_ids
		}

		return this.apiCalls.apiPut(token, "/helix/streams/tags", queryParams, bodyParams);
	}
}