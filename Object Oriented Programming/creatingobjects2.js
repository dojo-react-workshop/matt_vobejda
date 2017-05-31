function VehicleConstructor(name, wheels, passengers, speed){
	
	var self = this;
	var distance_traveled = 0;
	var updateDistanceTravelled = function(){
							distance_traveled+=self.speed;
						}

	this.name = 		name;
	this.wheels = 		wheels;
	this.passengers = 	passengers;
	this.speed = 		speed;

	this.makeNoise = 	function(){
								console.log("Beep!");
							}
	this.passengerCount = 	function(new_passengers){
								this.passengers+= new_passengers;
							}
	this.move = 		function(){
		updateDistanceTravelled();
		this.makeNoise();
	}
	this.checkMiles = 	function(){
		console.log(distance_traveled);
	}
}

var bike = new VehicleConstructor("Huffy", 2, 1, 10);
console.log(bike);
bike.makeNoise();

bike.makeNoise = function(){console.log("Ring Ring!");}
bike.makeNoise();

var sedan = new VehicleConstructor("Taurus", 4, 5, 90);
console.log(sedan);
sedan.makeNoise();

sedan.makeNoise = function(){console.log("Honk Honk!");}
sedan.makeNoise();

var bus = new VehicleConstructor("Coach", 6, 50, 80);
console.log(bus);
bus.makeNoise();

bus.passengerCount(20);
console.log(bus);

bus.move();
bus.checkMiles();
bus.move();
bus.checkMiles();
