import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */async function o(e,r){try{alert("&&&");const t=await fetch(e);if(!t.ok)throw new Error(`Ошибка загрузки: ${t.status}`);const c=await t.text();document.querySelector(r).innerHTML=c}catch(t){console.error("Ошибка при загрузке контента:",t)}}document.querySelector(".sidenav").addEventListener("click",e=>{e.preventDefault();try{alert("111"),e.target.closest(".t1")?(document.querySelector(".m1").innerHTML="",o("./lecture-1.html",".m1")):e.target.closest(".t2")&&(document.querySelector(".m1").innerHTML="",o("./lecture-2.html",".m1"))}catch(r){console.log("Error",r)}});
//# sourceMappingURL=index.js.map
