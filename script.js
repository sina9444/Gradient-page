var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");
var h3 = document.getElementById("h3")

color1.addEventListener("input", function() {
  bgColor();
});
color2.addEventListener("input", function() {
    bgColor();
  });
function bgColor() {
  body.style.background =
    "linear-gradient(to right ," + color1.value + "," + color2.value + ")";
    h3.textContent = body.style.background+";";

}








