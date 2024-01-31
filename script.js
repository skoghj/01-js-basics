//consol log//
let practice = "Her er en JavaScripts øvelse side";
console.log(practice);

const snaps = document.querySelector("#snaps");
const beer = document.querySelector("#beer");
const cola = document.querySelector("#cola");
const fanta = document.querySelector("#fanta");

snaps.addEventListener("click", checkAlcohol);
beer.addEventListener("click", checkAlcohol);
cola.addEventListener("click", checkAlcohol);
fanta.addEventListener("click", checkAlcohol);

function checkAlcohol() {
  if (this === snaps || this === beer) {
    console.log("Indeholder alkohol");
  } else if (this === cola || this === fanta) {
    console.log("Alkoholfri");
  }
}
