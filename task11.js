/*
Given n as input, 
print on the console Grade A if n is between 90 and 100, 
Grade B if it is between 75 and 90, 
Grade C if it is between 50 and 75 and Grade D otherwise.
Take n = 45 and output is Grade  D
*/
const n = 45;

if (n >= 90 && n <= 100) {
  console.log('Grade A');
} else if (n >= 75 && n < 90) {
  console.log('Grade B');
} else if (n >= 50 && n < 75) {
  console.log('Grade C');
} else {
  console.log('Grade D');
}
