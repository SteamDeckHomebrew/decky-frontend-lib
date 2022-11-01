import { AppDetails } from '../deck-components';
import { waitForPredicate } from '../utils';
import { getAppDetails } from './getAppDetails';

export type DetailsPredicate = (details: AppDetails | null) => (boolean | Promise<boolean>);

/**
 * Convenience function for waiting until app details are in desired state.
 */
export async function waitForAppDetails(appId: number, predicate: DetailsPredicate): Promise<boolean> {
  return await waitForPredicate(3, 250, async () => {
    const details = await getAppDetails(appId);
    return await predicate(details);
  });
}
