/*
Given n,print on the console the numbers that divide n and the numbers that do not divide n. 
Note that the numbers to be checked are from 1 to n. 
Take n=9 and 
output expected is  
Divide: 1#3#9# 
Not Divide: 2#4#5#6#7#8# 
*/

let n = 9;
let divide = "";
let notDivide = "";
for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    divide += i + "#";
  } else {
    notDivide += i + "#";
  }
}
console.log("Divide: " + divide);
console.log("Not Divide: " + notDivide);
