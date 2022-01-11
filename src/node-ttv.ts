import Helix from "./helix/Helix";

export default class Twitch
{
	CLIENT_ID: string;
	SECRET: string;
	helix: Helix;

	constructor(CLIENT_ID: string, SECRET: string)
	{
        this.CLIENT_ID = CLIENT_ID;
        this.SECRET = SECRET;
		this.helix = new Helix(this.CLIENT_ID, this.SECRET)
    }
};