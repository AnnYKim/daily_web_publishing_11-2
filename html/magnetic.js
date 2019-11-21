
// var nav = document.querySelector(".nav");
// var menuArea = document.querySelector("#menu1");
// var menulink = document.querySelector("#menu-link");

var menu = document.querySelector("#testMenu");

// var tester = document.querySelector("#tester");



function move(e) {
  var a = menu.getBoundingClientRect();
  var b = e.pageX - a.left;
  var c = e.pageY - a.top;

  var x = b - (a.width / 2);
  var y = c - (a.height / 2) - window.pageYOffset;
  var movement = 70;

  TweenMax.to(menu, 0.3, {
    x: x / a.width * movement,
    y: y / a.width * movement,
    ease: Power2.easeOut
  });
}



menu.addEventListener("mousemove", function (e) {
  move(e);
});


menu.addEventListener("mouseleave", function (e) {
  TweenMax.to(menu, 0.5, {
    x: 0,
    y: 0,
    ease: Power2.easeOut
  });
});