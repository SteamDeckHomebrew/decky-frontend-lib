import { FC } from 'react';

import { PanelModule } from '../modules';

interface PanelSectionProps {
  title?: string;
}

export const PanelSection: FC<PanelSectionProps> = PanelModule.a;

interface PanelSectionRowProps {}

export const PanelSectionRow: FC<PanelSectionRowProps> = PanelModule.b;
