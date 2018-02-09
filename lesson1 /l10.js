
var num1 = window.prompt("What is the first number?");
var num2 = window.prompt("What is the second number?");
var num3 = window.prompt("What is the third number?");

// Now check which is bigger and print it

if (num1 > num2) {
  if (num1 > num3) {
    console.log("The bigger number is " + num1);
  } else {
    console.log("The bigger number is " + num3);
  }
} else {
  if (num2 > num3) {
    console.log("The bigger number is " + num2);
  } else {
    console.log("The bigger number is " + num3);
  }
}

