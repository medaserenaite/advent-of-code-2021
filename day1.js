const express = require('express');
const { type } = require('os');
const app = express();
app.use(express.json());

// ///// * DAY 1 PART 1 * /
const input = require("fs").readFileSync("day1input.txt", "UTF-8").split("\n").map(n => Number(n))

let counterOne = 0
for (var i=1; i<input.length; i++) {
    if (input[i] > input[i-1]) {
        counterOne++
    }
}
console.log("part 1: " + counterOne) //1527

// part 2

let counter2=0
for (var i=0; i<input.length; i++) {
    if ((input[i]+input[i+1]+input[i+2]) < (input[i+1]+input[i+2]+input[i+3])) {
        counter2++
    }
}
console.log("part 2: " + counter2) //1575