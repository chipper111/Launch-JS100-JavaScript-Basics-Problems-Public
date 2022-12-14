/*
Exercise 7
12.11.22

lank? Version 1

Write a function that checks whether a string is empty or not. For example:
*/

let isBlank = (str) => console.log(str.length === 0);

isBlank("mars"); // false
isBlank("  "); // false
isBlank(""); // true
