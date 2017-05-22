// //function person_create(name){
// function personConstructor(name){
// 	var person = {
// 		name: 				name,
// 		distance_traveled: 	0,
// 		say_name: 			function(){
// 								console.log(person.name);
// 							},
// 		say_something: 		function(parm){
// 								if(parm === 'I am cool'){
// 									console.log(`${person.name} says 'I am cool'`);
// 								}
// 							},
// 		walk: 				function(){
// 								console.log(`${person.name} is walking`);
// 								person.distance_traveled+=3;
// 							},
// 		run: 				function(){
// 								console.log(`${person.name} is running`);
// 								person.distance_traveled+=10;	
// 							},
// 		crawl: 				function(){
// 								console.log(`${person.name} is crawling`);
// 								person.distance_traveled+=1;	
// 							}  		
// 	}
// 	console.log(person.name);
// 	console.log(person.distance_traveled);
// 	person.say_name();
// 	person.say_something('I am cool');
// 	person.say_something('x');
// 	person.walk();
// 	console.log(person.distance_traveled);
// 	person.run();
// 	console.log(person.distance_traveled);
// 	person.crawl();
// 	console.log(person.distance_traveled);
// 	return person;
// }
// console.log(personConstructor("Jay"));


function ninjaConstructor(name,cohort){
	var ninja = {
		name: 		name,
		cohort: 	cohort,
		belt_level: "Yellow Belt",
		levelUp: 	function(){
						if(ninja.belt_level==="Yellow Belt"){
							ninja.belt_level="Green Belt";
						} else if (ninja.belt_level==="Green Belt"){
							ninja.belt_level="Black Belt";	
						} else if (ninja.belt_level==="Black Belt"){
							console.log("No more belts for you Super Person, you have them all!");
						}
					},
	}
	console.log(ninja.name);
	console.log(ninja.cohort);
	console.log(ninja.belt_level);
	return ninja;
}
var ninja1 = ninjaConstructor("Jay","Northwestern Mutual");
ninja1.levelUp();
console.log(ninja1);
var ninja2 = ninjaConstructor("Matt","Coding Dojo");
ninja2.levelUp();
ninja2.levelUp();
console.log(ninja2);
var ninja3 = ninjaConstructor("Bob","Where is that?");
ninja3.levelUp();
ninja3.levelUp();
ninja3.levelUp();
console.log(ninja3);
