import Resource from "../Resource";

export default class Music extends Resource
{
	async getSoundtrackCurrentTrack(broadcaster_id: string): Promise<string>
	{
		let queryParams = {
			broadcaster_id
		}

		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/soundtrack/current_track", queryParams);
	}

	async getSoundtrackPlaylist(id: string): Promise<string>
	{
		let queryParams = {
			id
		}

		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/soundtrack/playlist", queryParams);
	}

	async getSoundtrackPlaylists(): Promise<string>
	{
		return this.apiCalls.apiGet(await this.oauth.appAccessToken(), "/helix/soundtrack/playlists", {});
	}
}