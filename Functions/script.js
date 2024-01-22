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

// Q 7 - FUNCTION HOISTING  ? OUTPUT BASED QUE ?
//when we have a variable present in a scope we will not go and check globel scope
// var x = 20;

// var fun = function () {
//   console.log(x);
//   var x = 21;
// };
// fun();

// // Q 8 - FUNCTION HOISTING  ? OUTPUT BASED QUE ?
// //when we have a variable present in a scope we will not go and check globel scope
// var x = 20;

// var fun = function () {
//   console.log(x);
//   var x = 21;
// };
// fun();

// Q 9- PARAMS VS ARGUMENTS?

// function square(num) {
//   //  // parameters

//   console.log(num);
// }
// square(5); // arguments

// Q 10- PARAMS VS ARGUMENTS output?

function multyply(num1, num2) {
  console.log(num1 * num2);
}
var arr = [5, 6];
multyply(5, 6);

//-------------------------//-------------------------------//

function multyply(...nums) {
  // this is called rest operator
  console.log(nums[0] * nums[1]);
}
var arr = [5, 6];
multyply(...arr); // this is called spread operator

// Q 12- PARAMS VS ARGUMENTS output based questions?
// rest and spread parameters are must be the last formal parameters
const fn = (a, x, y, ...numbers) => {
  console.log(x, y, numbers);
};
fn(5, 6, 3, 2, 8, 7);

//-------------------------//-------------------------------//

// Q 11- WHAT IS A CALLBACK FUNCTION?
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to
//complete some kind of routine or action.

document.addEventListener("click", function (params) {}); // when we passing a function inside another function an this fun is manupulated inside this owns

// Q 13- WHAT IS A ARROW FUNCTION?

const add = (firstName, secondName) => {
  return firstName + secondName;
};

// Q 14- ARROW FUNCTION VS REGULAR FUNCTION?
// 1.SYNTAX
function squre(num) {
  // regular
  return num * num;
}

const scope = (num) => {
  // arrow
  return num * num;
};

//2.Implicit "return" keyword
const scope1 = (num) => num * num;

//3.arguments
function fn2() {
  console.log(arguments);
}
fn2(1, 2, 3);

const fn1 = () => {
  // arrow
  console.log(arguments);
};
fn1(1, 2, 3);

// this keyword
//-------------------------//-------------------------------//
