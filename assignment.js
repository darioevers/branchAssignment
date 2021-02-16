/// IF ELSE .INCLUDES
const checkStr = (str) => {
  if (str.includes("JavaScript")) {
    console.log("I know it's crazy 😉 NR1");
  } else {
    console.log(str);
  }
};
checkStr("I like JavaScript.");

/// SWITCH
const checkStrTwo = (str) => {
  switch (str.includes("JavaScript")) {
    case true:
      console.log("I know it's crazy 😉 NR2");
      break;
    case false:
      console.log(str);
      break;
  }
};
checkStrTwo("I like JavaScript.");

// TERNARY
const checkStrThree = (str) => {
  return str.includes("JavaScript")
    ? console.log("I know it's crazy 😉 NR3")
    : console.log(str);
};
checkStrThree("I like JavaScript.");
