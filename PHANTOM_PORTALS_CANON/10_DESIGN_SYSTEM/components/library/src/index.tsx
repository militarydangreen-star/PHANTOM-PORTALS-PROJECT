/**
 * Phantom Portals — React components (White-Forward Phantom Edition).
 * Styling lives in components/bundle.css + tokens.css; these components only emit semantic markup and the pp-* classes.
 * Wrap any surface in <PortalRoot> (or an element with class "pp") so tokens, fonts and focus rules apply.
 */
import React from 'react';

type Children = { children?: React.ReactNode };
const cx = (...c: Array<string | false | null | undefined>) => c.filter(Boolean).join(' ');

/* ------------------------------------------------------------------ icons */
export type IconName =
  | 'search' | 'home-portal' | 'back' | 'forward' | 'reload' | 'bookmark' | 'terminal' | 'diagnostics' | 'ai-core' | 'tools'
  | 'folder' | 'network' | 'shield' | 'cpu' | 'cloud' | 'settings' | 'power' | 'alert' | 'check' | 'close';

/** Where each icon SVG lives. Defaults point at this design system's asset store; call configureIcons() in your app. */
export const iconUrls: Record<IconName, string> = {
  'search': '/_blob/e6466f267cb10fe11a91c82dce860ed2',
  'home-portal': '/_blob/6670f4f3ec848d9ebdf5b916b4fae647',
  'back': '/_blob/4fb22c82656068ee14e71c66ce133f74',
  'forward': '/_blob/24e7f0eff926eb7e6b4287f496db225f',
  'reload': '/_blob/64fd484c36e2107beebe9186d6e4333c',
  'bookmark': '/_blob/29c28ea172f44369888f93930cd83783',
  'terminal': '/_blob/a136388357e55d503b140b6c7888fee9',
  'diagnostics': '/_blob/719f08eee2b3c1e89362c22b0aeb91fa',
  'ai-core': '/_blob/848abfe5e8aa3d334e73c13348067a1d',
  'tools': '/_blob/4f12dc18195b54415cb0eb37a0a293f1',
  'folder': '/_blob/ba0d00cfa8e36aabb8daa8a58853e5a4',
  'network': '/_blob/e774f771b116b67e7372a7b78a15815a',
  'shield': '/_blob/bd3fb9464dcd9896e00459132c342878',
  'cpu': '/_blob/ace56fdfda0963eba085b717cb55c253',
  'cloud': '/_blob/12aa134118214164bf1ed7b30130ea80',
  'settings': '/_blob/555b54a4a096413d33458ee900a3606b',
  'power': '/_blob/9665970473c416b7bb013eff39db3d9b',
  'alert': '/_blob/85a2d203f62988cf8f734e6b53ba45a1',
  'check': '/_blob/255a4e5b9e3269d7c267a794a2c0d444',
  'close': '/_blob/0805715fd32769cdb3fe7cb7b2207d55',
};
/** Point icons at your own copies, e.g. configureIcons(name => `/assets/icons/${name}.svg`) for offline builds. */
export function configureIcons(resolve: Partial<Record<IconName, string>> | ((name: IconName) => string)) {
  (Object.keys(iconUrls) as IconName[]).forEach((n) => {
    const v = typeof resolve === 'function' ? resolve(n) : resolve[n];
    if (v) iconUrls[n] = v;
  });
}


