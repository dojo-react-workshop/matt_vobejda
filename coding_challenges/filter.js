'use strict';

//goal of filter is to... return a new array whose values are the output of a callback function
Array.prototype.filter = function(callback){
	const newArray = [];

	this.forEach(function(value){  //JS function will give value, index and array...
		if(callback(value)){
			newArray.push(value);
		}
	});

	return newArray;

	//other way to do it...
	// for (var i=0;i<this.length; i++){
	// 	newArray.push(callback(value));
	// }
};

const a = [1,2,3,4];
console.log(a.filter(function(value){
	return value%2===0;
}));

