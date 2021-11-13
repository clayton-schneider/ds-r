// Recursion

// Not technically an algorithm

// A function that referrs to itself inside itself

// Really good for tasks that repeated subtasks
// Searching and sorting

// Need to beware stack overflow
// Must have a way to get out of the recurssive loop
// One of its downsides is that we need to alocate memory for every function call

// =====================
// Anatomy of recurssion
// =====================

// The three rules
// 1.) Identify the base case
// 2.) Identify the recurssive case
// 3.) Get closer and closer and return when needed. Usually we have two returns (base case and recursive case)

// MUST HAVE A BASE CASE
// A stop point

// Need to be careful about returning values so that we don't return a local value
// Always want to make sure we return the function call that way we can return our base case back up the call stack

let counter = 0;
function inception() {
  if (counter > 3) {
    return 'Done';
  }
  counter++;
  return inception();
}

// console.log(inception());
// As is this becomes
// inception(inception(inception(inception('done'))));

// Factorals

function forFactoral(num) {
  let factorial = 1;
  for (let i = num; i > 1; i--) {
    factorial = factorial * num;
    num--;
  }
  return factorial;
}

// console.log('For factoral:', forFactoral(10));

function recFactorial(num) {
  if (num === 2) {
    return 2;
  }
  return num * recFactorial(num - 1); // This is what is being returned to the line
}

// console.log('Rec Factoral:', recFactorial(5));

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

function forFibonacci(n) {
  for (let i = 0; i <= n; i++) {
    let;
  }
}

function recFibonacci() {}
