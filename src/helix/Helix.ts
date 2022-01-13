import OAuth from '../authentication/OAuth';
import ApiCalls from './ApiCalls'

/**
 * Interact with Twitch.tv's Helix API.
 * See Twitch.tv's API reference for usage: https://dev.twitch.tv/docs/api/reference
 */
export default class Helix
{
	apiCalls: ApiCalls;

	/**
	 * Interact with Twitch.tv's Helix API.
	 * See Twitch.tv's API reference for usage: https://dev.twitch.tv/docs/api/reference
	 * @param oauth An OAuth handle for application credentials
	 */
	constructor(oauth: OAuth)
	{
		this.apiCalls = new ApiCalls(oauth);
	}

	ads = {
		startCommercial: async (
			token: string,
			broadcaster_id: string,
			length: number
			): Promise<string> => {
				let bodyParams = {
					broadcaster_id,
					length
				}

				return this.apiCalls.apiPost(token, "/helix/channels/commercial", {}, bodyParams);
		}
	}

	analytics = {
		getExtensionAnalytics: async (
			token: string,
			after?: string,
			ended_at?: string,
			extension_id?: string,
			first?: number,
			started_at?: string,
			type?: string
			): Promise<string> => {
				let queryParams = {
					after, ended_at, extension_id, first, started_at, type
				}

				return this.apiCalls.apiGet(token, "/helix/analytics/extensions", queryParams);
		},
		getGameAnalytics: async (
			token: string,
			after?: string,
			ended_at?: string,
			extension_id?: string,
			first?: number,
			started_at?: string,
			type?: string
			): Promise<string> => {
				let queryParams = {
					after, ended_at, extension_id, first, started_at, type
				}

				return this.apiCalls.apiGet(token, "/helix/analytics/games", queryParams);
		}
	}

	bits = {
		getBitsLeaderboard: async (
			token: string,
			count?: number,
			period?: string,
			started_at?: string,
			user_id?: string
			): Promise<string> => {
				let queryParams = {
					count, period, started_at, user_id
				}

				return this.apiCalls.apiGet(token, "/helix/bits/leaderboard", queryParams);
		},
		getCheermotes: async (
			broadcaster_id?: string
			): Promise<string> => {
				let queryParams = {
					broadcaster_id
				}

				return this.apiCalls.apiGet(null, "/helix/bits/cheermotes", queryParams);
		},
		getExtensionTransactions: async (
			extension_id: string,
			id?: string,
			after?: string,
			first?: number
			): Promise<string> => {
				let queryParams = {
					extension_id, id, after, first
				}

				return this.apiCalls.apiGet(null, "/helix/extensions/transactions", queryParams);
		}
	}

	channels = {
		getChannelInformation: async (
			broadcaster_id: string
			): Promise<string> => {
				let queryParams = {
					broadcaster_id
				}

				return this.apiCalls.apiGet(null, "/helix/channels", queryParams);
		},
		modifyChannelInformation: async (
			token: string,
			broadcaster_id: string,
			game_id: string,
			broadcaster_language: string,
			title: string,
			delay: number
			): Promise<string> => {
				let queryParams = {
					broadcaster_id
				}

				let bodyParams = {
					game_id, broadcaster_language, title, delay
				}

				return this.apiCalls.apiPatch(token, "/helix/channels", queryParams, bodyParams);
		},
		getChannelEditors: async (
			token: string,
			broadcaster_id: string
			): Promise<string> => {
				let queryParams = {
					broadcaster_id
				}

				return this.apiCalls.apiGet(token, "/helix/channels/editors", queryParams);
			}
	}

