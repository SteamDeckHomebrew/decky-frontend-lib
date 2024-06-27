import { Component, PropsWithChildren } from "react";
import { findModuleExport } from "../webpack";

export const ErrorBoundary = findModuleExport(
    (e) => e.InstallErrorReportingStore && e?.prototype?.Reset && e?.prototype?.componentDidCatch,
) as Component<PropsWithChildren>;