//returns undefined...  simulates something is happening after a random amount of time... and execute code after that time...
const orderSupplies = (item) => {
  // The orderSupplies function first finds the item you requested
  const warehouse = [   //array of objects
    { item: 'paint', action(){ return 'start mixing!' } },
    { item: 'brush', action(){ return 'start painting!' } }
  ];

  const deliveryTime = Math.random()*3000 + 1000;  //random time between 3k and 4k

  return new Promise((resolve,reject) => {
      setTimeout(() => {
        const foundItem = warehouse.find((obj) => obj.item === item);

        if (foundItem) {
          resolve(foundItem);
        }

      }, deliveryTime )    
  })
}

//these will return in random order...
//orderSupplies('paint', (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`));
//orderSupplies('brush', (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`));

//task is to write code to garuntee (don't touch the orderSupplies function, can touch anything after that..) 
//paint delivered happens first and brush delivered second...

// let paintFlag = false;
// let brush = null;

const printItem = (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`)

const promisePaint = orderSupplies('paint');
const promiseBrush = orderSupplies('brush');

promisePaint
    .then(function(item){
        printItem(item);
        return promiseBrush;
    })
    .then(function(item){
        printItem(item);
    })  

// const receiptA = new Promise(function(resolve, reject){
//   //starts automatically in pending state...
//   const rand = Math.random() * 1000;
//   setTimeout(function(){
//     resolve(item);
//   }, rand);
//   //reject();
// });

// receiptA
//   .then(function(item){
//     //if we do a .then, then we know the promise has been resolved...
//     //console.log('A has been resolved');
//     console.log('ITEM: ', item);
//     return receiptB;
//   })


//ES6 Notation
// orderSupplies('paint', (item) => {
//     paintItem(item);
//     paintFlag = true;
//     if(brush){
//         paintItem(brush);
//     }
// });
// orderSupplies('brush', (item) => {
//     if(paintFlag){
//         paintItem(item);
//     } else {
//       brush = item;
//     }
// });

//works for simple solutions, but can get complicated very fast...  promises help with this...
//promises are like a receipt

//regular notation
// orderSupplies('paint', function(item){
//     paintItem(item);
//     paintFlag = true;
//     if(brush){
//         paintItem(brush);
//     }
// });
// orderSupplies('brush', function(item){
//     if(paintFlag){
//         paintItem(item);
//     } else {
//       brush = item;
//     }
// });