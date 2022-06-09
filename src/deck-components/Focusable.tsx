import { ReactNode, VFC } from "react";
import { findModuleChild } from "../webpack";

export interface FocusableProps {
    children: ReactNode;
}

export const HorizontalFocus = findModuleChild(m => {
    if (typeof m !== "object") return undefined;
    for (let prop in m) {
      if (m[prop]?.toString()?.includes('"children","alignItems","spacing"')) {
        return m[prop];
      }
    }
}) as VFC<FocusableProps>;