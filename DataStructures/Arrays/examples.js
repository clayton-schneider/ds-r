// =================
// Summary of arrays
// =================
// Pros: Fast Lookups, Fast push/pop, ordered
// Cons: Slow inserts, Slow deletes, Fixed size (if using a static array)

// ======================
// Introduction to arrays
// ======================

const strings = ['a', 'b', 'c', 'd'];
//                0    1    2    3
// 4 x 4 = 16 bytes of storage
// Four shelves to stare four values

strings[2];
// Go to strings address and grab the third item

// Push
strings.push('e'); // O(1)
console.log(strings);

// Pop
strings.pop(); // O(1)
console.log(strings);

// Unshift
strings.unshift('x'); // O(n)

// ['x', 'a', 'b', 'c', 'd']
//   0    1    2    3    4
// Need to loop through all the items of the array to reassign the index
// This tells us that arrays are not the best for adding stuff to the beggining of the array

console.log(strings);

// Splice
strings.splice(2, 0, 'alien'); // O(n/2) => O(n)
//        start, delete, add

// Only need to look start at the start index and go from there

// ================
// Static vs. Dynamic Arrays
// ================

// Static arrays are fixed in size. You need to specify the length of the array ahead of time
// Can't gurantee that there will be shelves of data later for you to append to

// Dynamic arrays allow us to copy and rebuild an array if we decide we want a different size

// JavaScript automatically handles this dynamic portion
// Low level languages like C++ allow you the freedom to define when to use stuff

// =============
// Dynamic Array

// lookup = O(1)
// append = O(1) => can be O(n)
//  In JS dynamic arrays need to loop over the array and copy it to its new location before appending the new value
// insert = O(n)
// delete = O(n)

// ===============================
// Optional: Classes in JavaScript
// ===============================

// Reference type
let object1 = { value: 10 };
let object2 = object1; // This is referencing the memory address of object1
let object3 = { value: 10 };

// Context vs scope

// Instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am a ${this.name}. I am a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`I'm a ${this.type}`);
  }
}

// =====================
// Implementing an Array
// =====================

// How to build one
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
  }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.delete(1);
console.log(newArray);

// How to use it

// ===================
//  Strings and Arrays
// ===================
// Treat strings as arrays
