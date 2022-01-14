import OAuth from '../authentication/OAuth'

import Ads 				from './resources/ads'
import Analytics		from './resources/analytics'
import Bits				from './resources/bits'
import Channels 		from './resources/channels'
import Channel_Points	from './resources/channel_points'
import Chat 			from './resources/chat'
import Clips			from './resources/clips'
import Entitlements		from './resources/entitlements'

/**
 * Interact with Twitch.tv's Helix API.
 * See Twitch.tv's API reference for usage: https://dev.twitch.tv/docs/api/reference
 */
export default class Helix
{
	oauth: OAuth

	ads:			Ads
	analytics:		Analytics
	bits:			Bits
	channels:		Channels
	channel_points: Channel_Points
	chat:			Chat
	clips:			Clips
	entitlements:	Entitlements

	/**
	 * Interact with Twitch.tv's Helix API.
	 * See Twitch.tv's API reference for usage: https://dev.twitch.tv/docs/api/reference
	 * @param oauth An OAuth handle for application credentials
	 */
	constructor(oauth: OAuth)
	{
		this.oauth = oauth;

		this.ads 			= new Ads			(oauth)
		this.analytics 		= new Analytics		(oauth)
		this.bits			= new Bits			(oauth)
		this.channels		= new Channels		(oauth)
		this.channel_points = new Channel_Points(oauth)
		this.chat			= new Chat			(oauth)
		this.clips			= new Clips			(oauth)
		this.entitlements	= new Entitlements	(oauth)
		//	extensions not currently supported
	}

	games = {
		getTopGames: async (queryParams: any) => {
			return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/games/top", queryParams);
		},
		getGames: async (queryParams: any) => {
			return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/games", queryParams);
		}
	}

	hypeTrain = {
		getHypeTrainEvents: async (queryParams: any) => {
			return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/hypetrain/events", queryParams);
		}
	}

	moderation = {
		checkAutoModStatus: async (queryParams: any, bodyParams: any) => {
			return this.apiCalls.apiPost(await this.oauth.appAccessToken(), "/helix/moderation/enforcements/status", queryParams, bodyParams);
		},
		getBannedEvents: async (queryParams: any) => {
			return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/moderation/banned/events", queryParams);
		},
		getBannedUsers: async (queryParams: any) => {
			return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/moderation/banned", queryParams);
		},
		getModerators: async (queryParams: any) => {
			return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/moderation/moderators", queryParams);
		},
		getModeratorEvents: async (queryParams: any) => {
			return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/moderation/moderators/events", queryParams);
		}
	}

	search = {
		searchCategories: async (queryParams: any) => {
			return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/search/categories", queryParams);
		},
		searchChannels: async (queryParams: any) => {
			return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/search/channels", queryParams);
		}
	}

	streams = {
		getStreamKey: async (queryParams: any) => {
			return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/streams/key", queryParams);
		},
		getStreams: async (queryParams: any) => {
			return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/streams", queryParams);
		},
		createStreamMarker: async (bodyParams: any) => {
			return this.apiCalls.apiPost(await this.oauth.appAccessToken(), "/helix/streams/markers", {}, bodyParams);
		},
		getStreamMarkers: async (queryParams: any) => {
			return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/streams/markers", queryParams);
		},
		getChannelInformation: async (queryParams: any) => {
			return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/channels", queryParams);
		},
		modifyChannelInformation: async (queryParams: any, bodyParams: any) => {
			return this.apiCalls.apiPatch(await this.oauth.appAccessToken(), "/helix/channels", queryParams, bodyParams);
		}
	}

	subscriptions = {
		getBroadcasterSubscriptions: async (queryParams: any) => {
			return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/subscriptions", queryParams);
		}
	}

	tags = {
		getAllStreamTags: async (queryParams: any) => {
			return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/tags/streams", queryParams);
		},
		getStreamTags: async (queryParams: any) => {
			return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/streams/tags", queryParams);
		},
		replaceStreamTags: async (queryParams: any, bodyParams: any) => {
			return this.apiCalls.apiPut(await this.oauth.appAccessToken(), "/helix/streams/tags", queryParams, bodyParams);
		}
	}

	users = {
		createUserFollows: async (queryParams: any) => {
			return this.apiCalls.apiPost(await this.oauth.appAccessToken(), "/helix/users/follows", queryParams, {});
		},
		deleteUserFollows: async (queryParams: any) => {
			return this.apiCalls.apiDelete(await this.oauth.appAccessToken(), "/helix/users/follows", queryParams);
		},
		getUsers: async (queryParams: any) => {
			return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/users", queryParams);
		},
		getUsersFollows: async (queryParams: any) => {
			return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/users/follows", queryParams);
		},
		updateUser: async (queryParams: any) => {
			return this.apiCalls.apiPut(await this.oauth.appAccessToken(), "/helix/users", queryParams, {});
		},
		getUserExtensions: async (queryParams: any) => {
			return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/users/extensions/list", queryParams);
		},
		getUserActiveExtensions: async (queryParams: any) => {
			return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/users/extensions", queryParams);
		},
		updateUserExtensions: async (bodyParams: any) => {
			return this.apiCalls.apiPut(await this.oauth.appAccessToken(), "/helix/users", {}, bodyParams);
		}
	}

	videos = {
		getVideos: async (queryParams: any) => {
			return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/videos", queryParams);
		}
	}

	webhooks = {
		getWebhookSubscriptions: async (queryParams: any) => {
			return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/webhooks/subscriptions", queryParams);
		}
	}
}