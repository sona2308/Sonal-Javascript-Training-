/* 
Write a JavaScript code. 
Given n, check which of the numbers from 2 to 5 divide n 
and display it on the console 
Take  n=15 and  
output expected is  
2: no 
3: yes 
4: no 
5: yes
*/
let n = 15;
for (let i = 2; i <= 5; i++) {
  if (n % i === 0) {
    console.log(i + ": yes");
  } else {
    console.log(i + ": no");
  }
}
