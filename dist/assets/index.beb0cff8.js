import{a as R}from"./vendor.f782cf36.js";const W=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))f(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&f(u)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function f(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}};W();console.clear();/*!
 * ztext.js v0.0.2
 * https://bennettfeely.com/ztext
 * Licensed MIT | (c) 2020 Bennett Feely
 */let a={depth:"1rem",direction:"both",event:"none",eventRotation:"30deg",eventDirection:"default",fade:!1,layers:10,perspective:"500px",z:!0};function m(n,t){if(p=="reverse")var o=-1;else o=1;var f=n*c*o,r=-t*c*o,i="rotateX("+r+d+") rotateY("+f+d+")";h.style.setProperty("--zt-translate",i),h.style.webkitTransform=i,h.style.transform=i}function k(){var n=e.getBoundingClientRect(),t=n.left+n.width/2-window.innerWidth/2,o=n.top+n.height/2-window.innerHeight/2;m(t/window.innerWidth*-2,o/window.innerHeight*-2)}function H(){var n=e.getBoundingClientRect();m(0,(n.top+n.height/2-window.innerHeight/2)/window.innerHeight*-2)}function A(){var n=e.getBoundingClientRect();m((n.left+n.width/2-window.innerWidth/2)/window.innerWidth*-2,0)}function D(n,t){if((t.zEngaged||a.zEngaged)==="false")return;var o=t.depth||a.depth,f=o.match(/[a-z]+/)[0],r=parseFloat(o.replace(f,"")),i=t.direction||a.direction,u=t.event||a.event,S=t.eventRotation||a.eventRotation,T=S.match(/[a-z]+/)[0];parseFloat(S.replace(T,"")),t.eventDirection||a.eventDirection;var z=t.fade||a.fade,E=t.layers||a.layers,L=t.perspective||a.perspective,g=t.transform||a.transform,C=n.innerHTML;n.innerHTML="",n.style.display="inline-block",n.style.position="relative",n.style.webkitPerspective=L,n.style.perspective=L;var y=document.createElement("span");y.setAttribute("class","z-text"),y.style.display="inline-block",y.style.webkitTransformStyle="preserve-3d",y.style.transformStyle="preserve-3d";var w=document.createElement("span");let v=0;for(w.setAttribute("class","z-layers"),w.style.display="inline-block",w.style.webkitTransformStyle="preserve-3d",w.style.transformStyle="preserve-3d",y.append(w);v<E;v++){let l=v/E;var s=document.createElement("span");if(s.setAttribute("class","z-layer"),s.innerHTML=C,s.setAttribute("aria-hidden","true"),s.style.display="inline-block",i==="backwards")var b=-l*r;i==="both"&&(b=-l*r+r/2),i==="forwards"&&(b=-l*r+r),g="translateZ("+b+f+")",s.style.setProperty("--zt-translate",g),s.style.webkitTransform=g,s.style.transform=g,v>=1&&(s.style.position="absolute",s.style.top=0,s.style.left=0,v>0&&s.setAttribute("aria-hidden","true"),s.style.pointerEvents="none",s.style.mozUserSelect="none",s.style.msUserSelect="none",s.style.webkitUserSelect="none",s.style.userSelect="none",z!==!0&&z!=="true"||(s.style.opacity=(1-l)/2)),w.append(s)}n.append(y),u==="pointer"&&(window.addEventListener("mousemove",l=>{m(2*(l.clientX/window.innerWidth-.5),2*(l.clientY/window.innerHeight-.5))},!1),window.addEventListener("touchmove",l=>{m(2*(l.touches[0].clientX/window.innerWidth-.5),2*(l.touches[0].clientY/window.innerHeight-.5))},!1)),u=="scroll"&&(k(),window.addEventListener("scroll",k,!1)),u=="scrollY"&&(H(),window.addEventListener("scroll",H,!1)),u=="scrollX"&&(A(),window.addEventListener("scroll",A,!1))}function M(n,t){CSS.supports("-moz-transform-style","preserve-3d")||CSS.supports("-ms-transform-style","preserve-3d")||CSS.supports("-webkit-transform-style","preserve-3d")||CSS.supports("transform-style","preserve-3d")?document.querySelectorAll(n).forEach(o=>{D(o,t)}):console.error("ztext is disabled because transform-style: preserve-3d; is unsupported")}new M("[data-splitting]",{depth:"2em",layers:8,fade:!1,direction:"backwards"});const O=R.timeline({targets:".z-layers > .z-layer",delay:(n,t)=>t*10,duration:500,easing:"easeInOutSine",loop:!0,direction:"alternate"});O.add({scale:(n,t,o)=>{t=++t;const f=(o-t)*2/o;return 1+f/3}});const P=document.getElementById("dialogElement");"HTMLDialogElement"in window||(document.documentElement.classList.add("dialog-unsupported"),P.setAttribute("open",""));
