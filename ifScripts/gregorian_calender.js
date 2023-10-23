"use script"


function leapYearChecker(num){
    if (num%4 === 0) {
        return `${num} is a leap year!`
    }
    else return `${num} is not a leap year.`
}

console.log(leapYearChecker(1990))
// 1990 is not a leap year.
console.log(`\n`)
console.log(leapYearChecker(1950))
// 1950 is not a leap year.
console.log(`\n`)
console.log(leapYearChecker(1999))
// 1999 is not a leap year.
console.log(`\n`)
console.log(leapYearChecker(2000))
// 2000 is a leap year!
console.log(`\n`)
console.log(leapYearChecker(2001))
// 2001 is not a leap year.
console.log(`\n`)
console.log(leapYearChecker(2012))
// 2012 is a leap year!
console.log(`\n`)