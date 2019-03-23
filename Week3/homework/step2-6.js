'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  const flattArr2 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      flattArr2.push(arr[i][j]);
    }
  }
  return flattArr2;
}

function flattenArray3d(arr) {
  const flattArr3 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[j].length; k++) {
        flattArr3.push(arr[i][j][k]);
      }
    }
  }
  return flattArr3;
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
