/*
Exercise 6
12.09.22

Write a function that compares the length of two strings. It should return -1 if the first string is shorter, 1 if the second string is shorter, and 0 if they're of equal length, as in the following example:

*/

function compareByLength(s1, s2) {
  if (s1.length > s2.length) return -1;
  else if (s2.length > s1.length) return 1;
  else return 0;
}

compareByLength("patience", "perseverance"); // -1
compareByLength("strength", "dignity"); //  1
compareByLength("humor", "grace"); //  0
