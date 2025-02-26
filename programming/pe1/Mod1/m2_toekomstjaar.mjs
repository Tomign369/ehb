import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

//variabelen die we gebruiken
let geboorteJaar = 1992
let toekomstJaar = 2032

//Toekomstleeftijd berekenen
let toekomstLeeftijd1 = toekomstJaar - geboorteJaar
let toekomstLeeftijd2 = toekomstLeeftijd1 ++

//output printen
console.log('In ' + toekomstJaar + ' zal je ' + toekomstLeeftijd1 + ' of ' + toekomstLeeftijd2 + ' jaar oud zijn.')


process.exit()