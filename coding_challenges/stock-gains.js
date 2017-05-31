//have previous days prices for Apple Stock

//different prices it was at during the day yesterday, in order based on times of day, prices from trades
//const ApplePricesYeesterday = [10,7,5,8,11,9]; //max profit is 6 for this array...

'use strict'
//APPLE  (recursive example...)
// Can't buy and sell in same time slots
//return best profit could have made from one purchase and one sale
//for this one, buy low at 5 and sell high at 11
// const applePricesYesterday = [5,4,3,2,1,1]; //different trades at these prices
// function getMaxProfit(applePricesYesterday, ind){
//     if (ind+1 >= applePricesYesterday.length){
//         return;
//     }
//     let maxDiff = applePricesYesterday[ind+1] - applePricesYesterday[ind];
//     for (let i = ind+2; i < applePricesYesterday.length; i++){
//         let diff = applePricesYesterday[i] - applePricesYesterday[ind];
//         if (diff > maxDiff){
//             maxDiff = diff;
//         }
//     }
//     let nextMax = getMaxProfit(applePricesYesterday, ind+1);
//     if (nextMax === undefined){
//         return maxDiff;
//     } else if (maxDiff > nextMax){
//         return maxDiff;
//     } else {
//         return nextMax;
//     }

//     var min = 0;
//     var max = 0;
//     for(var i=0;i<applePricesYesterday.length;i++){

//     }



// }
// console.log(getMaxProfit(applePricesYesterday, 0)); 
//different trades at these prices

const a = [14,2,5,6,19,1];  //17
//const a = [10,9,8,7,6,5];  //-1
//const a = [6,20,5,8,11,9];  //14
//const a = [10,7,5,8,11,9];  //6

function maxP(a){
    if(a.length<2){
    	//fast fail, invalid scenario...
    	console.log("invalide array scenario, needs at least 2 values present");
    	return -1;
    }
    //greedy concept, keeping the best solution so far and throwing the rest away
    //allows you to only have to loop through the array once.
    let min=a[0]
    let max=a[1]
    let profit=max-min
    for(let i=1; i<a.length; i++){
        //if (min > a[i] && profit < max - a[i]){
        if (a[i] < min && (max - a[i])/*<-new profit*/ > profit){
            min=a[i]  //reset min
            max=a[i+1]  //shift max over
        }
        //if (max < a[i+1]){
        if (a[i+1] > max){
            max = a[i+1]
        }
        if (max-min > profit){
            profit=max-min
        }
    }
    return profit
}
console.log(maxP(a, 0)); 