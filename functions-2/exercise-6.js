/*
Exercise 6
12.15.22 

Remove Last Char

Create a function removeLastChar that takes a string as an argument, and returns the string without the last character.
*/

let removeLastChar = (str) => console.log(str.slice(0, str.length - 1));

removeLastChar("ciao!"); // 'ciao'
removeLastChar("hello"); // 'hell'
