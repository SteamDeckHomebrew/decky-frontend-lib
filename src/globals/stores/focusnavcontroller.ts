import type {
  ActionDescriptionMap,
  EFocusSource,
  FooterLegendProps,
  GamepadButton,
  GamepadEvent,
  GamepadEventDetail,
} from '../../components/FooterLegend';
import type {
  CCallbackList,
  CScheduledFunc,
  MappedSubscribableValue,
  SubscribableValue,
  Unsubscribable,
} from '../shared';
import type { ENavigationSourceType, NavigationSource } from '../shared/navigation';
import type { CGamepadBrowserView } from './steamuistore/gamepadbrowserview';
import type ReactDOM from 'react-dom';

// This entire file is essentially unconfirmed, as I don't have a deck on me :P

export type FlowChildrenLayout_t = 'column' | 'column-reverse' | 'geometric' | 'grid' | 'row' | 'row-reverse';

// to replace for later
type FocusRing_t = any;

// valve having the same thing as a string type and enum, cool
enum EFlowChildrenLayout {
  NONE,
  COLUMN,
  ROW,
  COLUMN_REVERSE,
  ROW_REVERSE,
  GRID,
  GEOMETRIC,
}

enum EFocusDirection {
  INVALID,
  FORWARD,
  BACKWARD,
}

enum EGamepadInputRepeatOnAxis {
  None,
  Horizontal,
  Vertical,
}

enum EScrollType {
  Standard,
  NoTransform,
  NoTransformSparseContent,
}

interface GamepadInputRepeatConfig_t {
  inputsThatRepeat: Set<GamepadButton>;
  firstRepeatInterval_ms: number;
  repeatInterval_ms: number;
}

declare class CGamepadInputRepeatGenerator {
  m_ActiveInputId: GamepadButton | undefined;
  m_ActiveInputTimeout: number | undefined;
  m_config: GamepadInputRepeatConfig_t;

  Reset(): void;
  HandleInputButtonDown(button: GamepadButton, param1: () => void): void;
}

declare class CGamepadInputRepeatHandler {
  m_config: GamepadInputRepeatConfig_t;
  m_fnRepeatAllowed: () => boolean;
  m_inputRepeatGenerator: CGamepadInputRepeatGenerator;
  m_repeatOnAxis: EGamepadInputRepeatOnAxis;

  Reset(): void;
  SetRepeatAllowed(value: boolean): void;
  HandleInputButtonDown(button: GamepadButton, param1: () => void, param2: () => void): void;
  HandleInputButtonUp(button: GamepadButton): void;
}

declare class CGamepadInputSource {
  m_OnGamepadDetectedCallbacks: CCallbackList;
  m_ButtonDownCallbacks: CCallbackList<[GamepadButton, ENavigationSourceType, number, boolean]>;
  m_ButtonRepeatHandler: CGamepadInputRepeatHandler;
  m_ButtonUpCallbacks: CCallbackList<[GamepadButton, ENavigationSourceType, number]>;
  m_AnalogCallbacks: CCallbackList<[button: GamepadButton, param1: number, param2: number, index: number | undefined]>;
  m_NavigationTypeChangeCallbacks: CCallbackList<[ENavigationSourceType]>;
  m_eNavigationSourceType: ENavigationSourceType;
  m_fLastActiveTime: number;
  m_nLastActiveControllerIndex: number;

