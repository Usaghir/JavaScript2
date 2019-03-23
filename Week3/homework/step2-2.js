'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }

  for (let j = startIndex; j <= stopIndex; j++) {
    if (j % 3 === 0 && j % 5 === 0) {
      threeCallback(j);
      fiveCallback(j);
    } else if (j % 3 === 0) {
      threeCallback(j);
    } else if (j % 5 === 0) {
      fiveCallback(j);
    }
  }
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log(number + ' is devisable by three');
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log(number + ' is devisable by five');
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
