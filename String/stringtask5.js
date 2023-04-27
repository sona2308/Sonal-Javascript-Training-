/* 
Given a String str, 
print the indexes at which a or b occur . 
Take input str=abca and output expected is  
a at Index:0 
b at Index:1 
a at Index:3 
*/

const str = "abca";
for(let i = 0; i < str.length; i++) {
  if(str[i] === 'a' || str[i] === 'A') {
    console.log(`a at Index:${i}`);
  } else if(str[i] === 'b' || str[i] === 'B') {
    console.log(`b at Index:${i}`);
  }
}
