// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

let testString = "what time are we climbing up the volcano"

function high(x){
    let workingArray = x.split(" ");
    let currentString = "";
    let result = "";
    let charSum = 0;
    let sum = 0;
    for(let i=0; i < workingArray.length; i++){
        currentString = workingArray[i];
        for(let j=0; j < currentString.length; j++){
            //ASCII lower case a = 97. Lets start at 1 to handle strings of different length...
            charSum += currentString.charCodeAt(j) - 96;
        }
        if(charSum > sum){
            sum = charSum;
            result = currentString;
        }                
        charSum = 0;
    }
    return result;
   }

console.log(high(testString));