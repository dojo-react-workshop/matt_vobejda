//return array of products for everyone except the index

//a = [5,1,3,4,2];

//use built in function (splice, etc...)
//no division...
//do it efficiently.. (in N...)

//product of everything before the index and save into an array...
//[1,5,5,15,60]

//product of everthing after the index
//[24,24,8,2,1]

//multiply the those values...
//[24,120,40,30,60]

a = [5,1,3,4,2];

function ProductArr(a){
	var before = [];
	var after = [];
	var beforeafter = [];
	var rollingProduct = 1;

	for(var i=0;i<a.length;i++){
		before[i] = rollingProduct;
		rollingProduct *= a[i];
	}
	rollingProduct =1;
	for(var x=a.length;x>0;x--){
		after[x] = rollingProduct;
		rollingProduct *= a[x];
	}

	for(var z=0;z<a.length;z++){
		beforeafter[z]=before[z]*after[z];
	}
	console.log(before);
	console.log(after);
	console.log(beforeafter);
	console.log('hellow');
	return beforeafter;
}

console.log(a);
var q = ProductArr(a);
console.log(q);
