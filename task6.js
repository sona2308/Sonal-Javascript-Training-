/* Write a JavaScript code.
Using a for loop, print numbers from 1 to 15 in the console. 
If the number is divisible by 5,print Hello instead of the number.*/
for (let i = 1; i <= 15; i++) {
    if (i % 5 === 0) {
      console.log("Hello");
    } else {
      console.log(i);
    }
  }
  