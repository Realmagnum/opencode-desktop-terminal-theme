import { Schema } from "effect"

export const ApplicationModeSchema = Schema.Union([
  Schema.Literal("all"),
  Schema.Literal("specific"),
])
export type ApplicationMode = "all" | "specific"

export const ThemeSettingsSchema = Schema.Struct({
  mode: ApplicationModeSchema,
  targetTheme: Schema.String,
  inactiveBrightness: Schema.String, // e.g. "#8a8a8a"
  headingsColor: Schema.String,       // e.g. "#9d7cd8"
  boldColor: Schema.String,           // e.g. "#f5a742"
  inlineCodeColor: Schema.String,     // e.g. "#7fd88f"
  listNumbersColor: Schema.String,    // e.g. "#56b6c2"
  listBulletsColor: Schema.String,    // e.g. "#fab283"
})

export type StoredThemeSettings = typeof ThemeSettingsSchema.Type

export const DEFAULT_THEME_SETTINGS: StoredThemeSettings = {
  mode: "specific",
  targetTheme: "solarized",
  inactiveBrightness: "#8a8a8a",
  headingsColor: "#9d7cd8",
  boldColor: "#f5a742",
  inlineCodeColor: "#7fd88f",
  listNumbersColor: "#56b6c2",
  listBulletsColor: "#fab283",
}

export const AVAILABLE_THEMES = [
  { id: "solarized", name: "Solarized" },
  { id: "oc-2", name: "OpenCode (Default)" },
  { id: "amoled", name: "AMOLED" },
  { id: "aura", name: "Aura" },
  { id: "ayu", name: "Ayu" },
  { id: "carbonfox", name: "Carbonfox" },
  { id: "catppuccin", name: "Catppuccin" },
  { id: "catppuccin-frappe", name: "Catppuccin Frappe" },
  { id: "catppuccin-macchiato", name: "Catppuccin Macchiato" },
  { id: "cobalt2", name: "Cobalt2" },
  { id: "cursor", name: "Cursor" },
  { id: "dracula", name: "Dracula" },
  { id: "everforest", name: "Everforest" },
  { id: "flexoki", name: "Flexoki" },
  { id: "github", name: "GitHub" },
  { id: "gruvbox", name: "Gruvbox" },
  { id: "kanagawa", name: "Kanagawa" },
  { id: "lucent-orng", name: "Lucent Orng" },
  { id: "material", name: "Material" },
  { id: "matrix", name: "Matrix" },
  { id: "mercury", name: "Mercury" },
  { id: "monokai", name: "Monokai" },
  { id: "nightowl", name: "Night Owl" },
  { id: "nord", name: "Nord" },
  { id: "one-dark", name: "One Dark" },
  { id: "onedarkpro", name: "One Dark Pro" },
  { id: "orng", name: "Orng" },
  { id: "osaka-jade", name: "Osaka Jade" },
  { id: "palenight", name: "Palenight" },
  { id: "rosepine", name: "Rose Pine" },
  { id: "shadesofpurple", name: "Shades of Purple" },
  { id: "synthwave84", name: "Synthwave '84" },
  { id: "tokyonight", name: "Tokyonight" },
  { id: "vercel", name: "Vercel" },
  { id: "vesper", name: "Vesper" },
  { id: "zenburn", name: "Zenburn" },
]
