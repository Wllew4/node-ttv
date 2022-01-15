import Resource from "../Resource";

export default class Schedule extends Resource
{
	async getChannelStreamSchedule
	(
		token:			string,
		broadcaster_id:	string,
		id?:			string,
		start_time?:	string,
		utc_offset?:	string,
		first?:			number,
		after?:			string
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id, id, start_time, utc_offset, first, after
		}

		return this.apiCalls.apiGet(token, "/helix/schedule", queryParams);
	}

	async getChanneliCalendar
	(
		token:					string,
		broadcaster_id:			string,
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id
		}

		return this.apiCalls.apiGet(token, "/helix/schedule/icalendar", queryParams);
	}

	async updateChannelStreamSchedule
	(
		token:					string,
		broadcaster_id:			string,
		is_vacation_enabled?:	boolean,
		vacation_start_time?:	string,
		vacation_end_time?:		string,
		timezone?:				string
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id, is_vacation_enabled, vacation_start_time, vacation_end_time, timezone
		}

		return this.apiCalls.apiPatch(token, "/helix/schedule/settings", queryParams, {});
	}

	async createChannelStreamScheduleSegment
	(
		token:			string,
		broadcaster_id:	string,
		start_time:		string,
		timezone:		string,
		is_recurring:	boolean
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id
		}

		let bodyParams = {
			start_time, timezone, is_recurring
		}

		return this.apiCalls.apiPost(token, "/helix/schedule/segment", queryParams, bodyParams);
	}

	async updateChannelStreamScheduleSegment
	(
		token:			string,
		broadcaster_id:	string,
		id:				string,
		start_time?:	string,
		duration?:		string,
		category_id?:	string,
		title?:			string,
		is_canceled?:	boolean,
		timezone?:		string
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id, id
		}

		let bodyParams = {
			start_time, duration, category_id, title, is_canceled, timezone
		}

		return this.apiCalls.apiPost(token, "/helix/schedule/segment", queryParams, bodyParams);
	}

	async deleteChannelStreamScheduleSegment
	(
		token:			string,
		broadcaster_id:	string,
		id:				string
	): Promise<string>
	{
		let queryParams = {
			broadcaster_id, id
		}

		return this.apiCalls.apiDelete(token, "/helix/schedule/segment", queryParams);
	}
}