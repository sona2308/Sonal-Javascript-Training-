const n = 6;
let result = '-';
let sign = 1;
for (let i = 1; i <= n; i++) {
  result += sign * i;
  if (i < n) {
    result += sign > 0 ? '+' : '-';
    sign = -sign;
  }
}
console.log(result);
