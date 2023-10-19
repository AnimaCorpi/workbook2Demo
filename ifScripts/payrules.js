"use strict;"

let grossPay = null;
let payRate = 26.5;
let hoursWorked = 39.5; 

if (hoursWorked <= 40){
    grossPay = hoursWorked * payRate
}
else if (hoursWorked > 40){
    let overTime= hoursWorked -40;
    grossPay = (overTime * (payRate * 1.5)) + (payRate * (hoursWorked-overTime))
}

// payRate = 26.5
// hoursWorked=39.5
// grossPay= 1046.75


// payRate = 15.01
// hoursWorked=57
// grossPay = 983.15

// payRate = 15
// hoursWorked=40
// grossPay = 600

// payRate = 10
// hoursWorked=42
// grossPay = 430




console.log(grossPay.toFixed(2))