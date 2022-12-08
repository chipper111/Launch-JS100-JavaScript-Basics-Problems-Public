/*
Exercise 10
12.08.22


TypeError

Run the following code. => below

You'll see that it raises an error:

TypeError: tweet.length is not a function

Check the documentation of both TypeError and length, in order to find out what causes the error.

*/

let tweet = "Woohoo! :-)";

if (tweet.length > 140) {
  console.log("Tweet is too long!");
}

// The error is caused because length is a property and is not able to be called like a function with parenthesis.
