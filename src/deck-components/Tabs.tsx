// import { FC, ReactNode } from 'react';
// import { findModule } from '../webpack';
// import { FooterLegendProps } from './FooterLegend';

// /**
//  * Individual tab objects for the Tabs component
//  * 
//  * `id` ID of this tab, can be used with activeTab to auto-focus a given tab
//  * `title` Title shown in the header bar
//  * `renderTabAddon` Return a {@link ReactNode} to render it next to the tab title, i.e. the counts for each tab on the Media page
//  * `content` Content of the tab
//  * `footer` Sets up button handlers and labels
//  */
// export interface Tab {
//     id: string;
//     title: string;
//     renderTabAddon?: () => ReactNode;
//     content: ReactNode;
//     footer?: FooterLegendProps;
// }

// /**
//  * Props for the {@link Tabs}
//  * 
//  * `tabs` array of {@link Tab}
//  * `activeTab` tab currently active, needs to be one of the tabs {@link Tab.id}, must be set using a `useState` in the `onShowTab` handler
//  * `onShowTab` Called when the active tab should change, needs to set `activeTab`. See example.
//  * `autoFocusContents` Whether to automatically focus the tab contents or not.
//  * `footer` Sets up button handlers and labels
//  * 
//  * @example
//  * const Component: FC = () => {
//  * const [currentTab, setCurrentTab] = useState<string>("Tab1");
//  *
//  * return (
//  *   <Tabs
//  *     title="Theme Manager"
//  *     activeTab={currentTabRoute}
//  *     onShowTab={(tabID: string) => {
//  *        setCurrentTabRoute(tabID);
//  *     }}
//  *     tabs={[
//  *       {
//  *         title: "Tab 1",
//  *         content: <Tab1Component />,
//  *         id: "Tab1",
//  *       },
//  *       {
//  *         title: "Tab 2",
//  *         content: <Tab2Component />,
//  *         id: "Tab2",
//  *       },
//  *     ]}
//  *   />
//  *  );
//  * };
//  */
// export interface TabsProps {
//     tabs: Tab[];
//     activeTab: string;
//     onShowTab: (tab: string) => void;
//     autoFocusContents?: boolean;
// }

// /**
//  * Tabs component as used in the library and media tabs. See {@link TabsProps}
//  */
// export const Tabs = Object.values(findModule((m) => {
//     if (typeof m !== 'object') return false;
//     for (let prop in m) {
//         if (m[prop]?.Unbleed) return true;
//     }
//     return false;
// })).find((x: any) => x?.type?.toString()?.includes("((function(") && x?.type?.toString()?.includes("[\"tabs\"")) as FC<TabsProps>;