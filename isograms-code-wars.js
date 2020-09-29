// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is 
// an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

myString = "Dermatoglyphics";

function isIsogram(str){
    let a1 = Array.from(String(str.toLowerCase()), String);
    let a2 = [...new Set(a1)];
    if(a1.length === a2.length){
        return true;
    }
    else{return false}
}

console.log(isIsogram(myString));