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

// 3. Declaration without initialization
