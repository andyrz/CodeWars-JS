
let numbers = 0;

function descendingOrder(n){
    let arrayOfDigits = Array.from(String(n), Number);
    arrayOfDigits.sort().reverse();
    return arrayOfDigits.join('');
  }

  console.log(descendingOrder(numbers));