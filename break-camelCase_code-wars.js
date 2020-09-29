/* Complete the solution so that the function will break up camel casing, using a space between words.
Example

solution("camelCasing")  ==  "camel Casing" */

var testString = "camelCasingTest";

function solution(string) {
    let workingArray = string.split("");
    let result = "";
    for(let i=0; i < workingArray.length; i++){        
        if (workingArray[i] == workingArray[i].toUpperCase()) {
            result += " ";
        }
        result += workingArray[i];
    }
    return result;
}


console.log(solution(testString));

