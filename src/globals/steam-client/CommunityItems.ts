import type { EResult } from "./shared";

export interface CommunityItems {
    /**
     * Downloads a community item asset to local storage.
     * @param communityItemId Community item ID.
     * @param assetType Asset bucket. Steam UI uses `"startupmovies"` for startup movie assets.
     * @param assetName Remote asset name/path.
     */
    DownloadItemAsset(
        communityItemId: string,
        assetType: CommunityItemAssetType,
        assetName: string,
    ): Promise<CommunityItemAssetDownloadResult>;

    /**
     * Gets the local path for a downloaded community item asset.
     */
    GetItemAssetPath(
        communityItemId: string,
        assetType: CommunityItemAssetType,
        assetName: string,
    ): Promise<CommunityItemAssetPathResult>;

    /**
     * Removes a downloaded community item asset from local storage.
     */
    RemoveDownloadedItemAsset(
        communityItemId: string,
        assetType: CommunityItemAssetType,
        assetName: string,
    ): Promise<boolean>;
}

export type CommunityItemAssetType = "startupmovies" | (string & {});

export interface CommunityItemAssetPathResult {
    path: string;
}

export interface CommunityItemAssetDownloadResult extends CommunityItemAssetPathResult {
    result: EResult;
}
