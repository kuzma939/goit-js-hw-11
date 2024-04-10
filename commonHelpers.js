import{S as p,i as c}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function f(r){const o="https://pixabay.com/api/",s="43243266-80f7041a5bbe3ede3c247f49c",i=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}?${i}`;return fetch(e).then(t=>t.json()).catch(t=>{throw new Error(t.status)})}const l=document.querySelector(".gallery-nav");function g(r){const o=r.hits.map(({webformatURL:i,largeImageURL:e,tags:t,likes:n,views:u,comments:d,downloads:m})=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${e}">
        <img 
        class="gallery-image"
        src="${i}"
        alt="${t}"/>
        <div class="image-information">
        <p>Likes: ${n}</p>
        <p>Views: ${u}</p>
        <p>Comments: ${d}</p>
        <p>Downloads: ${m}</p>
        </div>
        
        </a>
        </li>`).join("");l.insertAdjacentHTML("beforeend",o),new p(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt",captionPosition:"bottom"}).refresh()}const a=document.querySelector(".loader"),h=document.querySelector(".input-field");h.addEventListener("submit",y);function y(r){r.preventDefault(),l.innerHTML="",a.classList.remove(".hidden");const o=r.target.elements.designation.value.trim();f(o).then(s=>{s.totalHits===0||o===""?(a.classList.add(".hidden"),c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"bottomCenter",iconColor:"white"})):(a.classList.add(".hidden"),c.success({iconColor:"yellow",message:"Enjoy watching!",position:"topRight",backgroundColor:"blue",messageColor:"yellow"}),g(s))}),r.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
