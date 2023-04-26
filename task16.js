let n = 6;
let result = "";

for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    result += "+" + i;
  } else {
    result += "-" + i;
  }
}

console.log(result);