/** 160px Trash Polka feature badges (ink ensō, crimson dab, halftone, glyph). Same names as the UI icons. */
export const featureIconUrls: Record<IconName, string> = {
  'search': '/_blob/8106cb7ec2d0120b5be7f6196f6d00c9',
  'home-portal': '/_blob/2d0e9a4a06bda2360a6da93b50def67c',
  'back': '/_blob/292e0f7b8e64a53ba9ad7c6d8c61d579',
  'forward': '/_blob/28a3bbf7218de2368bd2827e082260f2',
  'reload': '/_blob/c7dad948b950e9bcd98b0fc64948cbc5',
  'bookmark': '/_blob/b857c77d85172e26ab5b574b0c77b306',
  'terminal': '/_blob/a8eee444eb3dc2745b55e31ba766526d',
  'diagnostics': '/_blob/8a5887ba0ffe1cfdfbe35b2f4e996297',
  'ai-core': '/_blob/78ffffd2dc4b529bb9693a6065e3c454',
  'tools': '/_blob/4822460633fddcde31a92104581745e2',
  'folder': '/_blob/ce2dbf214710158cc392bb37ee6279cf',
  'network': '/_blob/f3a3a64e4672174aee67d350bfee731b',
  'shield': '/_blob/3ce61daebc67d9abbc74426ad83d2d71',
  'cpu': '/_blob/2a2bce013d4001387b7a1e9a6980bdc7',
  'cloud': '/_blob/9fc3b56fa39644c124b5e5b7f04cdc2e',
  'settings': '/_blob/fc8a6daee36ff9941a3551c564859a59',
  'power': '/_blob/4c238722cef9230366bb4f43cc18da70',
  'alert': '/_blob/b62f2569a0854ea4c9d730323020b765',
  'check': '/_blob/ae0b091e017c1e8c8c1e3b089add57aa',
  'close': '/_blob/885337d9d2e4b07f933ef297eae31a71',
};
export function configureFeatureIcons(resolve: Partial<Record<IconName, string>> | ((name: IconName) => string)) {
  (Object.keys(featureIconUrls) as IconName[]).forEach((n) => {
    const v = typeof resolve === 'function' ? resolve(n) : resolve[n];
    if (v) featureIconUrls[n] = v;
  });
}
export interface FeatureIconProps { name: IconName; size?: number; label?: string; className?: string }
/** Large illustrative icon for tiles, launchers, empty states and docs — not for dense UI (use Icon). */
export function FeatureIcon({ name, size = 64, label, className }: FeatureIconProps) {
  return <img className={cx('pp-feature', className)} src={featureIconUrls[name]} width={size} height={size} alt={label ?? ''} aria-hidden={label ? undefined : true} draggable={false} />;
}

export interface IconProps { name: IconName; size?: 16 | 20 | 24; label?: string; className?: string }
/** One-ink icon that takes currentColor (the SVG is used as a mask). Decorative unless `label` is given. */
export function Icon({ name, size = 20, label, className }: IconProps) {
  const style = { ['--icon' as string]: `url(${iconUrls[name]})` } as React.CSSProperties;
  return (
    <span className={cx('pp-icon', size === 16 && 'pp-icon--16', size === 24 && 'pp-icon--24', className)} style={style}
      role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true} />
  );
}

/* ------------------------------------------------------------------ root */
export interface PortalRootProps extends React.HTMLAttributes<HTMLDivElement> { inverse?: boolean }
/** Applies the system's base styles (font, ink, canvas, focus rings). `inverse` for black architecture regions. */
export function PortalRoot({ inverse, className, ...rest }: PortalRootProps) {
  return <div className={cx('pp', inverse && 'pp-inverse', className)} {...rest} />;
}

/* ------------------------------------------------------------------ actions */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
  icon?: IconName;
  loading?: boolean;
  /** Render as a link instead of a button. */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}
/** One crimson primary per context; matte-black secondary; ghost for the rest. */
export function Button({ variant = 'secondary', size = 'md', icon, loading, href, className, children, disabled, type = 'button', ...rest }: ButtonProps) {
  const cls = cx('pp-btn', `pp-btn--${variant}`, size === 'lg' && 'pp-btn--lg', className);
  const inner = <>{loading ? <span className="pp-spin" aria-hidden /> : icon && <Icon name={icon} />}{children}</>;
  if (href && !disabled) {
    return <a className={cls} href={href} aria-busy={loading || undefined} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>{inner}</a>;
  }
  return <button type={type} className={cls} disabled={disabled} aria-busy={loading || undefined} {...rest}>{inner}</button>;
}

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  icon: IconName;
  /** Accessible name — required for icon-only controls. */
  label: string;
  pressed?: boolean;
  size?: 'sm' | 'md';
}
export function IconButton({ icon, label, pressed, size = 'md', className, ...rest }: IconButtonProps) {
  return (
    <button type="button" className={cx('pp-iconbtn', size === 'sm' && 'pp-iconbtn--sm', className)} aria-label={label} aria-pressed={pressed} title={label} {...rest}>
      <Icon name={icon} size={size === 'sm' ? 16 : 20} />
    </button>
  );
}

