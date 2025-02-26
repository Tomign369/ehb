let naam = prompt("Wat is je naam?");
alert(`Welkom, ${naam}! Laten we beginnen met de quiz.`);

let score = 0;

function checkAntwoord(vraag, correctAntwoorden) {
  let antwoord = prompt(vraag).trim().toLowerCase();
  if (correctAntwoorden.includes(antwoord)) {
    alert("Goedzo!");
    score++;
  } else {
    alert(`Fout! Het juiste antwoord is: ${correctAntwoorden[0]}`);
  }
}

checkAntwoord("In welke taal wordt dit script geschreven?", [
  "javascript",
  "js",
]);

checkAntwoord("Met welke taal maak je de semantiek op?", ["html"]);

checkAntwoord("Met welke taal wordt dit opgemaakt?", ["css"]);

alert(`Je score is: ${score}/3. Goed gedaan, ${naam}!`);
