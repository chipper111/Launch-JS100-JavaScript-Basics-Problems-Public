/*
Exercise 11
12.14.22


Checking items off the grocery list

We have made a grocery list, and as we check off items on that list, we would like to remove them.

Write code that removes the items from 'groceryList' one by one, until it is empty. If you log the elements you remove, the expected behavior would look as follows.

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

groceryList; // []
*/

let groceryList = [
  "paprika",
  "tofu",
  "garlic",
  "quinoa",
  "carrots",
  "broccoli",
  "hummus",
];

// let length = groceryList.length;
// for (let i = 0; i < groceryList.length; i++) {
//   console.log(groceryList.shift());
// }
// console.log(groceryList); // []

while (groceryList.length > 0) {
  console.log(groceryList.shift());
}

console.log(groceryList);