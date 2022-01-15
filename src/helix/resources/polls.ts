import Resource from "../Resource";

type Choice = 
{
	title: string,
	[key: string]: any
}

export default class Polls extends Resource
{
	async getPolls
	(
		token:			string,
		broadcaster_id:	string
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id
		}

		return this.apiCalls.apiGet(token, "/helix/polls", queryParams);
	}

	async createPoll
	(
		token:							string,
		broadcaster_id:					string,
		title:							string,
		choices:						Choice[],
		duration:						number,
		bits_voting_enabled?:			boolean,
		bits_per_vote?:					number,
		channel_points_voting_enabled?:	boolean,
		channel_points_per_vote?:		number
	)
	{
		let bodyParams = {
			broadcaster_id, title, choices, duration, bits_voting_enabled, bits_per_vote,
			channel_points_voting_enabled, channel_points_per_vote
		}

		return this.apiCalls.apiPost(token, "/helix/polls", {}, bodyParams);
	}

	async endPoll
	(
		token:			string,
		broadcaster_id:	string,
		id:				string,
		status:			string
	)
	{
		let bodyParams = {
			broadcaster_id, id, status
		}

		return this.apiCalls.apiPatch(token, "/helix/polls", {}, bodyParams);
	}
}