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

// we can paas them of another fun just like a variable and we can also manupulate retun them from of that fun is called first class fun.

function square(nums) {
  return nums * nums;
}

function displaySqure(fn) {
  console.log("square is " + fn(5));
}
displaySqure(square);
