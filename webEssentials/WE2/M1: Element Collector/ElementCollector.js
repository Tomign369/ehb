document.getElementById("maakRood").addEventListener("click", function () {
  let specialElements = document.getElementsByClassName("special");
  for (let i = 0; i < specialElements.length; i++) {
    specialElements[i].style.color = "red";
  }
});

document
  .getElementById("vindTweedeParagraaf")
  .addEventListener("click", function () {
    let tweedeParagraaf = document.getElementById("tweede");
    if (tweedeParagraaf) {
      tweedeParagraaf.style.textDecoration = "underline";
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  let aantalSpecial = document.getElementsByClassName("special").length;
  let outputDiv = (document.getElementById("output").innerHTML =
    "Aantal elementen met class 'special': " + aantalSpecial);
});
