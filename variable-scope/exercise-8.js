/*
Exercise 8
12.11.22


What's my value? (Part 8)

What will the following code log to the console and why? Don't run it until you have tried to answer.
*/

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

// Expected Output => 2, since we are passing b=2 as a local variable to the myFunction. Then, myFunction() makes a=2 and logs 2.
