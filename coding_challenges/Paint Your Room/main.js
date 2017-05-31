//returns undefined...  simulates something is happening after a random amount of time... and execute code after that time...
const orderSupplies = (item, callback) => {
  // The orderSupplies function first finds the item you requested
  const warehouse = [   //array of objects
    { item: 'paint', action(){ return 'start mixing!' } },
    { item: 'brush', action(){ return 'start painting!' } }
  ];

  const deliveryTime = Math.random()*3000 + 1000  //random time between 3k and 4k
  setTimeout( () => {
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
//this first solution works but can take too long, come up with something more efficient...
// orderSupplies(
//     'paint', 
//     (delivery) => {
//         console.log(`${delivery.item} delivered! Time to ${delivery.action()}`);
//         orderSupplies(
//             'brush', 
//             (delivery) => {
//                 console.log(`${delivery.item} delivered! Time to ${delivery.action()}`);
//             }
//         );
//     }
// );

//something more efficient...
let paintFlag = false;
let brush = null;
const printItem = (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`)

orderSupplies('paint', (item) => {
    
    printItem(item);
    paintFlag = true;
    if(brush){
        printItem(brush);
    }
    //set flag once it's been printed...
});

orderSupplies('brush', (item) => {
    //don't run this until paint is printed...
    //otherwise wait until 
    if(paintFlag){
        printItem(item);      
    } else {
        brush = item;
    }
});


