// John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between 
// these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more 
// than t = 174 miles and he will visit only 3 towns.

// Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please 
// Mary and John?

// Example:

// With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],
// [50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

// The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

// The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns 
// is [55, 58, 60].

// The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum 
// of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive 
// or null integers and this list has at least one element). The function returns the "best" sum ie the biggest possible 
//  sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, 
//  depending on the language. With C++, C, Rust, Swift, Go, Kotlin return -1.

// Examples:

// ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

// xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, Rust, Swift, Go)

// ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228
// Test.describe("chooseBestSum",function() {
//     Test.it("Basic tests ",function() {        
//       var ts = [50, 55, 56, 57, 58]
//       Test.assertEquals(chooseBestSum(163, 3, ts), 163)
//       ts = [50]
//       Test.assertEquals(chooseBestSum(163, 3, ts), null)
//       ts = [91, 74, 73, 85, 73, 81, 87]
//       Test.assertEquals(chooseBestSum(230, 3, ts), 228)
//   })})  https://www.w3resource.com/javascript-exercises/javascript-function-exercise-21.php
var ts = [100,76,56,44,89,73,68,56,64,123,2333,144,50,132,123,34,89];
var towns = 8;
var sumLimit = 880;
function chooseBestSum(limit, numTowns, ts){
  var result = [];
  var workingArray; 
       
  for(var x = 0; x < Math.pow(2, ts.length); x++){
    workingArray = [];
    var i = ts.length - 1; 
    do{
      if( (x & (1 << i)) !== 0){
        workingArray.push(ts[i]);
      }
    }  
    while(i--);

    if(workingArray.length === numTowns){
        result.push(workingArray);
    }
  }
   var sum = 0;
   var sumMap = new Map();
    for(j=0; j < result.length; j++){
      for(a = 0; a < result[j].length; a++){
        sum += result[j][a];
      }
      sumMap.set(sum, result[j]);
      sum = 0;
    }

    if(sumMap.size > 0){
      var mapAsc = new Map([...sumMap.entries()].sort());
      var value = Math.max.apply(Math, Array.from(mapAsc.keys()).filter(function(v){return v <= limit}));
      if( value > 0){
        return value;
      }
      else{
        return null;
      }
    }
    else{
      return null;
    }
}

console.log(chooseBestSum(sumLimit, towns, ts));