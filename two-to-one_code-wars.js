// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, 
//containing distinct letters, each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


let s1 = "xyaabbbccccdefww";
let s2 = "xxxxyyyyabklmopq";

function longest(s1, s2) {
    let s3 = s1 + s2
    let a1 = Array.from(String(s3), String);
    let distinctValue = [...new Set(a1)];
    return distinctValue.sort().join('');
  }

  console.log(longest(s1, s2));