/* ------------------------------------------------------------------ inputs */
export interface OmniboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onSubmit'> {
  label?: string;
  icon?: IconName;
  shortcut?: string;
  onSubmit?: (value: string) => void;
}
/** Universal search / command field. Prefix ">" for command mode is a convention the consumer handles in onSubmit. */
export function Omnibox({ label = 'Search or run a command', icon = 'search', shortcut, onSubmit, onKeyDown, className, ...rest }: OmniboxProps) {
  return (
    <label className={cx('pp-omni', className)}>
      <Icon name={icon} />
      <span className="pp-sr">{label}</span>
      <input {...rest} onKeyDown={(e) => { onKeyDown?.(e); if (e.key === 'Enter' && onSubmit) onSubmit((e.target as HTMLInputElement).value); }} />
      {shortcut && <kbd>{shortcut}</kbd>}
    </label>
  );
}

function useControlled<T>(value: T | undefined, initial: T): [T, (v: T) => void] {
  const [inner, setInner] = React.useState(initial);
  return [value !== undefined ? value : inner, (v: T) => { if (value === undefined) setInner(v); }];
}

export interface TabItem { id: string; label: React.ReactNode }
export interface TabsProps { tabs: TabItem[]; value?: string; defaultValue?: string; onChange?: (id: string) => void; label?: string }
/** In-page section tabs with arrow-key navigation. */
export function Tabs({ tabs, value, defaultValue, onChange, label }: TabsProps) {
  const [active, setActive] = useControlled(value, defaultValue ?? tabs[0]?.id);
  const refs = React.useRef<Array<HTMLButtonElement | null>>([]);
  const select = (id: string) => { setActive(id); onChange?.(id); };
  const onKey = (e: React.KeyboardEvent, i: number) => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const n = (i + d + tabs.length) % tabs.length;
    refs.current[n]?.focus(); select(tabs[n].id);
  };
  return (
    <div className="pp-tabs" role="tablist" aria-label={label}>
      {tabs.map((t, i) => (
        <button key={t.id} ref={(el) => { refs.current[i] = el; }} type="button" role="tab" className="pp-tab"
          aria-selected={t.id === active} tabIndex={t.id === active ? 0 : -1} onClick={() => select(t.id)} onKeyDown={(e) => onKey(e, i)}>
          {t.label}
        </button>
      ))}
    </div>
  );
}

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  label: React.ReactNode;
  onChange?: (checked: boolean) => void;
  /** Words printed beside the switch — state is never colour alone. */
  onText?: string; offText?: string; stateText?: string;
}
export function Toggle({ label, checked, defaultChecked, onChange, onText = 'ON', offText = 'OFF', stateText, disabled, ...rest }: ToggleProps) {
  const [on, setOn] = useControlled(checked, !!defaultChecked);
  return (
    <label className="pp-toggle">
      <input type="checkbox" role="switch" checked={on} disabled={disabled} onChange={(e) => { setOn(e.target.checked); onChange?.(e.target.checked); }} {...rest} />
      {label}
      <span className="pp-toggle__state">{stateText ?? (on ? onText : offText)}</span>
    </label>
  );
}

