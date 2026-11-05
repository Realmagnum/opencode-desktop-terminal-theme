import { Plugin } from "@opencode/plugin"

export default Plugin.define({
  name: "opencode-desktop-terminal-theme",
  setup() {
    // Server-side part is a no-op; theme styling is loaded by the GUI runner via ./gui-experimental
  },
})
