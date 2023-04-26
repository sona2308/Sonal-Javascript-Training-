/*
Write a JavaScript code in if else statement. Given n, print the pattern on the console. 
Take n=9 and 
output expected is 1#3#5#7#9
*/

const n = 9;

let result = '';
for (let i = 1; i <= n; i += 2) {
  result += i + '#';
}
result = result.slice(0, -1); 
console.log(result);
