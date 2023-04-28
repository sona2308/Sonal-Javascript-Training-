/*
Given a string str, 
create a string consisting of all the non-alphabets and non-digits.
Take input str = 9#a$M%2eP&$ and out put expected is #$%&$
*/

let str = "9#a$M%2eP&$";
let newStr = "";

for (let i = 0; i < str.length; i++) {
  if (!(str[i] >= "a" && str[i] <= "z") && !(str[i] >= "A" && str[i] <= "Z") && !(str[i] >= "0" && str[i] <= "9")) {
    newStr += str[i];
  }
}
console.log(newStr);
