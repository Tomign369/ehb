import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let minimumGetal = 13
let maximumGetal = 37

let getalGebruiker = parseFloat(await userInput.question('Geef een getal in: '));

if(getalGebruiker >= minimumGetal && getalGebruiker <= maximumGetal){
    console.log(getalGebruiker + ' ligt tussen ' + minimumGetal + ' en ' + maximumGetal)
}
else{
    console.log(getalGebruiker + ' ligt niet tussen ' + minimumGetal + ' en ' + maximumGetal)
}



process.exit()