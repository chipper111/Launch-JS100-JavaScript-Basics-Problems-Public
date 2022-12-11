/*
Exercise 2
12.11.22


What's my value? (Part 2)

What will the following code log to the console and why? Don't run it until you have tried to answer.

*/

console.log(greeting);

let greeting = "Hello world!";

// expected output => Error since we are trying to access a variable before it was declared. When declaring a variable with the keyword let, no hoisting is done so we don't have access to a variable before we declare it.
