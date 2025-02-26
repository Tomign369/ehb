import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let invoer;
let lijst=[]

while(invoer != 's'){
    invoer = await userInput.question('geef studentnamen: ');
    if(invoer != 's'){
        lijst.push(invoer)
    }
}console.log(lijst)

process.exit()