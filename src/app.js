/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const suites = ["♦", "♥", "♠", "♣"];
const numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
window.reSize = function reSize() {
  console.log("Hola redimention");
  let setWith = document.getElementById("width").value;
  let setHeight = document.getElementById("height").value;
  document.getElementById("myCard").style.width = setWith + "px";
  document.getElementById("myCard").style.height = setHeight + "px";
};
function randomCard() {
  let suitGenerator = suites[Math.floor(Math.random() * suites.length)];
  document.getElementById("suit").textContent = suitGenerator;
  document.getElementById("suitInverted").textContent = suitGenerator;
  if (suitGenerator === "♥" || suitGenerator === "♦") {
    document.getElementById("suit").style.color = "red";
    document.getElementById("suitInverted").style.color = "red";
  }
  document.getElementById("number").textContent =
    numbers[Math.floor(Math.random() * numbers.length)];
}
setInterval(randomCard, 3000);
