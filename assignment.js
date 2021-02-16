// I cannot find assignments where I know about 3 different solving ways.

// Assignment 1: Loop, .reduce, ?????
// Assignment 2: Ternary Operator, If else, Switch
// Assignment 3: Ternary Operator, If else, Switch

// ASSIGNMENT 1:
const sumOfNumbers = (arr) => {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumOfNumbers([1, 2, 3, 4]));
