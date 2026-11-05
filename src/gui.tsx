import { Plugin, SettingsPage, Style, Store } from "@opencode/plugin/gui"
import type { Persisted } from "@opencode/plugin/gui"
import {
  DEFAULT_THEME_SETTINGS,
  ThemeSettingsSchema,
  type StoredThemeSettings,
} from "./settings"
import { SettingsView } from "./settings-view"

function generateThemeCss(s: StoredThemeSettings): string {
  const prefix = s.mode === "specific" ? `[data-theme="${s.targetTheme}"] ` : ""

  return `
/* Prose text */
${prefix}[data-component="markdown"][data-component="markdown"] {
  color: #eeeeee !important;
}
${prefix}[data-component="markdown"][data-component="markdown"] p,
${prefix}[data-component="markdown"][data-component="markdown"] li {
  color: #eeeeee !important;
}

/* Headings (h1..h6) */
${prefix}[data-component="markdown"][data-component="markdown"] h1,
${prefix}[data-component="markdown"][data-component="markdown"] h2,
${prefix}[data-component="markdown"][data-component="markdown"] h3,
${prefix}[data-component="markdown"][data-component="markdown"] h4,
${prefix}[data-component="markdown"][data-component="markdown"] h5,
${prefix}[data-component="markdown"][data-component="markdown"] h6 {
  color: ${s.headingsColor || "#9d7cd8"} !important;
}

/* Bold / Strong */
${prefix}[data-component="markdown"][data-component="markdown"] strong,
${prefix}[data-component="markdown"][data-component="markdown"] b {
  color: ${s.boldColor || "#f5a742"} !important;
}

/* Italic / Emphasis */
${prefix}[data-component="markdown"][data-component="markdown"] em,
${prefix}[data-component="markdown"][data-component="markdown"] i {
  color: #e5c07b !important;
}

/* Inline code without badge background */
${prefix}[data-component="markdown"][data-component="markdown"] :not(pre) > code {
  color: ${s.inlineCodeColor || "#7fd88f"} !important;
  background: transparent !important;
  font-weight: 500 !important;
  padding: 0 2px !important;
}

/* Numbered lists (1. 2. 3.) */
${prefix}[data-component="markdown"][data-component="markdown"] ol > li::marker {
  color: ${s.listNumbersColor || "#56b6c2"} !important;
}

/* Bullet lists (•) */
${prefix}[data-component="markdown"][data-component="markdown"] ul > li::marker {
  color: ${s.listBulletsColor || "#fab283"} !important;
}

/* Links */
${prefix}[data-component="markdown"][data-component="markdown"] a {
  color: #56b6c2 !important;
}

/* Blockquotes */
${prefix}[data-component="markdown"][data-component="markdown"] blockquote {
  color: #e5c07b !important;
  border-inline-start: 2px solid #56b6c2 !important;
}

/* Horizontal rule */
${prefix}[data-component="markdown"][data-component="markdown"] hr {
  border: none !important;
  border-top: 1px solid #484848 !important;
  height: 0 !important;
}

/* Sidebar & unselected elements readability */
${prefix}[data-titlebar-tab]:not([data-active="true"]) [data-slot="tab-link"],
${prefix}[data-titlebar-tab-link]:not([group-data-[active='true']]),
${prefix}.text-v2-text-text-faint {
  color: ${s.inactiveBrightness || "#8a8a8a"} !important;
}

/* Sidebar unselected icons */
${prefix}.text-v2-icon-icon-muted {
  color: ${s.inactiveBrightness || "#8a8a8a"} !important;
}

/* Composer / text inputs: pure crisp white */
${prefix}textarea,
${prefix}input,
${prefix}[contenteditable="true"],
${prefix}[data-slot="textarea-v2-textarea"],
${prefix}[data-component="dock-prompt"] textarea {
  color: #ffffff !important;
}

/* Distinct highlight for plugin navigation item in Settings sidebar */
.settings-nav-groups [data-slot="tabs-v2-trigger-wrapper"][data-value="terminal-theme"] [data-slot="tabs-v2-trigger"] svg {
  color: #9d7cd8 !important;
}
`
}

function SettingsTab(props: { store: Persisted<StoredThemeSettings> }) {
  const settings = (): StoredThemeSettings => ({ ...DEFAULT_THEME_SETTINGS, ...props.store.value })

  const update = (patch: Partial<StoredThemeSettings>) => {
    props.store.set({ ...settings(), ...patch })
  }

  const reset = () => {
    props.store.set(DEFAULT_THEME_SETTINGS)
  }

  return <SettingsView settings={settings} update={update} reset={reset} />
}

export default Plugin.define({
  stores: {
    themeSettings: Store.global(ThemeSettingsSchema, DEFAULT_THEME_SETTINGS),
  },
  setup(ctx) {
    // 1. Reactive style injection following user settings
    ctx.add(Style, () => {
      const s = { ...DEFAULT_THEME_SETTINGS, ...ctx.stores.themeSettings.value }
      return generateThemeCss(s)
    })

    // 2. Dedicated Settings Page in OpenCode Desktop
    ctx.add(SettingsPage, () => ({
      id: "terminal-theme",
      icon: "terminal-active" as const,
      title: "desktop-terminal-theme",
      render: () => <SettingsTab store={ctx.stores.themeSettings} />,
    }))
  },
})
