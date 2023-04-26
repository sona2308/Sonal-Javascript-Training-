/*
Given a 4 digit number n, 
find the sum of its digits. 
Display the sum on the console.
Note that n%10 gives its last digit. 
So if n=2456, n%10 is 6. 
Subtraction 6 from 2456 gives 2450 and 
then dividing it by 10 gives 245, 
that is the last digit is removed.So, 
run a for loop from 1 to 4 and 
in the loop do 3 things -calculate the 
last digit-subtract the last digit 
from the number-divide the number by 10 to 
remove the last digit.  Take input as n=2456 
and its output expected is 17 this only

*/
let n = 2456;
let sum = 0;
for (let i = 1; i <= 4; i++) {
  let lastDigit = n % 10;
  sum += lastDigit;
  n -= lastDigit;
  n /= 10;
}

console.log("Sum of digits of " + n + " is: " + sum);


