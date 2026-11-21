import {
  CSSProperties,
  FC,
  ReactNode,
  useMemo,
  useState,
} from 'react';

/** Minimal fallbacks for components the Vite build no longer exports. */

const fontFamily = 'Motiva Sans, Arial, sans-serif';

// Find native panel classes by the CSS rules Steam ships.
export const nativeClasses: { section?: string; header?: string; row?: string } = {};
let nativeClassesResolved = false;
const findClassByRule = (matches: (rule: CSSStyleRule) => boolean, selector = /^\.([\w-]+)$/) => {
  for (const sheet of Array.from(document.styleSheets)) {
    let rules: CSSRuleList;
    try {
      rules = sheet.cssRules;
    } catch {
      continue;
    }
    for (const rule of Array.from(rules)) {
      if (!(rule instanceof CSSStyleRule)) continue;
      const name = selector.exec(rule.selectorText)?.[1];
      if (name && matches(rule)) return name;
    }
  }
  return undefined;
};
export const discoverNativeClasses = () => {
  if (nativeClassesResolved) return nativeClasses;
  nativeClassesResolved = true;
  nativeClasses.section = findClassByRule(
    ({ style }) => style.margin === '0px 0px 24px' && style.padding === '0px 16px',
  );
  nativeClasses.header = findClassByRule(
    ({ style }) => style.textTransform === 'uppercase' && style.padding === '0px 0px 8px',
  );
  nativeClasses.row = findClassByRule(
    ({ cssText }) => cssText.includes('--field-negative-horizontal-margin: 16px'),
    /^\.([\w-]+) > :first-child$/,
  );
  return nativeClasses;
};

const spinnerKeyframes = `@keyframes decky-vite-spin { to { transform: rotate(360deg); } }`;
let keyframesInjected = false;
const useSpinnerKeyframes = () => {
  if (typeof document === 'undefined' || keyframesInjected) return;
  keyframesInjected = true;
  const style = document.createElement('style');
  style.textContent = spinnerKeyframes;
  document.head.appendChild(style);
};

const SpinnerCircle: FC<{ size?: number }> = ({ size = 28 }) => {
  useSpinnerKeyframes();
  return (
    <div
      style={{
        width: size,
        height: size,
        border: '3px solid rgba(255, 255, 255, 0.2)',
        borderTopColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '50%',
        animation: 'decky-vite-spin 1s linear infinite',
        margin: '16px auto',
      }}
    />
  );
};

export const VitePanelSection: FC<{ title?: string; spinner?: boolean; children?: ReactNode }> = ({
  title,
  spinner,
  children,
}) => {
  const classes = discoverNativeClasses();
  return (
    <div className={classes.section} style={classes.section ? undefined : { margin: '0 0 24px', padding: '0 16px' }}>
      {title && (
        <div
          className={classes.header}
          style={
            classes.header
              ? { display: 'flex' }
              : { display: 'flex', fontSize: 13, opacity: 0.7, textTransform: 'uppercase', paddingBottom: 8 }
          }
        >
          <div style={{ flexGrow: 1 }}>{title}</div>
        </div>
      )}
      {spinner ? <SpinnerCircle /> : children}
    </div>
  );
};

export const VitePanelSectionRow: FC<{ children?: ReactNode }> = ({ children }) => (
  <div className={discoverNativeClasses().row}>{children}</div>
);

const barStyle: CSSProperties = {
  width: '100%',
  height: 8,
  borderRadius: 4,
  background: 'rgba(255, 255, 255, 0.15)',
  overflow: 'hidden',
};

const barFillStyle = (value: number): CSSProperties => ({
  width: `${Math.max(0, Math.min(100, value))}%`,
  height: '100%',
  background: '#1a9fff',
  transition: 'width 0.2s linear',
});

export const ViteProgressBar: FC<{ nProgress?: number; indeterminate?: boolean }> = ({
  nProgress = 0,
  indeterminate,
}) => (
  <div style={barStyle}>
    <div
      style={{
        ...barFillStyle(indeterminate ? 33 : nProgress),
        animation: indeterminate ? 'decky-vite-spin 1s linear infinite' : undefined,
      }}
    />
  </div>
);

