import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

//na wat googlen de efficiëntste manier gevonden om de GGD te vinden: 
// https://www.codecademy.com/resources/docs/general/algorithm/euclidean-algorithm

let get1 = parseFloat(await userInput.question('geef een getal in: '))
let get2 = parseFloat(await userInput.question('geef een tweede getal in: '))


while(get1 != get2){
    if(get1 > get2){
        get1 = get1 - get2;
    }else{
        get2 = get2 - get1
    }

}
console.log('Grootste gemeenschappelijke deler is ' + get1)

process.exit() 