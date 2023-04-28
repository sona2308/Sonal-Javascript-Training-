/*
Given a string str, 
move the lower case characters to the start of the string, 
digits in the middle and uppercase characters at the end of the string. 
Take input str = 9#a$M%2eP  and out put expected is ae92MP 
*/

let str = "9#a$M%2eP";
let lowercase = "";
let digits = "";
let uppercase = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] >= "a" && str[i] <= "z") {
    lowercase += str[i];
  } else if (str[i] >= "0" && str[i] <= "9") {
    digits += str[i];
  } else if (str[i] >= "A" && str[i] <= "Z") {
    uppercase += str[i];
  }
}
let newStr = lowercase + digits + uppercase;   
  console.log(newStr);