export const ViteProgressBarWithInfo: FC<{
  nProgress?: number;
  indeterminate?: boolean;
  sOperationText?: ReactNode;
  children?: ReactNode;
}> = ({ nProgress, indeterminate, sOperationText, children }) => (
  <div style={{ fontFamily, width: '100%' }}>
    {(sOperationText || children) && (
      <div style={{ fontSize: 12, opacity: 0.8, marginBottom: 4 }}>{sOperationText || children}</div>
    )}
    <ViteProgressBar nProgress={nProgress} indeterminate={indeterminate} />
  </div>
);

export const ViteProgressBarItem: FC<{ nProgress?: number; indeterminate?: boolean; children?: ReactNode }> = ({
  nProgress,
  indeterminate,
  children,
}) => (
  <div style={{ fontFamily, width: '100%', padding: '4px 0' }}>
    {children && <div style={{ fontSize: 13, marginBottom: 4 }}>{children}</div>}
    <ViteProgressBar nProgress={nProgress} indeterminate={indeterminate} />
  </div>
);

export const ViteSteamSpinner: FC<{ children?: ReactNode }> = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 24, fontFamily }}>
    <SpinnerCircle />
    {children && <div style={{ opacity: 0.8 }}>{children}</div>}
  </div>
);

export const ViteControlsList: FC<{ alignItems?: string; spacing?: string; children?: ReactNode }> = ({
  alignItems = 'center',
  spacing = 'standard',
  children,
}) => (
  <div
    style={{
      display: 'flex',
      justifyContent:
        alignItems === 'left' ? 'flex-start' : alignItems === 'right' ? 'flex-end' : 'center',
      gap: spacing === 'extra' ? 16 : 8,
      flexWrap: 'wrap',
    }}
  >
    {children}
  </div>
);

export const ViteMarquee: FC<{ children?: ReactNode; className?: string; style?: CSSProperties }> = ({
  children,
  className,
  style,
}) => (
  <div
    className={className}
    style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', ...style }}
  >
    {children}
  </div>
);

export const ViteScrollPanel: FC<{ children?: ReactNode }> = ({ children }) => (
  <div style={{ overflowY: 'auto', flex: 1 }}>{children}</div>
);

export const ViteScrollPanelGroup: FC<{ children?: ReactNode }> = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>{children}</div>
);

export const ViteTabs: FC<{
  tabs: { id: string; title: ReactNode; content: ReactNode; renderTabAddon?: () => ReactNode }[];
  activeTab: string;
  onShowTab: (tab: string) => void;
}> = ({ tabs, activeTab, onShowTab }) => {
  const current = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', fontFamily }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          height: 64,
          flexShrink: 0,
        }}
      >
        {tabs.map((tab) => {
          const active = tab.id === activeTab;
          // Icons use compact square tabs; text tabs are wider pills.
          const isText = typeof tab.title === 'string';
          return (
            <button
              key={tab.id}
              onClick={() => onShowTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                height: isText ? 34 : 44,
                padding: isText ? '0 20px' : 0,
                width: isText ? undefined : 44,
                border: 'none',
                borderRadius: isText ? 34 : 22,
                background: active ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                color: active ? '#fff' : '#dcdedf',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: isText ? 14 : 22,
                fontWeight: 700,
                letterSpacing: '.5px',
                textTransform: isText ? 'uppercase' : 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {tab.title}
              {tab.renderTabAddon?.()}
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '8px 2.8vw 40px' }}
      >
        {current?.content}
      </div>
    </div>
  );
};

export const ViteCarousel: FC<{
  nNumItems?: number;
  fnItemRenderer?: (index: number) => ReactNode;
  children?: ReactNode;
  style?: CSSProperties;
}> = ({ nNumItems = 0, fnItemRenderer, children, style }) => {
  const items = useMemo(
    () => Array.from({ length: nNumItems }, (_, index) => fnItemRenderer?.(index)),
    [nNumItems, fnItemRenderer],
  );
  return (
    <div style={{ display: 'flex', gap: 12, overflowX: 'auto', padding: 8, ...style }}>
      {fnItemRenderer ? items : children}
    </div>
  );
};

export const ViteSidebarNavigation: FC<{
  title?: ReactNode;
  pages: ({ title: ReactNode; content: ReactNode; identifier?: string } | 'separator')[];
  showTitle?: boolean;
  page?: string;
  onPageRequested?: (page: string) => void;
}> = ({ title, pages, showTitle = true, page, onPageRequested }) => {
  const [active, setActive] = useState(page ?? pages.find((p) => p !== 'separator')?.identifier ?? '0');
  const selectPage = (identifier: string) => {
    setActive(identifier);
    onPageRequested?.(identifier);
  };
  const current = pages.find((p) => p !== 'separator' && (p.identifier ?? '') === active);
  return (
    <div style={{ display: 'flex', height: '100%', fontFamily }}>
      <div style={{ minWidth: 200, borderRight: '1px solid rgba(255,255,255,0.1)', padding: 8 }}>
        {showTitle && title && <div style={{ fontWeight: 600, padding: '8px 12px' }}>{title}</div>}
        {pages.map((p, index) =>
          p === 'separator' ? (
            <div key={`sep-${index}`} style={{ height: 1, background: 'rgba(255,255,255,0.1)', margin: '8px 0' }} />
          ) : (
            <button
              key={p.identifier ?? index}
              onClick={() => selectPage(p.identifier ?? String(index))}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '8px 12px',
                background: (p.identifier ?? '') === active ? 'rgba(255,255,255,0.1)' : 'none',
                border: 'none',
                borderRadius: 4,
                color: 'inherit',
                cursor: 'pointer',
                font: 'inherit',
              }}
            >
              {p.title}
            </button>
          ),
        )}
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: 12 }}>
        {current && current !== 'separator' ? current.content : null}
      </div>
    </div>
  );
};

