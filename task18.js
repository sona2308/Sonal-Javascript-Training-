/*
Given n, print the following pattern on the console. 
Note that all the multiples of 3 have been denoted by x.
take input as n =7 and its 
output expected is 7x54x21 this only
*/

let n = 7;
let pattern = "";
for (let i = 1; i <= n; i++) {
  if (i % 3 == 0) {
    pattern += "x";
  } else {
    pattern += i;
  }
}
console.log(pattern);
