/*
Exercise 6
12.08.22

*/

// The MDN page for Date lists two methods to get the year of a date.

let today = new Date();

console.log(today.getYear()); // 122
console.log(today.getFullYear()); // 2022

// What is the difference between the two methods and which one should you use?
// You should use getFullYear() because getYear() is deprecated and returns the difference between current year and 1900.
