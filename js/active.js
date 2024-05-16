/* eslint-disable no-var */
(function () {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `https://analyzely.gropulse.com/get_script?shop=${Shopify.shop}`;
  document.getElementsByTagName("head")[0].appendChild(script);
})();
