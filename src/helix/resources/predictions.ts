import Resource from "../Resource";

type Outcome =
{
	title: string,
	[key: string]: any
}

export default class Predictions extends Resource
{
	async getPredictions
	(
		token:			string,
		broadcaster_id:	string,
		id?:			string,
		after?:			string,
		first?:			string
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id, id, after, first
		}

		return this.apiCalls.apiGet(token, "/helix/predictions", queryParams);
	}

	async createPrediction
	(
		token:				string,
		title:				string,
		outcomes:			Outcome[],
		prediction_window:	number
	): Promise<string>
	{
		let bodyParams = {
			title, outcomes, prediction_window
		}

		return this.apiCalls.apiPost(token, "/helix/predictions", {}, bodyParams);
	}

	async endPrediction
	(
		token:					string,
		broadcaster_id:			string,
		id:						string,
		status:					string,
		winning_outcome_id?:	string
	): Promise<string>
	{
		let bodyParams = {
			broadcaster_id, id, status, winning_outcome_id
		}

		return this.apiCalls.apiPatch(token, "/helix/predictions", {}, bodyParams);
	}
}