'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// The reason for printing different result  here is the way the variables are used like
// In first function the value 9 is passed by value so changing the value inside the function.
// mean val parameter just copied the value of x and used in the function and did nothing to actual value.
// In 2nd function the the value to y is passed which is an object and objects are passed by reference so any change to val in the function will change y too.
// because in case of passed by reference val didn't copy the value of y but one can say that after passing by reference here val and y both have the same
// value {x:9} not copied value like passed by value and any change to one of these will have impact on other that is what caused the change in the value of y.
