import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maand = await userInput.question('Geef een maand in om te kijken hoeveel dagen er zijn: ')
let aantaldagen;

switch(maand){
    case'januari':
    case'Maart':
    case'mei':
    case'juli':
    case'augustus':
    case'oktober':
    case'december':
    aantaldagen = '31'
    console.log('De maand ' + maand + ' heeft ' + aantaldagen + ' dagen.')
    break
}
switch(maand){
    case'februari':
    case'april':
    case'juni':
    case'september':
    case'november':
    aantaldagen = '30'
    console.log('De maand ' + maand + ' heeft ' + aantaldagen + ' dagen.')
    break
}
process.exit()