import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log('Kies een artiest: ');
console.log('1. Queen');
console.log('2. Prince');
console.log('3. The Cure');
console.log('4. The XX');

let keuzeGebruiker = parseFloat(await userInput.question('Geef je keuze: '));

switch(keuzeGebruiker){
    case 1:
        console.log('Je hebt gekozen voor Queen.');
        console.log('Zij zijn de artiesten achter de hit: We will rock you');
        break;

    case 2:
        console.log('Je hebt gekozen voor Price.');
        console.log('Hij is de artiest achter de hit: Purple rain');
        break;

    case 3:
        console.log('Je hebt gekozen voor The Cure.');
        console.log('Zij zijn de artiesten achter de hit: a Forest');
        break;

    case 4:
        console.log('Je hebt gekozen voor The XX')
        console.log('Zij zijn de artiesten achter de hit: Intro');
        break;
    
    default:
        console.log('Ongeldige keuze.')
}

process.exit()