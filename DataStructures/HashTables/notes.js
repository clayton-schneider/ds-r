// ======================
// Introduction: Hash Table
// ======================

// Insert => O(1)
// Lookup => O(1) can be O(n) if a collision occurs
// Delete => O(1)
// Search => O(1)

// Object may not be the best idea for looping through
// There is no order, They will be retrieved at random

// These are just objects in JavaScript or dictionaries in Python
// Key value pairs
// Key is used as the index

//  A hash function is a function that generates a value of fixed length for each input it recieves
//  A hash function is one way. You can't work backward from the hashed term to the original
//  The same input will always yield the same output => Idempotent

// This gives really fast data access
// Pass the key to the hash and instantly get the address of the data in memory

// Given a key you will know exactly where the data is in memory

// This does slow things down though
// Anytime you want to create key you have to pass it through the hash function so you can decide where to put it in memory

// key ==> HASH FUNCTION ==> Memory Address ==> Store Data
// Can assume a time complexity of O(1)

// ==============
// Hash Collision
// ==============

// There are instances where two keys get hashed to the same address
// This is called Hash Collision
// This repeated collision can slow down the application since now it is created a linked list that needs to be looked through
// Slows down to O(n/k) => O(n)

// Besides linked lists there are other ways to solve a collision

// ====
// MAPS
// ====

// A Map allows us to save any data type as the key
// In a regular object numbers and functions get stringified
// Maintains insertion order
const a = new Map();

// ====
// Sets
// ====

const b = new Set();

// =========================
// Implementing a Hash Table
// =========================

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  get(key) {
    const loc = this._hash(key);
    const currentBucket = this.data[loc];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
      return this.data[loc][1];
    }
    return undefined;
  }

  set(key, val) {
    const loc = this._hash(key);
    if (!this.data[loc]) {
      this.data[loc] = [];
    }
    this.data[loc].push([key, val]);
    return this.data;
  }

  keys() {
    if (!this.data.length) {
      return undefined;
    }
    let result = [];
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0]);
          }
        } else {
          result.push(this.data[i][0]);
        }
      }
    }
    return result;
  }
}

const testTable = new HashTable(50);
testTable.set('grapes', 10000);
testTable.set('apples', 54);
testTable.set('oranges', 2);
console.log(testTable.keys());
