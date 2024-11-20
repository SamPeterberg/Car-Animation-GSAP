var car = document.getElementById("car-img");
var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");
var start = document.getElementById("ready");
var run = document.getElementById("run");

// function for moving car
function move() {
  green.style.backgroundColor = "rgb(33, 255, 81)";
  yellow.style.visibility = "hidden";
  red.style.backgroundColor = "transparent";
  run.play();
  run.loop = true;
  gsap.fromTo(car, { x: 50 }, { x: -1500, duration: 5 }).repeat(Infinity);
}

// for yellow light
function ready() {
  yellow.style.backgroundColor = "rgb(251, 255, 2)";
  green.style.backgroundColor = "transparent";
  red.style.backgroundColor = "transparent";
  start.play();
}

// for red
function toStop() {
  red.style.backgroundColor = "rgb(255, 67, 67)";
  yellow.style.visibility = "visible";
  yellow.style.backgroundColor = "transparent";
  green.style.backgroundColor = "transparent";
  gsap.killTweensOf(car);
  run.pause();
}
