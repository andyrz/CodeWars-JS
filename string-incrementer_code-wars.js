// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.
// Test.assertEquals(incrementString("foobar001"), "foobar002");
// Test.assertEquals(incrementString("foobar99"), "foobar100");
// Test.assertEquals(incrementString("foobar099"), "foobar100");
// Test.assertEquals(incrementString(""), "1");

//var text = "foobar000";
var text = "foo001";

function incrementString (string) {

  let workingArray = string.split("");
  let numArray = new Array();
  let numLength = 0;
  let intStartingPosition = -1;

  for(let i = 0; i < workingArray.length; i++){
    if(Number.isInteger(+workingArray[i])){
      numArray.push(workingArray[i]);
      numLength++;
      if(intStartingPosition === -1){
        intStartingPosition = i;
      }
    }
  }

  if(numLength === 0){
    return string + "1";
  }

  let result = numArray.join("");
  result = parseInt(result);
  if(result === 0){
    result = "1";
  }
  else{
    result = +result + 1;
  }

  result = result.toString();

  while(+result.length < numLength){
    result = "0" + result;
  }
  
  return string.substring(0, intStartingPosition) + result;
}

console.log(incrementString(text));