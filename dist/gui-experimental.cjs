Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:`Module`}});let e=require("solid-js/web"),t=require("@opencode/plugin/gui"),n=require("effect"),r=require("solid-js");var i=n.Schema.Union([n.Schema.Literal(`all`),n.Schema.Literal(`specific`)]),a=n.Schema.Struct({mode:i,targetTheme:n.Schema.String,inactiveBrightness:n.Schema.String,headingsColor:n.Schema.String,boldColor:n.Schema.String,inlineCodeColor:n.Schema.String,listNumbersColor:n.Schema.String,listBulletsColor:n.Schema.String}),o={mode:`specific`,targetTheme:`solarized`,inactiveBrightness:`#8a8a8a`,headingsColor:`#9d7cd8`,boldColor:`#f5a742`,inlineCodeColor:`#7fd88f`,listNumbersColor:`#56b6c2`,listBulletsColor:`#fab283`},s=[{id:`solarized`,name:`Solarized`},{id:`oc-2`,name:`OpenCode (Default)`},{id:`amoled`,name:`AMOLED`},{id:`aura`,name:`Aura`},{id:`ayu`,name:`Ayu`},{id:`carbonfox`,name:`Carbonfox`},{id:`catppuccin`,name:`Catppuccin`},{id:`catppuccin-frappe`,name:`Catppuccin Frappe`},{id:`catppuccin-macchiato`,name:`Catppuccin Macchiato`},{id:`cobalt2`,name:`Cobalt2`},{id:`cursor`,name:`Cursor`},{id:`dracula`,name:`Dracula`},{id:`everforest`,name:`Everforest`},{id:`flexoki`,name:`Flexoki`},{id:`github`,name:`GitHub`},{id:`gruvbox`,name:`Gruvbox`},{id:`kanagawa`,name:`Kanagawa`},{id:`lucent-orng`,name:`Lucent Orng`},{id:`material`,name:`Material`},{id:`matrix`,name:`Matrix`},{id:`mercury`,name:`Mercury`},{id:`monokai`,name:`Monokai`},{id:`nightowl`,name:`Night Owl`},{id:`nord`,name:`Nord`},{id:`one-dark`,name:`One Dark`},{id:`onedarkpro`,name:`One Dark Pro`},{id:`orng`,name:`Orng`},{id:`osaka-jade`,name:`Osaka Jade`},{id:`palenight`,name:`Palenight`},{id:`rosepine`,name:`Rose Pine`},{id:`shadesofpurple`,name:`Shades of Purple`},{id:`synthwave84`,name:`Synthwave '84`},{id:`tokyonight`,name:`Tokyonight`},{id:`vercel`,name:`Vercel`},{id:`vesper`,name:`Vesper`},{id:`zenburn`,name:`Zenburn`}],c={"settings.title":`Terminal Theme`,"settings.header.title":`Terminal Console Theme`,"settings.header.desc":`Authentic OpenCode TUI console markdown styling and custom theme override.`,"settings.scope.title":`Application Scope`,"settings.scope.desc":`Choose whether to apply authentic console styling to all themes or override a specific theme only.`,"settings.scope.specific":`Override specific theme only`,"settings.scope.all":`Apply to all themes`,"settings.target.title":`Target Theme to Override`,"settings.target.desc":`When this theme is active in Settings → Appearance, the console palette will override it.`,"settings.palette.title":`Terminal Token Palette`,"settings.palette.desc":`Authentic TUI tokens applied to chat markdown elements:`,"settings.token.headings":`Headings`,"settings.token.bold":`Bold Text`,"settings.token.inlineCode":`Inline Code`,"settings.token.listNumbers":`List Numbers`,"settings.token.listBullets":`List Bullets`,"settings.token.inactive":`Inactive Text`,"settings.action.reset":`Reset to Defaults`,"gear.title":`Open settings`},l={"settings.title":`Тема терминала`,"settings.header.title":`Тема консоли терминала`,"settings.header.desc":`Аутентичная стилизация Markdown консольного TUI OpenCode и подмена тем.`,"settings.scope.title":`Область применения`,"settings.scope.desc":`Применять консольный стиль поверх всех тем либо подменять только конкретную выбранную тему.`,"settings.scope.specific":`Подменять только выбранную тему`,"settings.scope.all":`Применять ко всем темам`,"settings.target.title":`Тема для подмены`,"settings.target.desc":`Когда эта тема выбрана в Настройки → Внешний вид, консольная палитра применится поверх неё.`,"settings.palette.title":`Палитра токенов терминала`,"settings.palette.desc":`Оригинальные токены TUI консоли, применяемые к Markdown в чате:`,"settings.token.headings":`Заголовки`,"settings.token.bold":`Жирный текст`,"settings.token.inlineCode":`Встроенный код`,"settings.token.listNumbers":`Нумерованные списки`,"settings.token.listBullets":`Маркеры списков`,"settings.token.inactive":`Неактивный текст`,"settings.action.reset":`Сбросить по умолчанию`,"gear.title":`Открыть настройки темы`},u={en:c,"en-us":c,"en-gb":c,ru:l,"ru-ru":l};function d(e,t,n){let r=(e||``).toLowerCase().replace(`_`,`-`),i=r.split(`-`)[0]||`en`,a=(u[r]||u[i]||c)[t]??c[t]??t;return n?a.replace(/\{\{\s*([a-zA-Z0-9_-]+)\s*\}\}/g,(e,t)=>n[t]===void 0?`{{${t}}}`:String(n[t])):a}var f=(0,e.template)(`<div style="padding-top:16px;border-top:1px solid var(--v2-border-border-base, #282828)"><label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--v2-text-text-base, #ffffff)"></label><p style="font-size:12px;color:var(--v2-text-text-muted, #8a8a8a);margin:0 0 10px 0"></p><select style="background:var(--v2-background-bg-layer-02, #1a1a1a);border:1px solid var(--v2-border-border-strong, #3a3a3a);color:var(--v2-text-text-base, #ffffff);border-radius:6px;padding:8px 12px;font-size:13px;outline:none;cursor:pointer;min-width:260px">`),p=(0,e.template)(`<div style="max-width:760px;margin:0 auto;padding:32px 24px;font-family:var(--font-family-sans, -apple-system, BlinkMacSystemFont, sans-serif);color:var(--v2-text-text-base, #eeeeee)"><div style=margin-bottom:28px><div style=display:flex;align-items:center;gap:8px;margin-bottom:6px><h1 style="font-size:20px;font-weight:600;margin:0;color:var(--v2-text-text-base, #ffffff)"></h1><span style="font-size:11px;font-weight:500;color:#b392f0;background:rgba(157, 124, 216, 0.15);border:1px solid rgba(157, 124, 216, 0.35);border-radius:10px;padding:1px 7px;line-height:1.4">Plugin</span></div><p style="font-size:13px;color:var(--v2-text-text-muted, #8a8a8a);margin:0;line-height:1.5"></p></div><div style="background:var(--v2-background-bg-layer-01, #141414);border:1px solid var(--v2-border-border-base, #282828);border-radius:10px;padding:20px;display:flex;flex-direction:column;gap:20px"><div><label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--v2-text-text-base, #ffffff)"></label><p style="font-size:12px;color:var(--v2-text-text-muted, #8a8a8a);margin:0 0 10px 0"></p><div style=display:flex;gap:16px><label style=display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer><input type=radio name=theme-scope-mode style=cursor:pointer><span></span></label><label style=display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer><input type=radio name=theme-scope-mode style=cursor:pointer><span></span></label></div></div><div style="padding-top:16px;border-top:1px solid var(--v2-border-border-base, #282828)"><label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--v2-text-text-base, #ffffff)"></label><p style="font-size:12px;color:var(--v2-text-text-muted, #8a8a8a);margin:0 0 12px 0"></p><div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:10px"></div></div><div style="display:flex;justify-content:flex-end;padding-top:12px;border-top:1px solid var(--v2-border-border-base, #282828)"><button type=button style="background:var(--v2-background-bg-layer-02, #1e1e1e);border:1px solid var(--v2-border-border-base, #282828);color:var(--v2-text-text-muted, #8a8a8a);border-radius:6px;padding:6px 14px;font-size:12px;cursor:pointer">`),m=(0,e.template)(`<option>`),h=(0,e.template)(`<div style="display:flex;align-items:center;gap:10px;background:var(--v2-background-bg-base, #0c0c0c);padding:8px 12px;border-radius:6px;border:1px solid var(--v2-border-border-muted, rgba(255, 255, 255, 0.08))"><div style=width:14px;height:14px;border-radius:3px;flex-shrink:0></div><div style=min-width:0;flex-grow:1><div style=font-size:12px;font-weight:500;color:#ffffff></div><div style=font-size:10px;color:#8a8a8a> (<!>)`);function g(t){let n=()=>({...o,...t.settings()}),i=(e,n)=>{if(t.t){let r=t.t(e,n);if(r&&r!==e)return r}return d(t.locale?.(),e,n)};return(()=>{var a=p(),o=a.firstChild,c=o.firstChild,l=c.firstChild;l.nextSibling;var u=c.nextSibling,d=o.nextSibling,h=d.firstChild,g=h.firstChild,v=g.nextSibling,y=v.nextSibling.firstChild,b=y.firstChild,x=b.nextSibling,S=y.nextSibling.firstChild,C=S.nextSibling,w=h.nextSibling,T=w.firstChild,E=T.nextSibling,D=E.nextSibling,O=w.nextSibling.firstChild;return(0,e.insert)(l,()=>i(`settings.header.title`)),(0,e.insert)(u,()=>i(`settings.header.desc`)),(0,e.insert)(g,()=>i(`settings.scope.title`)),(0,e.insert)(v,()=>i(`settings.scope.desc`)),b.addEventListener(`change`,()=>t.update({mode:`specific`})),(0,e.insert)(x,()=>i(`settings.scope.specific`)),S.addEventListener(`change`,()=>t.update({mode:`all`})),(0,e.insert)(C,()=>i(`settings.scope.all`)),(0,e.insert)(d,(0,e.createComponent)(r.Show,{get when(){return n().mode===`specific`},get children(){var a=f(),o=a.firstChild,c=o.nextSibling,l=c.nextSibling;return(0,e.insert)(o,()=>i(`settings.target.title`)),(0,e.insert)(c,()=>i(`settings.target.desc`)),l.addEventListener(`change`,e=>t.update({targetTheme:e.currentTarget.value})),(0,e.insert)(l,(0,e.createComponent)(r.For,{each:s,children:t=>(()=>{var n=m();return(0,e.insert)(n,()=>t.name),(0,e.effect)(()=>n.value=t.id),n})()})),(0,e.effect)(()=>l.value=n().targetTheme),a}}),w),(0,e.insert)(T,()=>i(`settings.palette.title`)),(0,e.insert)(E,()=>i(`settings.palette.desc`)),(0,e.insert)(D,(0,e.createComponent)(_,{get label(){return i(`settings.token.headings`)},get color(){return n().headingsColor},token:`accent.200`}),null),(0,e.insert)(D,(0,e.createComponent)(_,{get label(){return i(`settings.token.bold`)},get color(){return n().boldColor},token:`markdown.strong`}),null),(0,e.insert)(D,(0,e.createComponent)(_,{get label(){return i(`settings.token.inlineCode`)},get color(){return n().inlineCodeColor},token:`green.200`}),null),(0,e.insert)(D,(0,e.createComponent)(_,{get label(){return i(`settings.token.listNumbers`)},get color(){return n().listNumbersColor},token:`cyan.200`}),null),(0,e.insert)(D,(0,e.createComponent)(_,{get label(){return i(`settings.token.listBullets`)},get color(){return n().listBulletsColor},token:`orange.200`}),null),(0,e.insert)(D,(0,e.createComponent)(_,{get label(){return i(`settings.token.inactive`)},get color(){return n().inactiveBrightness},token:`text-faint`}),null),O.$$click=()=>t.reset(),(0,e.insert)(O,()=>i(`settings.action.reset`)),(0,e.effect)(()=>b.checked=n().mode===`specific`),(0,e.effect)(()=>S.checked=n().mode===`all`),a})()}function _(t){return(()=>{var n=h(),r=n.firstChild,i=r.nextSibling.firstChild,a=i.nextSibling,o=a.firstChild,s=o.nextSibling;return s.nextSibling,(0,e.insert)(i,()=>t.label),(0,e.insert)(a,()=>t.color,o),(0,e.insert)(a,()=>t.token,s),(0,e.effect)(n=>(0,e.setStyleProperty)(r,`background`,t.color)),n})()}(0,e.delegateEvents)([`click`]);function v(e){let t=e.mode===`specific`?`[data-theme="${e.targetTheme}"] `:``,n=e=>`color-mix(in srgb, ${e} 62%, #000)`,r=(e,t)=>`light-dark(${e}, ${t})`;return`
/* Prose text */
${t}[data-component="markdown"][data-component="markdown"] {
  color: ${r(`#242424`,`#eeeeee`)} !important;
}
${t}[data-component="markdown"][data-component="markdown"] p,
${t}[data-component="markdown"][data-component="markdown"] li {
  color: ${r(`#242424`,`#eeeeee`)} !important;
}

