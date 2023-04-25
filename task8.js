/*
Write a JavaScript code.  
Given a number n, display all the numbers that divide n in the console. 
Take n=10 
and  
output expected is  
1 
2 
5 
10 
*/

let n = 10;

for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    console.log(i);
  }
}
