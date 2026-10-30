/**
 * Phantom Portals — React components (White-Forward Phantom Edition).
 * Styling lives in components/bundle.css + tokens.css; these components only emit semantic markup and the pp-* classes.
 * Wrap any surface in <PortalRoot> (or an element with class "pp") so tokens, fonts and focus rules apply.
 */
import type * as React from 'react';
type Children = {
    children?: React.ReactNode;
};
export type IconName = 'search' | 'home-portal' | 'back' | 'forward' | 'reload' | 'bookmark' | 'terminal' | 'diagnostics' | 'ai-core' | 'tools' | 'folder' | 'network' | 'shield' | 'cpu' | 'cloud' | 'settings' | 'power' | 'alert' | 'check' | 'close';
/** Where each icon SVG lives. Defaults point at this design system's asset store; call configureIcons() in your app. */
export declare const iconUrls: Record<IconName, string>;
/** Point icons at your own copies, e.g. configureIcons(name => `/assets/icons/${name}.svg`) for offline builds. */
export declare function configureIcons(resolve: Partial<Record<IconName, string>> | ((name: IconName) => string)): void;
/** 160px Trash Polka feature badges (ink ensō, crimson dab, halftone, glyph). Same names as the UI icons. */
export declare const featureIconUrls: Record<IconName, string>;
export declare function configureFeatureIcons(resolve: Partial<Record<IconName, string>> | ((name: IconName) => string)): void;
export interface FeatureIconProps {
    name: IconName;
    size?: number;
    label?: string;
    className?: string;
}
/** Large illustrative icon for tiles, launchers, empty states and docs — not for dense UI (use Icon). */
export declare function FeatureIcon({ name, size, label, className }: FeatureIconProps): React.JSX.Element;
export interface IconProps {
    name: IconName;
    size?: 16 | 20 | 24;
    label?: string;
    className?: string;
}
/** One-ink icon that takes currentColor (the SVG is used as a mask). Decorative unless `label` is given. */
export declare function Icon({ name, size, label, className }: IconProps): React.JSX.Element;
export interface PortalRootProps extends React.HTMLAttributes<HTMLDivElement> {
    inverse?: boolean;
}
/** Applies the system's base styles (font, ink, canvas, focus rings). `inverse` for black architecture regions. */
export declare function PortalRoot({ inverse, className, ...rest }: PortalRootProps): React.JSX.Element;
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
export declare function Button({ variant, size, icon, loading, href, className, children, disabled, type, ...rest }: ButtonProps): React.JSX.Element;
export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    icon: IconName;
    /** Accessible name — required for icon-only controls. */
    label: string;
    pressed?: boolean;
    size?: 'sm' | 'md';
}
export declare function IconButton({ icon, label, pressed, size, className, ...rest }: IconButtonProps): React.JSX.Element;
export interface OmniboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onSubmit'> {
    label?: string;
    icon?: IconName;
    shortcut?: string;
    onSubmit?: (value: string) => void;
}
/** Universal search / command field. Prefix ">" for command mode is a convention the consumer handles in onSubmit. */
export declare function Omnibox({ label, icon, shortcut, onSubmit, onKeyDown, className, ...rest }: OmniboxProps): React.JSX.Element;
export interface TabItem {
    id: string;
    label: React.ReactNode;
}
export interface TabsProps {
    tabs: TabItem[];
    value?: string;
    defaultValue?: string;
    onChange?: (id: string) => void;
    label?: string;
}
/** In-page section tabs with arrow-key navigation. */
export declare function Tabs({ tabs, value, defaultValue, onChange, label }: TabsProps): React.JSX.Element;
export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
    label: React.ReactNode;
    onChange?: (checked: boolean) => void;
    /** Words printed beside the switch — state is never colour alone. */
    onText?: string;
    offText?: string;
    stateText?: string;
}
export declare function Toggle({ label, checked, defaultChecked, onChange, onText, offText, stateText, disabled, ...rest }: ToggleProps): React.JSX.Element;
export interface SliderProps {
    label: string;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    defaultValue?: number;
    onChange?: (v: number) => void;
    format?: (v: number) => string;
    ticks?: React.ReactNode[];
    id?: string;
}
export declare function Slider({ label, min, max, step, value, defaultValue, onChange, format, ticks, id }: SliderProps): React.JSX.Element;
export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
    label: string;
    options: SelectOption[];
    hint?: string;
    onChange?: (value: string) => void;
}
/** Native select with a crimson caret — keeps platform keyboard and screen-reader behaviour. */
export declare function Select({ label, options, hint, onChange, ...rest }: SelectProps): React.JSX.Element;
export interface BrowserTab {
    id: string;
    title: string;
    icon?: IconName;
}
export interface TabStripProps {
    tabs: BrowserTab[];
    activeId: string;
    onSelect?: (id: string) => void;
    onClose?: (id: string) => void;
    onNew?: () => void;
}
/** Chromium-style tab strip on black. Middle-click closes. */
export declare function TabStrip({ tabs, activeId, onSelect, onClose, onNew }: TabStripProps): React.JSX.Element;
export type BookmarkItem = {
    label: string;
    href: string;
    icon?: IconName;
} | 'separator';
export declare function BookmarksBar({ items }: {
    items: BookmarkItem[];
}): React.JSX.Element;
export type RailItem = {
    id: string;
    label: string;
    icon: IconName;
    href?: string;
} | 'separator';
export interface UtilityRailProps {
    items: RailItem[];
    activeId?: string;
    onSelect?: (id: string) => void;
    label?: string;
}
/** 56px black rail for workspace switching. Every item is named (aria-label + title). */
export declare function UtilityRail({ items, activeId, onSelect, label }: UtilityRailProps): React.JSX.Element;
export interface ToolTileProps {
    icon: IconName;
    title: string;
    description?: string;
    meta?: string;
    href?: string;
    current?: boolean;
    onClick?: () => void; /** Show the Trash Polka feature badge instead of the black icon plate. */
    feature?: boolean;
}
/** Quick-launch tile. `current` marks the last-used tile with the crimson edge — one per grid. */
export declare function ToolTile({ icon, title, description, meta, href, current, onClick, feature }: ToolTileProps): React.JSX.Element;
export interface CommandModuleProps extends Children {
    moduleId?: string;
    title: string;
    defaultOpen?: boolean;
    open?: boolean;
    onToggle?: (open: boolean) => void;
}
export declare function CommandModule({ moduleId, title, defaultOpen, open, onToggle, children }: CommandModuleProps): React.JSX.Element;
export interface Metric {
    label: string;
    value: string; /** 0–100 meter fill; omit for no meter. */
    percent?: number; /** Over threshold: crimson meter — also say so in the label. */
    hot?: boolean;
}
export interface StatusPanelProps {
    title: string;
    metrics: Metric[];
}
/** Black HUD telemetry panel. Show only real readings; use value "Unavailable" when a source is missing. */
export declare function StatusPanel({ title, metrics }: StatusPanelProps): React.JSX.Element;
export interface TerminalLine {
    kind?: 'cmd' | 'out' | 'err' | 'dim';
    text: string;
    note?: string;
}
export interface TerminalProps {
    title: React.ReactNode;
    lines: TerminalLine[];
    prompt?: string;
    onCommand?: (cmd: string) => void;
    defaultInput?: string;
}
/** Working console. Pass real output only; omit onCommand when the shell can't accept input. */
export declare function Terminal({ title, lines, prompt, onCommand, defaultInput }: TerminalProps): React.JSX.Element;
export interface Column<R> {
    key: keyof R & string;
    label: string;
    numeric?: boolean;
    render?: (row: R) => React.ReactNode;
}
export interface DiagnosticTableProps<R extends {
    id: string;
}> {
    columns: Column<R>[];
    rows: R[];
    selectedId?: string;
    onSelect?: (id: string) => void;
    caption?: string;
}
export declare function DiagnosticTable<R extends {
    id: string;
}>({ columns, rows, selectedId, onSelect, caption }: DiagnosticTableProps<R>): React.JSX.Element;
export interface Source {
    label: string;
    href: string;
}
export interface AIResponseProps extends Children {
    model: string;
    local?: boolean;
    sources?: Source[];
    actions?: React.ReactNode;
}
/** AI answer card. Always names the model and where it ran, and links its sources. */
export declare function AIResponse({ model, local, sources, actions, children }: AIResponseProps): React.JSX.Element;
export type Status = 'ok' | 'warn' | 'error' | 'run' | 'idle';
export interface StatusBadgeProps extends Children {
    status?: Status;
}
/** Status by shape + word + colour: circle ok, triangle warn, diamond error, ring running, square idle. */
export declare function StatusBadge({ status, children }: StatusBadgeProps): React.JSX.Element;
export interface NotificationProps extends Children {
    tone?: 'ok' | 'error' | 'warn' | 'info';
    title: string;
    icon?: IconName;
    onDismiss?: () => void;
}
export declare function Notification({ tone, title, icon, onDismiss, children }: NotificationProps): React.JSX.Element;
export interface ProgressProps {
    label: string; /** 0–max; omit for indeterminate. */
    value?: number;
    max?: number;
    detail?: string;
}
export declare function Progress({ label, value, max, detail }: ProgressProps): React.JSX.Element;
export interface TooltipProps {
    content: React.ReactNode;
    shortcut?: string;
    children: React.ReactElement;
    defaultOpen?: boolean;
}
/** Shows on hover and focus, hides on Escape; links itself to the trigger with aria-describedby. */
export declare function Tooltip({ content, shortcut, children, defaultOpen }: TooltipProps): React.JSX.Element;
declare const ART: {
    emblem: string;
    slash: string;
    splatter: string;
    halftone: string;
};
/** Override hero artwork URLs for offline builds (keys: emblem — the 512px PNG — plus slash, splatter, halftone for custom compositions). */
export declare function configureArt(urls: Partial<typeof ART>): void;
export interface PhantomHeroProps {
    eyebrow?: string;
    title: React.ReactNode;
    accent?: React.ReactNode;
    description?: React.ReactNode;
    actions?: React.ReactNode;
}
/** The one place Trash Polka runs at full strength. Use once per surface. */
export declare function PhantomHero({ eyebrow, title, accent, description, actions }: PhantomHeroProps): React.JSX.Element;
export interface HudRingProps {
    value: string;
    label: string; /** Rotate the crimson arc only while data is actually updating. */
    live?: boolean;
}
export declare function HudRing({ value, label, live }: HudRingProps): React.JSX.Element;
export {};
declare global { interface Window { PhantomPortals: { Button: typeof Button; IconButton: typeof IconButton; Omnibox: typeof Omnibox; Tabs: typeof Tabs; Toggle: typeof Toggle; Slider: typeof Slider; Select: typeof Select; TabStrip: typeof TabStrip; BookmarksBar: typeof BookmarksBar; UtilityRail: typeof UtilityRail; ToolTile: typeof ToolTile; CommandModule: typeof CommandModule; StatusPanel: typeof StatusPanel; Terminal: typeof Terminal; DiagnosticTable: typeof DiagnosticTable; AIResponse: typeof AIResponse; StatusBadge: typeof StatusBadge; Notification: typeof Notification; Progress: typeof Progress; Tooltip: typeof Tooltip; PhantomHero: typeof PhantomHero; HudRing: typeof HudRing; Icon: typeof Icon; FeatureIcon: typeof FeatureIcon; PortalRoot: typeof PortalRoot; configureIcons: typeof configureIcons; configureFeatureIcons: typeof configureFeatureIcons; configureArt: typeof configureArt; iconUrls: typeof iconUrls; featureIconUrls: typeof featureIconUrls } } }
