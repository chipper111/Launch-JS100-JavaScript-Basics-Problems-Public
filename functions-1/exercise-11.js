/*
Exercise 11
12.09.22

Building on your solutions from the previous exercises, write a function localGreet that takes a locale as input, and returns a greeting. The locale allows us to greet people from different countries differently also when they share the language, for example:

*/

let extractRegion = (code) => {
  let underscoreIndex = code.indexOf("_");
  let dotIndex = code.indexOf(".");
  return code.slice(underscoreIndex + 1, dotIndex);
};

let extractLanguage = (code) => code.slice(0, 2);

let greet = (code) => {
  lang = extractLanguage(code);
  region = extractRegion(code);
  if (lang === "en") {
    if (region === "US") {
      console.log("Hey!");
    } else if (region === "GB") {
      console.log("Hello!");
    } else if (region === "AU") {
      console.log("Howdy!");
    } else {
      console.log("Hi!");
    }
  } else if (lang === "fr") {
    console.log("Salut!");
  } else if (lang === "pt") {
    console.log("Ola!");
  } else if (lang === "de") {
    console.log("Hallo!");
  } else if (lang === "sv") {
    console.log("Hej!");
  } else if (lang === "af") {
    console.log("Haai!");
  } else {
    console.log("Unknown Language Code!");
  }
};

let localGreet = (locale) => {
  greet(locale);
};

localGreet("en_US.UTF-8"); // 'Hey!'
localGreet("en_GB.UTF-8"); // 'Hello!'
localGreet("en_AU.UTF-8"); // 'Howdy!'

localGreet("fr_FR.UTF-8"); // 'Salut!'
localGreet("fr_CA.UTF-8"); // 'Salut!'
localGreet("fr_MA.UTF-8"); // 'Salut!'
