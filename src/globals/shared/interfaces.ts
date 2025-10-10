import type { EBrowserType, EUIMode } from './enums';

export interface BrowserContext {
  /**
   * Window type.
   */
  m_eBrowserType?: EBrowserType;

  /**
   * The UI mode in use.
   */
  m_eUIMode: EUIMode;

  /**
   * @todo Appears when EBrowserType == 0 ?
   */
  m_gameID?: string;

  /**
   * @todo Same as `SteamClient.Browser.GetBrowserID()` ?
   */
  m_nBrowserID: number;

  /**
   * Game's app ID.
   */
  m_unAppID?: number;

  /**
   * If overlay, game's PID.
   */
  m_unPID: number;
}

export interface Unsubscribable {
  /**
   * Unregisters the callback.
   */
  Unregister(): void;
}

export declare class CBaseProtoBufMsg {}

/**
 * Interface to register and unregister callbacks from, with ability to
 * dispatch.
 */
// biome-ignore lint/suspicious/noExplicitAny: intentional
export interface CCallbackList<T extends any[] = never> {
  m_vecCallbacks: ((...args: [...T]) => void)[];

  ClearAllCallbacks(): void;
  CountRegistered(): number;
  Dispatch(...args: [...T]): void;
  Register(callback: (...args: [...T]) => void): Unsubscribable;
}

/**
 * This is kind of like an `@observable` field but without using mobx.
 */
export interface SubscribableValue<T> {
  m_callbacks: CCallbackList<[T]>;
  m_currentValue: T;
  m_fnEquals?: (currentValue: T, newValue: T) => boolean;

  /**
   * Sets a new value and notifies Subscribers of the new value.
   */
  Set(value: T): void;

  /**
   * Adds a subscription to the backing {@link CCallbackList}.
   */
  Subscribe(subscriber: (value: T) => void): Unsubscribable;

  /**
   * Subscription count of the backing {@link CCallbackList}.
   */
  get SubscriberCount(): number;

  /**
   * A snapshot of the current value which can change at any time.
   */
  get Value(): T;
}

export interface MappedSubscribableValue<T> {
  m_bMappedValueStale: boolean;
  m_fnMap: (value: T) => T;
  m_originalSubscribableValue: SubscribableValue<T>;
  m_mappedSubscribableValue: SubscribableValue<T>;

  /**
   * Adds a subscription to the backing {@link CCallbackList}.
   */
  Subscribe(subscriber: (value: T) => void): Unsubscribable;

  /**
   * Updates the value from the backing {@link SubscribableValue}.
   */
  UpdateMappedValue(): void;

  /**
   * A snapshot of the current value which can change at any time.
   */
  get Value(): T;
}

export interface CScheduledFunc {
  m_fnCallback: (() => void)[];
  m_schTimer: number;

  Cancel(): void;
  IsScheduled(): boolean;
  Schedule(timeout: number, fn: () => void): void;
}
