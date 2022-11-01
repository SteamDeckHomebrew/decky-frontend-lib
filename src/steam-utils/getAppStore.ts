import { SteamAppOverview } from '../deck-components'

export interface AppStore {
  GetAppOverviewByAppID: (value: number) => Promise<SteamAppOverview | undefined | null>;
}

/**
 * @returns The AppStore interface or null if not available. 
 */
export function getAppStore(): AppStore | null {
  return (window as unknown as any).appStore ?? null;
}
