// //log to the console the upper case version of the input text...
// var fs = require('fs');

// var chgTxt = fs.readFileSync('node.txt','utf8'); //reads text in the file..., blocking operation, reading file asynchronously (one path at a time...)
// var chgTxt = chgTxt.toUpperCase();

// //console.log(chgTxt);

// //console.log('Do completely unrelated stuff...');


// //asynchronous code that reads a file...
// var data;

// fs.readFile('node.txt','utf8', (err, data) => {
// 	console.log(data.toUpperCase());
// })

// console.log('Do completely unrelated stuff...');


//const mathModule = require('./math');  //still have to pull in the math module...(even though it's ours...)

//console.log(mathModule);

const myMathService = require('./math')// code that pulls in your module from math.js

console.log(myMathService.add(2,3)); // 5
console.log(myMathService.multiply(2,3)); // 6
console.log(myMathService.square(2)); // 4
console.log(myMathService.random(10, 20)); // 7b