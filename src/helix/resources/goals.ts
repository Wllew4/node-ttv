import Resource from "../Resource";

export default class Goals extends Resource
{
	async getCreatorGoals
	(
		token:			string,
		broadcaster_id:	string
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id
		}

		return this.apiCalls.apiGet(token, "/helix/goals", queryParams);
	}
}