/* Headings (h1..h6) */
${t}[data-component="markdown"][data-component="markdown"] h1,
${t}[data-component="markdown"][data-component="markdown"] h2,
${t}[data-component="markdown"][data-component="markdown"] h3,
${t}[data-component="markdown"][data-component="markdown"] h4,
${t}[data-component="markdown"][data-component="markdown"] h5,
${t}[data-component="markdown"][data-component="markdown"] h6 {
  color: light-dark(${n(e.headingsColor||`#9d7cd8`)}, ${e.headingsColor||`#9d7cd8`}) !important;
}

/* Bold / Strong */
${t}[data-component="markdown"][data-component="markdown"] strong,
${t}[data-component="markdown"][data-component="markdown"] b {
  color: light-dark(${n(e.boldColor||`#f5a742`)}, ${e.boldColor||`#f5a742`}) !important;
}

/* Italic / Emphasis */
${t}[data-component="markdown"][data-component="markdown"] em,
${t}[data-component="markdown"][data-component="markdown"] i {
  color: ${r(`#7a5c12`,`#e5c07b`)} !important;
}

/* Inline code without badge background */
${t}[data-component="markdown"][data-component="markdown"] :not(pre) > code {
  color: light-dark(${n(e.inlineCodeColor||`#7fd88f`)}, ${e.inlineCodeColor||`#7fd88f`}) !important;
  background: transparent !important;
  font-weight: 500 !important;
  padding: 0 2px !important;
}

