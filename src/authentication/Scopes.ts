/**
 * Scopes for user authenticated apps.
 * Find more info on Twitch.tv's documentation: https://dev.twitch.tv/docs/authentication#scopes
 */
enum Scopes
{
	ANALYTICS_READ_EXTENTSIONS 			= "analytics:read:extensions",
	ANALYTICS_READ_GAMES				= "analytics:read:games",

	BITS_READ							= "bits:read",

	CHANNEL_EDIT_COMMERCIAL				= "channel:edit:commercial",
	CHANNEL_MANAGE_BROADCAST			= "channel:manage:broadcast",
	CHANNEL_MANAGE_EXTENSIONS			= "channel:manage:extensions",
	CHANNEL_MANAGE_POLLS				= "channel:manage:polls",
	CHANNEL_MANAGE_PREDICTIONS			= "channel:manage:predictions",
	CHANNEL_MANAGE_RAIDS				= "channel:manage:raids",
	CHANNEL_MANAGE_REDEMPTION			= "channel:manage:redemptions",
	CHANNEL_MANAGE_SCHEDULE				= "channel:manage:schedule",
	CHANNEL_MANAGE_VIDEOS				= "channel:manage:videos",
	CHANNEL_READ_EDITORS				= "channel:read:editors",
	CHANNEL_READ_GOALS					= "channel:read:goals",
	CHANNEL_READ_HYPE_TRAIN				= "channel:read:hype_train",
	CHANNEL_READ_POLLS					= "channel:read:polls",
	CHANNEL_READ_PREDICTIONS			= "channel:read:predictions",
	CHANNEL_READ_REDEMPTIONS			= "channel:read:redemptions",
	CHANNEL_READ_STREAM_KEY				= "channel:read:stream_key",
	CHANNEL_READ_SUBSCRIPTIONS			= "channel:read:subscriptions",

	CLIPS_EDIT							= "clips:edit",

	MODERATION_READ						= "moderation:read",

	MODERATOR_MANAGE_BANNED_USERS		= "moderator:manage:banned_users",
	MODERATOR_READ_BLOCKED_TERMS		= "moderator:read:blocked_terms",
	MODERATOR_MANAGE_BLOCKED_TERMS		= "moderator:manage:blocked_terms",
	MODERATOR_MANAGE_AUTOMOD			= "moderator:manage:automod",
	MODERATOR_READ_AUTOMOD_SETTINGS		= "moderator:read:automod_settings",
	MODERATOR_MANAGE_AUTOMOD_SETTINGS	= "moderator:manage:automod_settings",
	MODERATOR_READ_CHAT_SETTINGS		= "moderator:read:chat_settings",
	MODERATOR_MANAGE_CHAT_SETTINGS		= "moderator:manage:chat_settings",

	USER_EDIT							= "user:edit",
	USER_MANAGE_BLOCKED_USERS			= "user:manage:blocked_users",
	USER_READ_BLOCKED_USERS				= "user:read:blocked_users",
	USER_READ_BROADCAST					= "user:read:broadcast",
	USER_READ_EMAIL						= "user:read:email",
	USER_READ_FOLLOWS					= "user:read:follows",
	USER_READ_SUBSCRIPTIONS				= "user:read:subscriptions"
}

export default Scopes;