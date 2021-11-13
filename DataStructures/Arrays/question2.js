// Question #2: Merge sorted arrays
// Create that merges two sorted arrays and the final array is sorted
const array1 = [0, 3, 4, 31];
const arrray2 = [4, 6, 30];

const expectedOutput = [0, 3, 4, 4, 6, 30, 31];

function mergeSortedArrays(arr1, arr2) {
  const sorted = [];
  let i = 1;
  let j = 1;

  let arr1Item = arr1[0];
  let arr2Item = arr2[0];

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      sorted.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      sorted.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return sorted;
}

console.log(mergeSortedArrays(array1, arrray2));
