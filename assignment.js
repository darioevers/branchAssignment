// FOR LOOP:
const sumOfNumbers = (arr) => {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumOfNumbers([1, 2, 3, 4]));

// REDUCE:
const sumOfNumbers = (arr) => {
  let sum = arr.reduce((a, b) => a + b, 0);
  return sum;
};
console.log(sumOfNumbers([1, 2, 3, 4]));
