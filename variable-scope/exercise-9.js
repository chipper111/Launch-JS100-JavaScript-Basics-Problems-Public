/*
Exercise 9
12.11.22


What's my value? (Part 9)

What will the following code log to the console and why? Don't run it until you have tried to answer.

*/

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

// Expected Output => TypeError since myFunction() has access to the global variable a, but we are not allowed to reassign a const variable.
