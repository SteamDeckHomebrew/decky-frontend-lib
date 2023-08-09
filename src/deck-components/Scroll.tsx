import { FC, ReactNode } from "react";
import { findModuleChild, findModule } from "../webpack";

const ScrollingModule = findModule((mod) => {
  if (typeof mod !== 'object' || !mod.__esModule) return undefined;
  if (mod.ScrollPanel) return mod;
});

export const ScrollPanel: FC<{ children?: ReactNode; }> = ScrollingModule.ScrollPanel;

export const ScrollPanelGroup: FC<{ children?: ReactNode; }> = findModuleChild((mod) => {
  if (typeof mod !== 'object' || !mod.__esModule) return undefined;
  return mod.ScrollPanelGroup;
})