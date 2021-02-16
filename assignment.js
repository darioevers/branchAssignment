// ASSIGNMENT 1:
const sumOfNumbers = (arr) => {
  let sum = arr.reduce((a, b) => a + b, 0);
  return sum;
};
console.log(sumOfNumbers([1, 2, 3, 4]));
