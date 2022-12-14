/*
Exercise 3

Repeat

Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().
*/

let repeat = (count, str) => {
  for (let i = 0; i < count; i++) {
    console.log(str);
  }
};

repeat(3, "ha"); // 'hahaha'
