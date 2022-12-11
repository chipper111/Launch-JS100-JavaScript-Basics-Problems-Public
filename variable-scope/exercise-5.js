/*
Exercise 5
12.11.22


What's my value? (Part 5)

What will the following code log to the console and why? Don't run it until you have tried to answer.
*/

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

// Expected Output => 1, 2 The first output will be 1 since we still have access to variable a which is in its outer scope. We then create another variable by the name of a inside the if clause. Since we create a new inner scope, we are allowed to create a new variable even with the same name as the other variable in its outerscope. We then get an output of 2.
