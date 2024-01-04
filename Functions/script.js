// FINCTIONS IN JAVASCRIPT

// Q 1 - WHAT IS FUNCTION DECLARATION?

// function squre(num) {
//   // this is a function defination or declran
//   return num * num;
// }
//-------------------------//-------------------------------//
// // Q 2 - WHAT IS FUNCTION EXPRESSION?

// // when we store a function inside a variable its called a function expression.

// // example
// const square = function (nums) {
//   return nums * nums;
// };
// console.log(square(5));

//-------------------------//-------------------------------//
// Q 3 - WHAT IS FIRST CLass FUNCTION ?

// we can paas them of another fun just like a variable and we can also manupulate retun them from that fun is called first class fun.

// function square(nums) {
//   return nums * nums;
// }

// function displaySqure(fn) {
//   console.log("square is " + fn(5));
// }
// displaySqure(square);

//-------------------------//-------------------------------//
// Q 4 - WHAT IS IIFE?
// IIFE MEANS EMMEDIATELY INVOKED FUNCTION EXPRESSION
// (function square(num) {
//   console.log(num * num);
// })(5);

// //-------------------------//-------------------------------//
// // Q 5 - IIFE - OUTPUT BASED QUE ?

// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(2);
// })(1);

//-------------------------//-------------------------------//
// Q 6 - FUNCTION SCOPE  ? OUTPUT BASED QUE ?

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// //-------------------------//-------------------------------//
// // Q 6 - FUNCTION HOISTING  ?
// // functions are hoisted comletely

// functionName();
// function functionName() {
//   console.log("hello");
// }

// console.log(a);
// var a = 5;
// // console.log(a);

// Q 6 - FUNCTION HOISTING  ? OUTPUT BASED QUE ?
