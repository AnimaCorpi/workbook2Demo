"use script"


let a = "101.1";
let b = "55";
let c = "402 Stevens";
let d = "Number 5";


console.log(parseInt(a));// 101
console.log(parseFloat(a));// 101.1
console.log(Number(a));// 101.1
console.log(a = +a);// 101.1
console.log(`\n`)

console.log(parseInt(b));// 55
console.log(parseFloat(b));// 55
console.log(Number(b));// 55
console.log(b = +b);// 55
console.log(`\n`)

console.log(parseInt(c));// 402
console.log(parseFloat(c));// 402
console.log(Number(c));// NaN
console.log(c = +c);// NaN
console.log(`\n`)

console.log(parseInt(d));// NaN
console.log(parseFloat(d));// NaN
console.log(Number(d));// NaN
console.log(d = +d);// NaN
console.log(`\n`)