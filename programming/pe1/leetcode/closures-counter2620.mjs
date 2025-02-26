import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

var createCounter = function(n) { 
    
    return function() {
        return n++
        
    };
};

process.exit()