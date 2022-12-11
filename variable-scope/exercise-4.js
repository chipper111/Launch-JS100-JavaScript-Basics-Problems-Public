/*
Exercise 4
12.11.22


What's my value? (Part 4)

What will the following code log to the console and why? Don't run it until you have tried to answer.

*/

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

// Expected Output => Should be 1, we are accessing myFunction() which is globally scoped, then console.log inside of myFunction() has access to variable a because it is one level outside the if clause.
