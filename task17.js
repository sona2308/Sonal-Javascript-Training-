/*
write a javascript code.
Given n as input, 
print the following pattern-1+2-3+4-5+....(+/-)n = value 
on the console. Take input as n =7 and 
its output expected is -1+2-3+4-5+6-7=-4 this only
*/

let n = 7;
let sum = 0;
let sign = 1;
let pattern = "";
for (let i = 1; i <= n; i++) {
sum += sign * i;
pattern += `${sign > 0 ? "+" : "-"}${i}`;
sign = -sign;
}

console.log(`${pattern}=${sum}`);
