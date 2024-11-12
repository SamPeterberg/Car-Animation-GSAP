var car = document.getElementById("car-img");
var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");

function move() {
  gsap
    .fromTo(car, { x: -10 }, { x: -1400, ease: "none", duration: 6 })
    .repeat(Infinity);
  //   gsap.to(car, { x: -1400, duration: 5, ease: "none" }).repeat(Infinity);
}
