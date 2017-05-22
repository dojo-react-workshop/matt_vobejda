'use strict';

//goal of map is to return a new array whose values are the output of a callback function
Array.prototype.map = function(callback){
	const newArray = [];

	this.forEach(function(value){  //JS function will give value, index and array...
		newArray.push(callback(value));
	});

	return newArray;

	//other way to do it...
	// for (var i=0;i<this.length; i++){
	// 	newArray.push(callback(value));
	// }
};

const a = [1,2,3];
console.log(a.map(function(value){
	return value*value;
}));