export interface SliderProps { label: string; min?: number; max?: number; step?: number; value?: number; defaultValue?: number; onChange?: (v: number) => void; format?: (v: number) => string; ticks?: React.ReactNode[]; id?: string }
export function Slider({ label, min = 0, max = 100, step = 1, value, defaultValue, onChange, format = String, ticks, id }: SliderProps) {
  const auto = React.useId(); const sid = id ?? auto;
  const [v, setV] = useControlled(value, defaultValue ?? min);
  const fill = `${((v - min) / (max - min)) * 100}%`;
  return (
    <div className="pp-slider">
      <div className="pp-slider__head"><label htmlFor={sid}>{label}</label><output htmlFor={sid}>{format(v)}</output></div>
      <input id={sid} type="range" min={min} max={max} step={step} value={v} style={{ ['--fill' as string]: fill } as React.CSSProperties}
        onChange={(e) => { const n = Number(e.target.value); setV(n); onChange?.(n); }} />
      {ticks && <div className="pp-slider__ticks" aria-hidden>{ticks.map((t, i) => <span key={i}>{t}</span>)}</div>}
    </div>
  );
}

export interface SelectOption { value: string; label: string; disabled?: boolean }
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> { label: string; options: SelectOption[]; hint?: string; onChange?: (value: string) => void }
/** Native select with a crimson caret — keeps platform keyboard and screen-reader behaviour. */
export function Select({ label, options, hint, onChange, ...rest }: SelectProps) {
  return (
    <label className="pp-select">{label}
      <select {...rest} onChange={(e) => onChange?.(e.target.value)}>
        {options.map((o) => <option key={o.value} value={o.value} disabled={o.disabled}>{o.label}</option>)}
      </select>
      {hint && <small>{hint}</small>}
    </label>
  );
}

/* ------------------------------------------------------------------ browser shell */
export interface BrowserTab { id: string; title: string; icon?: IconName }
export interface TabStripProps { tabs: BrowserTab[]; activeId: string; onSelect?: (id: string) => void; onClose?: (id: string) => void; onNew?: () => void }
/** Chromium-style tab strip on black. Middle-click closes. */
export function TabStrip({ tabs, activeId, onSelect, onClose, onNew }: TabStripProps) {
  return (
    <div className="pp-tabstrip" role="tablist" aria-label="Open tabs">
      {tabs.map((t) => (
        <div key={t.id} role="tab" tabIndex={0} className="pp-btab" aria-selected={t.id === activeId} title={t.title}
          onClick={() => onSelect?.(t.id)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect?.(t.id); } }}
          onAuxClick={(e) => { if (e.button === 1) onClose?.(t.id); }}>
          {t.icon && <Icon name={t.icon} size={16} />}
          <span className="pp-btab__title">{t.title}</span>
          {onClose && <button type="button" className="pp-x" aria-label={`Close ${t.title}`} onClick={(e) => { e.stopPropagation(); onClose(t.id); }}><Icon name="close" size={16} /></button>}
        </div>
      ))}
      {onNew && <button type="button" className="pp-newtab" aria-label="New tab" onClick={onNew}>+</button>}
    </div>
  );
}

export type BookmarkItem = { label: string; href: string; icon?: IconName } | 'separator';
export function BookmarksBar({ items }: { items: BookmarkItem[] }) {
  return (
    <nav className="pp-bookmarks" aria-label="Bookmarks">
      {items.map((b, i) => b === 'separator' ? <hr key={i} /> : <a key={i} href={b.href}>{b.icon && <Icon name={b.icon} size={16} />}{b.label}</a>)}
    </nav>
  );
}

export type RailItem = { id: string; label: string; icon: IconName; href?: string } | 'separator';
export interface UtilityRailProps { items: RailItem[]; activeId?: string; onSelect?: (id: string) => void; label?: string }
/** 56px black rail for workspace switching. Every item is named (aria-label + title). */
export function UtilityRail({ items, activeId, onSelect, label = 'Workspaces' }: UtilityRailProps) {
  return (
    <nav className="pp-rail pp-inverse" aria-label={label}>
      {items.map((it, i) => it === 'separator' ? <hr key={i} /> : (
        <a key={it.id} href={it.href ?? '#'} aria-label={it.label} title={it.label} aria-current={it.id === activeId ? 'page' : undefined}
          onClick={(e) => { if (onSelect) { e.preventDefault(); onSelect(it.id); } }}>
          <Icon name={it.icon} />
        </a>
      ))}
    </nav>
  );
}

