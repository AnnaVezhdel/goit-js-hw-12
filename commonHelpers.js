import{S as p,i as d}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function f(o,s=1){const i="https://pixabay.com/api",r="45306950-544d7ee3c7cf7db24fb2a5eae",e=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:s});try{const t=await fetch(`${i}/?${e.toString()}`);if(!t.ok)throw new Error(t.status);return await t.json()}catch(t){return console.error("Error:",t),null}}function m(o){const s=document.getElementById("gallery");if(s.innerHTML="",o.length===0){iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const i=o.map(r=>`
          <a class="gallery-item" href="${r.largeImageURL}">
              <img src="${r.webformatURL}" alt="${r.tags}" class="gallery-image"/>
              <div class="features">
                  <p>Likes: ${r.likes}</p>
                  <p>Views: ${r.views}</p>
                  <p>Comments: ${r.comments}</p>
                  <p>Downloads: ${r.downloads}</p>
              </div>
          </a>
        `).join("");s.innerHTML=i,new p(".gallery a")}function h(){document.getElementById("loader").classList.remove("hidden")}function y(){document.getElementById("loader").classList.add("hidden")}function L(){document.querySelector(".btn").classList.remove("hidden")}function g(){document.querySelector(".btn").classList.add("hidden")}let l="",a=1,u=0,n={};document.querySelector("form").addEventListener("submit",async o=>{if(o.preventDefault(),l=document.getElementById("search-input").value.trim(),!l){d.error({title:"Error",message:"Please enter a search query!"});return}document.getElementById("search-input").value="",a=1,g(),w(),h(),n=await f(l,a),y(),n&&n.hits.length>0?(u=n.totalHits,m(n.hits),a*15<u&&L()):d.error({title:"Error",message:"Something went wrong. Please try again later."})});document.querySelector(".btn").addEventListener("click",async()=>{a+=1,h();const o=await f(l,a);n.hits.push(...o.hits),y(),n&&n.hits.length>0&&(m(n.hits),E(),a*15>=u&&(g(),d.info({title:"End",message:"We're sorry, but you've reached the end of search results."})))});function w(){document.querySelector(".gallery").innerHTML=""}function E(){const{height:o}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
