(function () {
  try {
    var f = document.createElement("iframe");
    f.src =
      "https://forms.zohopublic.com/michael828inoc/form/Garbage/formperma/n-OFJ9x7goE0He84GUmqLKohvIlog9ZA6iIOKXC5NNs?zf_rszfm=1";
    f.style.border = "none";
    f.style.minHeight = "100vh";
    f.style.width = "100%";
    f.style.transition = "all 0.5s ease"; // No I18N
    var d = document.getElementById("form");
    d.appendChild(f);
    window.addEventListener(
      "message",
      function () {
        var zf_ifrm_data = event.data.split("|");
        var zf_perma = zf_ifrm_data[0];
        var zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + "px";
        var iframe = document
          .getElementById("form")
          .getElementsByTagName("iframe")[0];
        if (
          iframe.src.indexOf("formperma") > 0 &&
          iframe.src.indexOf(zf_perma) > 0
        ) {
          var prevIframeHeight = iframe.style.height;
          if (prevIframeHeight != zf_ifrm_ht_nw) {
            iframe.style.height = zf_ifrm_ht_nw;
          }
        }
      },
      false
    );
  } catch (e) {}
})();