/* ------------------------------------------------------------------ command center */
export interface ToolTileProps { icon: IconName; title: string; description?: string; meta?: string; href?: string; current?: boolean; onClick?: () => void; /** Show the Trash Polka feature badge instead of the black icon plate. */ feature?: boolean }
/** Quick-launch tile. `current` marks the last-used tile with the crimson edge — one per grid. */
export function ToolTile({ icon, title, description, meta, href = '#', current, onClick, feature }: ToolTileProps) {
  return (
    <a className="pp-tile" href={href} aria-current={current || undefined} onClick={(e) => { if (onClick) { e.preventDefault(); onClick(); } }}>
      {feature ? <FeatureIcon name={icon} size={88} className="pp-tile__art" /> : <span className="pp-tile__icon"><Icon name={icon} /></span>}
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {meta && <span className="pp-tile__meta">{meta}</span>}
    </a>
  );
}

export interface CommandModuleProps extends Children { moduleId?: string; title: string; defaultOpen?: boolean; open?: boolean; onToggle?: (open: boolean) => void }
export function CommandModule({ moduleId, title, defaultOpen, open, onToggle, children }: CommandModuleProps) {
  return (
    <details className="pp-module" open={open ?? defaultOpen} onToggle={(e) => onToggle?.((e.target as HTMLDetailsElement).open)}>
      <summary>{moduleId && <span className="pp-module__id">{moduleId}</span>}{title}</summary>
      <div className="pp-module__body">{children}</div>
    </details>
  );
}

