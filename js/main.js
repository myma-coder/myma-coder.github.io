document.addEventListener("DOMContentLoaded",(function(){let t=document.getElementById("site-name").offsetWidth;const e=document.querySelector("#menus .menus_items");let n=e&&e.offsetWidth;const o=document.querySelector("#search-button");let i=o&&o.offsetWidth,c=!1;const s=()=>{c&&(t=document.getElementById("site-name").offsetWidth,n=e&&e.offsetWidth,i=o&&o.offsetWidth,c=!1);const s=document.getElementById("nav");let a;a=window.innerWidth<768||t+n+i>s.offsetWidth-120,a?s.classList.add("hide-menu"):s.classList.remove("hide-menu")};let a=!1;const l=t=>{const e=parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--global-font-size"));let n="";if(c=!0,t){if(e>=20)return;n=e+1,document.documentElement.style.setProperty("--global-font-size",n+"px"),!document.getElementById("nav").classList.contains("hide-menu")&&s()}else{if(e<=10)return;n=e-1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")&&s()}saveToLocal.set("global-font-size",n,2)};document.getElementById("rightside").addEventListener("click",(function(t){switch(t.target.id||t.target.parentNode.id){case"go-up":btf.scrollToDest(0,500);break;case"rightside_config":document.getElementById("rightside-config-hide").classList.toggle("show");break;case"readmode":document.body.classList.toggle("read-mode");break;case"darkmode":"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout((()=>window.disqusReset()),200);break;case"hide-aside-btn":(()=>{const t=document.documentElement.classList;t.contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),t.toggle("hide-aside")})();break;case"font-plus":l(!0);break;case"font-minus":l()}}));const d=()=>{document.querySelectorAll("#article-container .tabs .tab-to-top").forEach((function(t){t.addEventListener("click",(function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)}))}))},r=function(t){t.forEach((t=>{const e=t,n=e.getAttribute("datetime");e.innerText=btf.diffDate(n,!0),e.style.display="inline"}))};window.refreshFn=function(){s(),document.getElementById("nav").classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(GLOBAL_CONFIG_SITE.isToc&&function(){const t=document.getElementById("card-toc"),e=t.getElementsByClassName("toc-content")[0],n=e.querySelectorAll(".toc-link"),o=document.getElementById("article-container");window.addEventListener("scroll",btf.throttle((function(t){const e=window.scrollY||document.documentElement.scrollTop;i(e),d(e)}),100));const i=function(t){const n=o.clientHeight,i=document.documentElement.clientHeight,c=(t-o.offsetTop)/(n>i?n-i:document.documentElement.scrollHeight-i),s=Math.round(100*c),a=s>100?100:s<=0?0:s;e.setAttribute("progress-percentage",a)},c=GLOBAL_CONFIG.isanchor,s=()=>{t.style.animation="toc-close .2s",setTimeout((()=>{t.style.cssText="opacity:''; animation: ''; right: ''"}),100)};document.getElementById("mobile-toc-button").addEventListener("click",(()=>{"0"===window.getComputedStyle(t).getPropertyValue("opacity")?t.style.cssText="animation: toc-open .3s; opacity: 1; right: 45px":s()})),e.addEventListener("click",(t=>{t.preventDefault();const e=t.target.classList.contains("toc-link")?t.target:t.target.parentElement;btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(e.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&s()}));const a=o.querySelectorAll("h1,h2,h3,h4,h5,h6");let l="";const d=function(t){if(0===n.length||0===t)return!1;let o="",i="";if(a.forEach((function(e,n){t>btf.getEleTop(e)-70&&(o="#"+encodeURI(e.getAttribute("id")),i=n)})),l===i)return;var s;if(c&&(s=o,window.history.replaceState&&s!==window.location.hash&&(s||(s=location.pathname),window.history.replaceState({},"",s))),""===o)return e.querySelectorAll(".active").forEach((t=>{t.classList.remove("active")})),void(l=i);l=i,e.querySelectorAll(".active").forEach((t=>{t.classList.remove("active")}));const d=n[i];d.classList.add("active"),setTimeout((function(){!function(t){const n=t.getBoundingClientRect().top,o=e.scrollTop;n>document.documentElement.clientHeight-100&&(e.scrollTop=o+150),n<100&&(e.scrollTop=o-150)}(d)}),0);let r=d.parentNode;for(;!r.matches(".toc");r=r.parentNode)r.matches("li")&&r.classList.add("active")}}(),void 0!==GLOBAL_CONFIG.noticeOutdate&&function(){const t=GLOBAL_CONFIG.noticeOutdate,e=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate);if(e>=t.limitDay){const n=document.createElement("div");n.className="post-outdate-notice",n.textContent=t.messagePrev+" "+e+" "+t.messageNext;const o=document.getElementById("article-container");"top"===t.position?o.insertBefore(n,o.firstChild):o.appendChild(n)}}(),GLOBAL_CONFIG.relativeDate.post&&r(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&r(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime&&(()=>{const t=document.getElementById("runtimeshow");if(null!==t){const e=t.getAttribute("data-publishDate");t.innerText=btf.diffDate(e)+" "+GLOBAL_CONFIG.runtime}})(),(()=>{const t=document.getElementById("last-push-date");if(null!==t){const e=t.getAttribute("data-lastPushDate");t.innerText=btf.diffDate(e,!0)}})(),function(){const t=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i");t.length>0&&t.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),this.classList.toggle("expand");const e=this.parentNode.nextElementSibling;btf.isHidden(e)?e.style.display="block":e.style.display="none"}))}))}()),(()=>{const t=document.getElementById("toggle-menu"),e=document.getElementById("sidebar-menus"),n=document.getElementById("menu-mask"),o=document.body;function i(){o.style.overflow="",o.style.paddingRight="",btf.fadeOut(n,.5),e.classList.remove("open")}t.addEventListener("click",(function(){btf.sidebarPaddingR(),o.style.overflow="hidden",btf.fadeIn(n,.5),e.classList.add("open")})),n.addEventListener("click",(t=>{e.classList.contains("open")&&i()})),window.addEventListener("resize",(n=>{btf.isHidden(t)&&e.classList.contains("open")&&i()}))})(),GLOBAL_CONFIG_SITE.isHome&&(()=>{const t=document.getElementById("scroll-down");t&&t.addEventListener("click",(function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}))})(),GLOBAL_CONFIG.highlight&&function(){const t=GLOBAL_CONFIG.highlight.highlightCopy,e=GLOBAL_CONFIG.highlight.highlightLang,n=GLOBAL_CONFIG_SITE.isHighlightShrink,o=t||e||void 0!==n,i="highlighjs"===GLOBAL_CONFIG.highlight.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');if(o&&i.length){const o="prismjs"===GLOBAL_CONFIG.highlight.plugin;let c="",s="";const a=!0===n?"closed":"";void 0!==n&&(c=`<i class="fas fa-angle-down expand ${a}"></i>`),t&&(s='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>');const l=(t,e)=>{if(document.queryCommandSupported&&document.queryCommandSupported("copy"))if(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar)btf.snackbarShow(GLOBAL_CONFIG.copy.success);else{const t=e.previousElementSibling;t.innerText=GLOBAL_CONFIG.copy.success,t.style.opacity=1,setTimeout((()=>{t.style.opacity=0}),700)}else void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):e.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport},d=t=>{const e=t.parentNode;e.classList.add("copy-true");const n=window.getSelection(),i=document.createRange();o?i.selectNodeContents(e.querySelectorAll("pre code")[0]):i.selectNodeContents(e.querySelectorAll("table .code pre")[0]),n.removeAllRanges(),n.addRange(i);const c=n.toString();l(c,t.lastChild),n.removeAllRanges(),e.classList.remove("copy-true")},r=t=>{const e=[...t.parentNode.children].slice(1);t.firstChild.classList.toggle("closed"),btf.isHidden(e[0])?e.forEach((t=>{t.style.display="block"})):e.forEach((t=>{t.style.display="none"}))},u=function(t){const e=t.target.classList;e.contains("expand")?r(this):e.contains("copy-button")&&d(this)},m=()=>{const t=document.createElement("div");return t.className=`highlight-tools ${a}`,t.addEventListener("click",u),t};e?o?i.forEach((function(t){const e=`<div class="code-lang">${void 0!==t.getAttribute("data-language")?t.getAttribute("data-language"):"Code"}</div>`;btf.wrap(t,"figure","","highlight");const n=m();n.innerHTML=c+e+s,t.parentNode.insertBefore(n,t)})):i.forEach((function(t){let e=t.getAttribute("class").split(" ")[1];"plain"!==e&&void 0!==e||(e="Code");const n=`<div class="code-lang">${e}</div>`,o=m();o.innerHTML=c+n+s,t.insertBefore(o,t.firstChild)})):o?i.forEach((function(t){btf.wrap(t,"figure","","highlight");const e=m();e.innerHTML=c+s,t.parentNode.insertBefore(e,t)})):i.forEach((function(t){const e=m();e.innerHTML=c+s,t.insertBefore(e,t.firstChild)}))}}(),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach((function(t){const e=t.parentNode;if(!e.parentNode.classList.contains("justified-gallery")){const n=document.createElement("div");n.className="img-alt is-center",n.textContent=t.getAttribute("alt"),e.insertBefore(n,t.nextSibling)}})),(()=>{const t="fancybox"===GLOBAL_CONFIG.lightbox,e=t?document.querySelectorAll("#article-container :not(a):not(.gallery-group) > img, #article-container > img"):null,n=document.querySelectorAll("#article-container .justified-gallery"),o=n.length;(o||null!==e)&&btf.isJqueryLoad((()=>{o&&function(t){const e=$(t),n=e.find("img");n.unwrap(),n.length&&n.each((function(t,e){$(e).attr("data-lazy-src")&&$(e).attr("src",$(e).attr("data-lazy-src")),$(e).wrap("<div></div>")})),a?btf.initJustifiedGallery(e):($("head").append(`<link rel="stylesheet" type="text/css" href="${GLOBAL_CONFIG.source.justifiedGallery.css}">`),$.getScript(`${GLOBAL_CONFIG.source.justifiedGallery.js}`,(function(){btf.initJustifiedGallery(e)})),a=!0)}(n),t&&function(t){if(t.length){const e=t=>{t.each((function(t,e){const n=$(e),o=n.attr("data-lazy-src")||n.attr("src"),i=n.attr("alt")||"";n.wrap(`<a href="${o}" data-fancybox="group" data-caption="${i}" class="fancybox"></a>`)})),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})};void 0===$.fancybox?($("head").append(`<link rel="stylesheet" type="text/css" href="${GLOBAL_CONFIG.source.fancybox.css}">`),$.getScript(`${GLOBAL_CONFIG.source.fancybox.js}`,(function(){e($(t))}))):e($(t))}}(e)}))})(),"mediumZoom"===GLOBAL_CONFIG.lightbox&&(()=>{const t=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"));t.on("open",(e=>{const n="dark"===$(document.documentElement).attr("data-theme")?"#121212":"#fff";t.update({background:n})}))})(),function(){const t=document.getElementById("rightside"),e=window.innerHeight+56;if(document.body.scrollHeight<=e)return void(t.style.cssText="opacity: 1; transform: translateX(-38px)");let n=0,o=!0;const i=document.getElementById("nav"),c="function"==typeof chatBtnHide,s="function"==typeof chatBtnShow;window.addEventListener("scroll",btf.throttle((function(a){const l=window.scrollY||document.documentElement.scrollTop,d=function(t){const e=t>n;return n=t,e}(l);l>56?(d?(i.classList.contains("visible")&&i.classList.remove("visible"),s&&!0===o&&(chatBtnHide(),o=!1)):(i.classList.contains("visible")||i.classList.add("visible"),c&&!1===o&&(chatBtnShow(),o=!0)),i.classList.add("fixed"),"0"===window.getComputedStyle(t).getPropertyValue("opacity")&&(t.style.cssText="opacity: 1; transform: translateX(-38px)")):(0===l&&i.classList.remove("fixed","visible"),t.style.cssText="opacity: ''; transform: ''"),document.body.scrollHeight<=e&&(t.style.cssText="opacity: 1; transform: translateX(-38px)")}),200))}(),function(){const t=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table");t.length&&t.forEach((t=>{btf.wrap(t,"div","","table-wrap")}))}(),function(){const t=document.querySelectorAll("#article-container .hide-button");t.length&&t.forEach((function(t){t.addEventListener("click",(function(t){const e=this,n=e.nextElementSibling;e.classList.toggle("open"),e.classList.contains("open")&&n.querySelectorAll(".justified-gallery").length>0&&btf.initJustifiedGallery(n.querySelectorAll(".justified-gallery"))}))}))}(),document.querySelectorAll("#article-container .tab > button").forEach((function(t){t.addEventListener("click",(function(t){const e=this,n=e.parentNode;if(!n.classList.contains("active")){const t=n.parentNode.nextElementSibling;btf.siblings(n,".active")[0].classList.remove("active"),n.classList.add("active");const o=e.getAttribute("data-href").replace("#","");[...t.children].forEach((t=>{t.id===o?t.classList.add("active"):t.classList.remove("active")}));const i=t.querySelectorAll(`#${o} .justified-gallery`);i.length>0&&btf.initJustifiedGallery(i)}}))})),d(),function(){let t=!1;const e=document.querySelector("#comment-switch > .switch-btn");e&&e.addEventListener("click",(function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach((function(t){btf.isHidden(t)?t.style.cssText="display: block;animation: tabshow .5s":t.style.cssText="display: none;animation: ''"})),t||"function"!=typeof loadOtherComment||(t=!0,loadOtherComment())}))}()},refreshFn(),window.addEventListener("resize",s),document.querySelectorAll("#sidebar-menus .expand").forEach((function(t){t.addEventListener("click",(function(){this.classList.toggle("hide");const t=this.parentNode.nextElementSibling;btf.isHidden(t)?t.style.display="block":t.style.display="none"}))})),window.addEventListener("touchmove",(function(t){document.querySelectorAll("#nav .menus_item_child").forEach((t=>{btf.isHidden(t)||(t.style.display="none")}))})),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(()=>{const t=GLOBAL_CONFIG.copyright;document.body.oncopy=e=>{let n;e.preventDefault();const o=window.getSelection(0).toString();return n=o.length>t.limitCount?o+"\n\n\n"+t.languages.author+"\n"+t.languages.link+window.location.href+"\n"+t.languages.source+"\n"+t.languages.info:o,e.clipboardData?e.clipboardData.setData("text",n):window.clipboardData.setData("text",n)}})()}));