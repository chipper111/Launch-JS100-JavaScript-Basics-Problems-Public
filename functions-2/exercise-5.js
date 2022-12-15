/*
Exercise 5
12.15.22


Calculate Cat Age

Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:

    The first human year corresponds to 15 cat years.
    The second human year corresponds to 9 cat years.
    Every subsequent human year corresponds to 4 cat years.

For example:
*/

let catAge = (humanYears) => {
  if (humanYears == 0) {
    console.log(0);
  } else if (humanYears === 1) {
    console.log(15);
  } else if (humanYears === 2) {
    console.log(15 + 9);
  } else {
    console.log(15 + 9 + 4 * (humanYears - 2));
  }
};

catAge(0); // 0;
catAge(1); // 15;
catAge(2); // 24;
catAge(3); // 28;
catAge(4); // 32;
