// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, 
// that are not every 2nd char, and concat them as new String.
// Do this n times!

// Examples:

// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"

let testString = "This is a test!";
let encryptedString = "hsi  etTi sats!"; //One iteration
let encryptedString2 = "s eT ashi tist!"; //Two
let encryptedString3 = " Tah itse sits!"; //Three

function encrypt(text, n) {

    if(text === null){return text}
    if (n <= 0 || text.length <= 0 || !text){return text}

    let textArray = text.split("");
    let workingArray = [];
    let result = "";

    for(j=0; j < n; j++){
        for(i=1; i < textArray.length; i += 2){
            workingArray.push(textArray[i]);
        }        
        for(i=1; i < textArray.length; i++){
            textArray.splice(i,1);
        }
        result = workingArray.join("");
        result += textArray.join("");
        textArray = result.split("");
        workingArray = [];        
    }    
    return result;
}


function decrypt(encryptedText, n) {
    if(encryptedText === null){return encryptedText}
	if (n <= 0 || encryptedText.length <= 0 || !encryptedText){return encryptedText}   
        
        let output = "";
        
		for (let i = 0; i < n; i++) {
			if(output.length > 0){
				encryptedText = output;
				output = "";
			}
			let odds = encryptedText.slice(0,(encryptedText.length/2));
			let evens = encryptedText.slice((encryptedText.length/2));
			for (let j = 0; j < encryptedText.length; j++) {
				if (j % 2) {
					output += odds[0];
					odds = odds.slice(1);
				} else {
					output += evens[0];
					evens = evens.slice(1);
				}
			}
		}    
    return output;
}



//console.log(encrypt(testString, 1))
//console.log(decrypt(encryptedString, 1));
//console.log(decrypt(encryptedString, 1))