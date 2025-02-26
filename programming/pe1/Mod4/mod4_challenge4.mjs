import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte= parseFloat (await userInput.question('Geef de hoogte in GODVERDOMME: '))
let outline = await userInput.question('outline? j/n ')

let basis = (hoogte * 2) -1

for(let i = 1; i <= hoogte; i ++){
    let spatie = ''
    let ster = ''
    let numSter = (i * 2) - 1
    let numSpatie = (basis - numSter) / 2

if (outline === 'j'){
    for(let j = 1; j <= numSpatie; j++ ){
        spatie += ' '
    }
    for(let k = 0; k < numSter; k++){
        if(i == 1 || i == hoogte){
            ster += '*'
        }else{
            if(k == 0 || k == numSter - 1){
                ster += '*'
            }else{
                ster += ' '
            }            
        }
    }

}else{
    for(let j = 0; j < numSpatie; j++){
        spatie += ' '
    }
    for(let k = 0; k < numSter; k++){
        ster += '*'
    }
}
    console.log(spatie+ster)
           
}



process.exit();
