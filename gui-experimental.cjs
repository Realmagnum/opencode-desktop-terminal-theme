Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:`Module`}});let e=require("solid-js/web"),t=require("@opencode/plugin/gui"),n=require("effect"),r=require("solid-js");var i=n.Schema.Union([n.Schema.Literal(`all`),n.Schema.Literal(`specific`)]),a=n.Schema.Struct({mode:i,targetTheme:n.Schema.String,inactiveBrightness:n.Schema.String,headingsColor:n.Schema.String,boldColor:n.Schema.String,inlineCodeColor:n.Schema.String,listNumbersColor:n.Schema.String,listBulletsColor:n.Schema.String}),o={mode:`specific`,targetTheme:`solarized`,inactiveBrightness:`#8a8a8a`,headingsColor:`#9d7cd8`,boldColor:`#f5a742`,inlineCodeColor:`#7fd88f`,listNumbersColor:`#56b6c2`,listBulletsColor:`#fab283`},s=[{id:`solarized`,name:`Solarized`},{id:`oc-2`,name:`OpenCode (Default)`},{id:`amoled`,name:`AMOLED`},{id:`aura`,name:`Aura`},{id:`ayu`,name:`Ayu`},{id:`carbonfox`,name:`Carbonfox`},{id:`catppuccin`,name:`Catppuccin`},{id:`catppuccin-frappe`,name:`Catppuccin Frappe`},{id:`catppuccin-macchiato`,name:`Catppuccin Macchiato`},{id:`cobalt2`,name:`Cobalt2`},{id:`cursor`,name:`Cursor`},{id:`dracula`,name:`Dracula`},{id:`everforest`,name:`Everforest`},{id:`flexoki`,name:`Flexoki`},{id:`github`,name:`GitHub`},{id:`gruvbox`,name:`Gruvbox`},{id:`kanagawa`,name:`Kanagawa`},{id:`lucent-orng`,name:`Lucent Orng`},{id:`material`,name:`Material`},{id:`matrix`,name:`Matrix`},{id:`mercury`,name:`Mercury`},{id:`monokai`,name:`Monokai`},{id:`nightowl`,name:`Night Owl`},{id:`nord`,name:`Nord`},{id:`one-dark`,name:`One Dark`},{id:`onedarkpro`,name:`One Dark Pro`},{id:`orng`,name:`Orng`},{id:`osaka-jade`,name:`Osaka Jade`},{id:`palenight`,name:`Palenight`},{id:`rosepine`,name:`Rose Pine`},{id:`shadesofpurple`,name:`Shades of Purple`},{id:`synthwave84`,name:`Synthwave '84`},{id:`tokyonight`,name:`Tokyonight`},{id:`vercel`,name:`Vercel`},{id:`vesper`,name:`Vesper`},{id:`zenburn`,name:`Zenburn`}],c=(0,e.template)(`<div style="padding-top:16px;border-top:1px solid var(--v2-border-border-base, #282828)"><label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--v2-text-text-base, #ffffff)">Target Theme to Override</label><p style="font-size:12px;color:var(--v2-text-text-muted, #8a8a8a);margin:0 0 10px 0">When this theme is active in Settings → Appearance, the console palette will override it.</p><select style="background:var(--v2-background-bg-layer-02, #1a1a1a);border:1px solid var(--v2-border-border-strong, #3a3a3a);color:var(--v2-text-text-base, #ffffff);border-radius:6px;padding:8px 12px;font-size:13px;outline:none;cursor:pointer;min-width:260px">`),l=(0,e.template)(`<div style="max-width:760px;margin:0 auto;padding:32px 24px;font-family:var(--font-family-sans, -apple-system, BlinkMacSystemFont, sans-serif);color:var(--v2-text-text-base, #eeeeee)"><div style=margin-bottom:28px><h1 style="font-size:20px;font-weight:600;margin:0 0 6px 0;color:var(--v2-text-text-base, #ffffff)">Terminal Console Theme</h1><p style="font-size:13px;color:var(--v2-text-text-muted, #8a8a8a);margin:0;line-height:1.5">Authentic OpenCode TUI console markdown styling and custom theme override.</p></div><div style="background:var(--v2-background-bg-layer-01, #141414);border:1px solid var(--v2-border-border-base, #282828);border-radius:10px;padding:20px;display:flex;flex-direction:column;gap:20px"><div><label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--v2-text-text-base, #ffffff)">Application Scope</label><p style="font-size:12px;color:var(--v2-text-text-muted, #8a8a8a);margin:0 0 10px 0">Choose whether to apply authentic console styling to all themes or override a specific theme only.</p><div style=display:flex;gap:16px><label style=display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer><input type=radio name=theme-scope-mode style=cursor:pointer><span>Override specific theme only</span></label><label style=display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer><input type=radio name=theme-scope-mode style=cursor:pointer><span>Apply to all themes</span></label></div></div><div style="padding-top:16px;border-top:1px solid var(--v2-border-border-base, #282828)"><label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--v2-text-text-base, #ffffff)">Terminal Token Palette</label><p style="font-size:12px;color:var(--v2-text-text-muted, #8a8a8a);margin:0 0 12px 0">Authentic TUI tokens applied to chat markdown elements:</p><div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:10px"></div></div><div style="display:flex;justify-content:flex-end;padding-top:12px;border-top:1px solid var(--v2-border-border-base, #282828)"><button type=button style="background:var(--v2-background-bg-layer-02, #1e1e1e);border:1px solid var(--v2-border-border-base, #282828);color:var(--v2-text-text-muted, #8a8a8a);border-radius:6px;padding:6px 14px;font-size:12px;cursor:pointer">Reset to Defaults`),u=(0,e.template)(`<option>`),d=(0,e.template)(`<div style="display:flex;align-items:center;gap:10px;background:var(--v2-background-bg-base, #0c0c0c);padding:8px 12px;border-radius:6px;border:1px solid var(--v2-border-border-muted, rgba(255, 255, 255, 0.08))"><div style=width:14px;height:14px;border-radius:3px;flex-shrink:0></div><div style=min-width:0;flex-grow:1><div style=font-size:12px;font-weight:500;color:#ffffff></div><div style=font-size:10px;color:#8a8a8a> (<!>)`);function f(t){let n=()=>({...o,...t.settings()});return(()=>{var i=l(),a=i.firstChild;a.firstChild.nextSibling;var o=a.nextSibling,d=o.firstChild,f=d.firstChild.nextSibling.nextSibling.firstChild,m=f.firstChild,h=f.nextSibling.firstChild,g=d.nextSibling,_=g.firstChild.nextSibling.nextSibling,v=g.nextSibling.firstChild;return m.addEventListener(`change`,()=>t.update({mode:`specific`})),h.addEventListener(`change`,()=>t.update({mode:`all`})),(0,e.insert)(o,(0,e.createComponent)(r.Show,{get when(){return n().mode===`specific`},get children(){var i=c(),a=i.firstChild.nextSibling.nextSibling;return a.addEventListener(`change`,e=>t.update({targetTheme:e.currentTarget.value})),(0,e.insert)(a,(0,e.createComponent)(r.For,{each:s,children:t=>(()=>{var n=u();return(0,e.insert)(n,()=>t.name),(0,e.effect)(()=>n.value=t.id),n})()})),(0,e.effect)(()=>a.value=n().targetTheme),i}}),g),(0,e.insert)(_,(0,e.createComponent)(p,{label:`Headings`,get color(){return n().headingsColor},token:`accent.200`}),null),(0,e.insert)(_,(0,e.createComponent)(p,{label:`Bold Text`,get color(){return n().boldColor},token:`markdown.strong`}),null),(0,e.insert)(_,(0,e.createComponent)(p,{label:`Inline Code`,get color(){return n().inlineCodeColor},token:`green.200`}),null),(0,e.insert)(_,(0,e.createComponent)(p,{label:`List Numbers`,get color(){return n().listNumbersColor},token:`cyan.200`}),null),(0,e.insert)(_,(0,e.createComponent)(p,{label:`List Bullets`,get color(){return n().listBulletsColor},token:`orange.200`}),null),(0,e.insert)(_,(0,e.createComponent)(p,{label:`Inactive Text`,get color(){return n().inactiveBrightness},token:`text-faint`}),null),v.$$click=()=>t.reset(),(0,e.effect)(()=>m.checked=n().mode===`specific`),(0,e.effect)(()=>h.checked=n().mode===`all`),i})()}function p(t){return(()=>{var n=d(),r=n.firstChild,i=r.nextSibling.firstChild,a=i.nextSibling,o=a.firstChild,s=o.nextSibling;return s.nextSibling,(0,e.insert)(i,()=>t.label),(0,e.insert)(a,()=>t.color,o),(0,e.insert)(a,()=>t.token,s),(0,e.effect)(n=>(0,e.setStyleProperty)(r,`background`,t.color)),n})()}(0,e.delegateEvents)([`click`]);function m(e){let t=e.mode===`specific`?`[data-theme="${e.targetTheme}"] `:``;return`
/* Prose text */
${t}[data-component="markdown"][data-component="markdown"] {
  color: #eeeeee !important;
}
${t}[data-component="markdown"][data-component="markdown"] p,
${t}[data-component="markdown"][data-component="markdown"] li {
  color: #eeeeee !important;
}

/* Headings (h1..h6) */
${t}[data-component="markdown"][data-component="markdown"] h1,
${t}[data-component="markdown"][data-component="markdown"] h2,
${t}[data-component="markdown"][data-component="markdown"] h3,
${t}[data-component="markdown"][data-component="markdown"] h4,
${t}[data-component="markdown"][data-component="markdown"] h5,
${t}[data-component="markdown"][data-component="markdown"] h6 {
  color: ${e.headingsColor||`#9d7cd8`} !important;
}

