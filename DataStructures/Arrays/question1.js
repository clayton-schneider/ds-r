// Question #1: Reverse a string
// Create a function that reverses a string

// My take
function reverse(str) {
  let reverse = [];
  for (let i = 0; i < str.length; i++) {
    reverse.unshift(str[i]);
  }
  return reverse.join('');
}

// console.log(reverse('asdfg'));

// Instructor take
function instructorReverse(str) {
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join('');
}
// console.log(instructorReverse('Hi my name is Clayton'));

function easyReverse(str) {
  return str.split('').reverse().join('');
}
// console.log(easyReverse('Ease Reverse'));

const cleanReverse = str => [...str].reverse().join('');
// console.log(cleanReverse('clean'));
