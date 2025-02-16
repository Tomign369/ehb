// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let getal0;
let getal1;
let som;

getal0 = parseFloat(await userInput.question('geef een getal: '))
getal1 = parseFloat(await userInput.question('geef een ander getal: '))
som = getal0 + getal1

console.log('som: ' + som)

process.exit();
