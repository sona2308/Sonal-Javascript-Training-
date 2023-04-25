/*
Given a number n, display the pattern shown below in the console 
Take n=4 and 
output expected is  
X 
XY 
XYX 
XYXY 
*/
const n = 4;
let pattern = '';
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    if (j % 2 === 0) {
      pattern += 'Y';
    } else {
      pattern += 'X';
    }
  }
  console.log(pattern);
  pattern = '';
}
