import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/* logisch -> BV: 7 * 2 = 14 - 1 = 13 
Dit is de basis van de pyramide, met deze formule zorgen we ervoor dat het aantal
sterren oneven is zodat we voor symmetrie kunnen zorgen
*/
let hoogte = parseFloat(await userInput.question('geef de hoogte in: '));

let base = (hoogte * 2) -1


for(let i = 1; i <= hoogte; i++){
    let spatie=''
    let ster=''
    let numSter= (i * 2) -1

    for(let j = 1; j <= (base-numSter)/2; j++){
        spatie += '/'; 
    }
    for(let k = 0; k < numSter; k ++)
        if(i === 1 || i === hoogte){
            ster += '*'
        }else{
            if(k === 0 || k === numSter -1){
                ster +='*';
            }else{
                ster+=' '
            }

        }

     console.log(spatie+ster)
}


process.exit()