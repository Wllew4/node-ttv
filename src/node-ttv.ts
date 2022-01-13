import OAuth	from "./authentication/OAuth";
import Scopes	from "./authentication/Scopes";
import Helix	from "./helix/Helix";

/**
 * Your registered Twitch application.
 */
export default class Twitch
{
	helix: Helix;
	oauth: OAuth;

	/**
	 * Handle a registered Twitch application
	 * @param CLIENT_ID Your registered application's client id
	 * @param SECRET  Your registered application's secret
	 */
	constructor(CLIENT_ID: string, SECRET: string)
	{
		this.oauth = new OAuth(CLIENT_ID, SECRET);
		this.helix = new Helix(this.oauth);
    }
};

export {
	Twitch,
	OAuth,
	Scopes
};