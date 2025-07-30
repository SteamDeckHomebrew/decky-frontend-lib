declare module "arrayutils" {
    /**
     * Purpose: Shuffle an array in place
     * @param vecArray
     */
    export function ShuffleArray(vecArray: any, index?: number): void;
    export function MoveElement(vecItems: any, iFrom: any, iTo: any): void;
    export function ArrayEquals(vecA: any, vecB: any): boolean;
    export function FindAndRemove(vec: any, item: any): boolean;
    export function FindAndRemoveWhere(vec: any, fnPredicate: any): boolean;
    export function CountMatches(vec: any, fnMatch: any): any;
    export function ArrayWithoutElement(vec: any, item: any): any;
    export function SortedFindLessOrEqual(vec: any, fnCompare: any): number;
    export function SortedInsert(vec: any, element: any, fnCompare: any): void;
    export function FilterInPlace(vec: any, fnCompare: any): any;
    /**
     * Purpose: Pads an array to the specified length, using the specified fill element.
     * @param vec
     * @param len
     * @param fill
     */
    export function PadArray(vec: any, len: any, fill: any): any;
    /** @return Return a unique version of the array provided */
    export function Unique(rgInput: any): unknown[];
}
declare module "callbackutils/callbacklist" {
    export type CCallbackListCallback_t<T> = (...args: T[]) => void;
    export class CCallbackList<T = never> {
        m_vecCallbacks: CCallbackListCallback_t<T>[];
        Register(fnCallback: CCallbackListCallback_t<T>): {
            Unregister: () => void;
        };
        Dispatch(...args: T[]): void;
        ClearAllCallbacks(): void;
        CountRegistered(): number;
    }
}
declare module "bind" {
    /**
     * This is a typescript decorator.  Decorate a class method with @bind to make sure the method is always invoked in
     * 	the context of the object instance it's declared in.
     *
     * This allows you to use it in react without worrying about the reference changing.
     *
     * example:
     *
     * 		@bind onTextInput( event ) { ... }
     *
     * 		render() {
     *			return <input OnInput={ this.onTextInput } />;
     * 		}
     *
     */
    export function bind(/*target,*/ propertyKey: any, descriptor: any): {
        get(): any;
    };
}
declare module "callbackutils/index" {
    import * as a from "callbackutils/callbacklist";
    export let CCallbackList: typeof a.CCallbackList;
    type FnEquals_t<T> = (currentValue: T, newValue: T) => boolean;
    type FnMap_t<T> = (value: T) => any;
    type NoArgsFn_t = () => void;
    interface Unsubscribable_t {
        Unsubscribe(): void;
    }
    /**
     * A property that can be used with useSubscribableValue to watch the latest value.
     * This is kind of like an @observable field but without using mobx.
     */
    class CSubscribableValue<T> {
        m_callbacks: a.CCallbackList<T>;
        m_currentValue: T;
        m_fnEquals: (currentValue: T, newValue: T) => boolean;
        /** Constructed with a trim interface exposed to external users via the exported SubscribableValue<T> method.  */
        constructor(initialValue: T, fnEquals?: FnEquals_t<T>);
        /** Sets a new value and notifies Subscribers of the new value.  */
        Set(newValue: T): void;
        /** A snapshot of the current value which can change at any time.  */
        get Value(): T;
        /** Adds a subscription to the backing CCallbackList and returns an Unsubscribe function.  */
        Subscribe(subscriber: a.CCallbackListCallback_t<T>): {
            Unsubscribe: () => void;
        };
    }
    /**
     * Constructs an ISubscribableValue.
     */
    export function SubscribableValue<T>(initialValue: T, fnEquals?: FnEquals_t<T>): CSubscribableValue<T>;
    class CMappedSubscribableValue<T> {
        m_fnMap: FnMap_t<T>;
        m_originalSubscribableValue: CSubscribableValue<T>;
        m_mappedSubscribableValue: CSubscribableValue<T>;
        m_mappedUnsubscribe: Unsubscribable_t;
        m_subscriptionRefCount: number;
        constructor(initialValue: CSubscribableValue<T>, fnMap: FnMap_t<T>, fnEquals: FnEquals_t<T>);
        get Value(): T;
        Subscribe(subscriber: any): Unsubscribable_t;
    }
    export function MappedSubscribableValue<T>(initialValue: CSubscribableValue<T>, fnMap: FnMap_t<T>, fnEquals: FnEquals_t<T>): CMappedSubscribableValue<T>;
    /**
     * Wraps setting and canceling a timeout to cut down on typing
     */
    export class CScheduledFunc {
        m_schTimer: number;
        m_fnCallback: NoArgsFn_t;
        Schedule(nTimeoutMS: number, fnCallback: NoArgsFn_t): void;
        IsScheduled(): boolean;
        Cancel(): void;
        ScheduledInternal(): void;
    }
    export class CTrackedEventListeners {
        m_rgListeners: any[];
        AddEventListener(element: any, type: any, listener: any): void;
        Unregister(): void;
    }
    /**
     * Like Promise.all, but works on an object and returns results of promises as values of those keys
     * @param object
     */
    export function PromiseObj(object: object): Promise<any>;
    export class e0 {
        m_vecCallbacks: NoArgsFn_t[];
        Push(fnCallback: NoArgsFn_t): void;
        PushArrayRemove(vec: any[], item: any): void;
        Unregister(): void;
        GetUnregisterFunc(): () => void;
    }
}
