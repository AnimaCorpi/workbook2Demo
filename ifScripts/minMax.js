"use script"

let a = 6;
let b = 9;
let c = 3;

function findLowest (num1, num2, num3){
    let smol = null;
    if (a < b && a < c){
        smol = a;
    }
    else if (b < a && a < c){
        smol = b;
    }
    else smol = c
    return `The smallest number is ${smol}.`
}

console.log (findLowest(a,b,c));
