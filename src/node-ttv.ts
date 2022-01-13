import OAuth	from "./authentication/OAuth";
import Scopes	from "./authentication/Scopes";
import Helix	from "./helix/Helix";

export default class Twitch
{
	helix: Helix;
	oauth: OAuth;

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