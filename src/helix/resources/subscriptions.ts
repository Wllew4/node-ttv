import Resource from "../Resource";

export default class Subscriptions extends Resource
{
	async getBroadcasterSubscriptions
	(
		token:			string,
		broadcaster_id:	string,
		user_id?:		string,
		after?:			string,
		first?:			string
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id, user_id, after, first
		}
		return this.apiCalls.apiGet(token, "/helix/subscriptions", queryParams);
	}

	async checkUserSubscription
	(
		token:			string,
		broadcaster_id:	string,
		user_id:		string
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id, user_id
		}
		
		return this.apiCalls.apiGet(token, "/helix/subscriptions/user", queryParams);
	}
}