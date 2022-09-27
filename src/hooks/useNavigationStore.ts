import type { NavigationStore } from '../types';
import { useGlobal } from './useGlobal';

/**
 * **Warning**: You must wrap your component with the **observer** function in order for state reactivity to work.
 *
 * @see https://mobx.js.org/react-integration.html
 *
 * @example
 * ```tsx
 * import { observer } from 'utils/mobx';
 *
 * const MyComponent = observer(() => {
 *  const { m_eQuickAccessTab } = useNavigationStore();
 *
 *  return <div>Active Quick Access Tab: {m_eQuickAccessTab}</div>;
 * });
 * ```
 */
export const useNavigationStore = (): NavigationStore => {
  const navigation = useGlobal<NavigationStore>('Navigation');

  return navigation;
};
