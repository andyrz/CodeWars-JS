// The maximum sum subarray problem consists in finding the maximum 
// sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]

// Easy case is when the list is made up of only positive numbers and 
// the maximum sum is the sum of the whole array. If the list is made 
// up of only negative numbers, return 0 instead.
// Empty list is considered to have zero greatest sum. Note that the 
// empty list or array is also a valid sublist/subarray.

let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

var maxSequence = function(arr){
    let result = 0;
    let sum = [];
    sum[0] = arr[0];
 
    for(let i=1; i < arr.length; i++){
        sum[i] = Math.max(arr[i], sum[i-1] + arr[i]);
        result = Math.max(result, sum[i]);
    }
 
    return result;
}


console.log(maxSequence(input));
