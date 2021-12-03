const express = require('express');
const { type } = require('os');
const app = express();
app.use(express.json());

// ///// * DAY 2 PART 1 * /
const input = require("fs").readFileSync("sample.txt", "UTF-8").split("\n")

let verticalPosition = 0
let horizontalPosition = 0
let depth = 0;

for(let x=0; x<input.length; x++){
    if( input[x].indexOf('up') >= 0){
        verticalPosition -= parseInt(input[x].charAt(input[x].length-1))
    } else if( input[x].indexOf('down') >= 0){
        verticalPosition += parseInt(input[x].charAt(input[x].length-1))
    } else if( input[x].indexOf('forward') >= 0){
        horizontalPosition += parseInt(input[x].charAt(input[x].length-1))
    }
}

depth = verticalPosition*horizontalPosition
console.log(depth) //2147104


// ///// * DAY 2 PART 2 * /

let aim = 0;
let totalDepth = 0;

for(let x=0; x<input.length; x++){
    if( input[x].indexOf('up') >= 0){
        aim -= parseInt(input[x].charAt(input[x].length-1))
    } else if( input[x].indexOf('down') >= 0){
        aim += parseInt(input[x].charAt(input[x].length-1))
    } else if( input[x].indexOf('forward') >= 0){
        horizontalPosition += parseInt(input[x].charAt(input[x].length-1))
        depth = aim*(parseInt(input[x].charAt(input[x].length-1)))
        totalDepth += depth
    }
}

let finalPart2Answer = totalDepth*horizontalPosition
console.log(finalPart2Answer) //2044620088
