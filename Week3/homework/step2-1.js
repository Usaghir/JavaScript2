'use strict';

function foo(func) {
  console.log('Hello, I am foo!');
  // The is a call to bar function.
  func();
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

// Do not change or remove anything below this line
module.exports = foo;
