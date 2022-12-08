/*
Exercise 9
12.08.22


Finding Nemo

Loop over the elements of the array fish, logging each one. Terminate the loop immediately after logging the string 'Nemo'.
*/

let fish = ["Dory", "Marlin", "Gill", "Nemo", "Bruce"];
for (let e of fish) {
  console.log(e);
  if (e === "Nemo") break;
}
