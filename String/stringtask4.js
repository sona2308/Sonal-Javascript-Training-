/* 
Given a String str, 
count the number of x and y in it.
Take input str=x+y+xy+4x=7 and out put expected is  
x=3  
y=2
*/


const str = "x+y+xy+4x=7";
let countx = (str.match(/x/gi) || []).length;
let county = (str.match(/y/gi) || []).length;

console.log(`x=${countX}\ny=${countY}`);
