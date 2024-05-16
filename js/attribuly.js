(function (window, document) {
  "use strict";

  if (isSpider()) return false;

  var isInitialized = false;

  var MutationObserver =
    window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver;

  window.addEventListener(
    "load",
    function () {
      if (!isInitialized) {
        initializeTrack();
      }
    },
    false
  );

  document.addEventListener(
    "readystatechange",
    function () {
      if (
        document.readyState === "loaded" ||
        document.readyState === "complete"
      ) {
        if (!isInitialized) {
          initializeTrack();
        }
      }
    },
    false
  );

  document.addEventListener(
    "DOMContentLoaded",
    function () {
      if (!isInitialized) {
        initializeTrack();
      }
    },
    false
  );

  window.addEventListener(
    "pageshow",
    function () {
      if (!isInitialized) {
        initializeTrack();
      }
    },
    false
  );

  if (
    document.readyState === "complete" ||
    document.readyState === "loaded" ||
    document.readyState === "interactive"
  ) {
    if (!isInitialized) {
      initializeTrack();
    }
  }

  function getReferrer() {
    var referrer = document.referrer;
    if (!referrer || referrer.trim() == "undefined") {
      referrer = "";
    }
    return referrer;
  }

  var isEdge = document.documentMode || /Edge/.test(navigator.userAgent);


  var currentInput = null;

  function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
    setCookie(key, value, 1, "/", getDomain(), true, "None");
  }

  function getLocalStorage(key) {
    var value = localStorage.getItem(key);
    if (value == null) {
      value = decodeURIComponent(getCookie(key));
    }
    return value;
  }

  function getDomain() {
    var host = location.host.split(".").reverse();
    return "." + host[1] + "." + host[0];
  }

  var submittedForms = [];
  function bindFormListener() {
    try {
      var formSubmitHandler = function (event) {
        var form = event.target;
        while (form.tagName.toLowerCase() != "form") {
          form = form.parentNode;
          if (!form) {
            return;
          }
        }
        
        if (submittedForms.indexOf(form.id) >= 0) {
          return;
        }

        var email = null;
        var inputs = form.getElementsByTagName("input");
        for (var j = 0; j < inputs.length; j++) {
          var input = inputs[j];
          if (input.type == "email" || input.type == "text" || input.type == "hidden") {
            email = input.value.trim();
            if (isValidInput(email)) {
              submittedForms.push(form.id);
              triggerEvent("lead-form", null, email);
              break;
            } 
          }
        }
      }

      var forms = document.getElementsByTagName("form");
      for (var i = 0; i < forms.length; i++) {
        var form = forms[i];
        var formButtons = form.getElementsByTagName("button");
        var formInputs = form.getElementsByTagName("input");

        [formButtons, formInputs].forEach(function (inputs) {
          for (var j = 0; j < inputs.length; j++) {
            var input = inputs[j];
            if (input.type == "submit") {
              if (input.addEventListener) {
                input.removeEventListener("click", formSubmitHandler, false);
                input.addEventListener("click", formSubmitHandler, false);
              } else if (input.attachEvent) {
                input.attachEvent("click", formSubmitHandler);
              } else {
                input.onclick = formSubmitHandler;
              }
            }
          }
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  var can_bind = true;
  function bindListener() {
    if (!can_bind) {
      return
    }
    can_bind = false;
    bindInputListener();
    bindFormListener();
    setTimeout(function () {
      can_bind = true;
    }, 1500);
  }

  function bindInputListener() {
    try {
      var inputs = document.getElementsByTagName("input");
      var inputChangeHandler = function (event) {
        if (isValidInput(event.target.value.trim())) {
          currentInput = event.target;
          track();
        }
      };

      for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (
          input.type == "text" ||
          input.type == "email" ||
          input.type == "hidden"
        ) {
          if (input.addEventListener) {
            input.removeEventListener("input", inputChangeHandler, false);
            input.addEventListener("input", inputChangeHandler, false);
            input.removeEventListener(
              "propertychange",
              inputChangeHandler,
              false
            );
            input.addEventListener("propertychange", inputChangeHandler, false);
            input.removeEventListener("change", inputChangeHandler, false);
            input.addEventListener("change", inputChangeHandler, false);
          } else if (input.attachEvent) {
            input.attachEvent("input", inputChangeHandler);
            input.attachEvent("propertychange", inputChangeHandler);
            input.attachEvent("change", inputChangeHandler);
          } else {
            if (isEdge) {
              window.oninput = null;
              window.onpropertychange = null;
              window.onchange = null;
            }
            input.oninput = inputChangeHandler;
            input.onpropertychange = inputChangeHandler;
            input.onchange = inputChangeHandler;
          }

          if (isValidInput(input.value)) {
            currentInput = input;
            track();
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  function isValidInput(input) {
    if (input == null || input == "") {
      return false;
    }

    var regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

    return regex.test(input);
  }

  function track() {
    try {
      if (
        !currentInput ||
        !currentInput.value ||
        currentInput.value.trim() == ""
      )
        return;

      var cookieKey = "_attribuly_tr";
      var device = getLocalStorage(cookieKey);

      if (
        !device ||
        device == "null" ||
        device == "undefined" ||
        (device + "").trim().length < 16
      ) {
        return;
      }

      var emailCookieKey = "attribuly_emails_" + device;
      var emailCookieValue = getLocalStorage(emailCookieKey);
      if (emailCookieValue) {
        emailCookieValue = decodeURIComponent(emailCookieValue);
        emailCookieValue = emailCookieValue.split(",");
        if (emailCookieValue.indexOf(currentInput.value) >= 0) {
          return;
        }
      } else {
        emailCookieValue = [];
      }

      var email = currentInput.value.trim();
      if (!email) {
        return;
      }
      emailCookieValue.push(email);
      setLocalStorage(emailCookieKey, emailCookieValue.join(","));

      triggerEvent("lead", null, email);
    } catch (error) {
      console.log(error);
    }
  }

  function triggerEvent(event_name, data, custom_data, srouce_type) {
    try {
      var cookieKey = "_attribuly_tr";
      var device = getLocalStorage(cookieKey);

      if (
        !device ||
        device == "null" ||
        device == "undefined" ||
        (device + "").trim().length < 16
      ) {
        return;
      }

      var id = generateUUID();
      var trackData = {
        track_id: device,
        timezone: new Date().getTimezoneOffset(),
        event: {
          clientId: device,
          id: "at-" + id,
          name: event_name,
          timestamp: new Date().getTime(),
          context: {
            navigator: {
              userAgent: navigator.userAgent,
              language: navigator.language,
              cookieEnabled: navigator.cookieEnabled,
            },
            window: {
              location: {
                href: location.href,
              },
            },
            document: {
              referrer: getReferrer(),
              title: document.title,
              location: {
                href: location.href,
              },
            },
          },
          data: data,
          customData: custom_data,
        },
      };

      if (srouce_type) {
        trackData.source_type = srouce_type;
      }

      sendData(trackData);
    } catch (error) {
      console.log(error);
    }
  }

  function sendData(data) {
    try {
      var trackReportUrl = "https://tr.attribuly.com/v3-2/HfOsCTL6nWvo6IsBtiEidVYNV8q6YxNx/event";

      var xhr;
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
      xhr.open("POST", trackReportUrl, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }

  function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
  }

  


  

  function initializeTrack() {
    if (isInitialized) {
      return;
    }

    try {
      isInitialized = true;

      

      

      bindListener();
      setTimeout(bindListener, 1000);
      setTimeout(bindListener, 2000);
      if (isEdge) {
        setTimeout(bindListener, 3000);
      }

      var observer = new MutationObserver(function () {
        bindListener();
      });

      observer.observe(document.querySelector("body"), {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true,
      });

      if (!isEdge) {
        var body = document.getElementsByTagName("body")[0];
        body.addEventListener("keydown", function () {
          bindListener();
        });
        body.addEventListener("mousemove", function () {
          bindListener();
        });
      }

      body.addEventListener("mousedown", function () {
        bindListener();
      });
    } catch (error) {
      console.log(error);
    }
  }

  function getCookie(name) {
    var cookieName = encodeURIComponent(name) + "=";
    var cookieArray = document.cookie.split(";");
    for (var i = 0; i < cookieArray.length; i++) {
      var cookie = cookieArray[i];
      while (cookie.charAt(0) == " ") {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(cookieName) == 0) {
        return encodeURIComponent(
          cookie.substring(cookieName.length, cookie.length)
        );
      }
    }
    return null;
  }

  function setCookie(name, value, expiration, path, domain, secure, same_site) {
    var currentDate = new Date();
    currentDate.setTime(currentDate.getTime());
    if (expiration) {
      expiration = expiration * 1000 * 60 * 60 * 24;
    }
    var expiryDate = new Date(currentDate.getTime() + expiration);
    document.cookie =
      encodeURIComponent(name) +
      "=" +
      encodeURIComponent(value) +
      (expiration ? "; expires=" + expiryDate.toGMTString() : "") +
      (path ? "; path=" + path : "") +
      (domain ? "; domain=" + domain : "") +
      (same_site ? "; SameSite=" + same_site : "") +
      (secure ? "; Secure" : "");
  }

  function isSpider() {
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf("bot") >= 0 || userAgent.indexOf("spider") >= 0) {
      return true;
    }
    return false;
  }
})(window, document);

