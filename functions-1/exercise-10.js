/*
Exercise 10
12.09.22


Locale Part 2

Similar to the previous exercise, now write a function that extracts the region code from a locale. For example:

*/

let extractRegion = (code) => {
  let underscoreIndex = code.indexOf("_");
  let dotIndex = code.indexOf(".");
  console.log(code.slice(underscoreIndex + 1, dotIndex));
};

extractRegion("en_US.UTF-8"); // 'US'
extractRegion("en_GB.UTF-8"); // 'GB'
extractRegion("ko_KR.UTF-16"); // 'KR'
