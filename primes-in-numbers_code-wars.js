// Given a positive number n > 1 find the prime factor decomposition of n. 
// The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"

// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

let number = 86240;

function primeFactors(number){
    let temp = ""
    let temp2 = ""
    let temp4 = 0
    for(let i=0; i <= number; i++){
        if(number % i === 0){
            temp += i + ", ";
            let temp3 = 0;
            for(let j=0; j <= i; j++){
                
                if(i % j === 0){
                    temp3++;
                    temp4 = j;
                }
                
            }
            if(temp3 === 2){
                temp2 += temp4 + ", ";
            }
        }
    }
    console.log(temp);
    console.log(temp2);
    //return temp;
}

primeFactors(number);