const myObj = {
	//create an object that has a bunch of methods that are outlined...
	
	add: function add(val1,val2){
		return val1 + val2;
	},
	multiply: function multiply(val1,val2){
		return val1*val2;
	},
	square: function square(val1){
		return val1*val1;
	},
	random: function random(val1,val2){  //2 and 9 example
		var num = Math.floor(Math.random()*(val2+1-val1)); 
		num = val1+num;
		return num;
	}
}
module.exports = myObj;


//finish math module and then read must know pt 1 in Http anatomy...  build servers with node and express after lunch...