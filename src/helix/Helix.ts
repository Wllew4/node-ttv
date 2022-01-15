import OAuth from '../authentication/OAuth'

import Ads 				from './resources/ads'
import Analytics		from './resources/analytics'
import Bits				from './resources/bits'
import Channels 		from './resources/channels'
import Channel_Points	from './resources/channel_points'
import Chat 			from './resources/chat'
import Clips			from './resources/clips'
import Entitlements		from './resources/entitlements'
import EventSub			from './resources/eventsub'
import Games			from './resources/games'
import Goals			from './resources/goals'
import HypeTrain		from './resources/hypetrain'
import Moderation		from './resources/moderation'
import Music			from './resources/music'
import Polls			from './resources/polls'
import Predictions		from './resources/predictions'
import Schedule			from './resources/schedule'
import Search			from './resources/search'
import Streams			from './resources/streams'
import Subscriptions	from './resources/subscriptions'
import Tags				from './resources/tags'
import Teams			from './resources/teams'
import Users			from './resources/users'
import Videos			from './resources/videos'

/**
 * Interact with Twitch.tv's Helix API.
 * See Twitch.tv's API reference for usage: https://dev.twitch.tv/docs/api/reference
 */
export default class Helix
{
	ads:			Ads
	analytics:		Analytics
	bits:			Bits
	channels:		Channels
	channel_points: Channel_Points
	chat:			Chat
	clips:			Clips
	entitlements:	Entitlements
	eventsub:		EventSub
	games:			Games
	goals:			Goals
	hypetrain:		HypeTrain
	moderation:		Moderation
	music:			Music
	polls:			Polls
	predictions:	Predictions
	schedule:		Schedule
	search:			Search
	streams:		Streams
	subscriptions:	Subscriptions
	tags:			Tags
	teams:			Teams
	users:			Users
	videos:			Videos

	/**
	 * Interact with Twitch.tv's Helix API.
	 * See Twitch.tv's API reference for usage: https://dev.twitch.tv/docs/api/reference
	 * @param oauth An OAuth handle for application credentials
	 */
	constructor(oauth: OAuth)
	{
		//	extensions resource not currently supported
		this.ads 			= new Ads			(oauth)
		this.analytics 		= new Analytics		(oauth)
		this.bits			= new Bits			(oauth)
		this.channels		= new Channels		(oauth)
		this.channel_points = new Channel_Points(oauth)
		this.chat			= new Chat			(oauth)
		this.clips			= new Clips			(oauth)
		this.entitlements	= new Entitlements	(oauth)
		this.eventsub		= new EventSub		(oauth)
		this.games			= new Games			(oauth)
		this.goals			= new Goals			(oauth)
		this.hypetrain		= new HypeTrain		(oauth)
		this.moderation		= new Moderation	(oauth)
		this.music			= new Music			(oauth)
		this.polls			= new Polls			(oauth)
		this.predictions	= new Predictions	(oauth)
		this.schedule		= new Schedule		(oauth)
		this.search			= new Search		(oauth)
		this.streams		= new Streams		(oauth)
		this.subscriptions	= new Subscriptions (oauth)
		this.tags			= new Tags			(oauth)
		this.teams			= new Teams			(oauth)
		this.users			= new Users			(oauth)
		this.videos			= new Videos		(oauth)
	}
}