import type { CCallbackList, SubscribableValue } from '../../shared';
import type { BrowserViewHistory, BrowserViewPopup } from '../../steam-client/browser-view/BrowserViewPopup';
import type { CFocusNavController } from '../focusnavcontroller';

enum EGameInputSupportLevel {
  PageUnloading,
  Unknown,
  None,
  Basic,
  Full,
}

interface ActionDescription {
  /** @todo GamepadButton ? */
  button: any;
  descriptions: any;
  /** @todo EFocusSource ? */
  source: any;
  support: EGameInputSupportLevel;
}

interface GamepadBrowserViewMessageDetails_t {
  type: string;
  data: {
    /**
     * {@link Event.type} property
     */
    event: string;
    details: GamepadEvent;
  };
}

declare class CGamepadBrowserViewBridge {
  m_CallbackOnUnhandledInput: CCallbackList<[GamepadButton]>;
  m_CallbackUpdateActionDescriptions: CCallbackList<[ActionDescription]>;
  m_NavigationController: CFocusNavController;
  m_eGameInputSupportLevel: SubscribableValue<EGameInputSupportLevel>;
  m_lastActionDescriptions: any;
  m_postMessage: CGamepadBrowserViewMessageHandler;

  BClientManagesVirtualKeyboard(): boolean;
  ForwardGamepadEventDetail(eventType: string, ev: GamepadEventInit): void;
  GetGameInputSupportLevel(): SubscribableValue<EGameInputSupportLevel>;
  OnUnhandledInputCallbacks(): CCallbackList<[GamepadButton]>;
  RegisterOnActionDescriptionsChangedCallback(value: (descriptions: any) => void): () => void;
  SetGameInputSupportLevel(value: EGameInputSupportLevel, param1: string): void;
  TakeFocus(): void;
}

interface VirtualKeyboardRef_t {
  ShowVirtualKeyboard(): void;
  ShowModalKeyboard(): void;
  SetAsCurrentVirtualKeyboardTarget(): void;
  HideVirtualKeyboard(msDelay: number): void;
  DelayHideVirtualKeyboard(msDelay: number): void;
  BIsActive(): boolean;
  BIsElementValidForInput(): boolean;
}

interface VirtualKeyboardClientMsg_t {
  message: string;
  msDelay: number;
}

declare class CVirtualKeyboardClient {
  m_ownerWindow: Window;

  /**
   * @returns an uninit function.
   */
  Init(wnd: Window): () => void;
  CreateVirtualKeyboardRef(): VirtualKeyboardRef_t;
  ShowVirtualKeyboard(): void;
  ShowModalKeyboard(): void;
  HideVirtualKeyboard(msDelay: number): void;
  OnBrowserViewMessage(message: string, args: string): void;
  OnMessage(msg: any): void;
  InternalDispatchMessage(msg: any): void;
  SendMessage(msg: VirtualKeyboardClientMsg_t): void;
}

declare class CVirtualKeyboardHost {
  m_showKeyboard: () => void;
  m_showModalKeyboard: () => void;
  m_hideKeyboard: () => void;

  OnMessage(message: string, args: string, _currentURL: string): void;
}

declare class CGamepadBrowserViewMessageHandler {
  m_browser: BrowserViewPopup;
  m_fnCallback: (parsedArgs: any) => void;

  OnMessage(message: string, args: string): void;
  PostMessage(detail: GamepadBrowserViewMessageDetails_t): void;
  RegisterForMessage(callback: (parsedArgs: any) => void): void;
}

export declare class CGamepadBrowserView {
  m_URL: string;
  m_URLRequested: string | undefined;
  m_bCanGoBackward: boolean;
  m_bCanGoForward: boolean;
  m_bExternalRequest: boolean;
  m_bIsDestroying: boolean;
  m_bLoading: boolean;
  m_bSeenLoadStartForExternalRequest: boolean;
  m_bUseVRKeyboard: boolean;
  m_browserView: BrowserViewPopup;
  m_fnBeforeCloseHandler: ((bIsDestroying: boolean) => void) | null;
  m_fnGoBackOverride: (() => void) | undefined;
  m_gamepadBridge: CGamepadBrowserViewBridge;
  m_history: BrowserViewHistory;
  m_loadErrorCode: number | null;
  m_loadErrorDesc: string | null;
  m_loadErrorURL: string | null;
  m_mapMessageCallbacks: Map<string, CCallbackList>;
  m_onFinishedRequestCallbacks: CCallbackList;
  m_onStartLoadingCallbacks: CCallbackList;
  m_onStartRequestCallbacks: CCallbackList;
  m_refKeyboard: VirtualKeyboardRef_t;
  m_strInitialURL: string | undefined;
  m_strName: string;
  m_strTitle: string;
  m_strUserAgentIdentifier: string;
  m_strUserAgentOverride: string;
  m_strVROverlayKey: string | undefined;
  m_virtualKeyboardHost: CVirtualKeyboardHost;

  AddHardwareHeaders(): void;
  BExternalTriggeredLoad(): boolean;
  BIsLoadingURL(): boolean;
  BrowserViewOnMessage(message: string, args: string, currentURL: string): void;
  Destroy(): void;
  ForwardGamepadEventDetail(eventType: string, ev: GamepadEventInit): void;
  GetBrowser(): BrowserViewPopup;
  GetGameInputSupportLevel(): EGameInputSupportLevel;
  GetOnMessageCallbacks(msg: string): CCallbackList;
  GoBack(): void;
  GoForward(): void;
  Init(controller: CFocusNavController, keyboard: CVirtualKeyboardClient, parent: EventTarget): void;
  LoadURL(url: string): void;
  OnBeforeClose(): void;
  OnHistoryChanged(): void;
  OnNodeHasFocus(
    elementIdOrTagName: string,
    elementTag: string,
    inputType: string,
    token: string,
    param4: boolean,
  ): void;
  OnUnhandledInputCallbacks(): CCallbackList<[GamepadButton]>;
  OnVirtualKeyboardPress(keyName: string): void;
  RegisterOnActionDescriptionsChangedCallback(param0: any): () => void;
  Reload(): void;
  SetBeforeCloseHandler(value: (bIsDestroying: boolean) => void): void;
  SetGoBackOverride(value: () => void): void;

  get CanGoBackward(): boolean;
  get CanGoForward(): boolean;
  get DisplayURL(): boolean;
  get FinishedRequestCallbacks(): CCallbackList;
  get History(): BrowserViewHistory;
  get LoadErrorCode(): number | null;
  get LoadErrorDescription(): string | null;
  get LoadErrorURL(): string | null;
  get StartLoadingCallbacks(): CCallbackList;
  get StartRequestCallbacks(): CCallbackList;
  get Title(): string;
  get URL(): string;
  get name(): string;
}
