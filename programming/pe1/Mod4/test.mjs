import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let serie = await userInput.question('geef een serie in om te achterhalen waar ze zich afspeelt: ')

function locatie(serie){
    if(serie == 'familie'){
        let locatie = 'Vlaanderen'
        console.log('je gekozen serie vindt plaats in ' + locatie)
    }else{
        console.log('sorry ik weet niet waar' + serie + ' zich plaatsvindt')

    }
}

locatie(serie)

process.exit()
