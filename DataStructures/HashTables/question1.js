// Google Question
// Given an array:
const ex1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// It should return 2

const ex2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
// It should return 1

const ex3 = [2, 3, 4, 5];
// It should return undefined

function firstRecurringChar(arr) {
  const track = {};

  for (let i = 0; i < arr.length; i++) {
    if (track[arr[i]]) {
      return arr[i];
    } else {
      track[arr[i]] = true;
    }
  }

  return undefined;
}

console.log(firstRecurringChar(ex3));
