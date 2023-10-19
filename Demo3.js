"use strict;"



// sample inputs
var foodCost = 79.25;
var tax = 6.54;
var tip = 12.00;
// calculations
var totalDue = foodCost + tax + tip;
// output
console.log("The total due is " + totalDue);

console.log(
  "Food cost is " + foodCost + " and tax is " + tax);
  // console.log("Tip is " + tip);
  console.log("Tip is " + tip.toFixed(2));
  
  console.log("Total Due is " + totalDue);
  
  console.log('\n')
  
  
  // just having fun
  
  //  calculator function
  function calculateTotal(foodCost,tax, tip) {
      var total = foodCost + tax + tip ;
      return total
    }
  let totalCost = calculateTotal(foodCost,tax,tip)
  
  console.log(totalCost)
  
  console.log('\n')
  
  function checkCalculations (cost, due) {
    let message = null
    if (cost === due) {
       message = "WooHoo!!!" ;
    }
    else {message = `cost ${cost}, due ${due} are not equal`}
    
    return message
  }
  
  console.log(checkCalculations(totalCost,totalDue))
  
  console.log('\n')
  
  let otherNum = calculateTotal(1000,5,23487)
  
  console.log(checkCalculations(otherNum,totalDue))