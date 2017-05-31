'use strict'

function VehicleConstructor(name, numWheels, numPass, speed = 0){
	//this = empty object

	this.name = name;
	this.speed = speed;

	//return this automatically
}

//these prototypes can be put anywhere in our JS (can be good and bad, not all in one spot)
//this method has a lot done for us with new/this, other way, we did it ourselves...
VehicleConstructor.prototype.accelerate = function(velChg = 1){  //defualt value of 1 increase, unless something is passed
	this.speed += velChg;
}
VehicleConstructor.prototype.deccelerate = function(velChg = 1){  //defualt value of 1 increase, unless something is passed
	this.speed -= velChg;
}

const v1 = new VehicleConstructor('bus', 0);  //new automatically creates the prototype object as well as well as creating "this"
console.log(v1);
console.log(v1.speed); //0
v1.accelerate(); //speed1 goes up by one...
console.log(v1.speed); //1
v1.deccelerate(); //speed1 goes down by one...
console.log(v1.speed); //0


//Other way to do it that helps describe the "Closure Concept"
// const VehicleConstructor = (function(){
// 	//creates a protytype that is hidden from the rest of the program that doesn't need it and is 
// 	//only created once in memory (closure concept)
// 	const vehiclePrototype = {
// 		accelerate: function(velChg = 1){  //defualt value of 1 increase, unless something is passed
// 			this.speed += velChg;  //or vehicleObj.speed += velChg;
// 		},
// 		deccelerate: function(velChg = 1){  //defualt value of 1 increase, unless something is passed
// 			this.speed -= velChg;  //or vehicleObj.speed += velChg;
// 		}
// 	}

// 	return function VehicleConstructor(name, numWheels, numPass, speed = 0){

// 		const vehicle = Object.create(vehiclePrototype);
// 		vehicle.name = name;
// 		vehicle.speed = speed;

// 		return vehicle;
// 	}	
// })();


// function VehicleConstructor(name, numWheels, numPass, speed = 0){

// 	const vehicle = Object.create(vehiclePrototype);
// 	vehicle.name = name;
// 	vehicle.speed = speed;
	
// 	//const vehicleObj = {
// 	// 	name,
// 	// 	numWheels,
// 	// 	numPass,
// 	// 	speed,
// 	// 	makeNoise : function(){
// 	// 		if(name === 'bike'){
// 	// 			console.log('Ring Ring!');
// 	// 		} else if(name === 'sedan'){
// 	// 			console.log('Honk Honk!');
// 	// 		} else if (name === 'big rig'){
// 	// 			console.log('HONK HONK!');
// 	// 		} else if (name === 'school bus'){
// 	// 			console.log('HONK!');
// 	// 		} else{
// 	// 			console.log('make some noise!');
// 	// 		}
// 	// 	},
// 	// 	//wasting memory by having it here, called everytime, make it a prototype...
// 	// 	accelerate: function(velChg = 1){
// 	// 		vehicleObj.speed += velChg;  //or this.speed += velChg;
// 	// 	}
// 	// }
// 	return vehicle;
// }

// const v1 = VehicleConstructor('sedan', 4);
// const v2 = VehicleConstructor('big rig', 16);
// const v3 = VehicleConstructor('school bus', 24, 0);
// const v4 = VehicleConstructor('bike', 2);

// console.log(v1.speed); //0
// v1.accelerate(); //speed1 goes up by one...
// console.log(v1.speed); //1
// v1.deccelerate(); //speed1 goes down by one...
// console.log(v1.speed); //0

