import ApiCalls from './ApiCalls'

export default class Helix
{
	// private CLIENT_ID: string;
	// private SECRET: string;
	private apiCalls: ApiCalls;

	constructor(CLIENT_ID: string, SECRET: string)
	{
		// this.CLIENT_ID = CLIENT_ID;
		// this.SECRET = SECRET;
		this.apiCalls = new ApiCalls(CLIENT_ID, SECRET);
	}

	ads = {
        startCommercial: async (bodyParams: any) => {
            return this.apiCalls.apiPost("/helix/channels/commercial", {}, bodyParams);
        }
    }

    analytics = {
        getExtensionAnalytics: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/analytics/extensions", queryParams);
        },
        getGameAnalytics: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/analytics/games", queryParams);
        }
    }

    bits = {
        getBitsLeaderboard: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/bits/leaderboard", queryParams);
        },
        getCheermotes: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/bits/cheermotes", queryParams);
        },
        getExtensionTransactions: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/extensions/transactions", queryParams);
        }
    }

    channelPoints = {
        createCustomRewards: async (queryParams: any, bodyParams: any) => {
            return this.apiCalls.apiPost("/helix/channel_points/custom_rewards", queryParams, bodyParams);
        },
        deleteCustomReward: async (queryParams: any) => {
            return this.apiCalls.apiDelete("/helix/channel_points/custom_rewards", queryParams);
        },
        getCustomReward: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/channel_points/custom_rewards", queryParams);
        },
        getCustomRewardRedemption: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/channel_points/custom_rewards/redemptions", queryParams);
        },
        updateCustomReward: async (queryParams: any, bodyParams: any) => {
            return this.apiCalls.apiPatch("/helix/channel_points/custom_rewards", queryParams, bodyParams);
        },
        updateRedemptionStatus: async (queryParams: any, bodyParams: any) => {
            return this.apiCalls.apiPatch("/helix/channel_points/custom_rewards/redemptions", queryParams, bodyParams);
        }
    }

    clips = {
        createClip: async (queryParams: any) => {
            return this.apiCalls.apiPost("/helix/clips", queryParams, {});
        },
        getClips: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/clips", queryParams);
        }
    }

    entitlements = {
        createEntitlementGrantsUploadURL: async (queryParams: any) => {
            return this.apiCalls.apiPost("/helix/entitlements/upload", queryParams, {});
        },
        getCodeStatus: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/entitlements/codes", queryParams);
        },
        getDropsEntitlements: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/entitlements/drops", queryParams);
        },
        redeemCode: async (queryParams: any) => {
            return this.apiCalls.apiPost("/helix/entitlements/code", queryParams, {});
        }
    }

    games = {
        getTopGames: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/games/top", queryParams);
        },
        getGames: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/games", queryParams);
        }
    }

    hypeTrain = {
        getHypeTrainEvents: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/hypetrain/events", queryParams);
        }
    }

    moderation = {
        checkAutoModStatus: async (queryParams: any, bodyParams: any) => {
            return this.apiCalls.apiPost("/helix/moderation/enforcements/status", queryParams, bodyParams);
        },
        getBannedEvents: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/moderation/banned/events", queryParams);
        },
        getBannedUsers: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/moderation/banned", queryParams);
        },
        getModerators: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/moderation/moderators", queryParams);
        },
        getModeratorEvents: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/moderation/moderators/events", queryParams);
        }
    }

    search = {
        searchCategories: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/search/categories", queryParams);
        },
        searchChannels: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/search/channels", queryParams);
        }
    }

    streams = {
        getStreamKey: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/streams/key", queryParams);
        },
        getStreams: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/streams", queryParams);
        },
        createStreamMarker: async (bodyParams: any) => {
            return this.apiCalls.apiPost("/helix/streams/markers", {}, bodyParams);
        },
        getStreamMarkers: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/streams/markers", queryParams);
        },
        getChannelInformation: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/channels", queryParams);
        },
        modifyChannelInformation: async (queryParams: any, bodyParams: any) => {
            return this.apiCalls.apiPatch("/helix/channels", queryParams, bodyParams);
        }
    }

    subscriptions = {
        getBroadcasterSubscriptions: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/subscriptions", queryParams);
        }
    }

    tags = {
        getAllStreamTags: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/tags/streams", queryParams);
        },
        getStreamTags: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/streams/tags", queryParams);
        },
        replaceStreamTags: async (queryParams: any, bodyParams: any) => {
            return this.apiCalls.apiPut("/helix/streams/tags", queryParams, bodyParams);
        }
    }

    users = {
        createUserFollows: async (queryParams: any) => {
            return this.apiCalls.apiPost("/helix/users/follows", queryParams, {});
        },
        deleteUserFollows: async (queryParams: any) => {
            return this.apiCalls.apiDelete("/helix/users/follows", queryParams);
        },
        getUsers: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/users", queryParams);
        },
        getUsersFollows: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/users/follows", queryParams);
        },
        updateUser: async (queryParams: any) => {
            return this.apiCalls.apiPut("/helix/users", queryParams, {});
        },
        getUserExtensions: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/users/extensions/list", queryParams);
        },
        getUserActiveExtensions: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/users/extensions", queryParams);
        },
        updateUserExtensions: async (bodyParams: any) => {
            return this.apiCalls.apiPut("/helix/users", {}, bodyParams);
        }
    }

    videos = {
        getVideos: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/videos", queryParams);
        }
    }

    webhooks = {
        getWebhookSubscriptions: async (queryParams: any) => {
            return this.apiCalls.apiGet("/helix/webhooks/subscriptions", queryParams);
        }
    }
}