var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("j32Ok");const{Notiflix:a,Notify:r,Report:s,Confirm:l,Loading:c,Block:d}=i.default,f=document.getElementById("search-form"),u=document.querySelector(".gallery"),y=document.querySelector(".load-more"),p=f.elements.searchQuery;let m=1,h="";async function g(){try{return(await axios.get(`https://pixabay.com/api/?key=38626899-515234956be965e38487a76e6&q=${h}&image_type=photo&orientation=horizontal&safesearch=true&page=${m}&per_page=20`)).data}catch(e){return console.error("Error fetching images:",e),null}}function b(e){const t=e.map((e=>`\n      <div class="photo-card">\n        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />\n        <div class="info">\n          <p class="info-item"><b>Likes:</b> ${e.likes}</p>\n          <p class="info-item"><b>Views:</b> ${e.views}</p>\n          <p class="info-item"><b>Comments:</b> ${e.comments}</p>\n          <p class="info-item"><b>Downloads:</b> ${e.downloads}</p>\n        </div>\n      </div>\n    `));u.insertAdjacentHTML("beforeend",t.join(""))}f.addEventListener("submit",(async function(e){if(e.preventDefault(),h=p.value.trim(),!h)return;m=1,u.innerHTML="";const t=await g();t&&t.hits.length>0?(b(t.hits),y.style.display="block",i.default.Notify.success(`Found ${t.totalHits} images matching your search query.`)):i.default.Notify.failure("Sorry, there are no images matching your search query. Please try again.")})),y.addEventListener("click",(async function(){m++;const e=await g();e&&e.hits.length>0?(b(e.hits),i.default.Notify.success(`Loaded ${e.hits.length} more images.`)):(y.style.display="none",i.default.Notify.info("We're sorry, but you've reached the end of search results."))}));
//# sourceMappingURL=index.1a6c2d02.js.map