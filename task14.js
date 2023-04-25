/*
Given a number n, display the pattern shown below in the console 
Take n=8 and 
output expected is P1Q2R3P4Q5R6P7Q8 
*/

const n = 8;

let result = '';
for (let i = 1; i <= n; i++) {
  if (i % 3 === 1) {
    result += 'P' + i;
  } else {
    if (i % 3 === 2) {
      result += 'Q' + i;
    } else {
      result += 'R' + i;
    }
  }
}
console.log(result);
