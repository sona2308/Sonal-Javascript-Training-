/*
Given a string str,
print the first half of the string on the console.
Assume that the length of the string is even.
Take input str = JavaScript++JS and out put expected is JavaSc
*/

let str = "JavaScript++JS";
let halfLength = str.length / 2;
let firstHalf = str.slice(0, halfLength);
console.log(firstHalf);
