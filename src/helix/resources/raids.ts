import Resource from "../Resource";

export default class Raids extends Resource
{
	async startRaid
	(
		token:				string,
		from_broadcaster_id:string,
		to_broadcaster_id:	string
	): Promise<string>
	{
		let queryParams = {
			from_broadcaster_id, to_broadcaster_id
		}

		return this.apiCalls.apiPost(token, "/helix/raids", queryParams, {});
	}

	async cancelRaid
	(
		token:				string,
		broadcaster_id:	string
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id
		}

		return this.apiCalls.apiDelete(token, "/helix/raids", queryParams);
	}
}