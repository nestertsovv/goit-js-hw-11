import{i as c,s as d}from"./assets/vendor-1d1bb5a2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function u(o){const r="https://pixabay.com/api/",s=new URLSearchParams({key:"43999869-2222e4e6c4d0611e5b13cb64c",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${r}?${s}`,e=document.querySelector(".loader");return e.style.display="block",fetch(i).then(t=>(t.ok||c.error({title:`Error: ${t.status}`,message:"Something happened :(",position:"topRight"}),e.style.display="none",t.json())).then(t=>(t.hits.length||c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),t.hits))}function f(o){let r="";return o.map(s=>{const{webformatURL:i,largeImageURL:e,tags:t,views:n,downloads:l,likes:p,comments:m}=s;r+=`<div class="item-gallery">
                <a href="${e}">
                    <img src="${i}" alt="${t}">
                </a>
                <div class="item-info">
                    <div class="item-info-content">
                        <p>Likes</p>
                        <p>${p}</p>
                    </div>
                    <div class="item-info-content">
                        <p>Views</p>
                        <p>${n}</p>
                    </div>
                    <div class="item-info-content">
                        <p>Comments</p>
                        <p>${m}</p>
                    </div>
                    <div class="item-info-content">
                        <p>Downloads</p>
                        <p>${l}</p>
                    </div>
                </div>
            </div>`}),r}const a={formSearch:document.querySelector(".search-form"),gallery:document.querySelector(".gallery")},g={captionsData:"alt",captionDelay:250,className:"js-backdrop"},h=new d(".gallery a",g);a.formSearch.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements.search.value.trim();r&&(a.gallery.innerHTML="",u(r).then(s=>{y(s),h.refresh()}),o.target.reset())});function y(o){const r=f(o);a.gallery.insertAdjacentHTML("afterbegin",r)}
//# sourceMappingURL=commonHelpers.js.map
