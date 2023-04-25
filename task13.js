/*
Given a number n, display the pattern shown below in the console 
Take n=10 and 
output expected is ABCABCABCA
*/

const n = 10;
const pattern = 'ABC';

let result = '';
for (let i = 0; i < n; i++) {
  result += pattern.charAt(i % pattern.length);
}
console.log(result);
