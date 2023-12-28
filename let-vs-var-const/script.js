// var vs let vs const
// 1. scope

// function name() {
//   // this is a function scope
// }

// {
//   // this is will a block scope
// }

// var a = 5; // so var is a functional scope
// console.log(a);

// {
//   // let and const is a block scope
//   let a = 6;
//   console.log(a);
// }
// console.log(a);

// VARIABLE SHADOWING

// function test() {
//   let b = "hello";

//   if (true) {
//     let b = "hi";
//     console.log(b);
//   }
//   console.log(b);
// }
// test();

// ELLEGAL SHODOWING
// function test() {
//   var a = "bye";
//   let b = "hello";

//   if (true) {
//     let b = "hi";
//     var a = "byee";
//     console.log(a);
//     console.log(b);
//   }
//   // console.log(b);
// }
// test();

// 2. Declaration

// var declared as many time its not given any error but let and const not declared many time
// let and scope can not be declared in same scope but var can be
// const a;
// const a;

// 3. Declaration without initialisation
// var a; // var can be declared with any value
// let a; // let  can be declared with any value

// const a = 5; // but const can not be declared without initializer or any value

// 4. Re- initialization

// var and let are re-initiaalize their value but const gives error because its assignment to constant variable
// var and let can be updated but const never
// const a = 5;
// a = 6;

// 5.Hoisting

// console.log(count);
// let count = 1;
// var count2 = 2;

function abc() {
  console.log(a);
  var a = 10;
}
abc();