export interface Metric { label: string; value: string; /** 0–100 meter fill; omit for no meter. */ percent?: number; /** Over threshold: crimson meter — also say so in the label. */ hot?: boolean }
export interface StatusPanelProps { title: string; metrics: Metric[] }
/** Black HUD telemetry panel. Show only real readings; use value "Unavailable" when a source is missing. */
export function StatusPanel({ title, metrics }: StatusPanelProps) {
  return (
    <section className="pp-status" aria-label={title}>
      <div className="pp-eyebrow" style={{ color: 'var(--ink-on-inverse-secondary)' }}>{title}</div>
      <div className="pp-status__grid" style={{ gridTemplateColumns: `repeat(${Math.min(metrics.length, 4)}, 1fr)` }}>
        {metrics.map((m) => (
          <div key={m.label} className="pp-metric">
            <b>{m.value}</b><span>{m.label}</span>
            {m.percent !== undefined && <div className={cx('pp-meter', m.hot && 'pp-meter--hot')} role="meter" aria-valuenow={m.percent} aria-valuemin={0} aria-valuemax={100} aria-label={m.label}><i style={{ width: `${m.percent}%` }} /></div>}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ technical */
export interface TerminalLine { kind?: 'cmd' | 'out' | 'err' | 'dim'; text: string; note?: string }
export interface TerminalProps { title: React.ReactNode; lines: TerminalLine[]; prompt?: string; onCommand?: (cmd: string) => void; defaultInput?: string }
/** Working console. Pass real output only; omit onCommand when the shell can't accept input. */
export function Terminal({ title, lines, prompt = 'PS>', onCommand, defaultInput = '' }: TerminalProps) {
  const [cmd, setCmd] = React.useState(defaultInput);
  return (
    <section className="pp-term" aria-label="Terminal">
      <div className="pp-term__bar">{title}</div>
      <pre className="pp-term__out" aria-live="polite">{lines.map((l, i) => (
        <React.Fragment key={i}>
          {l.kind === 'cmd' && <span className="d">{prompt} </span>}
          {l.kind === 'err' ? <span className="k">{l.text}</span> : l.kind === 'dim' ? <span className="d">{l.text}</span> : l.text}
          {l.note && <span className="d"> # {l.note}</span>}
          {'\n'}
        </React.Fragment>
      ))}</pre>
      {onCommand && (
        <label className="pp-term__in"><span className="d">{prompt}</span><span className="pp-sr">Command input</span>
          <input value={cmd} onChange={(e) => setCmd(e.target.value)} spellCheck={false}
            onKeyDown={(e) => { if (e.key === 'Enter' && cmd.trim()) { onCommand(cmd); setCmd(''); } }} />
        </label>
      )}
    </section>
  );
}

export interface Column<R> { key: keyof R & string; label: string; numeric?: boolean; render?: (row: R) => React.ReactNode }
export interface DiagnosticTableProps<R extends { id: string }> { columns: Column<R>[]; rows: R[]; selectedId?: string; onSelect?: (id: string) => void; caption?: string }
export function DiagnosticTable<R extends { id: string }>({ columns, rows, selectedId, onSelect, caption }: DiagnosticTableProps<R>) {
  return (
    <table className="pp-table">
      {caption && <caption className="pp-sr">{caption}</caption>}
      <thead><tr>{columns.map((c) => <th key={c.key} scope="col" style={c.numeric ? { textAlign: 'right' } : undefined}>{c.label}</th>)}</tr></thead>
      <tbody>{rows.map((r) => (
        <tr key={r.id} aria-selected={r.id === selectedId || undefined} onClick={onSelect && (() => onSelect(r.id))} style={onSelect ? { cursor: 'pointer' } : undefined}>
          {columns.map((c) => <td key={c.key} className={c.numeric ? 'num' : undefined}>{c.render ? c.render(r) : String(r[c.key] ?? '')}</td>)}
        </tr>
      ))}</tbody>
    </table>
  );
}

export interface Source { label: string; href: string }
export interface AIResponseProps extends Children { model: string; local?: boolean; sources?: Source[]; actions?: React.ReactNode }
/** AI answer card. Always names the model and where it ran, and links its sources. */
export function AIResponse({ model, local, sources = [], actions, children }: AIResponseProps) {
  return (
    <article className="pp-ai">
      <div className="pp-ai__head"><Icon name="ai-core" size={16} /><b>{model}</b> · {local ? 'LOCAL MODEL' : 'REMOTE MODEL'} · {sources.length} SOURCE{sources.length === 1 ? '' : 'S'}</div>
      <div className="pp-ai__body">{typeof children === 'string' ? <p>{children}</p> : children}</div>
      {sources.length > 0 && <div className="pp-ai__src">{sources.map((s) => <a key={s.href + s.label} className="pp-src" href={s.href}>{s.label}</a>)}</div>}
      {actions && <div className="pp-ai__actions">{actions}</div>}
    </article>
  );
}

/* ------------------------------------------------------------------ feedback */
export type Status = 'ok' | 'warn' | 'error' | 'run' | 'idle';
export interface StatusBadgeProps extends Children { status?: Status }
/** Status by shape + word + colour: circle ok, triangle warn, diamond error, ring running, square idle. */
export function StatusBadge({ status = 'idle', children }: StatusBadgeProps) {
  return <span className={cx('pp-badge', status !== 'idle' && `pp-badge--${status}`)} role={status === 'run' ? 'status' : undefined}>{children}</span>;
}

export interface NotificationProps extends Children { tone?: 'ok' | 'error' | 'warn' | 'info'; title: string; icon?: IconName; onDismiss?: () => void }
const toneIcon: Record<string, IconName> = { ok: 'check', error: 'alert', warn: 'alert', info: 'cloud' };
export function Notification({ tone = 'info', title, icon, onDismiss, children }: NotificationProps) {
  return (
    <div className={cx('pp-toast', tone !== 'info' && `pp-toast--${tone}`)} role={tone === 'error' ? 'alert' : 'status'}>
      <Icon name={icon ?? toneIcon[tone]} />
      <div><b>{title}</b>{children && <p>{children}</p>}</div>
      {onDismiss ? <IconButton icon="close" label="Dismiss" size="sm" onClick={onDismiss} /> : <span />}
    </div>
  );
}

export interface ProgressProps { label: string; /** 0–max; omit for indeterminate. */ value?: number; max?: number; detail?: string }
export function Progress({ label, value, max = 100, detail }: ProgressProps) {
  const indet = value === undefined;
  const pct = indet ? 0 : Math.max(0, Math.min(100, (value! / max) * 100));
  return (
    <div className={cx('pp-progress', indet && 'pp-progress--indeterminate')}>
      <div className="pp-progress__head">{label}<span>{detail ?? (indet ? 'WORKING' : `${Math.round(pct)}%`)}</span></div>
      <div className="pp-progress__track" role="progressbar" aria-label={label} aria-valuenow={indet ? undefined : Math.round(pct)} aria-valuemin={0} aria-valuemax={100}>
        <i style={indet ? undefined : { width: `${pct}%` }} />
      </div>
    </div>
  );
}

export interface TooltipProps { content: React.ReactNode; shortcut?: string; children: React.ReactElement; defaultOpen?: boolean }
/** Shows on hover and focus, hides on Escape; links itself to the trigger with aria-describedby. */
export function Tooltip({ content, shortcut, children, defaultOpen }: TooltipProps) {
  const [open, setOpen] = React.useState(!!defaultOpen);
  const id = React.useId();
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  return (
    <span className="pp-tip" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}>
      {React.cloneElement(children, { 'aria-describedby': id } as Record<string, string>)}
      <span className="pp-tip__body" role="tooltip" id={id} hidden={!open}>{content}{shortcut && <kbd>{shortcut}</kbd>}</span>
    </span>
  );
}

/* ------------------------------------------------------------------ signature */
const ART = {
  emblem: '/_blob/f29cb6f71666a3072037302bb85a017b', slash: '/_blob/82d300a2272e0dc0a0cd277c8424549b',
  splatter: '/_blob/79f81b478a2e8fddce7554ba6c1c6192', halftone: '/_blob/a300aea66dc08849d634f479c6c7e123',
};
/** Override hero artwork URLs for offline builds (keys: emblem — the 512px PNG — plus slash, splatter, halftone for custom compositions). */
export function configureArt(urls: Partial<typeof ART>) { Object.assign(ART, urls); }

export interface PhantomHeroProps { eyebrow?: string; title: React.ReactNode; accent?: React.ReactNode; description?: React.ReactNode; actions?: React.ReactNode }
/** The one place Trash Polka runs at full strength. Use once per surface. */
export function PhantomHero({ eyebrow, title, accent, description, actions }: PhantomHeroProps) {
  return (
    <section className="pp-hero" aria-label="Phantom Portals">
      <img className="pp-hero__art" src={ART.emblem} alt="" style={{ right: 24, top: '50%', width: 420, height: 420, transform: 'translateY(-50%)' }} />
      <div className="pp-hero__copy">
        {eyebrow && <span className="pp-eyebrow">{eyebrow}</span>}
        <h1>{title}{accent && <> <em>{accent}</em></>}</h1>
        {description && <p>{description}</p>}
        {actions && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>{actions}</div>}
      </div>
    </section>
  );
}

export interface HudRingProps { value: string; label: string; /** Rotate the crimson arc only while data is actually updating. */ live?: boolean }
export function HudRing({ value, label, live = true }: HudRingProps) {
  return (
    <div className="pp-hud" role="img" aria-label={`${label} ${value}`}>
      <span className="pp-hud__ring pp-hud__ring--a" /><span className="pp-hud__ring pp-hud__ring--b" />
      <span className="pp-hud__ring pp-hud__ring--c" style={live ? undefined : { animation: 'none' }} /><span className="pp-hud__ring pp-hud__ring--d" />
      <div className="pp-hud__val"><b>{value}</b><span>{label}</span></div>
    </div>
  );
}
