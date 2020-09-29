/* Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
 */

var text = "Indivisibility";

function duplicateCount(text){
    let workingArray = text.toLowerCase().split("");
    workingArray.sort();
    let map = new Map(); 
    for(let i=0; i < workingArray.length; i++){
        if(workingArray[i] === workingArray[i-1]){
			if(map.has(workingArray[i]) === true){
                let temp = map.get(workingArray[i])
                map.set(workingArray[i], temp++);
            }
            if(map.has(workingArray[i]) === false){
                map.set(workingArray[i], 1);
            }            
        }
    }
    return map.size;
}

console.log(duplicateCount(text));