// //sample
// var hello = "interesting";
// function example() {
//   var hello = "hi!";
//   console.log(hello);
// }
// example();
// console.log(hello);

// //declarations get hoisted
// var hello;
// function example() {
//   var hello;
//   hello = "hi!";
//   console.log(hello);
// }
// //assignments and invocation maintain order
// hello = "interesting";
// example();
// console.log(hello);

// //problem 1:
// //original
// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable);
// }
// console.log(first_variable);

// //declarations get hoisted
// var first_variable;
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable);
// }
// // //assignments and invocation maintain order
// console.log(first_variable);
// first_variable = "Yipee I was first!";
// console.log(first_variable);

//problem 2:
// //original
// var food = "Chicken";
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";       // CAREFUL!
//   console.log(food);
// }
// eat();
// console.log(food);

// //declarations get hoisted
// var food;
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food; 
//   food = "gone";       // CAREFUL!
//   console.log(food);
// }
// // //assignments and invocation maintain order
// food = "Chicken";
// eat();
// console.log(food);

//output - print "half-chicken", print "gone", print "Chicken"

//problem 3:
// //original
// var new_word = "NEW!";
// function lastFunc() {
//   new_word = "old";
// }
// console.log(new_word);

//declarations get hoisted
var new_word;
function lastFunc() {
  new_word = "old";
}
// //assignments and invocation maintain order
new_word = "NEW!";
console.log(new_word);
//output - print "NEW!"