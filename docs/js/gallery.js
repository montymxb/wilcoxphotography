(function() {
  if(window.openFullImg) {
    throw new "openFullImg already defined in this context!";
  }

  window.openFullImg = function(id) {

    let overlay = document.getElementById("overlay");
    let overlayImg = document.getElementById("overlay-img");

    if(!overlay || !overlayImg) {
      // create new overlay first
      let overlay = "<div id='overlay' class='' onclick='hideOverlay();'>";
      overlay += "<img id='overlay-img' src='" + id + "'>";
      overlay += "<input type='button' onclick='hideOverlay();' value='Close'>";
      overlay += "</div>";
      let body = document.getElementsByTagName("body")[0];
      body.insertAdjacentHTML('afterbegin', overlay);

      overlay = document.getElementById("overlay");
      overlayImg = document.getElementById("overlay-img");

      // sketchy js
      overlayImg.src = id;
      overlay.className = ""; // no-hide

    } else {
      // sketchy js
      overlayImg.src = id;
      overlay.className = ""; // no-hide

    }
  }

  window.hideOverlay = function() {
    let overlay = document.getElementById("overlay");
    let overlayImg = document.getElementById("overlay-img");

    overlay.className = "hidden";
    overlayImg.src = "";
  }

})();