/* Numbered lists (1. 2. 3.) */
${t}[data-component="markdown"][data-component="markdown"] ol > li::marker {
  color: light-dark(${n(e.listNumbersColor||`#56b6c2`)}, ${e.listNumbersColor||`#56b6c2`}) !important;
}

/* Bullet lists (•) */
${t}[data-component="markdown"][data-component="markdown"] ul > li::marker {
  color: light-dark(${n(e.listBulletsColor||`#fab283`)}, ${e.listBulletsColor||`#fab283`}) !important;
}

/* Links */
${t}[data-component="markdown"][data-component="markdown"] a {
  color: ${r(`#0b6e7f`,`#56b6c2`)} !important;
}

/* Blockquotes */
${t}[data-component="markdown"][data-component="markdown"] blockquote {
  color: ${r(`#7a5c12`,`#e5c07b`)} !important;
  border-inline-start: 2px solid ${r(`#0b6e7f`,`#56b6c2`)} !important;
}

/* Horizontal rule */
${t}[data-component="markdown"][data-component="markdown"] hr {
  border: none !important;
  border-top: 1px solid ${r(`#d4d4d4`,`#484848`)} !important;
  height: 0 !important;
}

/* Sidebar & unselected elements readability */
${t}[data-titlebar-tab]:not([data-active="true"]) [data-slot="tab-link"],
${t}[data-titlebar-tab-link]:not([group-data-[active='true']]),
${t}.text-v2-text-text-faint {
  color: light-dark(${n(e.inactiveBrightness||`#8a8a8a`)}, ${e.inactiveBrightness||`#8a8a8a`}) !important;
}

