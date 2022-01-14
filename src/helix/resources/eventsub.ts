import Resource from "../Resource";

export default class EventSub extends Resource
{
	async createEventSubSubscription(
		token: string|null,
		version: string,
		condition: string,
		transport: string
		): Promise<string>
	{
		let bodyParams = {
			version, condition, transport
		}

		if(token == null)
			token = await this.oauth.appAccessToken()
		
		return this.apiCalls.apiPost(token, "/helix/chat/settings", {}, bodyParams);
	}

	async deleteEventSubSubscription(
		token: string,
		id: string
		): Promise<string>
	{
		let queryParams = {
			id
		}

		return this.apiCalls.apiDelete(token, "/helix/eventsub/subscriptions", queryParams);
	}

	async getEventSubSubscriptions(
		status?: string,
		type?: string,
		after?: string
		): Promise<string>
	{
		let queryParams = {
			status, type, after
		}

		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/eventsub/subscriptions", queryParams);
	}
}