/*
Write a JavaScript code.
Given a String str, create a new String in which all mhave been removed. 
Display the new string in the console. 
Take input str=am:pm:my:time and out put expected is a:p:y:tie 
*/
const str = "am:pm:my:time";
let newStr = " ";

for (let i = 0; i < str.length; i++) {
  if (str[i] !== "m") {
    newStr += str[i];
  }
}
console.log(newStr); 
