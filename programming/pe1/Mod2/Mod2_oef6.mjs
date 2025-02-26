import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let antw1 = 'Parijs';
let antw2 = 8;
let antw3 = 'Blauwe Vinvis' 
let antw4 = 'Shakespeare';

console.log('Welkom bij de quiz! Beantwoord de volgende 4 vragen, er wordt ook gelet op de spelling!')

let antwGebruiker1 = await userInput.question('Vraag 1: Wat is de hoofdstad van Frankrijk?' );

if (antwGebruiker1 != antw1) {
    console.log('Fout, het juiste antwoord is ' + antw1);
} else {
    console.log('Juist antwoord!');
}

let antwGebruiker2 = await userInput.question('Vraag 2: Hoeveel planeten zijn er in ons zonnestelsel? ')
if (antwGebruiker2 != antw2) {
    console.log('Fout, het juiste antwoord is ' + antw2)
}else{
    console.log('Juist antwoord!')
}

let antwGebruiker3 = await userInput.question('Vraag 3: Grootste zoogdier ter wereld? ')
if (antwGebruiker3 != antw3) {
    console.log('fout, het juiste antwoord is ' + antw3)
}else{
    console.log('Juist antwoord!')
}


let antwGebruiker4 = await userInput.question('Vraag 4: Wie heeft het stuk Romeo & Juliette geschreven? ')
if (antwGebruiker4 != antw4) {
    console.log('Fout, het juiste antwoord is ' + antw4)
}else{
    console.log('Juist antwoord!')
}


process.exit()