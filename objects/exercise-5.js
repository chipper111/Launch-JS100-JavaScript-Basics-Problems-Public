/*
Exercise 5
12.17.22


Dot Notation vs Bracket Notation

Before running any code, determine what difference there will be in the output of the two code snippets below (if any).
*/

// let ocean = {};
// let prefix = "Indian";

// ocean.prefix = "Pacific";

// console.log(ocean);

let ocean = {};
let prefix = "Indian";

ocean[prefix] = "Pacific";

console.log(ocean);

/* 
Expected Ouput => 

1. { prefix: 'Pacific' }
2. { Indian: 'Pacific' }

*/
