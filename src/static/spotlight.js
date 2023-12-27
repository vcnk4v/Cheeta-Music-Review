function bigImg(x) {
  x.style.transition = "all 0.3s ease";
  x.style.opacity = "50%";
  x.insertAdjacentHTML(
    "afterend",
    '<div class="artist-text">Post Malone</div>'
  );
}

function normalImg(x) {
  x.style.opacity = "100%";
  x.nextSibling.remove();
}

window.addEventListener("load", function () {
  var image = document.getElementById("my-image");
  var currentWidth = 700;
  var targetWidth = 500;
  var transitionTime = 3000; // 4 seconds

  image.style.width = currentWidth + "px"; // set initial size to 700x700

  var startTime = performance.now();

  function animate() {
    var elapsed = performance.now() - startTime;
    var progress = Math.min(elapsed / transitionTime, 1); // ensure progress is between 0 and 1
    var newWidth = currentWidth + (targetWidth - currentWidth) * progress; // interpolate between current and target widths
    image.style.width = newWidth + "px";

    if (progress < 1) {
      requestAnimationFrame(animate); // continue animating
    }
  }

  requestAnimationFrame(animate); // start the animation
});
