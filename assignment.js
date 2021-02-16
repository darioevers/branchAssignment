// ASSIGNMENT 1:
const sumOfNumbers = (arr) => {
  if (!Array.isArray(arr)) return;
  let totalNumber = 0,
    i = -1;
  while (++i < arr.length) {
    totalNumber += arr[i];
  }
  return totalNumber;
};
console.log(sumOfNumbers([1, 2, 3, 4]));
