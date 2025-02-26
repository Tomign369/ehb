import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Geef een eerste getal in: '))
let getal2 = parseFloat(await userInput.question('Geef een tweede getal in: '))
let getal3 = parseFloat(await userInput.question('Geef een derde getal in: '))
let getal4 = parseFloat(await userInput.question('Geef een vierde getal in: '))
let getal5 = parseFloat(await userInput.question('Geef een vijfde getal in: '))

let maximum = Math.max(getal1,getal2,getal3,getal4,getal5)
let minimum = Math.min(getal1,getal2,getal3,getal4,getal5)
let avarage = (getal1 + getal2 + getal3 + getal4 + getal5) / 5

console.log('maximum: ' + maximum)
console.log('minimum: ' + minimum)
console.log('gemiddelde: ' + avarage)

process.exit()