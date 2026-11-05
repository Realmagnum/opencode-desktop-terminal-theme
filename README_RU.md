# opencode-desktop-terminal-theme

> **Аутентичная консольная цветовая палитра OpenCode TUI для OpenCode Desktop.**  
> *Authentic OpenCode TUI console markdown colors and theme styling for OpenCode Desktop.*

---

## 📖 Описание / Description

В десктопном приложении OpenCode (на базе Electron) компонент рендеринга Markdown (`[data-component="markdown"]`) принудительно отображает заголовки, списки и инлайн-код в базовом сером цвете (`var(--v2-text-text-base)`), а также рисует серые фоновые плашки вокруг инлайн-кода. 

Из-за этого сессия в Desktop-клиенте выглядит монохромной, в то время как в консольном терминале (**OpenCode TUI**) тот же самый диалог раскрашен в яркие, контрастные и легко читаемые цвета.

Данный плагин восстанавливает **100% идентичность консольной темы OpenCode TUI** внутри десктопного приложения через официальный механизм расширений GUI (`@opencode/plugin/gui`).

*(Связано с upstream issue [#61221](https://github.com/anomalyco/opencode/issues/61221) и [#54235](https://github.com/anomalyco/opencode/issues/54235)).*

---

## ✨ Что меняется / Key Features

- **Отдельный раздел в настройках**: Страница управления в боковом меню настроек (**Settings → Terminal Theme**).
- **Выбор области действия (Scope)**:
  - **Подменять только выбранную тему** (по умолчанию `Solarized`, не затрагивая остальные).
  - **Применять ко всем темам** глобально.
- **Заголовки (`h1`–`h6`)**: фирменный лавандово-фиолетовый цвет консоли (`#9d7cd8`, `$hue.accent.200`).
- **Жирный текст (`**bold**`, `strong`)**: тёплый янтарно-горчичный оттенок (`#f5a742`, `markdown.strong`).
- **Курсив (`*italic*`, `em`)**: золотистый цвет (`#e5c07b`, `markdown.emphasis`).
- **Инлайн-код (`code`)**: яркий салатово-зелёный (`#7fd88f`, `$hue.green.200`) **без раздражающей серой подложки** (`background: transparent`).
- **Нумерованные списки (`1.`, `2.`, `3.`)**: бирюзово-голубые маркеры (`#56b6c2`, `$hue.cyan.200`).
- **Маркированные списки (`•`)**: персиково-оранжевые маркеры (`#fab283`, `$hue.interactive.200`).
- **Ссылки (`a`)**: бирюзово-голубые (`#56b6c2`).
- **Цитаты (`blockquote`)**: золотистый текст с бирюзовой вертикальной чертой слева.
- **Поле ввода (Composer / Prompt)**: зафиксирован чистый белый цвет набираемого текста (`#ffffff`).
- **Обычный текст сообщений**: комфортный светло-серый консольный текст (`#eeeeee`).

---

## 🎨 Спецификация токенов / Design Tokens Reference

| Элемент Markdown | Токен в TUI | HEX-цвет | Визуальный цвет |
|---|---|---|---|
| **Заголовки (`h1`–`h6`)** | `$hue.accent.200` | `#9d7cd8` | 🪻 Лавандово-фиолетовый |
| **Жирный текст (`strong`)** | `markdown.strong` | `#f5a742` | 🍯 Янтарно-горчичный |
| **Курсив (`em`)** | `markdown.emphasis` | `#e5c07b` | 🌾 Золотистый |
| **Инлайн-код (`code`)** | `$hue.green.200` | `#7fd88f` | 🍃 Салатово-зелёный |
| **Списки нумерованные (`ol`)** | `$hue.cyan.200` | `#56b6c2` | 🌊 Бирюзово-голубой |
| **Списки маркеры (`ul`)** | `$hue.interactive.200` | `#fab283` | 🍑 Персиково-оранжевый |
| **Ссылки (`a`)** | `$hue.cyan.200` | `#56b6c2` | 🌊 Бирюзово-голубой |
| **Цитаты (`blockquote`)** | `markdown.blockQuote` | `#e5c07b` | 🌾 Золотистый |
| **Разделители (`hr`)** | `$hue.neutral.400` | `#484848` | ⬛ Графитовый |
| **Поле ввода промпта** | `formfield.base` | `#ffffff` | ⚪ Чистый белый |
| **Обычный текст** | `$hue.neutral.200` | `#eeeeee` | 🔘 Светло-серый |

---

## 🚀 Установка / Installation

### Способ 1: Локальный плагин (рекомендуемый)

1. Клонируйте репозиторий в каталог плагинов OpenCode:
   ```bash
   mkdir -p ~/.config/opencode/plugins
   git clone https://github.com/Realmagnum/opencode-desktop-terminal-theme.git ~/.config/opencode/plugins/opencode-desktop-terminal-theme
   ```

2. Добавьте плагин в ваш `~/.config/opencode/opencode.json` (или `opencode.jsonc`):
   ```json
   {
     "plugins": [
       "opencode-desktop-terminal-theme"
     ]
   }
   ```

3. Перезапустите OpenCode Desktop или нажмите **`Cmd + R`** (в окне приложения) для перезагрузки.

---

### Способ 2: Установка из каталога проекта / Symlink

Если репозиторий уже склонирован в вашей рабочей директории:
```bash
ln -s "$(pwd)" ~/.config/opencode/plugins/opencode-desktop-terminal-theme
```

---

## 📂 Структура репозитория / Repository Layout

```text
opencode-desktop-terminal-theme/
├── gui-experimental.cjs      # Точка входа GUI-плагина (CommonJS)
├── dist/
│   └── gui-experimental.cjs # Зеркало для exports
├── src/
│   └── index.js             # Точка входа плагина
├── themes/
│   └── opencode-tui.json    # Полный файл темы консоли TUI (для CLI)
├── package.json
├── LICENSE                   # MIT License
└── README.md
```

---

## 🛡️ Безопасность и обновления

- Плагин **не изменяет файлы внутри `/Applications/OpenCode.app`** и не слетает при обновлениях приложения.
- Плагин работает поверх любой выбранной темы оформления в Desktop.

---

## 📜 Лицензия / License

[MIT](LICENSE) © 2026 Realmagnum
