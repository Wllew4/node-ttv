import Resource from "../Resource";

export default class Users extends Resource
{
	async getUsers
	(
		id?:	string,
		login?:	string
	): Promise<string>
	{
		let queryParams = {
			id, login
		}

		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/users", queryParams);
	}

	async updateUser
	(
		token:			string,
		description?:	string
	)
	{
		let queryParams = {
			description
		}
		
		return this.apiCalls.apiPut(token, "/helix/users", queryParams, {});
	}

	async getUserFollows
	(
		after?:		string,
		first?:		number,
		from_id?:	string,
		to_id?:		string
	): Promise<string>
	{
		let queryParams = {
			after, first, from_id, to_id
		}

		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/users/follows", queryParams);
	}

	async getUserBlockList
	(
		token:			string,
		broadcaster_id:	string,
		first?:			number,
		after?:			string
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id, first, after
		}

		return this.apiCalls.apiGet(token, "/helix/users/blocks", queryParams);
	}

	async blockUser
	(
		token:				string,
		target_user_id:		string,
		source_context?:	string,
		reason?:			string
	): Promise<string>
	{
		let queryParams = {
			target_user_id, source_context, reason
		}

		return this.apiCalls.apiPut(token, "/helix/users/blocks", queryParams, {});
	}

	async unblockUser
	(
		token:				string,
		target_user_id:		string
	): Promise<string>
	{
		let queryParams = {
			target_user_id
		}

		return this.apiCalls.apiDelete(token, "/helix/users/blocks", queryParams);
	}

	async getUserExtensions(token: string): Promise<string>
	{
		return this.apiCalls.apiGet(token, "/helix/users/extensions/list", {});
	}

	async getUserActiveExtensions
	(
		token:		string,
		user_id?:	string
	): Promise<string>
	{
		let queryParams = {
			user_id
		}

		return this.apiCalls.apiGet(token, "/helix/users/extensions", queryParams);
	}

	async updateUserExtensions(token: string): Promise<string>
	{
		return this.apiCalls.apiPut(token, "/helix/users/extensions", {}, {});
	}
}