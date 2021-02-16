// TERNARY OPERATOR:
const numIsEqual = (num) => {
  return num % 2 == 0
    ? console.log(num + " is even.")
    : console.log(num + " is odd.");
};
numIsEqual(2);

// IF ELSE:
const numIsEqualTwo = (num) => {
  if (num % 2 == 0) {
    console.log(num + " is even.");
  } else {
    console.log(num + " is odd.");
  }
};
numIsEqualTwo(4);

// SWITCH:
const numIsEqualThree = (num) => {
  switch (num % 2 == 0) {
    case true:
      console.log(num + " is even.");
      break;
    case false:
      console.log(num + " is odd.");
      break;
    default:
      console.log("Something is wrong.");
  }
};
numIsEqualThree(6);
