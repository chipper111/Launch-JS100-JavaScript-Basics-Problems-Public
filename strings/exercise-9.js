/*
Exercise 9
12.11.22


Capitalize Words

Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.
*/

let str = "launch school tech & talk";
let titleCase = (str) => {
  str = str.split(" ");
  str = str.map((word) => {
    word = word[0].toUpperCase() + word.slice(1);
    return word;
  });
  return str.join(" ");
};
console.log(titleCase(str));
