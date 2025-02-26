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
}

for(let i=0; i < lijst.length; i ++)
    console.log(lijst[i] + ', u bent uitgenodigd voor Programming Essentials, Proficiat!')

process.exit()