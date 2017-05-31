//main2.js works for simple solutions, but can get complicated very fast...  promises help with this...
//promises are like a receipt
//promises are "thenable"  can do a .then on them...

// const receipt = new Promise((resolve, reject) => {
// 	//starts automatically in pending state...  can only be set once...
// 	rejected();
// 	resolved();
// })

//these two receipts resolve at random time intervals...
const receiptA = new Promise(function(resolve, reject){
	//starts automatically in pending state...
	const rand = Math.random() * 1000;
	setTimeout(function(){
		resolve(item);
	}, rand);
	//reject();
});
// const receiptB = new Promise(function(resolve, reject){
// 	//starts automatically in pending state...
// 	const rand = Math.random() * 1000;
// 	setTimeout(function(){
// 		resolve();
// 	}, rand);
// 	//reject();
// });

receiptA
	.then(function(item){
		//if we do a .then, then we know the promise has been resolved...
		//console.log('A has been resolved');
		console.log('ITEM: ', item);
		return receiptB;
	})
	.then(function(){
		console.log('B has been resolved');
	})

// Promise: starts in pending -> then go to either resolved or rejected... (they can 
//never go back to previous state once they are resolved or rejected)

// receipt
// 	.then(function(){
// 		//if we do a .then, then we know the promise has been resolved...
// 		console.log('this promise has been resolved');
// 	})
// 	.catch(function(){
// 		console.log('this promise has been rejected');
// 	});