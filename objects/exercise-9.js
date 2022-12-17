/*
Exercise 9
12.17.22

..and vice versa

Write code that does the reverse, starting from a nested array of pairs and building an object.
*/

let person = {};

let nestedArray = [
  ["title", "Duke"],
  ["name", "Nukem"],
  ["age", 33],
];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

person = Object.fromEntries(nestedArray);

// for (let item of nestedArray) {
//   person[item[0]] = item[1];
// }

console.log(person);
