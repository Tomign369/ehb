import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Geef een getal in: '));

if(getal1 % 2 == 0){
    console.log('Dit is een even getal')
}
else{
    console.log('Dit is een oneven getal.')
}

process.exit()