	channel_points = {
		createCustomRewards: async (
			token: string,
			broadcaster_id: string,
			title: string,
			cost: number
			): Promise<string> => {
				let queryParams = {
					broadcaster_id
				}

				let bodyParams = {
					title,
					cost
				}

				return this.apiCalls.apiPost(token, "/helix/channel_points/custom_rewards", queryParams, bodyParams);
		},
		deleteCustomReward: async (
			token: string,
			broadcaster_id: string,
			id: string
			): Promise<string> => {
				let queryParams = {
					broadcaster_id, id
				}

				return this.apiCalls.apiDelete(token, "/helix/channel_points/custom_rewards", queryParams);
		},
		getCustomReward: async (
			token: string,
			broadcaster_id: string,
			id?: string,
			only_manageable_rewards?: boolean
			): Promise<string> => {
				let queryParams = {
					broadcaster_id, id, only_manageable_rewards
				}

				return this.apiCalls.apiGet(token, "/helix/channel_points/custom_rewards", queryParams);
		},
		getCustomRewardRedemption: async (
			token: string,
			broadcaster_id: string,
			reward_id: string,
			id?: string,
			status?: string,
			sort?: string,
			after?: string,
			first?: number
			): Promise<string> => {
				let queryParams = {
					broadcaster_id, reward_id, id, status, sort, after, first
				}

				return this.apiCalls.apiGet(token, "/helix/channel_points/custom_rewards/redemptions", queryParams);
		},
		updateCustomReward: async (
			token: string,
			broadcaster_id: string,
			id: string,
			title?: string,
			prompt?: string,
			cost?: number,
			background_color?: string,
			is_enabled?: boolean,
			is_user_input_required?: boolean,
			is_max_per_stream_enabled?: boolean,
			max_per_stream?: number,
			is_max_per_user_per_stream_enabled?: boolean,
			max_per_user_per_stream?: number,
			is_global_cooldown_enabled?: boolean,
			global_cooldown_seconds?: number,
			is_paused?: boolean,
			should_redemptions_skip_request_queue?: boolean
			): Promise<string> => {
				let queryParams = {
					broadcaster_id, id
				}

				let bodyParams = {
					title, prompt, cost, background_color, is_enabled, is_user_input_required, is_max_per_stream_enabled, max_per_stream,
					is_max_per_user_per_stream_enabled, max_per_user_per_stream, is_global_cooldown_enabled, global_cooldown_seconds,
					is_paused, should_redemptions_skip_request_queue
				}

				return this.apiCalls.apiPatch(token, "/helix/channel_points/custom_rewards", queryParams, bodyParams);
		},
		updateRedemptionStatus: async (
			token: string,
			id: string,
			broadcaster_id: string,
			reward_id: string,
			status: string
			): Promise<string> => {
				let queryParams = {
					id, broadcaster_id, reward_id
				}

				let bodyParams = {
					status
				}

				return this.apiCalls.apiPatch(token, "/helix/channel_points/custom_rewards/redemptions", queryParams, bodyParams);
		}
	}

