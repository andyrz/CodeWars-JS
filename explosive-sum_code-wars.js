// In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, 
// is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands 
// are considered the same partition. If order matters, the sum becomes a composition. For example, 4 can be 
// partitioned in five distinct ways:

//     4
//     3 + 1
//     2 + 2
//     2 + 1 + 1
//     1 + 1 + 1 + 1

var positiveInteger = 10;


function sum( n, m){
    var max = n;
    if (n == m)
        return 1 + sum(n, m - 1);
    if (m == 0 || n < 0)
        return 0;
    if (n == 0 || m == 1)
        return 1;

    return sum(n, m - 1) + sum(n - m, m);
}

console.log(sum(positiveInteger, positiveInteger));