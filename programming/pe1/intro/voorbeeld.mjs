import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});



let persoon1 = {
    naam: "Tom",
    gewicht: 75,
    lengte: 178,
    berekenbmi: function() {
        return this.gewicht / ((this.lengte / 100) ** 2); // Convert length to meters
    }
};

let lijst = [];
lijst.push(persoon1);
lijst.push({ naam: "Jos", leeftijd: 40 });
lijst.push({ naam: "Stef", leeftijd: 24 });
lijst.push({ naam: "Jan", leeftijd: 20 });

function toonPersoon(persoon) {
    console.log("naam: " + persoon.naam);
    if (persoon.leeftijd !== undefined) console.log("leeftijd: " + persoon.leeftijd);
    if (persoon.lengte !== undefined) console.log("lengte: " + persoon.lengte);
    if (persoon.berekenbmi) console.log("BMI: " + persoon.berekenbmi());
}

for (let i = 0; i < lijst.length; i++) {
    if (lijst[i].berekenbmi) {
        console.log("gevonden! BMI: " + lijst[i].berekenbmi());
    } else {
        console.log("Geen BMI beschikbaar voor: " + lijst[i].naam);
    }
}

toonPersoon(lijst[2]);


process.exit();