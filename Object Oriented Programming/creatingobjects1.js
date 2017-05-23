function VehicleConstructor(name, wheels, passengers){
	var vehicle = {};
	
	vehicle.name = 			name;
	vehicle.wheels = 		wheels;
	vehicle.passengers = 	passengers;

	vehicle.makeNoise = 	function(){
								console.log("Beep!");
							}
	vehicle.passengerCount = 	function(new_passengers){
								vehicle.passengers+= new_passengers;
							}
	return vehicle;
}

var bike = VehicleConstructor("Huffy", 2, 1);
console.log(bike);
bike.makeNoise();

bike.makeNoise = function(){console.log("Ring Ring!");}
bike.makeNoise();

var sedan = VehicleConstructor("Taurus", 4, 5);
console.log(sedan);
sedan.makeNoise();

sedan.makeNoise = function(){console.log("Honk Honk!");}
sedan.makeNoise();

var bus = VehicleConstructor("Coach", 6, 50);
console.log(bus);
bus.makeNoise();

bus.passengerCount(20);
console.log(bus);