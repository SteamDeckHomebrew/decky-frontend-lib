import type { CCallbackList, CScheduledFunc, MappedSubscribableValue, SubscribableValue } from '../shared';
import type { ENavigationSourceType, NavigationSource } from '../shared/navigation';

declare class CGamepadInputSource {
  m_AnalogCallbacks: CCallbackList;
  m_ButtonDownCallbacks: CCallbackList;
  m_ButtonRepeatHandler: any;
  m_ButtonUpCallbacks: CCallbackList;
  m_NavigationTypeChangeCallbacks: CCallbackList;
  m_OnGamepadDetectedCallbacks: CCallbackList;
  m_bFirstMouseUpdate: boolean;
  m_bGamepadDetected: boolean;
  m_eNavigationSourceType: ENavigationSourceType;
  m_fLastActiveTime: any | undefined;
  m_lastButtonDown: number;
  m_nAccumulatedMouseMovement: number;
  m_nLastActiveControllerIndex: number;
  m_nLastScreenX: number | undefined;
  m_nLastScreenY: number | undefined;

  // TODO: methods

  OnMouseDown;
  OnMouseMove;
  OnMouseUp;
  Reset;
  TranslateKey;
}

interface DeferredFocusTarget {
  bFocusDescendant: boolean;
  // TODO: has NavKey & B{,Child}TakeFocus
  node: any;
}

declare class CNavigationTreeDeferredFocus {
  m_bSuppressed: boolean;
  m_interval: any | undefined;
  m_schExecuteQueuedFocus: CScheduledFunc;
  m_target: DeferredFocusTarget | undefined;
  m_tree: CNavigationTree;

  BHasQueuedFocusNode(): boolean;
  BIsQueuedFocusNode(node: any): boolean;
  ClearInterval(): void;
  ExecuteQueuedFocus(): void;
  RequestFocus(node: any, target: DeferredFocusTarget): void;
  Reset(): void;
  SuppressFocus(): void;
}

declare class CTreeNodeMovement {
  m_element: Element | undefined;
  m_rect: DOMRect | undefined;

  GetRect(): DOMRect;
  Reset(): void;
  SetNode(value: Element | undefined): void;
}

declare class CNavigationTree {
  m_Controller: any;
  m_DeferredFocus: CNavigationTreeDeferredFocus;
  m_ID: string;
  m_ParentNavTree: undefined;
  m_Root: any;
  m_bIsEmbeddedInLegacyTree: boolean;
  m_bIsEnabled: boolean;
  m_bIsMounted: boolean;
  m_bModal: boolean;
  m_bVirtualFocus: boolean;
  m_bWasActiveForLastFocusChange: boolean;
  m_context: CFocusNavigationContext;
  m_lastFocusNode: any;
  m_lastFocusNodeXMovement: CTreeNodeMovement;
  m_lastFocusNodeYMovement: CTreeNodeMovement;
  m_onActivateCallbacks: CCallbackList;
  m_onActiveFocusStateChangedCallbacks: CCallbackList;
  m_onChildTreesChanged: CCallbackList;
  m_onDeactivateCallbacks: CCallbackList;
  m_onGlobalButtonDown: Function;
  m_onUnhandledButton: any | undefined;
  m_rgChildNavTrees: CNavigationTree[];
  m_tsLastActivated: number;
  m_window: Window;

  // TODO: methods

  get ChildTrees(): CNavigationTree[];
  get Controller(): CFocusNavController;
  get DeferredFocus(): CNavigationTreeDeferredFocus;
  get OnActivateCallbacks(): any;
  get OnActiveStateChangedCallbacks(): any;
  get OnChildTreesChangedCallbacks(): any;
  get OnDeactivateCallbacks(): any;
  get Parent(): any;
  get Root(): any;
  get Window(): Window;
  get WindowContext(): CFocusNavigationContext;
  get id(): string;
}

interface ActiveFocusChange {
  source: number;
  from: any | undefined;
  to: CNavigationTree;
}

export declare class CFocusNavigationContext {
  m_ActiveFocusChange: ActiveFocusChange | undefined;
  // ActiveFocusChange [source, from, to] args
  m_FocusChangedCallbacks: CCallbackList<[number, any | undefined, CNavigationTree]>;
  m_LastActiveFocusNavTree: CNavigationTree | undefined;
  m_LastActiveNavTree: CNavigationTree | undefined;
  m_activeBrowserView: any | undefined;
  m_activeWindow: Window;
  m_bIsGamepadInputSuppressed: false;
  m_bMounted: boolean;
  m_controller: CFocusNavController;
  m_iFocusChangeStack: number;
  m_rgGamepadNavigationTrees: CNavigationTree[];
  m_rootWindow: Window;
  m_schDeferredActivate: CScheduledFunc;
  m_valueIsActive: SubscribableValue<boolean>;

