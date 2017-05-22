function runningLogger(){
	console.log("I am running!");
}
//runningLogger();

// function multiplyByTen(value){
// 	return value*10
// }
// console.log(multiplyByTen(5));

// function stringReturnOne(){
// 	return "String 1"
// }
// function stringReturnTwo(){
// 	return "String 2"
// }
// console.log(stringReturnOne());
// console.log(stringReturnTwo());

// function caller(func){
// 	if(typeof func==="function"){
// 		func();
// 	}
// }
// var x = 0;
// caller(runningLogger);
// caller(x);

function myDoubleConsoleLog(func1,func2){
	if(typeof func1==="function"){
		func1();
	}
	if(typeof func2==="function"){
		func2();
	}
}
// var x = 0;
// myDoubleConsoleLog(runningLogger,runningLogger);
// myDoubleConsoleLog(x,x);
// myDoubleConsoleLog(runningLogger,x);
// myDoubleConsoleLog(x,runningLogger);

function caller2(func3){
	console.log(func3);
	console.log("Starting...");
	if(typeof func3==="function"){
		setTimeout(func3,2000);
		console.log("I'm here!");
	}
	console.log("...Ending");
	return "interesting"
}
console.log(
	caller2(
		function(){
			myDoubleConsoleLog(runningLogger,runningLogger) //makes sure that it's not invoked right away...
		}
	)
);