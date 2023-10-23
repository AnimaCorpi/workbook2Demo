"use script"


let vanSeats = 15;
let passengers = 38;
let vanCost = 250;
let vansNeeded = Math.ceil(passengers/vanSeats);
let totalCost = vanCost * vansNeeded;
let perPerson = (totalCost/passengers).toFixed(2);
let remainder = 0.12;

console.log(`The van cost $${vanCost} to rent and it seats ${vanSeats} people. We have ${passengers} passengers who need to travel. \n We need ${vansNeeded} in order to accommodate our guests. The total cost for the van rental will be ${totalCost}. \n We will need to collect roughly ${perPerson} per passenger. Leaving us with a remainder of ${remainder} cents.`)

