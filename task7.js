/*
Write a JavaScript code. Given a number n. 
Display the following in the console. 
Take  n=4 and  
output expected is  
1:odd 
2:even 
3:odd 
4:even */
let n = 4;

for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    console.log(i + ": even");
  } else {
    console.log(i + ": odd");
  }
}
