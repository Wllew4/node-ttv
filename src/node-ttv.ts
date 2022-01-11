const {apiPost, apiGet, apiDelete, apiPatch, apiPut} = require("./util/api");

var REFRESH_TOKEN: string
var CLIENT_ID: string
var SECRET: string

exports.Twitch = {

    getRefreshToken: async (AUTH_CODE: string, CLIENT_ID: string, SECRET: string) => {
        var url = "/oauth2/token?grant_type=authorization_code&redirect_uri=http://localhost/"
            + "&client_id=" + CLIENT_ID
            + "&client_secret=" + SECRET
            + "&code=" + AUTH_CODE;
        try {
            const res = await Post("id.twitch.tv",
            url);
            const token = JSON.parse(res).refresh_token;
            console.log(token);
            return token;
        } catch (err) {
            console.log(err);
        }
    },

    init: async (REFRESH_TOKEN: string, CLIENT_ID: string, SECRET: string) => {
        globalThis.REFRESH_TOKEN = REFRESH_TOKEN;
        globalThis.CLIENT_ID = CLIENT_ID;
        globalThis.SECRET = SECRET;
    },
    
    ads: {
        startCommercial: async (bodyParams: any) => {
            return apiPost("/helix/channels/commercial", {}, bodyParams);
        }
    },

    analytics: {
        getExtensionAnalytics: async (queryParams: any) => {
            return apiGet("/helix/analytics/extensions", queryParams);
        },
        getGameAnalytics: async (queryParams: any) => {
            return apiGet("/helix/analytics/games", queryParams);
        }
    },

    bits: {
        getBitsLeaderboard: async (queryParams: any) => {
            return apiGet("/helix/bits/leaderboard", queryParams);
        },
        getCheermotes: async (queryParams: any) => {
            return apiGet("/helix/bits/cheermotes", queryParams);
        },
        getExtensionTransactions: async (queryParams: any) => {
            return apiGet("/helix/extensions/transactions", queryParams);
        }
    },

    channelPoints: {
        createCustomRewards: async (queryParams: any, bodyParams: any) => {
            return apiPost("/helix/channel_points/custom_rewards", queryParams, bodyParams);
        },
        deleteCustomReward: async (queryParams: any) => {
            return apiDelete("/helix/channel_points/custom_rewards", queryParams);
        },
        getCustomReward: async (queryParams: any) => {
            return apiGet("/helix/channel_points/custom_rewards", queryParams);
        },
        getCustomRewardRedemption: async (queryParams: any) => {
            return apiGet("/helix/channel_points/custom_rewards/redemptions", queryParams);
        },
        updateCustomReward: async (queryParams: any, bodyParams: any) => {
            return apiPatch("/helix/channel_points/custom_rewards", queryParams, bodyParams);
        },
        updateRedemptionStatus: async (queryParams: any, bodyParams: any) => {
            return apiPatch("/helix/channel_points/custom_rewards/redemptions", queryParams, bodyParams);
        }
    },

    clips: {
        createClip: async (queryParams: any) => {
            return apiPost("/helix/clips", queryParams, {});
        },
        getClips: async (queryParams: any) => {
            return apiGet("/helix/clips", queryParams);
        }
    },

    entitlements: {
        createEntitlementGrantsUploadURL: async (queryParams: any) => {
            return apiPost("/helix/entitlements/upload", queryParams, {});
        },
        getCodeStatus: async (queryParams: any) => {
            return apiGet("/helix/entitlements/codes", queryParams);
        },
        getDropsEntitlements: async (queryParams: any) => {
            return apiGet("/helix/entitlements/drops", queryParams);
        },
        redeemCode: async (queryParams: any) => {
            return apiPost("/helix/entitlements/code", queryParams, {});
        }
    },

    games: {
        getTopGames: async (queryParams: any) => {
            return apiGet("/helix/games/top", queryParams);
        },
        getGames: async (queryParams: any) => {
            return apiGet("/helix/games", queryParams);
        }
    },

    hypeTrain: {
        getHypeTrainEvents: async (queryParams: any) => {
            return apiGet("/helix/hypetrain/events", queryParams);
        }
    },

    moderation: {
        checkAutoModStatus: async (queryParams: any, bodyParams: any) => {
            return apiPost("/helix/moderation/enforcements/status", queryParams, bodyParams);
        },
        getBannedEvents: async (queryParams: any) => {
            return apiGet("/helix/moderation/banned/events", queryParams);
        },
        getBannedUsers: async (queryParams: any) => {
            return apiGet("/helix/moderation/banned", queryParams);
        },
        getModerators: async (queryParams: any) => {
            return apiGet("/helix/moderation/moderators", queryParams);
        },
        getModeratorEvents: async (queryParams: any) => {
            return apiGet("/helix/moderation/moderators/events", queryParams);
        }
    },

    search: {
        searchCategories: async (queryParams: any) => {
            return apiGet("/helix/search/categories", queryParams);
        },
        searchChannels: async (queryParams: any) => {
            return apiGet("/helix/search/channels", queryParams);
        }
    },

    streams: {
        getStreamKey: async (queryParams: any) => {
            return apiGet("/helix/streams/key", queryParams);
        },
        getStreams: async (queryParams: any) => {
            return apiGet("/helix/streams", queryParams);
        },
        createStreamMarker: async (bodyParams: any) => {
            return apiPost("/helix/streams/markers", {}, bodyParams);
        },
        getStreamMarkers: async (queryParams: any) => {
            return apiGet("/helix/streams/markers", queryParams);
        },
        getChannelInformation: async (queryParams: any) => {
            return apiGet("/helix/channels", queryParams);
        },
        modifyChannelInformation: async (queryParams: any, bodyParams: any) => {
            return apiPatch("/helix/channels", queryParams, bodyParams);
        }
    },

    subscriptions: {
        getBroadcasterSubscriptions: async (queryParams: any) => {
            return apiGet("/helix/subscriptions", queryParams);
        }
    },

    tags: {
        getAllStreamTags: async (queryParams: any) => {
            return apiGet("/helix/tags/streams", queryParams);
        },
        getStreamTags: async (queryParams: any) => {
            return apiGet("/helix/streams/tags", queryParams);
        },
        replaceStreamTags: async (queryParams: any, bodyParams: any) => {
            return apiPut("/helix/streams/tags", queryParams, bodyParams);
        }
    },

    users: {
        createUserFollows: async (queryParams: any) => {
            return apiPost("/helix/users/follows", queryParams, {});
        },
        deleteUserFollows: async (queryParams: any) => {
            return apiDelete("/helix/users/follows", queryParams, {});
        },
        getUsers: async (queryParams: any) => {
            return apiGet("/helix/users", queryParams);
        },
        getUsersFollows: async (queryParams: any) => {
            return apiGet("/helix/users/follows", queryParams);
        },
        updateUser: async (queryParams: any) => {
            return apiPut("/helix/users", queryParams, {});
        },
        getUserExtensions: async (queryParams: any) => {
            return apiGet("/helix/users/extensions/list", queryParams);
        },
        getUserActiveExtensions: async (queryParams: any) => {
            return apiGet("/helix/users/extensions", queryParams);
        },
        updateUserExtensions: async (bodyParams: any) => {
            return apiPut("/helix/users", {}, bodyParams);
        }
    },

    videos: {
        getVideos: async (queryParams: any) => {
            return apiGet("/helix/videos", queryParams);
        }
    },

    webhooks: {
        getWebhookSubscriptions: async (queryParams: any) => {
            return apiGet("/helix/webhooks/subscriptions", queryParams);
        }
    }
};