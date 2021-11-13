// Question #1
// Given 2 arrays, create a function that let's a user know
// (true/false) whether these two arrays contain any common items
// For example:
const array1 = ['a', 'b', 'c', 'x', 'i'];
const array2 = ['z', ' y', 'i'];
// Should return false
const array3 = ['a', 'b', 'c', 'x'];
const array4 = ['z', 'y', 'x'];
// Should return true

// Inputs: 2 arrays
// Outputs: true or false

// First version
// function findCommon(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       if (array1[i] == array2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// Big O: O(a * b) -> console.log(findCommon(array1, array2));
// Space Complexity -> O(1)

// How to improve: convert first array to a hash table

function containsCommonItem2(arr1, arr2) {
  // Can assume always passed 2 arrays

  // Loop through first array and create object where properties
  // === items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }

  // Loop through second array and check if item in second array exists on created object
  for (j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

// Big O: O(a + b)
// Space Complexity: O(a + b)
console.log(containsCommonItem2(array1, array2));

// Using built in functions and is easier to read
function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}
