import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
/* 
Zo ben ik initieel met de opdracht BattleShips begonnen, tot de oefening complexer werd,
toen was het nodig om over te stappen naar battleshipsPartDeuxnew.mjs
 */


let veld = []
let speelveld = parseFloat (await userInput.question('voer de grote van je speelveld in: '));
let y = parseFloat (await userInput.question('Geef de breedte-boördinaten voor je bootje in '));
let x = parseFloat (await userInput.question('Geef de hoogte-coördinaten voor je bootje in '));
let lengteBootje = parseFloat (await userInput.question('Geef de lengte van je bootje: '));
let richting = await userInput.question('geef een richting in: links/rechts of omhoog/omlaag: ');

//hier bepalen we de hoogte & lengte van je speelveld mbv een array
for(let r = 0; r <= speelveld; r++){
    veld.push(r)
}


for(let i = 1; i < veld.length; i ++){//dit zijn de hoogte rijen
    let breedte = ''
    for(let j = 1; j < veld.length; j++){//hier printen we de breedte

        if (richting == 'omlaag') {
            // Controleer of de huidige rij (i) binnen de bootpositie valt
            if (j == x && i >= y && i < y + lengteBootje) {
                breedte += 'b';  // Plaats een 'b' voor de boot
            } else {
                breedte += '.';
            }
        }

        if(richting == 'rechts'){
            if(y == i && x == j){ //beginput van het bootje wordt hier bepaald
                for(let k = 0; k < lengteBootje; k++){
                    if(j + k < veld.length){
                        breedte += 'b';
                    }
                }j += lengteBootje - 1;
            }else{
                breedte += '.'
            }
        }

        if(richting == 'links'){
            if(y == (i - 1) && (x-(lengteBootje)+2) == j){
                for(let k = 0; k < lengteBootje; k ++){
                    if(j - k > 0){
                        breedte +='b';
                    }
                }j += lengteBootje -1;
            }else{
                breedte += '.';
            }                
        }

        if(richting == 'omhoog'){
            if (j == x && i >= (y - lengteBootje + 2) && i <= y+1){
                breedte +='b';
            }else{
                breedte += '.';
            }           
        }



    }console.log(breedte);

}
process.exit()