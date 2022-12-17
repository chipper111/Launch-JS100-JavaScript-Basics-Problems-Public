/*
Exercise 6
12.17.22


Is it true?

We are experimenting with some code to get more comfortable working with objects. Run the snippet below and explain why "It's true!" is never output.

*/

let obj = {
  num: 42,
  "property name": "string value",
  true: false,
  fun: function () {
    console.log("Harr Harr!");
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

/*
Solution => 
We are checking if any property in obj is the same value as the boolean true. It will never equate to true b/c all object property names are coerced into strings. So even if you created a property name of true it would really be a string so it wouldn't be the same as boolean true. However, if were using the non-strict equality operator, then it would equate to true since JS will coerce one of the operands into a string or boolean to make the comparison true. 
*/
