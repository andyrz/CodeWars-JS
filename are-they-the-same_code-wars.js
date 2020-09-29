// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the 
//two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements 
//in b are the elements in a squared, regardless of the order.
// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square 
//of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements 
//in terms of squares:
// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

array1 = [8]
array2 = [64]

function comp(array1, array2){    
    if(Array.isArray(array1) && Array.isArray(array2)){
        let a1 = array1.sort(function(array1,b){return array1 - b});
        let a2 = array2.sort(function(array2,b){return array2 - b});
        for(i=0; i < a1.length; i++){
            if(a1[i] * a1[i] !== a2[i]){return false}
        }
        return true;
    }
    else{return false}
  }

console.log(comp(array1,array2));