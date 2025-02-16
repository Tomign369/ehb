import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function mijnFloor(getal)
{
    let result = parseInt(getal);
    return result;
}
 


console.log(mijnFloor(5.9))

process.exit();