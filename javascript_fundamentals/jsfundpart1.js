// var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]

// for(var i=0;i<x.length;i++){
// 	console.log(x[i]);
// }

// x.push(100);
// console.log(x);

// var x2 = ["hello", "world", "JavaScript is Fun"];
// x.push(x2);
// console.log(x);

// var sum=0;
// for(var i=2;i<500;i++){
// 	sum = sum+i;
// }
// console.log(sum);

// var a = [1, 5, 90, 25, -3, 0];
// var min = a[0];
// for(var i=1;i<a.length;i++){
// 	if(a[i]<min){
// 		min=a[i];
// 	}
// }
// console.log(min);

// var a = [1, 5, 90, 25, -3, 0];
// var avg = 0;
// for(var i=0;i<a.length;i++){
// 	avg=avg+a[i];
// }
// avg=avg/a.length;
// console.log(avg);

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (var attr in newNinja) {
  console.log(`newNinja.${attr} = ${newNinja[attr]}`);
}