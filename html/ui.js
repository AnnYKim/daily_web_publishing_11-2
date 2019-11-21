

// var nav = document.querySelector("#testMouse");
// var navMenu = document.querySelector(".nav-menu");
// var menu = document.querySelector("#testMenu");
// var tester = document.querySelector("#tester");


// // function mouseEnterEvt(e) {
// //   // console.log(e);
// //   // var x = e.offsetX;
// //   // menu.style.transform = `translateX(${x - 60}px)`;
// //   // e.stopPropagation();
// //   navMenu.addEventListener("mousemove", mouseMoveEvt)

// // }
// // function mouseMoveEvt(e) {
// //   console.log(e);
// // }
// // menu.addEventListener("mouseenter", mouseEnterEvt);



// function mouseMove(e) {
//   var x = e.offsetX - 90;
//   var y = 0;
//   // console.dir(e);
//   tester.innerHTML = e.offsetX;
//   menu.style.transform = "translate3d(" + x + "px," + y + "px,0)";
//   e.stopPropagation();
// }

// function mouseLeave(e) {
//   var x = 0;
//   var y = 0;
//   menu.style.transform = "translate3d(" + x + "px," + y + "px,0)";
// }

// function stopPropa(e) {
//   console.log("!");
//   e.stopPropagation();
// }

// // navMenu.addEventListener("mouseout", mouseLeave)
// navMenu.addEventListener("mousemove", mouseMove);
// // menu.addEventListener("mouseenter", function (e) {
// //   console.log("!");
// //   e.stopPropagation();
// // })
// // menu.addEventListener("mouseon", function (e) {
// //   console.log("!");
// //   e.stopPropagation();
// // })
// // menu.addEventListener("mousedown", function (e) {
// //   console.log("!");
// //   e.stopPropagation();
// // })
// // menu.addEventListener("mousemove", function (e) {
// //   console.log("!");
// //   e.stopPropagation();
// // })

function nthParent(element, n) {
  while (n-- && element)
    element = element.parentNode;
  return element;
}

var btnBurger = document.querySelector(".btn-burger");
var menuClickHandler = function (e) {
  nthParent(e.target, 6).classList.toggle("-open");
}

btnBurger.addEventListener("click", menuClickHandler);