/* Sidebar unselected icons */
${t}.text-v2-icon-icon-muted {
  color: light-dark(${n(e.inactiveBrightness||`#8a8a8a`)}, ${e.inactiveBrightness||`#8a8a8a`}) !important;
}

/* Composer / text inputs: pure crisp white */
${t}textarea,
${t}input,
${t}[contenteditable="true"],
${t}[data-slot="textarea-v2-textarea"],
${t}[data-component="dock-prompt"] textarea {
  color: ${r(`#111111`,`#ffffff`)} !important;
}

/* Distinct highlight for plugin navigation item in Settings sidebar */
.settings-nav-groups [data-slot="tabs-v2-trigger-wrapper"][data-value="terminal-theme"] [data-slot="tabs-v2-trigger"] svg {
  color: ${r(`#6b4fae`,`#9d7cd8`)} !important;
}
`}function y(t){let n=()=>({...o,...t.store.value});return(0,e.createComponent)(g,{settings:n,update:e=>{t.store.set({...n(),...e})},reset:()=>{t.store.set(o)},get t(){return t.t},get locale(){return t.locale}})}var b=t.Plugin.define({stores:{themeSettings:t.Store.global(a,o)},i18n:u,setup(n){n.add(t.Style,()=>v({...o,...n.stores.themeSettings.value})),n.add(t.SettingsPage,()=>({id:`terminal-theme`,icon:`terminal-active`,title:n.t(`settings.title`),render:()=>(0,e.createComponent)(y,{get store(){return n.stores.themeSettings},t:(e,t)=>n.t(e,t),locale:()=>n.locale.locale()})}))}});exports.default=b;