  AddNavTree(tree: CNavigationTree): void;
  BIsActive(): boolean;
  BIsGamepadInputSuppressed(): boolean;
  BlurNavTree(tree: CNavigationTree): void;
  Destroy(wnd: Window): void;
  FindNavTreeInFocusedWindow(): CNavigationTree | undefined;
  FindNavTreeToActivate(): CNavigationTree | undefined;
  LogName(info?: { name: string }): string;

  // #region Events
  OnActivate(activeWindow: Window): void;
  OnActivateBrowserView(activeWindow: Window, activeBrowserView?: any): void;
  OnDeactivate(activeWindow: Window): void;
  OnDeactivateBrowserView(activeWindow: Window, activeBrowserView?: any): void;
  OnFocusChangeComplete(e: number): void;
  OnFocusChangeStart(source: number, tree: CNavigationTree, from: any | undefined, to: CNavigationTree): void;
  OnMount(wnd: Window): void;
  // #endregion

  SetActive(isActive: boolean, activeWindow: Window, activeBrowserView?: any): void;
  SetActiveNavTree(tree: CNavigationTree | undefined, t: boolean): void;
  UnregisterGamepadNavigationTree(tree: CNavigationTree): void;

  get ActiveWindow(): Window;
  get FocusChangedCallbacks(): CCallbackList;
  get IsActive(): SubscribableValue<boolean>;
  get RootWindow(): Window;
}

export declare class CFocusNavController {
  m_ActiveContext: CFocusNavigationContext | undefined;
  m_DefaultContext: CFocusNavigationContext | undefined;
  m_LastActiveContext: CFocusNavigationContext;
  // e.detail.button
  m_UnhandledButtonEventsCallbacks: CCallbackList;
  m_bRestoringHistory: boolean;
  m_bShowDebugFocusRing: SubscribableValue<boolean>;
  m_fnCatchAllGamepadInput: any | null;
  m_fnGamepadEventUpdateBatcher: (e: any, t: any) => any;
  m_navigationSource: SubscribableValue<NavigationSource>;
  m_navigationSourceSupportsFocus: MappedSubscribableValue<boolean>;
  m_rgAllContexts: CFocusNavigationContext[];
  m_rgGamepadInputSources: CGamepadInputSource[];

  BGlobalGamepadButton(button: GamepadButton): boolean;
  BIsInActiveContext(e);
  BIsRestoringHistory();
  BatchedUpdate(callback);
  BlurNavTree(tree: CNavigationTree): void;
  ChangeNavigationSource(e, t);
  CreateContext(wnd: Window, bIsGamepadInputSuppressed: boolean): CFocusNavigationContext;
  DestroyContext(e);
  DispatchVirtualButtonClick(e, t);
  DispatchVirtualGamepad(e, t);
  FindAnActiveContext();
  FireUnhandledGamepadEventCallbacks(e);
  GetActiveContext(): CFocusNavigationContext | undefined;
  GetDefaultContext(): CFocusNavigationContext;
  // r = false by default
  GetEventTarget(e, t, r?: boolean);
  GetShowDebugFocusRing();
  IsActiveFocusNavTree(tree: CNavigationTree | undefined): boolean;
  IsActiveNavTree(tree: CNavigationTree | undefined): boolean;
  NewGamepadNavigationTree(controller, context, id): CNavigationTree;

  // #region Events
  OnButtonActionInternal(e, t, r, n, i, a, s, o): void;
  OnContextActivated(e): void;
  OnContextDeactivated(e, t): void;
  OnGamepadNavigationTreeActivated(tree: CNavigationTree, t: boolean): void;
  OnGamepadNavigationTreeFocused(tree: CNavigationTree, t, r: boolean): void;
  // #endregion

  RegisterForUnhandledButtonDownEvents(e);
  RegisterGamepadNavigationTree(e, t);
  RegisterInputSource(e);
  RestoreHistoryTransaction(e): Promise<any>;
  SetCatchAllGamepadInput(e);
  SetGamepadEventUpdateBatcher(e);
  SetShowDebugFocusRing(e);
  SetSuppressGamepadInput(e);
  TakeFocusChangingIFrame();
  // e = false by default
  UpdateSourceToGamepad(e?: boolean);

  get NavigationSource(): SubscribableValue<NavigationSource>;
  get NavigationSourceSupportsFocus(): MappedSubscribableValue<boolean>;
}
