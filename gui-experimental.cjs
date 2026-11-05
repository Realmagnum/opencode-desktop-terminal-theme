"use strict"

const { Plugin, Style } = require("@opencode/plugin/gui")

/**
 * Authentic OpenCode TUI console markdown styling.
 * Recreates the exact terminal color scheme inside OpenCode Desktop.
 *
 * Spec reference:
 * - heading:         $hue.accent.200      -> #9d7cd8 (Lavender Purple)
 * - strong:          #f5a742              -> #f5a742 (Mustard Amber)
 * - emphasis:        #e5c07b              -> #e5c07b (Golden)
 * - code:            $hue.green.200       -> #7fd88f (Mint Green, transparent bg)
 * - listEnumeration: $hue.cyan.200        -> #56b6c2 (Cyan Blue for 1. 2. 3.)
 * - listItem:        $hue.interactive.200 -> #fab283 (Peach Orange for bullet dots)
 * - linkText / link: $hue.cyan.200        -> #56b6c2 (Cyan)
 * - blockQuote:      #e5c07b              -> #e5c07b (Golden text, cyan border)
 * - horizontalRule:  $hue.neutral.400     -> #484848 (Graphite border)
 * - text:            $hue.neutral.200     -> #eeeeee (Light grey prose)
 * - composer text:   pure white           -> #ffffff
 */
const css = `
/* Prose text */
[data-component="markdown"][data-component="markdown"] {
  color: #eeeeee !important;
}
[data-component="markdown"][data-component="markdown"] p,
[data-component="markdown"][data-component="markdown"] li {
  color: #eeeeee !important;
}

/* Headings (h1..h6): $hue.accent.200 (#9d7cd8) */
[data-component="markdown"][data-component="markdown"] h1,
[data-component="markdown"][data-component="markdown"] h2,
[data-component="markdown"][data-component="markdown"] h3,
[data-component="markdown"][data-component="markdown"] h4,
[data-component="markdown"][data-component="markdown"] h5,
[data-component="markdown"][data-component="markdown"] h6 {
  color: #9d7cd8 !important;
}

/* Bold / Strong: #f5a742 (Mustard Amber) */
[data-component="markdown"][data-component="markdown"] strong,
[data-component="markdown"][data-component="markdown"] b {
  color: #f5a742 !important;
}

/* Italic / Emphasis: #e5c07b (Golden) */
[data-component="markdown"][data-component="markdown"] em,
[data-component="markdown"][data-component="markdown"] i {
  color: #e5c07b !important;
}

/* Inline code: $hue.green.200 (#7fd88f) without grey badge background */
[data-component="markdown"][data-component="markdown"] :not(pre) > code {
  color: #7fd88f !important;
  background: transparent !important;
  font-weight: 500 !important;
  padding: 0 2px !important;
}

/* Numbered lists (1. 2. 3.): $hue.cyan.200 (#56b6c2) */
[data-component="markdown"][data-component="markdown"] ol > li::marker {
  color: #56b6c2 !important;
}

/* Bullet lists (•): $hue.interactive.200 -> $hue.orange.200 (#fab283) */
[data-component="markdown"][data-component="markdown"] ul > li::marker {
  color: #fab283 !important;
}

/* Links: $hue.cyan.200 (#56b6c2) */
[data-component="markdown"][data-component="markdown"] a {
  color: #56b6c2 !important;
}

/* Blockquotes: #e5c07b with cyan border */
[data-component="markdown"][data-component="markdown"] blockquote {
  color: #e5c07b !important;
  border-inline-start: 2px solid #56b6c2 !important;
}

/* Horizontal rule: #484848 */
[data-component="markdown"][data-component="markdown"] hr {
  border: none !important;
  border-top: 1px solid #484848 !important;
  height: 0 !important;
}

/* Composer / text inputs: pure crisp white */
textarea,
input,
[contenteditable="true"],
[data-slot="textarea-v2-textarea"],
[data-component="dock-prompt"] textarea {
  color: #ffffff !important;
}
`

module.exports = Plugin.define({
  setup(ctx) {
    ctx.add(Style, css)
  },
})
