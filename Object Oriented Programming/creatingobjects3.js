function VehicleConstructor(name, wheels, passengers, speed = 0){
	
	//const vehicle = {} vs. Object.create(null) -> creates object without prototype (things that come with object...)

	var distance_traveled = 0;
	var updateDistanceTravelled = function(){
		distance_traveled+=self.speed;
	}

	this.name = name;	//ES6 change -> just use name instead of name: name when using objects
	this.wheels = wheels;
	this.passengers = passengers;
	this.speed = speed;

}

VehicleConstructor.prototype.makeNoise = function(){
	if(this.name === 'Huffy'){
		console.log('Ring Ring!');
	} else if(this.name === 'Taurus'){
		console.log('Honk Honk!');
	} else if (this.name === 'big rig'){
		console.log('HONK HONK!');
	} else if (this.name === 'Coach'){
		console.log('HONK!');
	} else{
		console.log('make some noise!');
	}
}
VehicleConstructor.prototype.passengerCount = 	function(new_passengers){
	this.passengers+= new_passengers;
}
VehicleConstructor.prototype.move = function(){
	updateDistanceTravelled();
	this.makeNoise();
}
VehicleConstructor.prototype.checkMiles = function(){
	console.log(distance_traveled);
}


VehicleConstructor.prototype.accelerate = function(velChg = 1){  //defualt value of 1 increase, unless something is passed
	this.speed += velChg;
}
VehicleConstructor.prototype.deccelerate = function(velChg = 1){  //defualt value of 1 increase, unless something is passed
	this.speed -= velChg;
}


var bike = new VehicleConstructor("Huffy", 2, 1, 10);
console.log(bike);
bike.makeNoise();

var sedan = new VehicleConstructor("Taurus", 4, 5, 90);
console.log(sedan);
sedan.makeNoise();

sedan.makeNoise = function(){console.log("Honk-Honk-Honk-Honk!!!!!");}
sedan.makeNoise();

// var bus = new VehicleConstructor("Coach", 6, 50, 80);
// console.log(bus);
// bus.makeNoise();

// bus.passengerCount(20);
// console.log(bus);

// bus.move();
// bus.checkMiles();
// bus.move();
// bus.checkMiles();


// v1.speed1 //0
// v1.accelerate(); //speed1 goes up by one...
// v1.speed1 //1