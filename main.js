function init() {
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 53,
        nav = document.querySelector("nav");
    if (distanceY > shrinkOn) {
      nav.setAttribute("class","white smaller z-depth-0");
    } else {
        nav.removeAttribute("class");
        nav.setAttribute("class","white z-depth-0");
    }
  });
}
window.onload = init();