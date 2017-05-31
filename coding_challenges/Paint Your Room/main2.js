//returns undefined...  simulates something is happening after a random amount of time... and execute code after that time...
const orderSupplies = (item, callback) => {
  // The orderSupplies function first finds the item you requested
  const warehouse = [   //array of objects
    { item: 'paint', action(){ return 'start mixing!' } },
    { item: 'brush', action(){ return 'start painting!' } }
  ];

  const deliveryTime = Math.random()*3000 + 1000;  //random time between 3k and 4k

  setTimeout(() => {
    const foundItem = warehouse.find((obj) => obj.item === item);

    if (foundItem) {
      callback(foundItem);
    }

  }, deliveryTime )    

}

//these will return in random order...
//orderSupplies('paint', (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`));
//orderSupplies('brush', (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`));

//task is to write code to garuntee (don't touch the orderSupplies function, can touch anything after that..) 
//paint delivered happens first and brush delivered second...

let paintFlag = false;
let brush = null;

const paintItem = (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`)

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
orderSupplies('paint', function(item){
    paintItem(item);
    paintFlag = true;
    if(brush){
        paintItem(brush);
    }
});
orderSupplies('brush', function(item){
    if(paintFlag){
        paintItem(item);
    } else {
      brush = item;
    }
});




