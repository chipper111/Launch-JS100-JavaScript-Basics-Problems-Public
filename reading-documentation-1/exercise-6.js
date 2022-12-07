/*
Exercise 6
12.07.22

What are the return values of the statements on lines 3 to 5? Refer to the MDN documentation about the Array object for help.

*/

let trees = ["birch", "pine", "sequoia", "palm tree"];

let l1 = trees[trees.length - 1]; // output => 'palm tree'
trees.pop();
let l2 = trees[trees.length - 1]; // output => 'sequoia'

console.log(l1);
console.log(l2);
