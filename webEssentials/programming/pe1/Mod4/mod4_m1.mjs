import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
/* 
We maken een halve pyrmide met getallen, de getallen vertegenwoordigen de rijnummers. De hoogte wordt gevraagd aan de gebruiker.
*/

let hoogte = parseFloat(await userInput.question('geef de hoogte: '))

for(let i = 1;i <= hoogte; i++){
    let stringP = ''
    for(let j = 1; j <= i; j++)
        stringP +=i
        console.log(stringP)
}


process.exit()