/* Bold / Strong */
${t}[data-component="markdown"][data-component="markdown"] strong,
${t}[data-component="markdown"][data-component="markdown"] b {
  color: ${e.boldColor||`#f5a742`} !important;
}

/* Italic / Emphasis */
${t}[data-component="markdown"][data-component="markdown"] em,
${t}[data-component="markdown"][data-component="markdown"] i {
  color: #e5c07b !important;
}

/* Inline code without badge background */
${t}[data-component="markdown"][data-component="markdown"] :not(pre) > code {
  color: ${e.inlineCodeColor||`#7fd88f`} !important;
  background: transparent !important;
  font-weight: 500 !important;
  padding: 0 2px !important;
}

/* Numbered lists (1. 2. 3.) */
${t}[data-component="markdown"][data-component="markdown"] ol > li::marker {
  color: ${e.listNumbersColor||`#56b6c2`} !important;
}

/* Bullet lists (•) */
${t}[data-component="markdown"][data-component="markdown"] ul > li::marker {
  color: ${e.listBulletsColor||`#fab283`} !important;
}

/* Links */
${t}[data-component="markdown"][data-component="markdown"] a {
  color: #56b6c2 !important;
}

/* Blockquotes */
${t}[data-component="markdown"][data-component="markdown"] blockquote {
  color: #e5c07b !important;
  border-inline-start: 2px solid #56b6c2 !important;
}

