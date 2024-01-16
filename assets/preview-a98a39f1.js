import{d as O}from"./index-356e4a49.js";const{useMemo:f,useEffect:_}=__STORYBOOK_MODULE_PREVIEW_API__,{global:h}=__STORYBOOK_MODULE_GLOBAL__,{logger:B}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var p="backgrounds",{document:s,window:w}=h,x=()=>w.matchMedia("(prefers-reduced-motion: reduce)").matches,A=(r,e=[],a)=>{if(r==="transparent")return"transparent";if(e.find(n=>n.value===r))return r;let t=e.find(n=>n.name===a);if(t)return t.value;if(a){let n=e.map(d=>d.name).join(", ");B.warn(O`
        Backgrounds Addon: could not find the default color "${a}".
        These are the available colors for your story based on your configuration:
        ${n}.
      `)}return"transparent"},v=r=>{(Array.isArray(r)?r:[r]).forEach(L)},L=r=>{var a;let e=s.getElementById(r);e&&((a=e.parentElement)==null||a.removeChild(e))},T=(r,e)=>{let a=s.getElementById(r);if(a)a.innerHTML!==e&&(a.innerHTML=e);else{let t=s.createElement("style");t.setAttribute("id",r),t.innerHTML=e,s.head.appendChild(t)}},C=(r,e,a)=>{var n;let t=s.getElementById(r);if(t)t.innerHTML!==e&&(t.innerHTML=e);else{let d=s.createElement("style");d.setAttribute("id",r),d.innerHTML=e;let i=`addon-backgrounds-grid${a?`-docs-${a}`:""}`,o=s.getElementById(i);o?(n=o.parentElement)==null||n.insertBefore(d,o):s.head.appendChild(d)}},I=(r,e)=>{var c;let{globals:a,parameters:t}=e,n=(c=a[p])==null?void 0:c.value,d=t[p],i=f(()=>d.disable?"transparent":A(n,d.values,d.default),[d,n]),o=f(()=>i&&i!=="transparent",[i]),g=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",u=f(()=>{let l="transition: background-color 0.3s;";return`
      ${g} {
        background: ${i} !important;
        ${x()?"":l}
      }
    `},[i,g]);return _(()=>{let l=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!o){v(l);return}C(l,u,e.viewMode==="docs"?e.id:null)},[o,u,e]),r()},R=(r,e)=>{var $;let{globals:a,parameters:t}=e,n=t[p].grid,d=(($=a[p])==null?void 0:$.grid)===!0&&n.disable!==!0,{cellAmount:i,cellSize:o,opacity:g}=n,u=e.viewMode==="docs",c=t.layout===void 0||t.layout==="padded"?16:0,l=n.offsetX??(u?20:c),b=n.offsetY??(u?20:c),y=f(()=>{let m=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",E=[`${o*i}px ${o*i}px`,`${o*i}px ${o*i}px`,`${o}px ${o}px`,`${o}px ${o}px`].join(", ");return`
      ${m} {
        background-size: ${E} !important;
        background-position: ${l}px ${b}px, ${l}px ${b}px, ${l}px ${b}px, ${l}px ${b}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${g}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${g}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${g/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${g/2}) 1px, transparent 1px) !important;
      }
    `},[o]);return _(()=>{let m=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!d){v(m);return}T(m,y)},[d,y,e]),r()},k=[R,I],M={[p]:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},S={[p]:null};const z=Object.freeze(Object.defineProperty({__proto__:null,decorators:k,globals:S,parameters:M},Symbol.toStringTag,{value:"Module"})),G=Object.freeze(Object.defineProperty({__proto__:null,decorators:k,globals:S,parameters:M},Symbol.toStringTag,{value:"Module"}));export{G as a,z as p};