	chat = {
		getChannelEmotes: async (
			broadcaster_id: string
			): Promise<string> => {
				let queryParams = {
					broadcaster_id
				}

				return this.apiCalls.apiGet(null, "helix/chat/emotes", queryParams);
		},
		getGlobalEmotes: async (): Promise<string> => {
			return this.apiCalls.apiGet(null, "helix/chat/emotes/global", {});
		},
		getEmoteSets: async (
			emote_set_id: string
			): Promise<string> => {
				let queryParams = {
					emote_set_id
				}

				return this.apiCalls.apiGet(null, "helix/chat/emotes/set", queryParams);
		},
		getChannelChatBadges: async (
			broadcaster_id: string
			): Promise<string> => {
				let queryParams = {
					broadcaster_id
				}

				return this.apiCalls.apiGet(null, "helix/chat/badges", queryParams);
		},
		getGlobalChatBadges: async (): Promise<string> => {
				return this.apiCalls.apiGet(null, "helix/chat/badges", {});
		},
		getChatSettings: async (
			token: string|null,
			broadcaster_id: string,
			moderator_id?: string
			): Promise<string> => {
				let queryParams = {
					broadcaster_id, moderator_id
				}

				return this.apiCalls.apiGet(token, "helix/chat/settings", queryParams);
		},
		updateChatSettings: async (
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
			): Promise<string> => {
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

	clips = {
		createClip: async (queryParams: any) => {
			return this.apiCalls.apiPost(null, "/helix/clips", queryParams, {});
		},
		getClips: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/clips", queryParams);
		}
	}

	entitlements = {
		createEntitlementGrantsUploadURL: async (queryParams: any) => {
			return this.apiCalls.apiPost(null, "/helix/entitlements/upload", queryParams, {});
		},
		getCodeStatus: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/entitlements/codes", queryParams);
		},
		getDropsEntitlements: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/entitlements/drops", queryParams);
		},
		redeemCode: async (queryParams: any) => {
			return this.apiCalls.apiPost(null, "/helix/entitlements/code", queryParams, {});
		}
	}

	games = {
		getTopGames: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/games/top", queryParams);
		},
		getGames: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/games", queryParams);
		}
	}

	hypeTrain = {
		getHypeTrainEvents: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/hypetrain/events", queryParams);
		}
	}

	moderation = {
		checkAutoModStatus: async (queryParams: any, bodyParams: any) => {
			return this.apiCalls.apiPost(null, "/helix/moderation/enforcements/status", queryParams, bodyParams);
		},
		getBannedEvents: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/moderation/banned/events", queryParams);
		},
		getBannedUsers: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/moderation/banned", queryParams);
		},
		getModerators: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/moderation/moderators", queryParams);
		},
		getModeratorEvents: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/moderation/moderators/events", queryParams);
		}
	}

	search = {
		searchCategories: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/search/categories", queryParams);
		},
		searchChannels: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/search/channels", queryParams);
		}
	}

	streams = {
		getStreamKey: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/streams/key", queryParams);
		},
		getStreams: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/streams", queryParams);
		},
		createStreamMarker: async (bodyParams: any) => {
			return this.apiCalls.apiPost(null, "/helix/streams/markers", {}, bodyParams);
		},
		getStreamMarkers: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/streams/markers", queryParams);
		},
		getChannelInformation: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/channels", queryParams);
		},
		modifyChannelInformation: async (queryParams: any, bodyParams: any) => {
			return this.apiCalls.apiPatch(null, "/helix/channels", queryParams, bodyParams);
		}
	}

	subscriptions = {
		getBroadcasterSubscriptions: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/subscriptions", queryParams);
		}
	}

	tags = {
		getAllStreamTags: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/tags/streams", queryParams);
		},
		getStreamTags: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/streams/tags", queryParams);
		},
		replaceStreamTags: async (queryParams: any, bodyParams: any) => {
			return this.apiCalls.apiPut(null, "/helix/streams/tags", queryParams, bodyParams);
		}
	}

	users = {
		createUserFollows: async (queryParams: any) => {
			return this.apiCalls.apiPost(null, "/helix/users/follows", queryParams, {});
		},
		deleteUserFollows: async (queryParams: any) => {
			return this.apiCalls.apiDelete(null, "/helix/users/follows", queryParams);
		},
		getUsers: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/users", queryParams);
		},
		getUsersFollows: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/users/follows", queryParams);
		},
		updateUser: async (queryParams: any) => {
			return this.apiCalls.apiPut(null, "/helix/users", queryParams, {});
		},
		getUserExtensions: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/users/extensions/list", queryParams);
		},
		getUserActiveExtensions: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/users/extensions", queryParams);
		},
		updateUserExtensions: async (bodyParams: any) => {
			return this.apiCalls.apiPut(null, "/helix/users", {}, bodyParams);
		}
	}

	videos = {
		getVideos: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/videos", queryParams);
		}
	}

	webhooks = {
		getWebhookSubscriptions: async (queryParams: any) => {
			return this.apiCalls.apiGet(null, "/helix/webhooks/subscriptions", queryParams);
		}
	}
}