  DispatchButtonDown(button: GamepadButton, param1: boolean): void;
  GetActiveControllerIndex(): number;
  GetActiveControllerTime(): number;
  GetSourceType(): ENavigationSourceType;
  OnAnalogPad(button: GamepadButton, param1: number, param2: number, index: number): void;
  OnButtonDown(button: GamepadButton, param1: number | undefined): void;
  OnButtonUp(button: GamepadButton, param1: number | undefined): void;
  OnGamepadDetected(): void;
  OnNavigationTypeChanged(navType: ENavigationSourceType): void;
  RegisterForGamepadDetected(callback: () => void): void;
  RegisterForGamepadButtonDown(
    callback: (button: GamepadButton, navType: ENavigationSourceType, param2: number, param3: boolean) => void,
  ): void;
  RegisterForGamepadButtonUp(
    callback: (button: GamepadButton, navType: ENavigationSourceType, index: number) => void,
  ): void;
  RegisterForAnalog(
    callback: (button: GamepadButton, param1: number, param2: number, index: number | undefined) => void,
  ): void;
  RegisterForNavigationTypeChange(callback: (navType: ENavigationSourceType) => void): void;
  SetControllerActive(nLastActiveControllerIndex: number): void;
  SetRepeatAllowed(value: boolean): void;
  SetSourceType(value: ENavigationSourceType): void;
}

interface DeferredFocusTarget {
  bFocusDescendant: boolean;
  node: CNavigationTreeNode;
}

declare class CNavigationTreeDeferredFocus {
  m_bSuppressed: boolean;
  // seems unused lol
  m_interval: any | undefined;
  m_schExecuteQueuedFocus: CScheduledFunc;
  m_target: DeferredFocusTarget | undefined;
  m_tree: CNavigationTree;

  BHasQueuedFocusNode(): boolean;
  BIsQueuedFocusNode(node: CNavigationTreeNode): boolean;
  ClearInterval(): void;
  ExecuteQueuedFocus(): void;
  RequestFocus(node: CNavigationTreeNode, target: DeferredFocusTarget): void;
  Reset(): void;
  SuppressFocus(): void;
}

declare class CTreeNodeMovementRect {
  m_element: Element | undefined;
  m_rect: DOMRect | undefined;

  GetRect(): DOMRect;
  Reset(): void;
  SetNode(value: Element | undefined): void;
}

// TODO: oh my god bruh, maybe merge with FooterLegendProps/FocusableProps ?
// they do seem to be used for <Focusable>, though
interface TreeNodeNavigationProps extends FooterLegendProps {
  autoFocus: boolean;
  childFocusDisabled: boolean;
  disableNavSounds: boolean;
  fnCanTakeFocus(node: CNavigationTreeNode): boolean;
  // or void?
  fnScrollIntoViewHandler: () => boolean;
  focusable: boolean;
  focusableIfEmpty: boolean;
  layout: EFlowChildrenLayout;
  navKey: string;
  // React.RefObject<T>
  navRef: any;
  noFocusRing: boolean;
  onFocusWithin(param0: boolean): void;
  onMoveDown(eventDetails: GamepadEventDetail, node: CNavigationTreeNode): boolean;
  onMoveLeft(eventDetails: GamepadEventDetail, node: CNavigationTreeNode): boolean;
  onMoveRight(eventDetails: GamepadEventDetail, node: CNavigationTreeNode): boolean;
  onMoveUp(eventDetails: GamepadEventDetail, node: CNavigationTreeNode): boolean;
  resetNavOnEntry: boolean;
  scrollIntoViewType: EScrollType;
  scrollIntoViewWhenChildFocused: boolean;
}

declare class CNavigationTreeNode {
  m_Tree: CNavigationTree;
  m_Parent: CNavigationTreeNode;
  m_ActiveChild: CNavigationTreeNode | undefined;
  m_iLastActiveChildIndex: boolean;
  m_Properties: Partial<TreeNodeNavigationProps>;
  m_element: Element | undefined;
  m_FocusRing: FocusRing_t;
  m_bChildrenSorted: boolean;
  m_bAutoFocusChild: boolean;
  m_bMounted: boolean;
  m_nDepth: number;
  m_Focused: SubscribableValue<boolean>;
  m_FocusWithin: SubscribableValue<boolean>;
  m_ActionDescriptionsChangedCallbackList: CCallbackList;
  m_FocusableIfEmptyAncestor: CNavigationTreeNode | null;
  m_rgChildren: CNavigationTreeNode[];
  m_rgNavigationHandlers: (() => void)[];
  m_rgFocusHandlers: (() => void)[];

