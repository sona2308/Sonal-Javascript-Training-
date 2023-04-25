/* Write a JavaScript code.  
Given a number n, display all following pattern in the console.
Take n=5 and 
output expected is  
Square of 1 = 1 : odd 
Square of 2 = 4 : even 
Square of 3 = 9 : odd 
Square of 4 = 16 : even 
Square of 5 = 25 : odd
*/
const n = 5;
for (let i = 1; i <= n; i++) {
  const square = i * i;
  const isEven = square % 2 === 0;
  const parity = isEven ? 'even' : 'odd';
  console.log(`Square of ${i} = ${square} : ${parity}`);
}
