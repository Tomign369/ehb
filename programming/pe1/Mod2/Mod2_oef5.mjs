import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let som;
let verschil;
let product;
let quotient;

let getal1 = parseFloat(await userInput.question('Geef een eerste getal in '))
let getal2 = parseFloat(await userInput.question('Geef een tweede getal in '))

let berekening = await userInput.question('Maak een keuze uit: +, -, / of *: ')

if(berekening == '+'){
    som = getal1 + getal2;
    console.log('De uitkomst is:' + som);
}else if(berekening == '-'){
    verschil= getal1 - getal2;
    console.log('De uitkomst is:' + verschil);
}else if(berekening == '/'){
    quotient = getal1 / getal2;
    console.log('De uitkomst is:' + quotient);
}else if(berekening == '*'){
    product = getal1 * getal2;
    console.log('De uitkomst is: ' + product);
}else{
    console.log('ongeldige invoer')
}

process.exit()