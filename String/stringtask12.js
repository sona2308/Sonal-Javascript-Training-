/*
Given a string str, double all the alphabets, 
triple the digits and remove all the other characters. 
Print the new string on the console. 
Take input str = 9#a$M%2eP  and out put expected is 999aaMM222eePP
*/

let str = "9#a$M%2eP";
let newStr = "  ";
for (let i = 0; i < str.length; i++) {
  if (str[i] >= "A" && str[i] <= "Z") {
    newStr += str[i] + str[i];
  } else if (str[i] >= "a" && str[i] <= "z") {
    newStr += str[i] + str[i];
  } else if (str[i] >= "0" && str[i] <= "9") {
    newStr += str[i] + str[i] + str[i];
  }
}
console.log(newStr); 

