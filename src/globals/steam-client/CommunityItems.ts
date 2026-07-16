export interface CommunityItems {
    /*
    DownloadMovie(e) {
            return (0, o.mG)(this, void 0, void 0, (function* () {
                if (0 != e.movie_webm_local_path.length) return !0;
                let t = yield SteamClient.CommunityItems.DownloadItemAsset(e.communityitemid, w, e.movie_webm),
                    n = 1 == t.result;
                if (n) {
                    e.movie_webm_local_path = t.path;
                    let n = [];
                    this.m_startupMovies.forEach((t => {
                        t.movie_webm == e.movie_webm ? n.push(e) : n.push(t)
                    })), this.m_startupMovies = n
                }
                return n
            }))
        }
     */
    DownloadItemAsset(communityItemId: string, assetType: any, assetName: string): any;

    GetItemAssetPath(communityItemId: string, assetType: any, assetName: string): any;

    RemoveDownloadedItemAsset(communityItemId: string, assetType: any, assetName: string): any;
}
