/* empty css                      */(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function i(c,r){try{alert("&&&");const o=await fetch(c);if(!o.ok)throw new Error(`Ошибка загрузки: ${o.status}`);const n=await o.text();document.querySelector(r).innerHTML=n}catch(o){console.error("Ошибка при загрузке контента:",o)}}document.querySelector(".sidenav").addEventListener("click",c=>{c.preventDefault();try{c.target.closest(".t1")?i("/lecture-1.html",".m1"):c.target.closest(".t2")&&(document.querySelector(".m1").innerHTML="",i("/lecture-2.html",".m1"))}catch(r){console.log("Error",r)}});
//# sourceMappingURL=index.js.map
