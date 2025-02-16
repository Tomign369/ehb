
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// Function to convert input text to lowercase
function convertToLowercase() {
    const userInput = prompt("Enter some text to convert to lowercase:"); // Ask the user for input
    if (userInput !== null) { // Check if the user did not cancel the prompt
        const lowercasedText = userInput.toLowerCase(); // Convert the input to lowercase
        alert(`Lowercase text: ${lowercasedText}`); // Display the result
    } else {
        alert("No text was entered."); // Handle the case where no input was given
    }
}

// Run the function
convertToLowercase();


process.exit()