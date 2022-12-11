/*
Exercise 3
12.11.22


What's my value? (Part 3)

What will the following code log to the console and why? Don't run it until you have tried to answer.

*/

if (true) {
  let myValue = 20;
}

console.log(myValue);

// Expected output => Reference error since let is block scoped  and console.log is trying to access the myValue variable globally. /*
