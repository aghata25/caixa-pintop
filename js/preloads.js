
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.d709fad0fd8d815223a3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/893.latest.en.05c0bf0970f8edc86870.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/204.latest.en.d2c543d435a51d189957.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/891.latest.en.051286e30b2bab5510b4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.cd4859ec1565a9e76466.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/977.latest.en.e1a0ded7d00403072415.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/535.latest.en.279632d5b190d715dfcc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/307.latest.en.85d320635fdc7a8792cd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.7d25e90855001c5bfab3.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/893.latest.en.c2dc1f07062250e60370.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.488c8cb223eba58f78de.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.latest.en.486259ea242ae985c66f.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  