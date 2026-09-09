(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{text:`Home`,link:`#`},{text:`Components`,link:`#`},{text:`About`,link:`#`},{text:`Contact`,link:`#`}],t=[[`Primary`,`primary`],[`Secondary`,`secondary`],[`Success`,`success`],[`Danger`,`danger`],[`Warning`,`warning`],[`Info`,`info`],[`Black`,`black`]],n=[[`Your profile was updated successfully!`,``],[`a simple primary alert`,`primary`],[`a simple success alert`,`success`],[`a simple danger alert`,`danger`],[`a simple warning alert`,`warning`]],r=[[`New`,``],[`Primary`,`primary`],[`Secondary`,`secondary`],[`Danger`,`danger`],[`Success`,`success`],[`Info`,`info`],[`Warning`,`warning`],[`White`,`white`],[`Black`,`black`]];function i(e,t=`primary`){return`<button class="btn btn-${t}">${e}</button>`}function a(e,t=``){return`<div class="${t?`alert alert-${t}`:`alert`}">${e}</div>`}function o(e,t=``){return`<span class="${t?`badge badge-${t}`:`badge`}">${e}</span>`}function s(){let s=t.map(([e,t])=>i(e,t)).join(``),c=n.map(([e,t])=>a(e,t)).join(``),l=r.map(([e,t])=>o(e,t)).join(``),u=e.map(({text:e,link:t})=>`<a href="${t}">${e}</a>`).join(``);return`
    <div class="container py-4">
      <div class="mb-4">
        <h2>Buttons</h2>
        <div class="d-flex flex-wrap gap-2 mb-2">${s}</div>
      </div>

      <div class="card">
        <div class="card-body">
          <h3>UIForge</h3>
          <p>My own UI library.</p>
          ${i(`Learn More`)}
        </div>
      </div>

      <nav class="navbar">
        <h2>UIForge</h2>
        <div class="nav-link">${u}</div>
      </nav>

      ${c}
      <div>${l}</div>
    </div>
  `}var c=document.querySelector(`#root`);c.innerHTML=s();