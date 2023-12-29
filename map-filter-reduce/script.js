// MAP, FILTER, REDUCE
//1. what is map()?

// const nums = [1, 2, 3, 4];
// const multiflyThree = nums.map((num, i, arr) => {
//   return num * 3;
// });
// console.log(multiflyThree);
//-------------------------//-------------------------------//
//2. what is filter?
// const nums = [1, 2, 3, 4, 5, 6];
// const moreThanThree = nums.filter((num) => {
//   return num < 3;
// });
// console.log(moreThanThree);
//-------------------------//-------------------------------//
//3. what is reduce()?

// const nums = [1, 2, 3, 4, 5]; // if there is no initial value, it takes first element of array as value for accumulator
// const sum = nums.reduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);
// console.log(sum);

//-------------------------//-------------------------------//
// 4.POLYFILL FOR MAP()

//Array.map((num,i,arr)=>{})

// this is a costom map function

// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }
//   return temp;
// };

// const nums = [1, 2, 3, 4];
// const multiflyThree = nums.myMap((num, i, arr) => {
//   return num * 3;
// });
// console.log(multiflyThree);

//-------------------------//-------------------------------//
// 5.POLYFILL FOR FILTER()

// Array.prototype.myFilter = function (cb) {
//   let temp = [];

//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) temp.push(this[i]);
//   }
//   return temp;
// };
// const nums = [1, 2, 3, 4, 5, 6];
// const moreThanThree = nums.myFilter((num) => {
//   return num > 3;
// });
// console.log(moreThanThree);

//-------------------------//-------------------------------//
// 6.POLYFILL FOR REDUCE()

// Array.prototype.myReduce = function (cb, initialValue) {
//   var accumulator = initialValue;

//   for (let i = 0; i < this.length; i++) {
//     accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
//   }
//   return accumulator;
// };
// const nums = [1, 2, 3, 4, 5];
// const sum = nums.myReduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);
// console.log(sum);

//7. MAP VS FOREACH
