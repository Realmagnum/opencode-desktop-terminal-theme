export type SupportedLocale = "en" | "ru"

export type TranslationParams = Record<string, string | number | boolean>

export const I18N_EN = {
  // Navigation & Header
  "settings.title": "Terminal Theme",
  "settings.header.title": "Terminal Console Theme",
  "settings.header.desc": "Authentic OpenCode TUI console markdown styling and custom theme override.",

  // Scope mode
  "settings.scope.title": "Application Scope",
  "settings.scope.desc": "Choose whether to apply authentic console styling to all themes or override a specific theme only.",
  "settings.scope.specific": "Override specific theme only",
  "settings.scope.all": "Apply to all themes",

  // Target theme
  "settings.target.title": "Target Theme to Override",
  "settings.target.desc": "When this theme is active in Settings → Appearance, the console palette will override it.",

  // Palette preview
  "settings.palette.title": "Terminal Token Palette",
  "settings.palette.desc": "Authentic TUI tokens applied to chat markdown elements:",
  "settings.token.headings": "Headings",
  "settings.token.bold": "Bold Text",
  "settings.token.inlineCode": "Inline Code",
  "settings.token.listNumbers": "List Numbers",
  "settings.token.listBullets": "List Bullets",
  "settings.token.inactive": "Inactive Text",

  // Actions
  "settings.action.reset": "Reset to Defaults",
  "gear.title": "Open settings",
}

export type I18nKey = keyof typeof I18N_EN

export const I18N_RU: Record<I18nKey, string> = {
  // Navigation & Header
  "settings.title": "Тема терминала",
  "settings.header.title": "Тема консоли терминала",
  "settings.header.desc": "Аутентичная стилизация Markdown консольного TUI OpenCode и подмена тем.",

  // Scope mode
  "settings.scope.title": "Область применения",
  "settings.scope.desc": "Применять консольный стиль поверх всех тем либо подменять только конкретную выбранную тему.",
  "settings.scope.specific": "Подменять только выбранную тему",
  "settings.scope.all": "Применять ко всем темам",

  // Target theme
  "settings.target.title": "Тема для подмены",
  "settings.target.desc": "Когда эта тема выбрана в Настройки → Внешний вид, консольная палитра применится поверх неё.",

  // Palette preview
  "settings.palette.title": "Палитра токенов терминала",
  "settings.palette.desc": "Оригинальные токены TUI консоли, применяемые к Markdown в чате:",
  "settings.token.headings": "Заголовки",
  "settings.token.bold": "Жирный текст",
  "settings.token.inlineCode": "Встроенный код",
  "settings.token.listNumbers": "Нумерованные списки",
  "settings.token.listBullets": "Маркеры списков",
  "settings.token.inactive": "Неактивный текст",

  // Actions
  "settings.action.reset": "Сбросить по умолчанию",
  "gear.title": "Открыть настройки темы",
}

export const I18N_CATALOG: Record<string, Record<I18nKey, string>> = {
  en: I18N_EN,
  "en-us": I18N_EN,
  "en-gb": I18N_EN,
  ru: I18N_RU,
  "ru-ru": I18N_RU,
}

export function resolveTranslation(
  locale: string | undefined,
  key: string,
  params?: TranslationParams
): string {
  const norm = (locale || "").toLowerCase().replace("_", "-")
  const lang = norm.split("-")[0] || "en"

  const dict = I18N_CATALOG[norm] || I18N_CATALOG[lang] || I18N_EN
  const template = dict[key as I18nKey] ?? I18N_EN[key as I18nKey] ?? key

  if (!params) return template

  return template.replace(/\{\{\s*([a-zA-Z0-9_-]+)\s*\}\}/g, (_, p) => {
    return params[p] !== undefined ? String(params[p]) : `{{${p}}}`
  })
}
