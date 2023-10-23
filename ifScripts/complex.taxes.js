
"use script"


function annualPayCalculator (payRate, hoursWorked, filingStatus){
  let tax = null;
  let annual = null;
  let grossPay = null


  if (hoursWorked <= 40){
    grossPay = (hoursWorked * payRate).toFixed(2);
  }
  else if (hoursWorked > 40){
    let overTime= hoursWorked -40;
    grossPay = ((overTime * (payRate * 1.5)) + (payRate * (hoursWorked-overTime))).toFixed(2);
    }
    annual = (grossPay*52).toFixed(2);

  if (filingStatus == "single"){

    if (annual < 12000){
      tax = 0.05
    }
    else if (annual < 24999.99){
      tax = 0.10
    }
    else if (annual < 74999.99){
      tax = 0.15
    }
    else tax = 0.2
    }
  else if  (filingStatus == "joint"){
    if (annual < 12000){
      tax = 0.00
    }
    else if (annual < 24999.99){
      tax = 0.06
    }
    else if (annual < 74999.99){
      tax = 0.11
    }
    else tax = 0.20
  }
  let netPay = (grossPay - (grossPay * tax)).toFixed(2);
  let taxAmount = (grossPay * tax).toFixed(2);


  
  return `You worked ${hoursWorked} hours this period. \n Because you earn $${payRate.toFixed(2)} per hour, your gross pay is $${grossPay}. \n Your filing status is ${filingStatus}. \n Your tax witholding this period is  $${taxAmount}. \n Your net pay is $${netPay}.`
  
}


// console.log(annualPayCalculator(25.75, 40, "single"))
//Sample Output 
// You worked 40 hours this period. 
//  Because you earn $25.75 per hour, your gross pay is $1030.00. 
//  Your filing status is single. 
//  Your tax witholding this period is  $154.50. 
//  Your net pay is $875.50.


// console.log(`\n`)


// console.log(annualPayCalculator(25.75, 40, "joint"))
// //Sample Output 
// You worked 40 hours this period. 
//  Because you earn $25.75 per hour, your gross pay is $1030.00. 
//  Your filing status is joint. 
//  Your tax witholding this period is  $113.30. 
//  Your net pay is $916.70.