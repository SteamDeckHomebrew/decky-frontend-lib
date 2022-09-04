export * from "./patcher";
export * from "./react";

export function joinClassNames(...classes: string[]): string {
    return classes.join(" ");
}

export function sleep(ms: number) {
    return new Promise(res => setTimeout(res, ms));
}