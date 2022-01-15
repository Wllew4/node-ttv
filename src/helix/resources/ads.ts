import Resource from "../Resource";

export default class Ads extends Resource
{
	async startCommercial
	(
		token:			string,
		broadcaster_id:	string,
		length:			number
	): Promise<string>
	{
		let bodyParams = {
			broadcaster_id, length
		}

		return this.apiCalls.apiPost(token, "/helix/channels/commercial", {}, bodyParams);
	}
}