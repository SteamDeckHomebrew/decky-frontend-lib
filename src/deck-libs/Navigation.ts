import { NavigationModule } from '../modules';

interface Navigation {
  NavigateToExternalWeb(url: string): void;
  OpenQuickAccessMenu(key?: number): void;
}

export const Navigation: Navigation = NavigationModule.b;
