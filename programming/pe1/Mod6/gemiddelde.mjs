import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/*Een programma dat het gemiddelde berekend van de ingevoerde punten.
Dit programme stopt wanneer de gebruiker een 's' invoert 
*/

let puntenLijst = [];
let som = 0;
let punten;
let gemiddelde;

while(punten != 's'){
    punten = await userInput.question('Geef je punten in, druk S om het programma te stoppen: '); //maken we geen gebruik van parsefloat, omdat de invoer ook een 's' kan zijn.
    
    if(punten == 's'){
        break;
    }
    
    punten=parseFloat(punten);//Als de invoer geen 's' is dan gaat het programmatje door dus converteren we de invoer naar floats.

    //!isNaN is niet (niet een nummer)dwz als het wel een nummer is dan pushen we deze in de lijst, anders vangen we de verkeerde invoer op en latn we dit weten aan de gebruiker.
    if(!isNaN(punten)){  
        puntenLijst.push(punten)
    }else{
        console.log('ongeldige invoer, de invoer kan alleen een cijfer of een "s" zijn)')//als de gebruiker toch iets anders invoert dan een "s" of een cijfer dan wordt dat hier gemeld.
    }
}

//met een for lus gaan we alle punten in de lijst optellen
for(let i = 0; i < puntenLijst.length; i++){
    som += puntenLijst[i];
}

//Enkel als er iets in de lijst staat kunne we een gemiddelde berekenen
if(puntenLijst.length > 0){
    gemiddelde = som / puntenLijst.length;    
    console.log('je gemiddelde punten zijn: '+ gemiddelde);
}else{
    console.log('Wel punten invoeren hé :-)') // als er niks in de lijst staat dan wordt dat hier gemeld.
}

process.exit()