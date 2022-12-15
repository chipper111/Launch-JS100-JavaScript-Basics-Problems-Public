/*
Exercise 5
12.14.22

Count the number of elements in scores that are 100 or above.
*/

let scores = [96, 47, 113, 89, 100, 102];
let count = 0;
scores.forEach((score) => {
  if (score > 100) {
    count++;
  }
});
console.log(count);