/* Horizontal rule */
${t}[data-component="markdown"][data-component="markdown"] hr {
  border: none !important;
  border-top: 1px solid #484848 !important;
  height: 0 !important;
}

/* Sidebar & unselected elements readability */
${t}[data-titlebar-tab]:not([data-active="true"]) [data-slot="tab-link"],
${t}[data-titlebar-tab-link]:not([group-data-[active='true']]),
${t}.text-v2-text-text-faint {
  color: ${e.inactiveBrightness||`#8a8a8a`} !important;
}

/* Sidebar unselected icons */
${t}.text-v2-icon-icon-muted {
  color: ${e.inactiveBrightness||`#8a8a8a`} !important;
}

/* Composer / text inputs: pure crisp white */
${t}textarea,
${t}input,
${t}[contenteditable="true"],
${t}[data-slot="textarea-v2-textarea"],
${t}[data-component="dock-prompt"] textarea {
  color: #ffffff !important;
}
`}function h(t){let n=()=>({...o,...t.store.value});return(0,e.createComponent)(f,{settings:n,update:e=>{t.store.set({...n(),...e})},reset:()=>{t.store.set(o)}})}var g=t.Plugin.define({stores:{themeSettings:t.Store.global(a,o)},setup(n){n.add(t.Style,()=>m({...o,...n.stores.themeSettings.value})),n.add(t.SettingsPage,()=>({id:`terminal-theme`,icon:`terminal-active`,title:`Terminal Theme`,render:()=>(0,e.createComponent)(h,{get store(){return n.stores.themeSettings}})}))}});exports.default=g;