/*
Given a String str,
create a new String with the characters at even index in the String.
Note that the starting index is 0 which has been considered as even.
Take input s str=JavaMasters and out put expected is JvMses 
*/

let str = "JavaMasters";
let result = " ";

for (let i = 0; i < str.length; i += 2) {
  result += str[i];
}
console.log(result);