  AdvanceIndex(idx: number, dir: EFocusDirection): number;
  AddChild(node: CNavigationTreeNode): void;
  // only top/right/bottom/left tho
  AdjustRectForLastMovementOnTangentAxis(rect: DOMRect, axis: 'x' | 'y'): DOMRect;
  BChildTakeFocus(focusSource: EFocusSource, button: GamepadButton): boolean;
  BHasFocus(): boolean;
  BFocusWithin(): boolean;
  BFocusFirstChild(focusSource: EFocusSource): boolean;
  BFocusLastChild(focusSource: EFocusSource): boolean;
  BTakeFocus(focusSource: EFocusSource, button: GamepadButton): void;
  BTryInternalNavigation(button: GamepadButton, t: boolean): boolean;
  BuildConsolidatedActionDescriptionMap(value: ActionDescriptionMap): ActionDescriptionMap;
  BVisibleChildTakeFocus(focusSource: EFocusSource): boolean;
  BWantsAutoFocus(): boolean;
  BWantsPreferredFocus(): boolean;
  BWantsFocusRing(): boolean;
  ComputeRelativeDirection(button: GamepadButton, layout: EFlowChildrenLayout): EFocusDirection;
  CreateHandle(): FocusRing_t;
  EnsureChildrenSorted(e?: boolean): void;
  FindClosetChildInDirection(
    axis: 'x' | 'y',
    rect: DOMRect,
    dir: EFocusDirection,
    button: GamepadButton,
  ): CNavigationTreeNode | null;
  FindClosestChildInNextAxiallyAlignedSet(
    axis: 'x' | 'y',
    dir: EFocusDirection,
    button: GamepadButton,
    rect: DOMRect,
    i?: number,
    rect2?: DOMRect,
  ): CNavigationTreeNode | null;
  FindClosestFocusableNodeToRect(button: GamepadButton, rect: DOMRect): CNavigationTreeNode;
  FindFocusableDescendant(button: GamepadButton, param1: boolean): CNavigationTreeNode | null;
  FindFocusableNode(button: GamepadButton, rect?: DOMRect): CNavigationTreeNode | null;
  FindNextFocusableChildGeometric(dir: EFocusDirection, button: GamepadButton): CNavigationTreeNode | null;
  FindNextFocusableChildInDirection(
    idx: number,
    dir: EFocusDirection,
    button: GamepadButton,
  ): CNavigationTreeNode | null;
  FindNextFocusableChildInGrid(idx: number, dir: EFocusDirection, button: GamepadButton): CNavigationTreeNode | null;
  ForceMeasureFocusRing(): void;
  GetActiveActionDescriptions(): ActionDescriptionMap;
  GetActiveChild(): CNavigationTreeNode | null;
  GetActiveChildIndex(): number;
  GetActiveDescendant(): CNavigationTreeNode;
  GetBoundingRect(): DOMRect | undefined;
  GetChildren(): [CNavigationTreeNode[], number];
  GetDepth(): number;
  GetFocusable(): 'children' | 'none' | 'self';
  GetLastFocusElement(): Element;
  GetLayout(): EFlowChildrenLayout;
  GetRelativeDirection(button: GamepadButton): EFocusDirection;
  GetScrollIntoViewType(): EScrollType;
  InternalFocusDescendant(node: CNavigationTreeNode | null, focusSource: EFocusSource, button: GamepadButton): void;
  IsValidChildIndex(idx: number): CNavigationTreeNode;
  OnDOMBlur(e: any): void;
  // e = false by default
  OnDOMFocus(e: any): void;
  OnFocusedDecendantRemoved(e: any): void;
  OnMount(el: Element): void;
  OnNavigationEvent(ev: GamepadEvent): void;
  OnUnmount(): void;
  PropagateFocusableIfEmptyAncestorToDescendants(node: CNavigationTreeNode): void;
  RegisterDOMEvents(): void;
  RemoveChild(node: CNavigationTreeNode): void;
  ScanChildren(e: number, dir: EFocusDirection, callback: (child: CNavigationTreeNode) => void): void;
  SetActiveChild(nodeOrIndex: CNavigationTreeNode | number): void;
  SetDOMFocusAndScroll(focusSource: EFocusSource, param1: any): void;
  SetFocusableIfEmptyAncestor(node: CNavigationTreeNode): void;
  SetFocusWithin(value: boolean): void;
  SetHasFocus(value: boolean): void;
  SetProperties(props: TreeNodeNavigationProps): void;
  UnregisterDOMEvents(): void;
  UpdateParentActiveChild(): void;

