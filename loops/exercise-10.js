/*
Exercise 10
12.08.22


Do...While

What is the difference between the following two code snippets? Check the MDN documentation on while and do...while.
*/

let counter1 = 0;

while (counter1 > 0) {
  console.log("Woooot!");
  counter1 -= 1;
}

let counter2 = 0;

do {
  console.log("Woooot!");
  counter2 -= 1;
} while (counter2 > 0);

/* Solution => 

The difference between them is that the while loop will never run since counter is not great than 0 but the do while loop will run once and then see if counter is greater than 0. It is not greater than zero so only one statement of 'Woooot!' will be consoled. 

*/
