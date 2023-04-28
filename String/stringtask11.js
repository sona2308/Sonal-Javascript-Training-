/*
Given a String str, 
Given a string str, 
replace all uppercase alphabets by A, 
lowercase alphabets by a, digits by 0. 
Print the new string on the console..  
Take input str = qw23BN**45g  and out put expected is aa00AA**00a 
*/

let str = "qw23BN**45g";
let newStr = " ";
for (let i = 0; i < str.length; i++) {
  if (str[i]   >= "A" && str[i] <= "Z") {
    newStr   += "A";
  } else if (str[i] >= "a" && str[i] <= "z") {
    newStr   += "a";
  } else if (str[i] >= "0" && str[i] <= "9") {
    newStr += "0";
  } else {
    newStr += str[i];
  }
}
console.log(newStr);
