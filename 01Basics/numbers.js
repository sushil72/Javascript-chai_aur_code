const score = 400
// console .log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); it convert 
// console.log(balance.toFixed(2));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // indian standard commas 
// console.log(hundreds.toLocaleString()); //us standard commar

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //(0--1)
console.log((Math.random()*10) + 1); //(1--9)
console.log(Math.floor(Math.random()*10) + 1);//floor values

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //gives between range 