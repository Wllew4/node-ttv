import Resource from "../Resource";

export default class Entitlements extends Resource
{
	async getCodeStatus(
		code: string,
		user_id: number
		): Promise<string>
	{
		let queryParams = {
			code, user_id
		}

		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/entitlements/codes", queryParams);
	}

	async getDropsEntitlements(
		id?: string,
		user_id?: string,
		game_id?: string,
		fulfillment_status?: string,
		after?: string,
		first?: string
		): Promise<string>
	{
		let queryParams = {
			id, user_id, game_id, fulfillment_status, after, first
		}

		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/entitlements/drops", queryParams);
	}

	async updateDropsEntitlements(
		entitlement_ids?: string[],
		fulfillment_status?: string
		): Promise<string>
	{
		let queryParams = {
			entitlement_ids, fulfillment_status
		}

		return this.apiCalls.apiPatch(await this.oauth.appAccessToken(), "/helix/entitlements/drops", queryParams, {})
	}

	async redeemCode(
		code: string,
		user_id: number
		): Promise<string>
	{
		let queryParams = {
			code, user_id
		}

		return this.apiCalls.apiPost(await this.oauth.appAccessToken(), "/helix/entitlements/code", queryParams, {});
	}
}