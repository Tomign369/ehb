import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let dagen;
let uren;
let minuten;
let seconden;

let dagenInput = parseFloat(await userInput.question('Geef het aantal dagen: '));
let urenInput = parseFloat(await userInput.question('Geef het aantal uren: '));
let minutenInput = parseFloat(await userInput.question('Geef het aantal minuten: '));
let secondenInput = parseFloat(await userInput.question('Geef het aantal seconden: '));

dagen = (((dagenInput * 24) * 60) *60);
uren = (urenInput * 60) * 60;
minuten = minutenInput * 60;
seconden= sendenInput;

let totaalAantalSec = dagen + uren + minuten + seconden

console.log('Aantal seconden: ' + totaalAantalSec)


process.exit()