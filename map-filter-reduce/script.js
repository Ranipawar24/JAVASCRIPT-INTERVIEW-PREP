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

//-------------------------//-------------------------------//

//7. MAP VS FOREACH

// 8. RETURN ONLY NAME OF STUDENTS IN CAPITAL

// let students = [
//   { name: "piyush", rollNum: 21, marks: 70 },
//   { name: "Rani", rollNum: 20, marks: 75 },
//   { name: "Angel", rollNum: 31, marks: 90 },
//   { name: "Pinky", rollNum: 41, marks: 80 },
// ];
// // using for loop method

// // let names = [];
// // for (let i = 0; i < students.length; i++) {
// //   names.push(students[i].name.toUpperCase());
// // }
// // console.log(names);

// // using for map method
// const names = students.map((stu) => stu.name.toUpperCase());
// console.log(names);

//-------------------------//-------------------------------//

// 8. RETURN ONLY DETAILS OF THOSE WHO SCORED MORE THAN 60 MARKS?

// let students = [
//   { name: "piyush", rollNum: 21, marks: 70 },
//   { name: "Rani", rollNum: 20, marks: 75 },
//   { name: "Angel", rollNum: 31, marks: 90 },
//   { name: "Pinky", rollNum: 41, marks: 80 },
// ];

// const details = students.filter((stu) => stu.marks > 70);
// console.log(details);

//-------------------------//-------------------------------//

// 9. MORE THAN 60 MARKS AND ROLLNUMBER GREATER THAN 15

// let students = [
//   { name: "piyush", rollNum: 21, marks: 70 },
//   { name: "Rani", rollNum: 20, marks: 75 },
//   { name: "Angel", rollNum: 31, marks: 90 },
//   { name: "Pinky", rollNum: 41, marks: 80 },
// ];

// const details = students.filter((stu) => stu.marks > 76 && stu.rollNum > 15);
// console.log(details);

//-------------------------//-------------------------------//

// 10. SUM OF MARKS OF ALL STUDENTS
