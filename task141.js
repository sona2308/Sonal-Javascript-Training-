let n = 5;
let pattern = '';
for (let i = 1; i <= n; i++) {
  pattern += i;
  if (i !== n) {
    pattern += '@'.repeat(i);
  } else {
    pattern += '@'.repeat(i - 1);
  }
}
console.log(pattern);