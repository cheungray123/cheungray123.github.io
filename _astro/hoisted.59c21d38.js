const k=document.querySelector(".header");let A=window.scrollY,E=!1;function W(){const e=window.scrollY;A>e||e<100?k.classList.remove("-translate-y-32"):k.classList.add("-translate-y-32"),A=e,E=!1}function K(){E||(E=!0,requestAnimationFrame(W))}window.addEventListener("scroll",K);const x=document.querySelector("[data-menu-button]"),B=document.querySelector("#navbar");window.addEventListener("DOMContentLoaded",()=>{x&&x.addEventListener("click",()=>{B.classList.toggle("hidden")})});class _ extends HTMLElement{constructor(){super();const t=c=>{document.documentElement.classList.toggle("dark",c)},n=window.matchMedia("(prefers-color-scheme: dark)").matches;t(n),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",function(c){t(c.matches)});const r=localStorage.getItem("theme");(n||r==="dark")&&document.documentElement.classList.add("dark");const o=()=>{const c=document.documentElement.classList.contains("dark")?"light":"dark";document.documentElement.classList.toggle("dark",c==="dark"),a.classList.toggle("theme-toggle--toggled"),localStorage.setItem("theme",c)},a=this.querySelector("button");a.addEventListener("click",o)}}customElements.define("mode-toogle",_);const j=e=>history.state&&history.replaceState({...history.state,...e},""),b=!!document.startViewTransition,S=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),I=e=>location.pathname===e.pathname&&location.search===e.search,F=e=>document.dispatchEvent(new Event(e)),D=()=>F("astro:page-load"),z=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},h="data-astro-transition-persist";let P,g=0;history.state?(g=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):S()&&history.replaceState({index:g,scrollX,scrollY,intraPage:!1},"");const G=(e,t)=>{let n=!1,r=!1;return(...o)=>{if(n){r=!0;return}e(...o),n=!0,setTimeout(()=>{r&&(r=!1,e(...o)),n=!1},t)}};async function J(e,t){try{const n=await fetch(e,t),r=n.headers.get("content-type")?.replace(/;.*$/,"");return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function O(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function Q(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=document.createElement("script");n.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const o=new Promise(a=>{n.onload=a});e=e.then(()=>o)}n.setAttribute(r.name,r.value)}n.dataset.astroExec="",t.replaceWith(n)}return e}function Z(e){const t=e.effect;return!t||!(t instanceof KeyframeEffect)||!t.target?!1:window.getComputedStyle(t.target,t.pseudoElement).animationIterationCount==="infinite"}const Y=(e,t,n)=>{const r=!I(e);let o=!1;e.href!==location.href&&(t?history.replaceState({...history.state},"",e.href):(history.replaceState({...history.state,intraPage:n},""),history.pushState({index:++g,scrollX:0,scrollY:0},"",e.href)),r&&(scrollTo({left:0,top:0,behavior:"instant"}),o=!0)),e.hash?location.href=e.href:o||scrollTo({left:0,top:0,behavior:"instant"})};function ee(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${h}="${n.getAttribute(h)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const r=document.createElement("link");r.setAttribute("rel","preload"),r.setAttribute("as","style"),r.setAttribute("href",n.getAttribute("href")),t.push(new Promise(o=>{["load","error"].forEach(a=>r.addEventListener(a,o)),document.head.append(r)}))}return t}async function M(e,t,n,r,o){const a=s=>{const f=s.getAttribute(h),u=f&&e.head.querySelector(`[${h}="${f}"]`);if(u)return u;if(s.matches("link[rel=stylesheet]")){const m=s.getAttribute("href");return e.head.querySelector(`link[rel=stylesheet][href="${m}"]`)}return null},c=()=>{const s=document.activeElement;if(s?.closest(`[${h}]`)){if(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement){const f=s.selectionStart,u=s.selectionEnd;return{activeElement:s,start:f,end:u}}return{activeElement:s}}else return{activeElement:null}},d=({activeElement:s,start:f,end:u})=>{s&&(s.focus(),(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement)&&(s.selectionStart=f,s.selectionEnd=u))},y=()=>{const s=document.documentElement,f=[...s.attributes].filter(({name:i})=>(s.removeAttribute(i),i.startsWith("data-astro-")));[...e.documentElement.attributes,...f].forEach(({name:i,value:l})=>s.setAttribute(i,l));for(const i of document.scripts)for(const l of e.scripts)if(!i.src&&i.textContent===l.textContent||i.src&&i.type===l.type&&i.src===l.src){l.dataset.astroExec="";break}for(const i of Array.from(document.head.children)){const l=a(i);l?l.remove():i.remove()}document.head.append(...e.head.children);const u=document.body,m=c();document.body.replaceWith(e.body);for(const i of u.querySelectorAll(`[${h}]`)){const l=i.getAttribute(h),L=document.querySelector(`[${h}="${l}"]`);L&&L.replaceWith(i)}d(m),r?scrollTo(r.scrollX,r.scrollY):Y(t,n.history==="replace",!1),F("astro:after-swap")},p=ee(e);if(p.length&&await Promise.all(p),o==="animate"){const s=document.getAnimations();document.documentElement.dataset.astroTransitionFallback="old";const f=document.getAnimations().filter(m=>!s.includes(m)&&!Z(m));await Promise.all(f.map(m=>m.finished)),y(),document.documentElement.dataset.astroTransitionFallback="new"}else y()}async function U(e,t,n,r){let o;const a=t.href,c={};n.formData&&(c.method="POST",c.body=n.formData);const d=await J(a,c);if(d===null){location.href=a;return}d.redirected&&(t=new URL(d.redirected)),P??=new DOMParser;const y=P.parseFromString(d.html,d.mediaType);if(y.querySelectorAll("noscript").forEach(p=>p.remove()),!y.querySelector('[name="astro-view-transitions-enabled"]')&&!n.formData){location.href=a;return}r||history.replaceState({...history.state,scrollX,scrollY},""),document.documentElement.dataset.astroTransition=e,b?o=document.startViewTransition(()=>M(y,t,n,r)).finished:o=M(y,t,n,r,O());try{await o}finally{await Q(),D(),z()}}function q(e,t){if(!S()){location.href=e;return}const n=new URL(e,location.href);location.origin===n.origin&&I(n)?Y(n,t?.history==="replace",!0):U("forward",n,t??{})}function te(e){if(!S()&&e.state){history.scrollRestoration&&(history.scrollRestoration="manual"),location.reload();return}if(e.state===null){history.scrollRestoration&&(history.scrollRestoration="auto");return}history.scrollRestoration&&(history.scrollRestoration="manual");const t=history.state;if(t.intraPage)scrollTo(t.scrollX,t.scrollY);else{const n=t.index,r=n>g?"forward":"back";g=n,U(r,new URL(location.href),{},t)}}const H=()=>{j({scrollX,scrollY})};{(b||O()!=="none")&&(addEventListener("popstate",te),addEventListener("load",D),"onscrollend"in window?addEventListener("scrollend",H):addEventListener("scroll",G(H,350),{passive:!0}));for(const e of document.scripts)e.dataset.astroExec=""}const C=new Set,v=new WeakSet;let X,N,R=!1;function ne(e){R||(R=!0,X??=e?.prefetchAll??!1,N??=e?.defaultStrategy??"hover",re(),oe(),se())}function re(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{w(t.target,"tap")&&T(t.target.href,{with:"fetch"})},{passive:!0})}function oe(){let e;document.body.addEventListener("focusin",r=>{w(r.target,"hover")&&t(r)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),V(()=>{for(const r of document.getElementsByTagName("a"))v.has(r)||w(r,"hover")&&(v.add(r),r.addEventListener("mouseenter",t,{passive:!0}),r.addEventListener("mouseleave",n,{passive:!0}))});function t(r){const o=r.target.href;e&&clearTimeout(e),e=setTimeout(()=>{T(o,{with:"fetch"})},80)}function n(){e&&(clearTimeout(e),e=0)}}function se(){let e;V(()=>{for(const t of document.getElementsByTagName("a"))v.has(t)||w(t,"viewport")&&(v.add(t),e??=ae(),e.observe(t))})}function ae(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const r of t){const o=r.target,a=e.get(o);r.isIntersecting?(a&&clearTimeout(a),e.set(o,setTimeout(()=>{n.unobserve(o),e.delete(o),T(o.href,{with:"link"})},300))):a&&(clearTimeout(a),e.delete(o))}})}function T(e,t){if(!ie(e))return;if(C.add(e),(t?.with??"link")==="link"){const r=document.createElement("link");r.rel="prefetch",r.setAttribute("href",e),document.head.append(r)}else fetch(e).catch(r=>{console.log(`[astro] Failed to prefetch ${e}`),console.error(r)})}function ie(e){if(!navigator.onLine)return!1;if("connection"in navigator){const t=navigator.connection;if(t.saveData||/(2|3)g/.test(t.effectiveType))return!1}try{const t=new URL(e,location.href);return location.origin===t.origin&&location.pathname!==t.pathname&&!C.has(e)}catch{}return!1}function w(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:n==null&&X||n===""?t===N:n===t}function V(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function ce(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function $(e){return e.dataset.astroReload!==void 0}(b||ce()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;t instanceof Element&&t.tagName!=="A"&&(t=t.closest("a")),!(!t||!(t instanceof HTMLAnchorElement)||$(t)||t.hasAttribute("download")||!t.href||t.target&&t.target!=="_self"||t.origin!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented)&&(e.preventDefault(),q(t.href,{history:t.dataset.astroHistory==="replace"?"replace":"auto"}))}),document.querySelector('[name="astro-view-transitions-forms"]')&&document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||$(t))return;const n=t,r=new FormData(n);let o=n.action;const a={};if(n.method==="get"){const c=new URLSearchParams(r),d=new URL(o);d.search=c.toString(),o=d.toString()}else a.formData=r;e.preventDefault(),q(o,a)}),ne({prefetchAll:!0}));
