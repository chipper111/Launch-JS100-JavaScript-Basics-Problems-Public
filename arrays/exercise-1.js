/*
Exercise 1
12.14.22


First Element

Write a function that returns the first element of an input array. For example:


first(['Earth', 'Moon', 'Mars']); // 'Earth'

What would you return if the input array was empty?
*/

let first = (arr) => (arr[0] ? arr[0] : "Empty Slot!");

let arr = [, "Moon", "Mars"];

console.log(first(arr));
