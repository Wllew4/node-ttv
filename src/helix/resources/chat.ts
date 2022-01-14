import Resource from "../Resource";

export default class Chat extends Resource
{
	async getChannelEmotes(
		broadcaster_id: string
		): Promise<string>
	{
		let queryParams = {
			broadcaster_id
		}

		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "helix/chat/emotes", queryParams);
	}

	async getGlobalEmotes(): Promise<string>
	{
		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "helix/chat/emotes/global", {});
	}

	async getEmoteSets(
		emote_set_id: string
		): Promise<string>
	{
		let queryParams = {
			emote_set_id
		}

		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "helix/chat/emotes/set", queryParams);
	}

	async getChannelChatBadges(
		broadcaster_id: string
		): Promise<string>
	{
		let queryParams = {
			broadcaster_id
		}

		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "helix/chat/badges", queryParams);
	}

	async getGlobalChatBadges(): Promise<string>
	{
			return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "helix/chat/badges", {});
	}

	async getChatSettings(
		token: string|null,
		broadcaster_id: string,
		moderator_id?: string
		): Promise<string>
	{
		let queryParams = {
			broadcaster_id, moderator_id
		}

		if(token == null)
			token = await this.oauth.appAccessToken()
		
		return this.apiCalls.apiGet(token, "helix/chat/settings", queryParams);
	}

	async updateChatSettings(
		token: string,
		broadcaster_id: string,
		moderator_id: string,
		emote_mode?: boolean,
		follower_mode?: boolean,
		follower_mode_duration?: number,
		non_moderator_chat_delay?: boolean,
		non_moderator_chat_delay_duration?: number,
		slow_mode?: boolean,
		slow_mode_wait_time?: number,
		subscriber_mode?: boolean,
		unique_chat_mode?: boolean
		): Promise<string>
	{
		let queryParams = {
			broadcaster_id, moderator_id
		}

		let bodyParams = {
			emote_mode, follower_mode, follower_mode_duration, non_moderator_chat_delay, non_moderator_chat_delay_duration,
			slow_mode, slow_mode_wait_time, subscriber_mode, unique_chat_mode
		}

		return this.apiCalls.apiPatch(token, "helix/chat/settings", queryParams, bodyParams);
	}
}