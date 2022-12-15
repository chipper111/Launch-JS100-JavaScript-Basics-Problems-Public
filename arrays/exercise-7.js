/*
Exercise 7
12.14.22

Equality

Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?
*/

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

// Expected output => False b/c arrays are objects, so the strict equality is checking to see if they point to the same memory location. They do not since they are two different objects.
