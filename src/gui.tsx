import { Plugin, SettingsPage, Style, Store } from "@opencode/plugin/gui"
import type { Persisted } from "@opencode/plugin/gui"
import {
  DEFAULT_THEME_SETTINGS,
  ThemeSettingsSchema,
  type StoredThemeSettings,
} from "./settings"
import { SettingsView } from "./settings-view"
import { I18N_CATALOG, type TranslationParams } from "./i18n"

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

/* Plugin settings gear button in Extensions -> Plugins list */
.terminal-theme-settings-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border-radius: 4px;
  background: transparent;
  border: none;
  color: var(--v2-text-text-muted, #8a8a8a);
  cursor: pointer;
  transition: color 0.15s ease, background-color 0.15s ease;
  flex-shrink: 0;
}
.terminal-theme-settings-btn:hover {
  color: #b392f0 !important;
  background-color: var(--v2-background-bg-layer-02, rgba(255, 255, 255, 0.08));
}
.terminal-theme-settings-btn svg {
  width: 16px;
  height: 16px;
}
`
}

function SettingsTab(props: {
  store: Persisted<StoredThemeSettings>
  t: (key: string, params?: TranslationParams) => string
  locale: () => string | undefined
}) {
  const settings = (): StoredThemeSettings => ({ ...DEFAULT_THEME_SETTINGS, ...props.store.value })

  const update = (patch: Partial<StoredThemeSettings>) => {
    props.store.set({ ...settings(), ...patch })
  }

  const reset = () => {
    props.store.set(DEFAULT_THEME_SETTINGS)
  }

  return (
    <SettingsView
      settings={settings}
      update={update}
      reset={reset}
      t={props.t}
      locale={props.locale}
    />
  )
}

function setupExtensionSettingsGearInjection() {
  if (typeof document === "undefined") return

  const GEAR_SVG = `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.62516 4.46094L5.05225 3.86719L3.86475 5.05469L4.4585 7.6276L2.0835 9.21094V10.7943L4.4585 12.3776L3.86475 14.9505L5.05225 16.138L7.62516 15.5443L9.2085 17.9193H10.7918L12.3752 15.5443L14.9481 16.138L16.1356 14.9505L15.5418 12.3776L17.9168 10.7943V9.21094L15.5418 7.6276L16.1356 5.05469L14.9481 3.86719L12.3752 4.46094L10.7918 2.08594H9.2085L7.62516 4.46094Z" stroke="currentColor"/><path d="M12.5002 10.0026C12.5002 11.3833 11.3809 12.5026 10.0002 12.5026C8.61945 12.5026 7.50016 11.3833 7.50016 10.0026C7.50016 8.62189 8.61945 7.5026 10.0002 7.5026C11.3809 7.5026 12.5002 8.62189 12.5002 10.0026Z" stroke="currentColor"/></svg>`

  function navigateToThemeSettings() {
    // 1. If tab trigger exists in DOM, click it directly (instant switch)
    const trigger = document.querySelector(
      '.settings-nav-groups [data-slot="tabs-v2-trigger-wrapper"][data-value="terminal-theme"] button, .settings-nav-groups [data-slot="tabs-v2-trigger-wrapper"][data-value="terminal-theme"] [data-slot="tabs-v2-trigger"]'
    ) as HTMLElement | null

    if (trigger) {
      trigger.click()
      return
    }

    // 2. Fallback: navigate via search params if trigger is not immediately visible
    const url = new URL(window.location.href)
    url.searchParams.set("tab", "terminal-theme")
    window.history.pushState({}, "", url.toString())
    window.dispatchEvent(new PopStateEvent("popstate"))
  }

  function injectGearButton() {
    // Look for extension rows in Settings -> Extensions -> Plugins
    const rows = document.querySelectorAll(".settings-extension-row")
    for (const row of Array.from(rows)) {
      const nameEl = row.querySelector(".settings-extension-name")
      if (!nameEl) continue

      const text = nameEl.textContent?.trim() || ""
      if (text.includes("opencode-desktop-terminal-theme") || text === "terminal-theme") {
        const actions = row.querySelector(".settings-servers-actions")
        if (actions && !actions.querySelector(".terminal-theme-settings-btn")) {
          const btn = document.createElement("button")
          btn.type = "button"
          btn.className = "terminal-theme-settings-btn"
          btn.title = "Open Terminal Theme settings"
          btn.setAttribute("aria-label", "Open Terminal Theme settings")
          btn.innerHTML = GEAR_SVG

          btn.addEventListener("click", (e) => {
            e.preventDefault()
            e.stopPropagation()
            navigateToThemeSettings()
          })

          // Insert gear button before Reload button to preserve vertical alignment of Reload & Switch
          actions.insertBefore(btn, actions.firstElementChild)
        }
      }
    }
  }

  // Initial check
  injectGearButton()

  // Observe DOM changes to catch when user switches to Settings -> Extensions -> Plugins
  const observer = new MutationObserver(() => {
    injectGearButton()
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })
}

export default Plugin.define({
  stores: {
    themeSettings: Store.global(ThemeSettingsSchema, DEFAULT_THEME_SETTINGS),
  },
  i18n: I18N_CATALOG,
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
      title: ctx.t("settings.title"),
      render: () => (
        <SettingsTab
          store={ctx.stores.themeSettings}
          t={(k, p) => ctx.t(k, p)}
          locale={() => ctx.locale.locale()}
        />
      ),
    }))

    // 3. Inject settings gear icon next to Reload in Extensions -> Plugins
    setupExtensionSettingsGearInjection()
  },
})
