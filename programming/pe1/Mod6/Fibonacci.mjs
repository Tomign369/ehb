import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let fiblijst = [0,1]

for(let i = 0; fiblijst.length < 10; i ++ ){
    let fib = fiblijst[i] +  fiblijst[i+1];
    fiblijst.push(fib)
}console.log(fiblijst)

process.exit()