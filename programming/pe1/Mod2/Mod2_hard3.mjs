import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maand = await userInput.question('Geef een maand in om te kijken hoeveel dagen er zijn: ')
let invoerJaar = parseFloat(await userInput.question('Geef een jaartal in om te bekijken of het een schrikkeljaar was: '))
let aantaldagen;
let schrikkeljaar = (invoerJaar % 4 == 0 && invoerJaar % 100 != 0) || (invoerJaar % 400 == 0)

if(schrikkeljaar && maand == 'februari'){
        console.log('aantal dagen in '+ maand + ' zijn 29.')
    }else{
        switch(maand){
            case'januari':
            case'maart':
            case'mei':
            case'juli':
            case'augustus':
            case'oktober':
            case'december':
                aantaldagen = '31'
                console.log('De maand ' + maand + ' heeft ' + aantaldagen + ' dagen.')
                break;

            case'april':
            case'juni':
            case'september':
            case'november':
                aantaldagen = '30'
                console.log('De maand ' + maand + ' heeft ' + aantaldagen + ' dagen.')
                break;
            case'februari':
                console.log('de maand ' + maand + ' heeft 28 dagen.')
                break;
            
            default:
                console.log('Ongeldige keuze.')
                break
        }
    }
process.exit()