import { FC, PropsWithChildren } from "react";
import { findModuleExport } from "../webpack";

export const ErrorBoundary = findModuleExport(
    (e) => e?.prototype?.Reset && e?.prototype?.componentDidCatch && e.prototype?.render?.toString().includes("lastErrorKey"),
) as FC<PropsWithChildren>; // Actually a class but @types/react is broken lol