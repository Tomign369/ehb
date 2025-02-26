import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let hoogte = parseFloat(await userInput.question('geef de hoogt in: '))

/* logisch -> BV: 7 * 2 = 14 - 1 = 13 
Dit is de basis van de pyramide, met deze formule zorgen we ervoor dat het aantal
sterren oneven is zodat we voor symmetrie kunnen zorgen
*/
let basis = hoogte * 2 - 1 

//for loop om het aantel rijen te bepalen
for(let rij = 1; rij <= hoogte; rij++){
    //alle variabelen waarmee we werken
    let ster= ''
    let spatie= ''


    //Patroon van sterren
    let nSter = rij * 2 - 1
    //patroon van spaties (daarom is het belangrijk om eerst aantal sterren en de basis te kennen)
    let nSpatie = (basis - nSter) /2
    
    for(let i = 0; i < nSpatie; i++){
        spatie += ' '
    }
    for(let j = 0; j < nSter; j++){
        ster += '*'
    }
    console.log(spatie + ster )

}


process.exit()