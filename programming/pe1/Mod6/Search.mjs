import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let namenlst = ['Jacob', 'Stan', 'Luc', 'Raf', 'Merel', 'Celine', 'Noor' ];
let zoeknaam = await userInput.question('geef een naam waarvan je de positie wil achterhalen: ');
let positie;

for(let i = 0; i <= namenlst.length; i++){
    if(zoeknaam == namenlst[i]){
    positie = i;
    break
    }else{
    positie = '-1'
    }
}console.log(positie)

process.exit()