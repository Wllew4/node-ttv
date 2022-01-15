import Resource from "../Resource";

export default class Moderation extends Resource
{
	async checkAutoModStatus
	(
		token:			string,
		broadcaster_id:	string,
		msg_id:			string,
		msg_text:		string,
		user_id:		string
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id
		}

		let bodyParams = {
			msg_id, msg_text, user_id
		}

		return this.apiCalls.apiPost(token, "/helix/moderation/enforcements/status", queryParams, bodyParams);
	}

	async manageHeldAutoModMessages
	(
		token:		string,
		user_id:	string,
		msg_id:		string,
		action:		string
	): Promise<string>
	{
		let bodyParams = {
			user_id, msg_id, action
		}

		return this.apiCalls.apiPost(token, "/helix/moderation/automod/message", {}, bodyParams);
	}

	async getAutoModSettings
	(
		token:			string,
		broadcaster_id:	string,
		moderator_id:	string
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id, moderator_id
		}

		return this.apiCalls.apiGet(token, "/helix/moderation/automod/message", queryParams);
	}

	async updateAutoModSettings
	(
		token:							string,
		broadcaster_id:					string,
		moderator_id:					string,
		aggression?:					number,
		bullying?:						number,
		disability?:					number,
		misogyny?:						number,
		overall_level?:					number,
		race_ethnicity_or_religion?:	number,
		sex_based_terms?:				number,
		sexuality_sex_or_gender?:		number,
		swearing?:						number
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id, moderator_id
		}

		let bodyParams = {
			aggression, bullying, disability, misogyny, overall_level, race_ethnicity_or_religion,
			sex_based_terms, sexuality_sex_or_gender, swearing
		}

		return this.apiCalls.apiPut(token, "/helix/moderation/automod/settings", queryParams, bodyParams);
	}

	async getBannedEvents
	(
		token:			string,
		broadcaster_id:	string,
		user_id?:		string,
		after?:			string,
		first?:			string
	)
	{
		let queryParams = {
			broadcaster_id, user_id, after, first
		}

		return this.apiCalls.apiGet(token, "/helix/moderation/banned/events", queryParams);
	}

	async getBannedUsers
	(
		token:			string,
		broadcaster_id:	string,
		user_id?:		string,
		first?:			string,
		after?:			string,
		before?:		string
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id, user_id, first, after, before
		}

		return this.apiCalls.apiGet(token, "/helix/moderation/banned", queryParams);
	}

	async banUser
	(
		token:			string,
		broadcaster_id:	string,
		moderator_id:	string,
		reason:			string,
		user_id:		string,
		duration?:		number
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id, moderator_id
		}

		let bodyParams = {
			data: {
				duration, reason, user_id
			}
		}

		return this.apiCalls.apiPost(token, "/helix/moderation/banned", queryParams, bodyParams);
	}

	async unbanUser
	(
		token:			string,
		broadcaster_id:	string,
		moderator_id:	string,
		user_id:		string
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id, moderator_id, user_id
		}

		return this.apiCalls.apiDelete(token, "/helix/moderation/banned", queryParams);
	}

	async getBlockedTerms
	(
		token:			string,
		broadcaster_id:	string,
		moderator_id:	string,
		after?:			string,
		first?:			number
	): Promise<string>
	{
		let queryParams = {
			after, broadcaster_id, first, moderator_id
		}

		return this.apiCalls.apiGet(token, "/helix/moderation/blocked_terms", queryParams);
	}

	async addBlockedTerm
	(
		token:			string,
		broadcaster_id:	string,
		moderator_id:	string,
		text:			string
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id, moderator_id
		}

		let bodyParams = {
			text
		}

		return this.apiCalls.apiPost(token, "/helix/moderation/blocked_terms", queryParams, bodyParams);
	}

	async removeBlockedTerm
	(
		token:			string,
		broadcaster_id:	string,
		id:				string,
		moderator_id:	string
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id, id, moderator_id
		}

		return this.apiCalls.apiDelete(token, "/helix/moderation/blocked_terms", queryParams);
	}
	
	async getModerators
	(
		token:			string,
		broadcaster_id:	string,
		user_id?:		string,
		first?:			string,
		after?:			string
	)
	{
		let queryParams = {
			broadcaster_id, user_id, first, after
		}

		return this.apiCalls.apiGet(token, "/helix/moderation/moderators", queryParams);
	}

	async getModeratorEvents
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

		return this.apiCalls.apiGet(token, "/helix/moderation/moderators/events", queryParams);
	}
}