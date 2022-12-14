/*
Exercise 5
12.11.22


Case-insensitive Equality

Given strings like the following, how can you check whether they're equal irrespective of whether the characters they contain are upper or lower case?
*/

let string1 = "Polar Bear";
let string2 = "Polar bear";
let string3 = "Penguin";

console.log(string1.toLowerCase() === string2.toLowerCase());
