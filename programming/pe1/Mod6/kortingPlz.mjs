import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let prijsLijst = [];
let prijsLijstMetKorting = []
let som = 0;
let somKorting = 0;
let prijs;

function geefKorting(aPrijs, bKorting=15){
    let prijsMetKorting = aPrijs * (1 - bKorting / 100)
    return prijsMetKorting
}
while(prijs != 's'){
    prijs = await userInput.question('Geef je prijs in, druk S om het programma te stoppen: '); //maken we geen gebruik van parsefloat, omdat de invoer ook een 's' kan zijn.
    
    if(prijs == 's'){
        break;
    }
    
    prijs=parseFloat(prijs);//Als de invoer geen 's' is dan gaat het programmatje door dus converteren we de invoer naar floats.

    //!isNaN is niet (niet een nummer)dwz als het wel een nummer is dan pushen we deze in de lijst, anders vangen we de verkeerde invoer op en latn we dit weten aan de gebruiker.
    if(!isNaN(prijs)){  
        prijsLijst.push(prijs)
    }else{
        console.log('ongeldige invoer, de invoer kan alleen een cijfer of een "s" zijn)')//als de gebruiker toch iets anders invoert dan een "s" of een cijfer dan wordt dat hier gemeld.
    }
}

for(let i = 0; i < prijsLijst.length; i++){//met een for lus gaan we alle prijzen in de lijst optellen
    som += prijsLijst[i];
}if(prijsLijst.length > 0){     //Enkel als er iets in de lijst staat kunnen we een korting berekenen
    for(let i = 0; i < prijsLijst.length; i++){
        let prijsKorting = geefKorting(prijsLijst[i]);
        prijsLijstMetKorting.push(prijsKorting)
    }for(let j = 0; j < prijsLijstMetKorting.length; j++){
        somKorting += prijsLijstMetKorting[j] 
    }
    console.log('prijs zonder korting is ' + som)
    console.log('prijs met korting is ' + somKorting)
    
}else{
    console.log('Wel prijs invoeren hé :-)') // als er niks in de lijst staat dan wordt dat hier gemeld.
}

process.exit()