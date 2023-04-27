const str = "moo zoom";
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === 'm' || str[i] === 'M') {
    count++;
  }
}
console.log("Count of m=" + count);
