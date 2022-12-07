/*
Exercise 8
12.07.22

*/

// Consider the following code snippet:
let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(" ");
let isValid = tweet.length < 140;

typeof tweet; // string
typeof words; // object
typeof isValid; // booolean

// What will the following statements return?
console.log(typeof tweet);
console.log(typeof words);
console.log(typeof isValid);
