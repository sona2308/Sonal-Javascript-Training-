/*
Given a String str, 
Given a string str, print all the digits in the string on the console.
Take input str = 9810098100 and out put expected is Digits=9810098100 
*/

let str = "9810098100";
let digits = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] >= "0" && str[i] <= "9") {
    digits += str[i];
  }
}
console.log("Digits=" + digits); 