export const ViteModalRoot: FC<{ children?: ReactNode; closeModal?: () => void }> = ({ children, closeModal }) => (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 99999,
      fontFamily,
    }}
    onClick={() => closeModal?.()}
  >
    <div
      style={{ background: '#1b2838', borderRadius: 8, padding: 24, maxWidth: '80vw', maxHeight: '80vh', overflow: 'auto' }}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  </div>
);

export const ViteDialogHeader: FC<{ children?: ReactNode; className?: string }> = ({ children, className }) => (
  <div className={className} style={{ fontSize: 18, fontWeight: 600, fontFamily, marginBottom: 12 }}>
    {children}
  </div>
);

export const ViteDialogSubHeader: FC<{ children?: ReactNode; className?: string }> = ({ children, className }) => (
  <div className={className} style={{ fontSize: 14, opacity: 0.8, fontFamily, marginBottom: 8 }}>
    {children}
  </div>
);

export const ViteDialogLabel: FC<{ children?: ReactNode; className?: string }> = ({ children, className }) => (
  <div className={className} style={{ fontSize: 13, fontWeight: 600, fontFamily, marginBottom: 4 }}>
    {children}
  </div>
);

export const ViteDialogBodyText: FC<{ children?: ReactNode; className?: string }> = ({ children, className }) => (
  <div className={className} style={{ fontFamily, marginBottom: 8 }}>
    {children}
  </div>
);

export const ViteDialogBody: FC<{ children?: ReactNode; className?: string }> = ({ children, className }) => (
  <div className={className} style={{ fontFamily, marginBottom: 12 }}>
    {children}
  </div>
);

export const ViteDialogFooter: FC<{ children?: ReactNode; className?: string }> = ({ children, className }) => (
  <div className={className} style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', fontFamily }}>
    {children}
  </div>
);

export const ViteDialogControlsSection: FC<{ children?: ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily }}>
    {children}
  </div>
);

export const ViteDialogControlsSectionHeader: FC<{ children?: ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={className} style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', opacity: 0.7 }}>
    {children}
  </div>
);

export const ViteSliderField: FC<{
  value: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
}> = ({ value, min = 0, max = 100, step = 1, disabled, onChange }) => (
  <input
    type="range"
    min={min}
    max={max}
    step={step}
    value={value}
    disabled={disabled}
    onChange={(e) => onChange?.(Number(e.target.value))}
    style={{ width: '100%' }}
  />
);

export const ViteToggleField: FC<{
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  children?: ReactNode;
}> = ({ checked, disabled, onChange, children }) => (
  <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily }}>
    <input type="checkbox" checked={checked} disabled={disabled} onChange={(e) => onChange?.(e.target.checked)} />
    {children}
  </label>
);

export const ViteSimpleModal: FC<{ active?: boolean; children?: ReactNode }> = ({ active, children }) =>
  active === false ? null : <ViteModalRoot>{children}</ViteModalRoot>;
