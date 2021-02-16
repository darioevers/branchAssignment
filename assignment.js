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
const sumOfNumbersTwo = (arr) => {
  let sum = arr.reduce((a, b) => a + b, 0);
  return sum;
};
console.log(sumOfNumbersTwo([1, 2, 3, 4]));

// WHILE LOOP
const sumOfNumbersThree = (arr) => {
  if (!Array.isArray(arr)) return;
  let totalNumber = 0,
    i = -1;
  while (++i < arr.length) {
    totalNumber += arr[i];
  }
  return totalNumber;
};
console.log(sumOfNumbersThree([1, 2, 3, 4]));
