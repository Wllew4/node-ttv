import Resource from "../Resource";

export default class Channel_Points extends Resource
{
	async createCustomRewards
	(
		token:			string,
		broadcaster_id:	string,
		title:			string,
		cost:			number
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id
		}

		let bodyParams = {
			title, cost
		}

		return this.apiCalls.apiPost(token, "/helix/channel_points/custom_rewards", queryParams, bodyParams);
	}

	async deleteCustomReward
	(
		token:			string,
		broadcaster_id:	string,
		id:				string
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id, id
		}

		return this.apiCalls.apiDelete(token, "/helix/channel_points/custom_rewards", queryParams);
	}

	async getCustomReward
	(
		token:						string,
		broadcaster_id:				string,
		id?:						string,
		only_manageable_rewards?:	boolean
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id, id, only_manageable_rewards
		}

		return this.apiCalls.apiGet(token, "/helix/channel_points/custom_rewards", queryParams);
	}

	async getCustomRewardRedemption
	(
		token:			string,
		broadcaster_id:	string,
		reward_id:		string,
		id?:			string,
		status?:		string,
		sort?:			string,
		after?:			string,
		first?:			number
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id, reward_id, id, status, sort, after, first
		}

		return this.apiCalls.apiGet(token, "/helix/channel_points/custom_rewards/redemptions", queryParams);
	}

	async updateCustomReward
	(
		token:									string,
		broadcaster_id: 						string,
		id:										string,
		title?:									string,
		prompt?:								string,
		cost?:									number,
		background_color?:						string,
		is_enabled?:							boolean,
		is_user_input_required?:				boolean,
		is_max_per_stream_enabled?:				boolean,
		max_per_stream?:						number,
		is_max_per_user_per_stream_enabled?:	boolean,
		max_per_user_per_stream?:				number,
		is_global_cooldown_enabled?:			boolean,
		global_cooldown_seconds?:				number,
		is_paused?:								boolean,
		should_redemptions_skip_request_queue?:	boolean
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id, id
		}

		let bodyParams = {
			title, prompt, cost, background_color, is_enabled, is_user_input_required, is_max_per_stream_enabled, max_per_stream,
			is_max_per_user_per_stream_enabled, max_per_user_per_stream, is_global_cooldown_enabled, global_cooldown_seconds,
			is_paused, should_redemptions_skip_request_queue
		}

		return this.apiCalls.apiPatch(token, "/helix/channel_points/custom_rewards", queryParams, bodyParams);
	}

	async updateRedemptionStatus
	(
		token:			string,
		id:				string,
		broadcaster_id:	string,
		reward_id:		string,
		status:			string
	): Promise<string>
	{
		let queryParams = {
			id, broadcaster_id, reward_id
		}

		let bodyParams = {
			status
		}

		return this.apiCalls.apiPatch(token, "/helix/channel_points/custom_rewards/redemptions", queryParams, bodyParams);
	}
}