/*
Exercise 2
12.14.22

Write a function that returns the last element of an input array. For example:

last(['Earth', 'Moon', 'Mars']); // 'Mars'
*/

let last = (arr) => arr[arr.length - 1];

let arr = ["Earth", "Moon", "Mars"];

console.log(last(arr));
