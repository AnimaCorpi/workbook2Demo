"use script"


let lengthOfRoom = 20;
let widthOfRoom = 15;

let boxOfTiles = 12;


console.log(`The area of the room to be tiled is ${lengthOfRoom * widthOfRoom}.`)

let area = lengthOfRoom * widthOfRoom

let numOfBoxes = area/boxOfTiles

let additonalBoxes = numOfBoxes * .10


console.log(`The number of boxes needed without the additonal for mistakes is ${numOfBoxes}. /n To account for potential mistakes you will need an extra ${Math.ceil(additonalBoxes)}. /n  This brings the total number of boxes needed to ${numOfBoxes + Math.ceil(additonalBoxes)}.`)

