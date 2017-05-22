//part 1 - reqcreate as functions

// function sum(x,y){
// 	var sum=0;
// 	for(var i=x;i<y;i++){
// 		sum = sum+i;
// 	}
// 	console.log(sum);	
// }
// sum(1,500);

// var a = [1, 5, 90, 25, -3, 0];

// function min(a){
// 	var min = a[0];
// 	for(var i=1;i<a.length;i++){
// 		if(a[i]<min){
// 			min=a[i];
// 		}
// 	}
// 	return min;
// }
// console.log(min(a));

// function avg(a){
// 	var avg = 0;
// 	for(var i=0;i<a.length;i++){
// 		avg=avg+a[i];
// 	}
// 	return avg/a.length;
// }
// console.log(avg(a));

//part 2 - rewrite as anonymous

// var sum = function(x,y)
// {
// 	var sum=0;
// 	for(var i=x;i<y;i++){
// 		sum = sum+i;
// 	}
// 	console.log(sum);
// }
// sum(1,500);

// var min = function(a)
// {
// 	var min = a[0];
// 	for(var i=1;i<a.length;i++){
// 		if(a[i]<min){
// 			min=a[i];
// 		}
// 	}
// 	return min;
// } 
// var a = [1, 5, 90, 25, -3, 0];
// console.log(min(a));

// var avg = function(a){
// 	var avg = 0;
// 	for(var i=0;i<a.length;i++){
// 		avg=avg+a[i];
// 	}
// 	return avg/a.length;
// }
// var a = [1, 5, 90, 25, -3, 0];
// console.log(avg(a));

//part 3 - rewrite these as methods of an object...

//object constructor
//have these defined as methods

// var methods = {
// 	sum: 	function (x,y){
// 				var sum=0;
// 				for(var i=x;i<y;i++){
// 					sum = sum+i;
// 				}
// 				console.log(sum);	
// 			},
// 	min: 	function (a){
// 				var min = a[0];
// 				for(var i=1;i<a.length;i++){
// 					if(a[i]<min){
// 						min=a[i];
// 					}
// 				}
// 				return min;
// 			},
// 	avg: 	function (a){
// 				var avg = 0;
// 				for(var i=0;i<a.length;i++){
// 					avg=avg+a[i];
// 				}
// 				return avg/a.length;
// 			}
// }

// methods.sum(1,500);

// var a = [1, 5, 90, 25, -3, 0];
// console.log(methods.min(a));

// console.log(methods.avg(a));

var person = {
	name: 				"Matt Vobejda",
	distance_traveled: 	0,
	say_name: 			function(){
							console.log(person.name);
						},
	say_something: 		function(parm){
							if(parm === 'I am cool'){
								console.log(`${person.name} says 'I am cool'`);
							}
						},
	walk: 				function(){
							console.log(`${person.name} is walking`);
							person.distance_traveled+=3;
						},
	run: 				function(){
							console.log(`${person.name} is running`);
							person.distance_traveled+=10;	
						},
	crawl: 				function(){
							console.log(`${person.name} is crawling`);
							person.distance_traveled+=1;	
						},  
}

console.log(person.name);
console.log(person.distance_traveled);
person.say_name();
person.say_something('I am cool');
person.say_something('x');
person.walk();
console.log(person.distance_traveled);
person.run();
console.log(person.distance_traveled);
person.crawl();
console.log(person.distance_traveled);
