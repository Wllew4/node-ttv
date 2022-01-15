import Resource from "../Resource";

export default class HypeTrain extends Resource
{
	async getHypeTrainEvents
	(
		token:			string,
		broadcaster_id:	string,
		first?:			number,
		id?:			string,
		cursor?:		string
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id, first, id, cursor
		}

		return this.apiCalls.apiGet(token, "/helix/hypetrain/events", queryParams);
	}
}