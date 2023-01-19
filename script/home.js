var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-one").style.top = "0px";
  } else {
    document.getElementById("navbar-one").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
};

var prevScrollheight = window.pageYOffset;
window.onscroll = function () {
  var currentScrollheight = window.pageYOffset;
  if (prevScrollheight > currentScrollheight) {
    document.getElementById("navbar-two").style.top = "42px";
  } else {
    document.getElementById("navbar-two").style.top = "0";
  }
  prevScrollheight = currentScrollheight;
};
// var prev = window.pageYOffset;
// window.onscroll = function () {
//   var current = window.pageYOffset;
//   if (prev > current) {
//     document.getElementById("navbar-three").classList.add = "kucchbhi";
//   } else {
//     document.getElementById("navbar-three").classList.remove = "kucchbhi";
//   }
//   prev = current;
};
