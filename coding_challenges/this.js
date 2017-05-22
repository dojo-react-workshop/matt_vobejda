'use strict';

//"this" is a weird variable that is assigned a value based on the context
//of the code around it...

//this will return different results running in sublime (empty Object), 
//node or the browser (Window Object)...
//console.log(this); //example 1

//start example 2
function myFunc(){
	console.log(this);
}

// var obj = {
// 	someFunc: myFunc
// }

// obj.someFunc(); //end example 2

//example 3...
// myFunc.call('Charlie');
// myFunc.apply('Charlie');
// myFunc.bind('Charlie'); //returns new function with this already set...


//example 4
var thing = new myFunc();
