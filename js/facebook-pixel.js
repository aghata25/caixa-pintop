(()=>{"use strict";var t,n,e=function(t,n,e,o){fetch("https://events.adtrace.ai/event",{method:"POST",headers:{"Content-Type":"application/json","Shopify-Domain":window.Shopify.shop,"User-Agent":navigator.userAgent},body:JSON.stringify({event_id:t,event_name:n,contents:Array.isArray(e)?e:[e],currency:o,event_context:{page:{url:window.location.href,referrer:document.referrer}},cookie:document.cookie})}).catch((function(t){console.error(t)}))},o=function(t){return t.includes(",")&&(t=","===t[t.length-3]?t.replace(".","").replace(",","."):t.replace(",","")),t},c=function(){var t=(new Date).getTime(),n=performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var o=16*Math.random();return t>0?(o=(t+o)%16|0,t=Math.floor(t/16)):(o=(n+o)%16|0,n=Math.floor(n/16)),("x"==e?o:7&o|8).toString(16)}))},r=function(t){var n=(new DOMParser).parseFromString(t,"text/html"),e=["b","i","em","strong","a","p","br","ul","ol","li"],o=["href","target"],c=function t(n){if(1===n.nodeType){if(!e.includes(n.tagName.toLowerCase()))return void n.parentNode.removeChild(n);Array.from(n.attributes).forEach((function(t){o.includes(t.name.toLowerCase())||n.removeAttribute(t.name)}))}Array.from(n.childNodes).forEach((function(n){t(n)}))};return Array.from(n.body.childNodes).forEach((function(t){c(t)})),n.body.innerHTML},a=function(t){return t.startsWith("//cdn.shopify.com")?"https:"+t:""},i=function(t){var n,e,o,c,r,a;document.querySelector('[id="'.concat(t,'"]'))||(n=window,e=document,o="script",n.fbq||(c=n.fbq=function(){c.callMethod?c.callMethod.apply(c,arguments):c.queue.push(arguments)},n._fbq||(n._fbq=c),c.push=c,c.loaded=!0,c.version="2.0",c.queue=[],(r=e.createElement(o)).async=!0,r.src="https://connect.facebook.net/en_US/fbevents.js",(a=e.getElementsByTagName(o)[0]).parentNode.insertBefore(r,a)),document.querySelectorAll("[data-adtfp]").forEach((function(t){fbq("init",t.dataset.adtfp)})))},d="apps/rsi-cod-form-do-not-change/create-order",u=function(){fbq&&fbq("track","PageView")},f=function(t,n,i,d){switch(t){case"ViewContent":!function(t,n,i){var d,u,f=c(),s=t.id,p=t.name,l=t.description,_=t.image,w=t.price,m={content_ids:s,content_name:p,content_type:"product",currency:n,value:o(w)};if(d=f,u=m,(fbq||window.fbq)&&fbq("track","ViewContent",u,{eventID:d}),i){var h={content_id:s,content_name:p,content_type:"product",content_description:r(l),content_image:a(_),price:o(w)};e(f,"ViewContent",h,n)}}(n,i,d);break;case"AddToCart":!function(t,n,i){var d,u,f=c(),s=t.id,p=t.name,l=t.description,_=t.image,w=t.price,m={content_ids:s,content_name:p,content_type:"product",currency:n,value:o(w)};if(d=f,u=m,(fbq||window.fbq)&&fbq("track","AddToCart",u,{eventID:d}),i){var h={content_id:s,content_name:p,content_type:"product",content_description:r(l),content_image:a(_),price:o(w)};e(f,"AddToCart",h,n)}}(n,i,d);break;case"InitiateCheckout":!function(t,n,i){var d,u,f=c(),s=t.id,p=t.name,l=t.description,_=t.image,w=t.price,m={contents:[{id:s,quantity:1,item_price:o(w)}],currency:n,value:o(w),content_type:"product",num_items:1};if(d=f,u=m,(fbq||window.fbq)&&fbq("track","InitiateCheckout",u,{eventID:d}),i){var h={content_id:s,content_name:p,content_type:"product",content_description:r(l),content_image:a(_),price:o(w)};e(f,"InitiateCheckout",h,n)}}(n,i,d);break;case"CompletePayment":!function(t,n,i){var d,u,f=c(),s=t.id,p=t.name,l=t.description,_=t.image,w=t.price,m={contents:[{id:s,quantity:1,item_price:o(w)}],currency:n,value:o(w),content_type:"product",num_items:1};if(d=f,u=m,(fbq||window.fbq)&&fbq("track","Purchase",u,{eventID:d}),i){var h={content_id:s,content_name:p,content_type:"product",content_description:r(l),content_image:a(_),price:o(w)};e(f,"CompletePayment",h,n)}}(n,i,d)}};!function(t){t.ADT_CSIR="_adt__csir",t.ADT_CSIH="_adt__csih",t.ADT_TTCLID="_adt__ttclid",t.ADT_FBC="_adt__fbc",t.ADT_SCCID="_adt__sccid",t.ADT_GCLID="_adt__gclid"}(t||(t={})),function(t){t.TTP="_ttp",t.FBP="_fbp",t.FBC="_fbc",t.GA="_ga",t.GID="_gid",t.SCID="_scid",t.GCLID="_gclid",t.TTCLID="_ttclid"}(n||(n={}));var s=function(t){for(var n=encodeURIComponent(t)+"=",e=document.cookie.split("; "),o=0;o<e.length;o++){var c=e[o];if(0===c.indexOf(n))return decodeURIComponent(c.substring(n.length))}return null},p=function(t){document.cookie=t},l=function(){var n=document.referrer,e=window.location.href,o=window.location.search;!function(n){if(!s(t.ADT_CSIR)){var e=new Date(Date.now()+36e5).toUTCString();p("".concat(t.ADT_CSIR,"=").concat(decodeURIComponent(n),"; expires=").concat(e,"; path=/"))}}(n),function(n){if(!s(t.ADT_CSIH)){var e=new Date(Date.now()+36e5).toUTCString();p("".concat(t.ADT_CSIH,"=").concat(decodeURIComponent(n),"; expires=").concat(e,"; path=/"))}}(e),function(n,e){var o=s(t.ADT_FBC);if(console.log("adtFbc",o),!o){var c=function(t,n){var e=new URLSearchParams(t).get("fbclid");if(e){var o=new URL(n).hostname.split(".").length-1,c=(new Date).getTime();return"".concat("fb",".").concat(o,".").concat(c,".").concat(e)}}(n,e);if(console.log("fbc",c),c){var r=new Date(Date.now()+36e5).toUTCString();p("".concat(t.ADT_FBC,"=").concat(c,"; expires=").concat(r,"; path=/"))}}}(o,e),function(n){if(!s(t.ADT_SCCID)){var e=function(t){return new URLSearchParams(t).get("ScCid")||null}(n);if(e){var o=new Date(Date.now()+36e5).toUTCString();p("".concat(t.ADT_SCCID,"=").concat(e,"; expires=").concat(o,"; path=/"))}}}(o),function(n){if(!s(t.ADT_GCLID)){var e=function(t){return new URLSearchParams(t).get("gclid")||null}(n);if(e){var o=new Date(Date.now()+36e5).toUTCString();p("".concat(t.ADT_GCLID,"=").concat(e,"; expires=").concat(o,"; path=/"))}}}(o),function(n){if(!s(t.ADT_TTCLID)){var e=function(t){var n=new URLSearchParams(t);return console.log("urlParams",n),n.get("ttclid")||null}(n);if(e){var o=new Date(Date.now()+36e5).toUTCString();p("".concat(t.ADT_TTCLID,"=").concat(e,"\nexpires=").concat(o,"\npath=/"))}}}(o)},_=function(t,n,e){!function(t,n,e){document.querySelectorAll("#_rsi-buy-now-button").forEach((function(o){o.addEventListener("click",(function(){f("InitiateCheckout",t,n,e)}))}))}(t,n,e),function(t,n,e){var o=window.fetch;window.fetch=function(c){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o.call(window,c,r).then((function(o){if("string"==typeof c&&c.includes(d))try{f("CompletePayment",t,n,e)}catch(t){console.log(t)}return o}))}}(t,n,e),function(t,n,e){var o=window.XMLHttpRequest.prototype.send;window.XMLHttpRequest.prototype.send=function(){var c=this;this.addEventListener("load",(function(){if(c._url&&"string"==typeof c._url&&c._url.includes(d))try{f("CompletePayment",t,n,e)}catch(t){console.log(t)}}));for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return o.apply(this,a)}}(t,n,e)},w=function(t,n,e){window.adtTrackAjax=!0,function(t,n,e){document.querySelectorAll('[action="/cart/add"]').forEach((function(o){o.addEventListener("submit",(function(){f("AddToCart",t,n,e),window.adtTrackAjax=!1}))}))}(t,n,e),function(t,n,e){var o=window.fetch;window.fetch=function(c){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o.call(window,c,r).then((function(o){if(window.adtTrackAjax&&"string"==typeof c&&c.includes("/cart/add"))try{f("AddToCart",t,n,e)}catch(t){console.log(t)}return o}))}}(t,n,e),function(t,n,e){var o=window.XMLHttpRequest.prototype.send;window.XMLHttpRequest.prototype.send=function(){var c=this;this.addEventListener("load",(function(){if(window.adtTrackAjax&&c._url&&"string"==typeof c._url&&c._url.includes("/cart/add"))try{f("AddToCart",t,n,e)}catch(t){console.log(t)}}));for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return o.apply(this,a)}}(t,n,e)};function m(){var t=window,n=t.__adTraceIsProductPage,e=t.__adTraceProductInfo,o=t.__adTraceShopCurrency,c=t.__adTraceIsRsi,r=0===window.adt_apps.indexOf("facebook");i(),l(),u(),n&&f("ViewContent",e,o,r),c?_(e,o,r):w(e,o,r)}window&&!window.__adTraceFacebookPaused&&(window.adt_apps=window.adt_apps||[],window.adt_apps.push("facebook"),window.__adTraceIsRsi="undefined"!=typeof _rsi,"loading"===document.readyState?window.addEventListener("DOMContentLoaded",m):m())})();