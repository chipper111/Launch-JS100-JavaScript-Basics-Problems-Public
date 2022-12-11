/*
Exercise 6
12.11.22


What's my value? (Part 6)

What will the following code log to the console and why? Don't run it until you have tried to answer.
*/

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
  console.log(b);
}

console.log(b);

// Expected Output => False, since console.log is referencing the globally created b variable and not the block scoped b created inside the if clause.