  get ActionDescriptionChangedCallbackList(): CCallbackList;
  get Tree(): CNavigationTree;
  get NavKey(): string | undefined;
  get Element(): Element | undefined;
  get Parent(): CNavigationTreeNode;
  get SubscribableFocusWithin(): SubscribableValue<boolean>;
  get SubscribableHasFocus(): SubscribableValue<boolean>;
}

declare class CNavigationTree {
  m_Controller: CFocusNavController;
  m_DeferredFocus: CNavigationTreeDeferredFocus;
  m_ID: string;
  m_ParentNavTree: CNavigationTree | undefined;
  m_Root: CNavigationTreeNode;
  m_bIsEmbeddedInLegacyTree: boolean;
  m_bIsEnabled: boolean;
  m_bIsMounted: boolean;
  m_bModal: boolean;
  m_bVirtualFocus: boolean;
  m_bWasActiveForLastFocusChange: boolean;
  m_context: CFocusNavigationContext;
  m_lastFocusNode: CNavigationTreeNode;
  m_lastFocusNodeXMovement: CTreeNodeMovementRect;
  m_lastFocusNodeYMovement: CTreeNodeMovementRect;
  m_onActivateCallbacks: CCallbackList<[CNavigationTree]>;
  m_onActiveFocusStateChangedCallbacks: CCallbackList<[boolean, CNavigationTree]>;
  m_onChildTreesChanged: CCallbackList<['add' | 'remove', CNavigationTree]>;
  m_onDeactivateCallbacks: CCallbackList<[CNavigationTree, CNavigationTree]>;
  m_onGlobalButtonDown: ((ev: GamepadEvent) => void) | undefined;
  m_onUnhandledButton: ((ev: GamepadEvent) => void) | undefined;
  m_rgChildNavTrees: CNavigationTree[];
  m_tsLastActivated: number;
  m_window: Window;

  Activate(param0?: boolean): void;
  AddChildNavTree(tree: CNavigationTree): () => void;
  BIsActive(): boolean;
  BIsActiveFocus(): boolean;
  BIsActiveWithinContext(): boolean;
  BIsContextActive(): boolean;
  BIsEnabled(): boolean;
  BIsModal(): boolean;
  BUseVirtualFocus(): boolean;
  CreateNode(parent: CNavigationTreeNode, focusRing: FocusRing_t): CNavigationTreeNode;
  Deactivate(): void;
  FindModalDescendant(): CNavigationTree;
  GetParentEmbeddedNavTree(): CNavigationTree | undefined;
  GetTimeLastActivated(): number;
  GetLastFocusedNode(): CNavigationTreeNode;
  GetLastFocusedMovementRect(e: string): DOMRect | undefined;
  HandleButtonDownEventAsLogicalEvent(ev: Event): boolean;
  IsActiveFocusNavTree(): boolean;
  OnActivate(tree: CNavigationTree): void;
  OnChildActivated(source: EFocusSource): void;
  OnContextActiveStateChanged(e: boolean): void;
  OnDeactivate(tree: CNavigationTree): void;
  OnRootButtonDown(ev: Event): boolean;
  MountNavTree(wnd: Window): () => void;
  RegisterNavigationItem(ctx: CFocusNavigationContext, wnd: Window): () => void;
  SetIsEnabled(value: boolean): void;
  SetIsEmbeddedInLegacyTree(value: boolean): void;
  SetModal(value: boolean): void;
  SetOnUnhandledButtonCallback(value: (ev: GamepadEvent) => void): void;
  SetOnGlobalButtonDown(value: (ev: GamepadEvent) => void): void;
  SetUseVirtualFocus(value: boolean): void;
  TakeFocus(focusSource: EFocusSource, t?: boolean): void;
  TransferFocus(
    focusSource: EFocusSource,
    focusedNode: CNavigationTreeNode | null,
    blurredNode: CNavigationTreeNode,
  ): void;
  TransferFocusInternal(
    focusSource: EFocusSource,
    focusedNode: CNavigationTreeNode | null,
    blurredNode: CNavigationTreeNode,
  ): void;

