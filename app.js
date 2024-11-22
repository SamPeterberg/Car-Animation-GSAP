var car = document.getElementById("car-img");
var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");
var start = document.getElementById("ready"); 
var run = document.getElementById("run");
let trafficLight = document.getElementById("trafic");

// function for moving car
function move() {
  trafficLight.src = "/assests/images/green light.png";
  yellow.style.visibility = "hidden";
  run.play();
  run.loop = true;
  gsap.fromTo(car, { x: -0 }, { x: 1300, duration: 4 }).repeat(Infinity);
}

// for yellow light
function ready() {
  trafficLight.src = "/assests/images/yellow light.png";
  start.play();
}

// for red
function toStop() {
    trafficLight.src = "/assests/images/red light.png";
  yellow.style.visibility = "visible";
  gsap.killTweensOf(car);
  run.pause();
}
