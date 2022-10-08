import { FC, ReactNode } from 'react';
import { findModule } from '../webpack';
import { FooterLegendProps } from './FooterLegend';

/**
 * Individual tab objects for the Tabs component
 * 
 * @property id ID of this tab, can be used with activeTab to auto-focus a given tab
 * @property title Title shown in the header bar
 * @property renderTabAddon Return a {@link ReactNode} to render it next to the tab title, i.e. the counts for each tab on the Media page
 * @property content Content of the tab
 * @property footer Sets up button handlers and labels
 */
export interface Tab {
    id: string;
    title: string;
    renderTabAddon?: () => ReactNode;
    content: ReactNode;
    footer?: FooterLegendProps;
}

/**
 * Props for the {@link Tabs}
 * 
 * @property tabs array of {@link Tab}
 * @property activeTab tab to automatically focus, {@link Tab.id}
 * @property onShowTab Currently unknown, but required.
 * @property autoFocusContents Whether to automatically focus the tab contents or not.
 * @property footer Sets up button handlers and labels
 */
export interface TabsProps {
    tabs: Tab[];
    activeTab?: string;
    onShowTab: (...args: unknown[]) => void;
    autoFocusContents?: boolean;
}

/**
 * Tabs component as used in the library and media tabs. See {@link TabsProps}
 */
export const Tabs = Object.values(findModule((m) => {
    if (typeof m !== 'object') return false;
    for (let prop in m) {
        if (m[prop]?.Unbleed) return true;
    }
    return false;
})).find((x: any) => x?.type?.toString()?.includes("((function(){")) as FC<TabsProps>;