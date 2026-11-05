# opencode-desktop-terminal-theme

> **Authentic OpenCode TUI console markdown colors and theme styling for OpenCode Desktop.**  
> 🌐 *[Документация на русском языке (Russian documentation)](./README_RU.md)*

---

## 📖 Description

In OpenCode Desktop (Electron client), the Markdown rendering component (`[data-component="markdown"]`) defaults to a monochrome grey appearance for headings, list markers, and inline code, while rendering grey pill badges around inline code snippets.

Meanwhile, the terminal version (**OpenCode TUI**) renders rich, readable, and distinct colors for every markdown element.

This plugin brings **100% parity with the OpenCode TUI console theme** to OpenCode Desktop using the official GUI extension API (`@opencode/plugin/gui`).

*(Related upstream discussions: [#61221](https://github.com/anomalyco/opencode/issues/61221) and [#54235](https://github.com/anomalyco/opencode/issues/54235)).*

---

## ✨ Features

- **Dedicated Settings Page**: Added to OpenCode Desktop Settings sidebar (**Settings → desktop-terminal-theme**) with instant live preview.
- **Flexible Scope Control**:
  - **Override specific theme only** (e.g. `Solarized`, keeping all other themes untouched).
  - **Apply to all themes** globally.
- **Headings (`h1`–`h6`)**: Authentic console lavender purple (`#9d7cd8`, `$hue.accent.200`).
- **Bold text (`**bold**`, `strong`)**: Warm mustard-amber (`#f5a742`, `markdown.strong`).
- **Italic (`*italic*`, `em`)**: Soft golden (`#e5c07b`, `markdown.emphasis`).
- **Inline code (`code`)**: Mint green (`#7fd88f`, `$hue.green.200`) with **transparent background** (removes the grey badge).
- **Numbered lists (`1.`, `2.`, `3.`)**: Cyan blue list enumeration markers (`#56b6c2`, `$hue.cyan.200`).
- **Bullet lists (`•`)**: Peach orange list bullet markers (`#fab283`, `$hue.interactive.200`).
- **Links (`a`)**: Cyan blue (`#56b6c2`).
- **Blockquotes (`blockquote`)**: Golden text with cyan accent bar.
- **Sidebar & Inactive Sessions**: Soft readable silver (`#8a8a8a`), eliminating extreme dimming while keeping the active session prominent.
- **Composer / Prompt Input**: Pure crisp white text (`#ffffff`).
- **Prose text**: Comfortable light grey (`#eeeeee`, `neutral.200`).

---

## 🎨 Design Tokens Reference

| Markdown Element | TUI Source Token | HEX Color | Visual Preview |
|---|---|---|---|
| **Headings (`h1`–`h6`)** | `$hue.accent.200` | `#9d7cd8` | 🪻 Lavender Purple |
| **Bold (`strong`, `b`)** | `markdown.strong` | `#f5a742` | 🍯 Mustard Amber |
| **Italic (`em`, `i`)** | `markdown.emphasis` | `#e5c07b` | 🌾 Golden |
| **Inline code (`code`)** | `$hue.green.200` | `#7fd88f` | 🍃 Mint Green |
| **Numbered lists (`ol`)** | `$hue.cyan.200` | `#56b6c2` | 🌊 Cyan Blue |
| **Bullet lists (`ul`)** | `$hue.interactive.200` | `#fab283` | 🍑 Peach Orange |
| **Links (`a`)** | `$hue.cyan.200` | `#56b6c2` | 🌊 Cyan Blue |
| **Blockquotes (`blockquote`)** | `markdown.blockQuote` | `#e5c07b` | 🌾 Golden |
| **Dividers (`hr`)** | `$hue.neutral.400` | `#484848` | ⬛ Graphite |
| **Inactive Sidebar Items** | `text-v2-text-text-faint` | `#8a8a8a` | 🔘 Balanced Silver |
| **Active Session** | `text-v2-text-text-base` | `#ffffff` | ⚪ Bright White |
| **Prompt Input** | `formfield.base` | `#ffffff` | ⚪ Pure White |

---

## 🚀 Installation

### Option 1: Local Plugin (Recommended)

1. Clone repository to your OpenCode plugins directory:
   ```bash
   mkdir -p ~/.config/opencode/plugins
   git clone https://github.com/Realmagnum/opencode-desktop-terminal-theme.git ~/.config/opencode/plugins/opencode-desktop-terminal-theme
   ```

2. Register the plugin in `~/.config/opencode/opencode.json` (or `opencode.jsonc`):
   ```json
   {
     "plugins": [
       "opencode-desktop-terminal-theme"
     ]
   }
   ```

3. Reload OpenCode Desktop by pressing **`Cmd + R`** (or restarting the application).

---

### Option 2: Symlink from workspace

```bash
ln -s "$(pwd)" ~/.config/opencode/plugins/opencode-desktop-terminal-theme
```

---

## 📂 Repository Layout

```text
opencode-desktop-terminal-theme/
├── gui-experimental.cjs      # GUI plugin entrypoint (CommonJS)
├── dist/
│   └── gui-experimental.cjs # Distribution entrypoint
├── src/
│   └── index.js             # Plugin root entry
├── themes/
│   └── opencode-tui.json    # Original TUI theme specification
├── package.json
├── LICENSE                   # MIT License
├── README.md                 # English documentation
└── README_RU.md              # Russian documentation
```

---

## 🛡️ Stability & Compatibility

- **Survives Desktop Updates**: The plugin lives in your user configuration directory (`~/.config/opencode/`), so app updates will not overwrite it.
- **Universal compatibility**: Enhances markdown styling across all dark themes in OpenCode Desktop.

---

## 📜 License

[MIT](LICENSE) © 2026 Realmagnum
