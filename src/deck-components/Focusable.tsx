import { HTMLAttributes, ReactNode, RefAttributes, VFC } from "react";
import { findModuleChild } from "../webpack";

export interface FocusableProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  "flow-children"?: string;
  focusClassName?: string;
  focusWithinClassName?: string;
  onActivate?: (e: CustomEvent) => void;
  onCancel?: (e: CustomEvent) => void;
}

export const Focusable = findModuleChild((m) => {
  if (typeof m !== 'object') return undefined;
  for (let prop in m) {
    if (m[prop]?.render?.toString()?.includes('["flow-children","onActivate","onCancel","focusClassName",'))
      return m[prop];
  }
}) as VFC<FocusableProps & RefAttributes<HTMLDivElement>>;