  get ChildTrees(): CNavigationTree[];
  get Controller(): CFocusNavController;
  get DeferredFocus(): CNavigationTreeDeferredFocus;
  get OnActivateCallbacks(): CCallbackList;
  get OnActiveStateChangedCallbacks(): CCallbackList;
  get OnChildTreesChangedCallbacks(): CCallbackList;
  get OnDeactivateCallbacks(): CCallbackList;
  get Parent(): CNavigationTree | undefined;
  get Root(): CNavigationTreeNode;
  get Window(): Window;
  get WindowContext(): CFocusNavigationContext;
  get id(): string;
}

interface ActiveFocusChange {
  source: EFocusSource;
  from: CNavigationTreeNode | undefined;
  to: CNavigationTree;
}

export declare class CFocusNavigationContext {
  m_ActiveFocusChange: ActiveFocusChange | undefined;
  // ActiveFocusChange [source, from, to] args
  m_FocusChangedCallbacks: CCallbackList<[EFocusSource, CNavigationTreeNode | undefined, CNavigationTree]>;
  m_LastActiveFocusNavTree: CNavigationTree | undefined;
  m_LastActiveNavTree: CNavigationTree | undefined;
  m_activeBrowserView: CGamepadBrowserView | undefined;
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
  OnActivateBrowserView(activeWindow: Window, activeBrowserView?: CGamepadBrowserView): void;
  OnDeactivate(activeWindow: Window): void;
  OnDeactivateBrowserView(activeWindow: Window, activeBrowserView?: CGamepadBrowserView): void;
  OnFocusChangeComplete(e: number): void;
  OnFocusChangeStart(
    source: EFocusSource,
    tree: CNavigationTree,
    from: CNavigationTreeNode | undefined,
    to: CNavigationTree,
  ): void;
  OnMount(wnd: Window): void;
  // #endregion

  SetActive(isActive: boolean, activeWindow: Window, activeBrowserView?: CGamepadBrowserView): void;
  SetActiveNavTree(tree: CNavigationTree | undefined, t: boolean): void;
  UnregisterGamepadNavigationTree(tree: CNavigationTree): void;

  get ActiveWindow(): Window;
  get FocusChangedCallbacks(): CCallbackList<[EFocusSource, CNavigationTreeNode | undefined, CNavigationTree]>;
  get IsActive(): SubscribableValue<boolean>;
  get RootWindow(): Window;
}

export declare class CFocusNavController {
  m_ActiveContext: CFocusNavigationContext | undefined;
  m_DefaultContext: CFocusNavigationContext | undefined;
  m_LastActiveContext: CFocusNavigationContext;
  m_UnhandledButtonEventsCallbacks: CCallbackList<[GamepadButton]>;
  m_bRestoringHistory: boolean;
  m_bShowDebugFocusRing: SubscribableValue<boolean>;
  m_fnCatchAllGamepadInput: ((button?: GamepadButton) => boolean) | null;
  m_fnGamepadEventUpdateBatcher: typeof ReactDOM.unstable_batchedUpdates;
  m_navigationSource: SubscribableValue<NavigationSource>;
  m_navigationSourceSupportsFocus: MappedSubscribableValue<boolean>;
  m_rgAllContexts: CFocusNavigationContext[];
  m_rgGamepadInputSources: CGamepadInputSource[];

