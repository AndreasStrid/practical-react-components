/*! For license information please see main.js.LICENSE.txt */
  ${n.default}

  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${e=>{let{theme:t}=e;return t.color.background00()}};
    font-family: Open Sans,Helvetica,arial,sans-serif;
    margin: 0;
    min-height: 100vh;
    padding: 0;
  }
`,E=r.default.div.withConfig({displayName:"src__AppContainer",componentId:"sc-92wvn0-0"})(["display:grid;grid-template-areas:'header header' 'sidebar content';grid-template-columns:min-content 1fr;grid-template-rows:auto 1fr;height:100vh;width:100vw;position:relative;z-index:0;"]),S=r.default.header.withConfig({displayName:"src__HeaderStyled",componentId:"sc-92wvn0-1"})(["background-color:",";box-shadow:0px 2px 6px rgba(0,0,0,0.16);grid-area:header;height:54px;width:100vw;z-index:1;display:flex;"],(e=>{let{theme:t}=e;return t.color.background00()})),_=r.default.aside.withConfig({displayName:"src__Aside",componentId:"sc-92wvn0-2"})(["box-shadow:2px 0px 6px rgba(0,0,0,0.16);grid-area:sidebar;overflow:hidden;"]),P=r.default.main.withConfig({displayName:"src__Main",componentId:"sc-92wvn0-3"})(["max-width:1200px;margin:0 auto;background-color:",";padding:",";"],(e=>{let{theme:t}=e;return t.color.background00()}),d.spacing.extraLarge);t.default.render(e.default.createElement(e.default.StrictMode,null,e.default.createElement(u.ThemeProvider,{initialThemeName:k},e.default.createElement(E,null,e.default.createElement(C,null),e.default.createElement(d.GlobalScrollbarStyle,null),e.default.createElement(S,null,e.default.createElement(p.Header,null)),e.default.createElement(i.HashRouter,{hashType:"noslash"},e.default.createElement(_,null,e.default.createElement(m.Menu,{components:O})),e.default.createElement(g.Content,null,e.default.createElement(o.MDXProvider,{components:c.components},e.default.createElement(P,null,e.default.createElement(i.Switch,null,e.default.createElement(i.Route,{exact:!0,path:"/"},e.default.createElement(f.Home,null)),O.map((t=>{let{route:a,component:n}=t;return e.default.createElement(i.Route,{key:a,path:a},e.default.createElement(n,null))})))))))))),document.querySelector(".root"))})()})();