
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.1e01fb328fb0ac950430.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/22.baseline.en.477693d988b5db50f06f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/532.baseline.en.29b88d88d919c8564d06.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/681.baseline.en.81139b700fc4d1b34b42.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.beed3b103e68ebab5a27.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/751.baseline.en.3248b1ea37c8c8287656.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/836.baseline.en.169656e5d081435fb60c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2.baseline.en.bf82a627ce668b15a8d6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/100.baseline.en.aaf5a5941b77953f0095.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.en.bfd5149d085a889eea48.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/22.baseline.en.aa3f26f6d20efd5b4320.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.f79e630f70b79519e81e.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/836.baseline.en.d9dea636e91db7e4b650.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.baseline.en.995d700f07ac3adfd4f7.css"];
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
  