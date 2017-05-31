'use strict'
//problem 1
// setTimeout(function(){
// 	console.log('TIMED OUT!');
// }, 600);

//problem 2
// var promise = new Promise(function (fulfill, reject) {
// 	setTimeout(function(){
// 		fulfill();
// 	}, 600);
// });

// promise
// 	.then(function(){
// 		console.log('FULFILLED!');
// 	})

//problem 3
// var promise = new Promise(function (fulfill, reject) {
// 	setTimeout(function(){
// 		//var error = {message: 'REJECTED!'};
// 		reject(new Error('REJECTED!'));
// 	}, 650);
// });

// function onReject(error) {
//   	console.log(error.message);
// }

// promise.then(null, onReject);

//problem 4
/*
 * This code is bad, but nonetheless common and has the nasty result of
 * calling the supplied callback more than once (possibly destroying the
 * earth?). It is conventional to return the first invocation of callback
 * but it’s easy to overlook!
 */

// function myFunc(user, callback) {
//   if (user) {
//     callback(null, user);
//   }

//   return callback('No user was found', null);
// }

// var promise = new Promise(function(fulfill, reject) {
// 	fulfill('I FIRED');
// 	reject(new Error('I DID NOT FIRE'));
// });

// function onRejected(error) {
//   	console.log(error.message);
// }

//promise.then(console.log, onRejected);

//problem 5

// var promise = new Promise(function(fulfill, reject) {
// 	fulfill('PROMISE VALUE');
// });

// promise.then(console.log);
// console.log("MAIN PROGRAM");

//problem 6 (DIDN'T REALLY GET...)

//var promise = Promise.resolve('SECRET VALUE');
// setTimeout(function(){
// 	var promise = Promise.reject(new Error('SECRET VALUE'));
// }, 600);
// var promise = Promise.reject(new Error('SECRET VALUE'));
// //console.log(promise.message);

// promise.catch(function (err) {
// 	//console.log("I'm in here!");
// 	console.log('THERE IS AN ERROR!!!');
// 	console.log(err.message);
// });

//problem 7  (NO CLUE!)

// setTimeout(function(){},850);
// var firstPromise = first();

// var secondPromise = firstPromise.then(function (val) {
// 	return second(val);
// });

// secondPromise.then(console.log);

//first().then(second).then(console.log);

//problem 8 (eventually figured out...)

// function attachTitle(firstArg){
// 	return 'DR. '+firstArg;
// }
// var promise = Promise.resolve('MANHATTAN');

// promise.then(attachTitle).then(console.log);

//problem 9 (there code would match if not for some C: directory pathes, my code was quite different...  :())
//what they built
// function parsePromised (json) {
//   return new Promise(function (fulfill, reject) {
//     try {
//       fulfill(JSON.parse(json));
//     } catch (e) {
//       reject(e);
//     }
//   });
// };

// //console.log(process.argv[2]);
// parsePromised(process.argv[2])
// .then(null, console.log)


//what I built
// function parsePromised(){
// 	try {
//     	var obj = JSON.parse('{ "name""John", "age":30, "city":"New York"}');
//     	var promise = Promise.resolve('Wahoo, it worked!');
//     } catch (e) {
//     	console.log('printing my console.log' +e);
//     	var promise = Promise.reject(new Error('FAIL!!!!!'));
//     }

// 	return promise;
// }
// parsePromised().catch(function (err) {
// 	console.log('THERE IS AN ERROR!!!');
// 	console.log(err.message);
// });

//problem 10

function alwaysThrows(){
	var promise = Promise.reject(new Error('OH NOES'));
}

function iterate(num){
	console.log(num);
	return num+1;
}




//Ray walking through an example...
const somePromise = new Promise (()=>{
	const rand = Math.random();
	if(rand>0.5){
		resolve();
	} else {
		reject();
	}
})

somePromise
	.then(fuction(){
		console.log('resolved!');
	}), function(){
		console.log('rejected!');
	}
//or
somePromise
	.then(fuction(){
		console.log('resolved!');
	}), function(){
		console.log('rejected!');
	}

//if you stack .then's and using a catch at the end, if any of them throw an error, they would automatically drop to the catch
//