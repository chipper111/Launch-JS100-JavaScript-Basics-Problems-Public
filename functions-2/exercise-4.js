/*
Exercise 4
12.15.22


Calculate BMI

Create a function that calculates a person's body mass index (BMI). It should take two parameters: someone's height (in cm) and weight (in kg). The formula for calculating the BMI is as follows:
*/

let calculateBMI = (height, weight) => {
  height /= 100;
  return weight / height ** 2;
};
console.log(Number.parseFloat(calculateBMI(180, 80)).toFixed(2)); // "24.69"
