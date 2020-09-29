// You need to return a string that looks like a diamond shape when printed on the screen, 
// using asterisk (*) characters. Trailing spaces should be removed, and every line must 
// be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible 
// to print a diamond of even or negative size.
// Examples

// A size 3 diamond:

//  *
// ***
//  *

// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *

// ...that is: "  *\n ***\n*****\n ***\n  *\n"
// ...that is: "   *\n  ***\n   *****\n*******\n *****\n  ***\n   *\n"

function diamond(n){
    let output = "";
    let space;
    if(n % 2 === 0 || n <= 0){
      return null;
    }
    else{
      if(n === 1){
        space = n - 2;
      }
      else{
        space = Math.floor(n/2);
      }
        for (i = 0; i < n; i++){
          if(i%2 === 0){
            for (j = 0; j < space; j++){
              output += " "; 
            }
            for (j = 0; j <= i; j++){ 
              output += "*"; 
            }
            output += "\n";
            space--;
          }
        }    
          space = 0; 
        
        for (i = n-1; i > 0; i--){
          if(i%2 === 0){
            for (j = 0; j <= space; j++){
              output += " "; 
            }
            for (j = 1; j < i; j++){ 
              output += "*";
            }
            output += "\n";
            space++;
          }             
        } 
    }  
    return output;
  }

  console.log(diamond(5));