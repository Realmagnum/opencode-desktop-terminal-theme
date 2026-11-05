import { createMemo, For, Show } from "solid-js"
import { AVAILABLE_THEMES, DEFAULT_THEME_SETTINGS, type StoredThemeSettings } from "./settings"
import { resolveTranslation, type TranslationParams } from "./i18n"

interface Props {
  settings: () => StoredThemeSettings
  update(patch: Partial<StoredThemeSettings>): void
  reset(): void
  t?: (key: string, params?: TranslationParams) => string
  locale?: () => string | undefined
}

export function SettingsView(props: Props) {
  const current = () => ({ ...DEFAULT_THEME_SETTINGS, ...props.settings() })

  const t = (key: string, params?: TranslationParams): string => {
    if (props.t) {
      const val = props.t(key, params)
      if (val && val !== key) return val
    }
    return resolveTranslation(props.locale?.(), key, params)
  }

  return (
    <div
      style={{
        "max-width": "760px",
        margin: "0 auto",
        padding: "32px 24px",
        "font-family": "var(--font-family-sans, -apple-system, BlinkMacSystemFont, sans-serif)",
        color: "var(--v2-text-text-base, #eeeeee)",
      }}
    >
      {/* Header */}
      <div style={{ "margin-bottom": "28px" }}>
        <div style={{ display: "flex", "align-items": "center", gap: "8px", "margin-bottom": "6px" }}>
          <h1
            style={{
              "font-size": "20px",
              "font-weight": "600",
              margin: "0",
              color: "var(--v2-text-text-base, #ffffff)",
            }}
          >
            {t("settings.header.title")}
          </h1>
          <span
            style={{
              "font-size": "11px",
              "font-weight": "500",
              color: "#b392f0",
              background: "rgba(157, 124, 216, 0.15)",
              border: "1px solid rgba(157, 124, 216, 0.35)",
              "border-radius": "10px",
              padding: "1px 7px",
              "line-height": "1.4",
            }}
          >
            Plugin
          </span>
        </div>
        <p
          style={{
            "font-size": "13px",
            color: "var(--v2-text-text-muted, #8a8a8a)",
            margin: "0",
            "line-height": "1.5",
          }}
        >
          {t("settings.header.desc")}
        </p>
      </div>

      {/* Main card */}
      <div
        style={{
          background: "var(--v2-background-bg-layer-01, #141414)",
          border: "1px solid var(--v2-border-border-base, #282828)",
          "border-radius": "10px",
          padding: "20px",
          display: "flex",
          "flex-direction": "column",
          gap: "20px",
        }}
      >
        {/* Mode selector */}
        <div>
          <label
            style={{
              display: "block",
              "font-size": "13px",
              "font-weight": "600",
              "margin-bottom": "6px",
              color: "var(--v2-text-text-base, #ffffff)",
            }}
          >
            {t("settings.scope.title")}
          </label>
          <p
            style={{
              "font-size": "12px",
              color: "var(--v2-text-text-muted, #8a8a8a)",
              margin: "0 0 10px 0",
            }}
          >
            {t("settings.scope.desc")}
          </p>

          <div style={{ display: "flex", gap: "16px" }}>
            <label
              style={{
                display: "flex",
                "align-items": "center",
                gap: "8px",
                "font-size": "13px",
                cursor: "pointer",
              }}
            >
              <input
                type="radio"
                name="theme-scope-mode"
                checked={current().mode === "specific"}
                onChange={() => props.update({ mode: "specific" })}
                style={{ cursor: "pointer" }}
              />
              <span>{t("settings.scope.specific")}</span>
            </label>

            <label
              style={{
                display: "flex",
                "align-items": "center",
                gap: "8px",
                "font-size": "13px",
                cursor: "pointer",
              }}
            >
              <input
                type="radio"
                name="theme-scope-mode"
                checked={current().mode === "all"}
                onChange={() => props.update({ mode: "all" })}
                style={{ cursor: "pointer" }}
              />
              <span>{t("settings.scope.all")}</span>
            </label>
          </div>
        </div>

        {/* Target Theme Dropdown (shown when mode is 'specific') */}
        <Show when={current().mode === "specific"}>
          <div
            style={{
              "padding-top": "16px",
              "border-top": "1px solid var(--v2-border-border-base, #282828)",
            }}
          >
            <label
              style={{
                display: "block",
                "font-size": "13px",
                "font-weight": "600",
                "margin-bottom": "6px",
                color: "var(--v2-text-text-base, #ffffff)",
              }}
            >
              {t("settings.target.title")}
            </label>
            <p
              style={{
                "font-size": "12px",
                color: "var(--v2-text-text-muted, #8a8a8a)",
                margin: "0 0 10px 0",
              }}
            >
              {t("settings.target.desc")}
            </p>

            <select
              value={current().targetTheme}
              onChange={(e) => props.update({ targetTheme: e.currentTarget.value })}
              style={{
                background: "var(--v2-background-bg-layer-02, #1a1a1a)",
                border: "1px solid var(--v2-border-border-strong, #3a3a3a)",
                color: "var(--v2-text-text-base, #ffffff)",
                "border-radius": "6px",
                padding: "8px 12px",
                "font-size": "13px",
                outline: "none",
                cursor: "pointer",
                "min-width": "260px",
              }}
            >
              <For each={AVAILABLE_THEMES}>
                {(th) => <option value={th.id}>{th.name}</option>}
              </For>
            </select>
          </div>
        </Show>

        {/* Color Palette Preview */}
        <div
          style={{
            "padding-top": "16px",
            "border-top": "1px solid var(--v2-border-border-base, #282828)",
          }}
        >
          <label
            style={{
              display: "block",
              "font-size": "13px",
              "font-weight": "600",
              "margin-bottom": "6px",
              color: "var(--v2-text-text-base, #ffffff)",
            }}
          >
            {t("settings.palette.title")}
          </label>
          <p
            style={{
              "font-size": "12px",
              color: "var(--v2-text-text-muted, #8a8a8a)",
              margin: "0 0 12px 0",
            }}
          >
            {t("settings.palette.desc")}
          </p>

          <div
            style={{
              display: "grid",
              "grid-template-columns": "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "10px",
            }}
          >
            <ColorBadge label={t("settings.token.headings")} color={current().headingsColor} token="accent.200" />
            <ColorBadge label={t("settings.token.bold")} color={current().boldColor} token="markdown.strong" />
            <ColorBadge label={t("settings.token.inlineCode")} color={current().inlineCodeColor} token="green.200" />
            <ColorBadge label={t("settings.token.listNumbers")} color={current().listNumbersColor} token="cyan.200" />
            <ColorBadge label={t("settings.token.listBullets")} color={current().listBulletsColor} token="orange.200" />
            <ColorBadge label={t("settings.token.inactive")} color={current().inactiveBrightness} token="text-faint" />
          </div>
        </div>

        {/* Actions footer */}
        <div
          style={{
            display: "flex",
            "justify-content": "flex-end",
            "padding-top": "12px",
            "border-top": "1px solid var(--v2-border-border-base, #282828)",
          }}
        >
          <button
            type="button"
            onClick={() => props.reset()}
            style={{
              background: "var(--v2-background-bg-layer-02, #1e1e1e)",
              border: "1px solid var(--v2-border-border-base, #282828)",
              color: "var(--v2-text-text-muted, #8a8a8a)",
              "border-radius": "6px",
              padding: "6px 14px",
              "font-size": "12px",
              cursor: "pointer",
            }}
          >
            {t("settings.action.reset")}
          </button>
        </div>
      </div>
    </div>
  )
}

function ColorBadge(props: { label: string; color: string; token: string }) {
  return (
    <div
      style={{
        display: "flex",
        "align-items": "center",
        gap: "10px",
        background: "var(--v2-background-bg-base, #0c0c0c)",
        padding: "8px 12px",
        "border-radius": "6px",
        border: "1px solid var(--v2-border-border-muted, rgba(255, 255, 255, 0.08))",
      }}
    >
      <div
        style={{
          width: "14px",
          height: "14px",
          "border-radius": "3px",
          background: props.color,
          "flex-shrink": 0,
        }}
      />
      <div style={{ "min-width": "0", "flex-grow": "1" }}>
        <div style={{ "font-size": "12px", "font-weight": "500", color: "#ffffff" }}>
          {props.label}
        </div>
        <div style={{ "font-size": "10px", color: "#8a8a8a" }}>
          {props.color} ({props.token})
        </div>
      </div>
    </div>
  )
}
