// // What happens if you do the following?
// console.log(a);
// var a = "weird";
// // Will it throw an error?  What will it print, if it doesn't throw an error?
// // How about this?
// console.log(typeof(b));
// var b = "weird too";
// console.log(typeof(b));

// (10<20) ? console.log(true) : console.log(false)

// var ninja = {
//   name:'Susanna',
//   MEAN_belt:10,
//   iOS_belt:10,
//   python_belt:10,
//   php_belt:9, // she hadn't mastered deploying yet!
//   ruby_belt:9.75 // done in 1.5 hrs though!
// }
// for (var key in ninja) {
//   if (ninja.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(ninja[key]);
//   }
// }

// var dojo = {};                                 // creates an empty object
// dojo = {
//   name: 'Coding Dojo',                         // property can store a string
//   number_of_students: 25,                      // property can store a number
//   instructors: ['Andrew', 'Michael', 'Jay'],   // property can store arrays
//   location: {                                  // property can even store another object!
//     city: 'San Jose',
//     state: 'CA',
//     zipcode: 95112
//   }
// }                                              // access object properties with dot (.) notation
// console.log(dojo.name, dojo.number_of_students, dojo.instructors, dojo.location);
// console.log(dojo["name"]);                     // or bracket [] notation (note: specify key in quotes)
// dojo.number_of_students = 40;                  // we can reassign any of the properties
// dojo.location.city = "Bellevue";
// dojo.location.state = "Washington";
// dojo.location.zipcode = "unknown";             // note that we can change this from integer to string
// dojo.phone_number = 1234567890 ;

// var glazedDonuts = [
//   {
//     frosting: 'glazed',
//     type: 'old fashioned',
//     age: '45',
//     time: 'minutes'
//   },
//   {
//     frosting: 'glazed',
//     type: 'regular',
//     age: '5',
//     time: 'minutes'
//   },
//   {
//     frosting: 'glazed',
//     type: 'jelly filled',
//     age: '1',
//     time: 'seconds'
//   }
// ];

// var purchase;
// //You
// if((glazedDonuts[0].age < 25 && glazedDonuts[0].time == 'minutes') || glazedDonuts[0].time == 'seconds'){
//   //shop owner
//   purchase = glazedDonuts[0];
// }
// else {
//   console.log('sorry it has been out a bit longer');
// }

// var varFunction;           // the variable declaration gets hoisted to the top
// varFunction();             // this tries to invoke "undefined": we get "undefined is not a function"
// varFunction = function() {
//   console.log("How will this get hoisted?")
// }

function NinjaConstructor(name, age, prevOccupation) {
  var ninja = {};     // the object that will eventually be returned
/*
Addition of properties to ninja.
*/
  ninja.name = name;
  ninja.age = age;
  ninja.prevOccupation = prevOccupation;
/*
Addition of methods to ninja
*/
  ninja.introduce = function() {
    console.log("Hi my name is " + ninja.name + ". I used to be a " + ninja.prevOccupation + " and now I'm a Ninja!");
  }
/*
return ninja
*/
  return ninja;    
}


                      // Create the Andrew Ninja
var Andrew = NinjaConstructor("Andrew", 24, "Teacher");
Andrew.introduce();
                      // Create the Michael Ninja
var Michael = NinjaConstructor("Michael", 34, "Founder");
                      // here we redefine the introduce method for a particular "Instance" or Object
Michael.introduce = function() {
  console.log("I am the Sensei!")
}
Michael.introduce();