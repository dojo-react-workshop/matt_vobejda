// const arr = [1,2,3,4];

// //example, reduce the array to the sum of all it's values

// const sum = arr.reduce((curSum, curVal) => {	//arrow notation
// 	return curSum+curVal;
// }, 100);

// console.log(sum);

//feeding in a start value (just use currVal)
Array.prototype.reduce = function(callback, currVal){
	let i = 0;

	if (currVal === undefined){
		currVal = this[0];
		i = 1;
	}

	for(i;i<this.length;i++){
		currVal = callback(currVal, this[i]);
	}
	return currVal;
}

const arr = [1,2,3,4];
let curSum = 0;

//regular notation
const sum = arr.reduce(function(curSum, value){
	return curSum+value;
	//return curSum*value;
}, 100);

//arrow notation
const sum2 = arr.reduce((curSum, value) => {
	return curSum+value;
	//return curSum*value;
}, 100);

console.log(sum);
console.log(sum2);