  BGlobalGamepadButton(button: GamepadButton): boolean;
  BIsInActiveContext(context: CFocusNavigationContext | undefined): boolean;
  BIsRestoringHistory(): boolean;
  BatchedUpdate(callback: typeof ReactDOM.unstable_batchedUpdates): void;
  BlurNavTree(tree: CNavigationTree): void;
  ChangeNavigationSource(eActivationSourceType: ENavigationSourceType, nActiveGamepadIndex: number): boolean;
  CreateContext(wnd: Window, bIsGamepadInputSuppressed: boolean): CFocusNavigationContext;
  DestroyContext(ctx: CFocusNavigationContext): void;
  DispatchVirtualButtonClick(focusSource: EFocusSource, element: Element | null): void;
  DispatchVirtualGamepad(param0: 'vgp_onbuttondown' | 'vgp_onbuttonup', param1: boolean): void;
  FindAnActiveContext(): CFocusNavigationContext;
  FireUnhandledGamepadEventCallbacks(ev: GamepadEvent): boolean;
  GetActiveContext(): CFocusNavigationContext | undefined;
  GetDefaultContext(): CFocusNavigationContext;
  GetEventTarget(
    focusSource: EFocusSource,
    sourceType: ENavigationSourceType,
    // false by default
    takeFocus?: boolean,
  ): [Element | null, CFocusNavigationContext];
  GetShowDebugFocusRing(): SubscribableValue<boolean>;
  IsActiveFocusNavTree(tree: CNavigationTree | undefined): boolean;
  IsActiveNavTree(tree: CNavigationTree | undefined): boolean;
  NewGamepadNavigationTree(
    controller: CFocusNavController,
    context: CFocusNavigationContext,
    id: string,
  ): CNavigationTree;

  // #region Events
  OnButtonActionInternal(
    bTakeFocus: boolean,
    eButton: GamepadButton,
    eFocusSource: EFocusSource,
    nActiveGamepadIndex: number,
    bIsRepeat: boolean,
    element: Element | null,
    ctx: CFocusNavigationContext | null,
    bSuppressGamepadInput: boolean,
  ): void;
  OnButtonDown(
    eButton: GamepadButton,
    eFocusSource: EFocusSource,
    nActiveGamepadIndex: number,
    bIsRepeat: boolean,
    element: Element | null,
    ctx: CFocusNavigationContext | null,
    bSuppressGamepadInput: boolean,
  ): void;
  OnButtonUp(
    eButton: GamepadButton,
    eFocusSource: EFocusSource,
    nActiveGamepadIndex: number,
    bIsRepeat: boolean,
    element: Element | null,
    ctx: CFocusNavigationContext | null,
    bSuppressGamepadInput: boolean,
  ): void;
  OnContextActivated(ctx: CFocusNavigationContext): void;
  OnContextDeactivated(ctx: CFocusNavigationContext, param1: boolean): void;
  OnGamepadNavigationTreeActivated(tree: CNavigationTree, param1: boolean): void;
  OnGamepadNavigationTreeFocused(tree: CNavigationTree, focusSource: EFocusSource, param2?: boolean): void;
  // #endregion

  RegisterForUnhandledButtonDownEvents(callback: (ev: GamepadEvent) => void): Unsubscribable;
  /**
   * @returns an unregistration callback.
   */
  RegisterGamepadNavigationTree(tree: CNavigationTree, wnd: Window): () => void;
  /**
   * @returns an unregistration callback.
   */
  RegisterInputSource(value: CGamepadInputSource): () => void;
  RestoreHistoryTransaction(callback: () => Promise<void>): Promise<void>;
  SetCatchAllGamepadInput(callback: (button?: GamepadButton) => boolean): void;
  SetGamepadEventUpdateBatcher(value: typeof ReactDOM.unstable_batchedUpdates): void;
  SetShowDebugFocusRing(value: boolean): void;
  SetSuppressGamepadInput(value: boolean): void;
  TakeFocusChangingIFrame(): void;
  // param0 = false by default
  UpdateSourceToGamepad(param0?: boolean): void;

  get NavigationSource(): SubscribableValue<NavigationSource>;
  get NavigationSourceSupportsFocus(): MappedSubscribableValue<boolean>;
}
