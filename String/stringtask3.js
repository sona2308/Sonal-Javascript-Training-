/*
Write a biginner level javascript code. Given a String str, count the number of min it. 
Tale input str=mmmMMMm and out put expected is Count of m=4
*/

const str = "moo zoom";
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === 'm' || str[i] === 'M') {
    count++;
  }
}
console.log("Count of m=" + count);
