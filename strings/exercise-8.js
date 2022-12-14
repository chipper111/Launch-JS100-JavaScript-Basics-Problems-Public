/*
Exercise 8 
12.11.22


Blank? Version 2

Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace. For example:
*/

let isBlank = (str) => {
  console.log(str.length === 0 || str.includes(" "));
};

isBlank("mars"); // false
isBlank("  "); // true
isBlank(""); // true
