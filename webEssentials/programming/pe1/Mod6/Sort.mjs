import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';


/* all about the sort() method and its shortcommings: 
https://www.freecodecamp.org/news/how-to-sort-javascript-array-accurately/#:~:text=The%20sort()%20method%20can,values%2C%20let's%20see%20some%20examples.&text=You%20will%20notice%20that%2010,before%203%20and%20so%20on.
 */
console.log('-------')
console.log('Methode 1: met de sort() Methode')
console.log('-------')
/*Methode1
*/

let randomlijst = [48, 92, 13, 76, 5, 81, 33, 59, 20, 67];
randomlijst.sort((a, b) => a - b); //dit zal van klein naar groot sorteren.
console.log(randomlijst);

//randomlijst.sort((a, b) => b - a); -> zal van groot naar klein sorteren

console.log('-------')
console.log('Methode 2: De Bubbel Methode')
console.log('-------')
/*the bubble sort algorithm:
https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/
*/

function bubbel(randomlijst){
    for(let i = 0; i < randomlijst.length; i++){
        for(let j = 0; j < (randomlijst.length - i - 1); j++){
            if(randomlijst[j] > randomlijst[j+1]){
                let temp = randomlijst[j]
                randomlijst[j] = randomlijst[j+1]
                
                randomlijst[j+1] = temp
            }
        }
    }
    return randomlijst
}

let lijst = [48, 92, 13, 76, 5, 81, 33, 59, 20, 67]
let gesorteerdelijst = bubbel(lijst)
console.log(lijst)
/* 
The resson for subtractin i is that, after each pass of the outer loop, the largest elements are 'bubbled up' 
to their correct position at the end of the array. So, there's no need to compare those elements again.

subtracting 1 ensures that you're comparing elements within bounds. Since you are comparing adjacent elements (randomlijst[j] and randomlijst[j+1]),
the loop stops before the last element of the array (hence, randomlijst.length -i - 1) to avoid comparing an element that doesn't exist.
*/


process.exit()


