// ============
// Linked Lists
// ============

// Prepend  O(1)
// Append   O(1)
// Lookup   O(n)
// Insert   O(n)
// Delete   O(n)

// Pros: Fast Insertion, Fast Deletion, Ordered, Flexible size
// Cons: Slow lookup, More memory

// Singly Linked Lists
// Consist of two elements
// value of data you want to store
// pointer to next node in line
// Null terminated because the last item points to null

const basket = ['apples', 'grapes', 'pears'];

// linked list: apples => grapes => pears => null

// More accurate look
// apples
// 8947     =>  grapes
//              8742    =>  pears
//                          372     =>  null

// JavaScript doesn't come with linked lists built in
// We can build one

// Whereas in arrays you need to shift everything down when adding to the array
// With linked lists you can just add an item to the index you'd like

// You need to traverse a linked list to get to the index you want O(n)
// While iterating between an array and linked list are both O(n) becaue you must traverse through a ll it is a bit slower
// However it is better for insertions in the middle

// When compared to Hash Tables
// There is order in a linked list (can be sorted)

// Arrays have a pro where computers can cache memory that is located near eachother making read times faster

// ==================
// What is a pointer?
// ==================

// const obj1 = {
//     a: true
// }
// The following code is a pointer
// We are not recreating and assigning a :true to a slot in memory
// Instead we are saying that obj2 should point to the same memory address as obj1
// const obj2 = obj1

// 10 => 5 => 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

// ==================
// Doubly Linked List
// ==================

// Similar to a linked list except it points to the value before and after
// Doubly linked list allows us to traverse backwards
// This can make a lookup faster because we can start at whichever end is closer
// Uses more space

// ==============================
// When to use one over the other
// ==============================

// Singly: Less space, Simpler implementation, delete and insert can be a bit faster
// Doubly: Can search faster since you can start from first or back, more complex, more memory and computation, better search

// These are used a lot more in lower level languages and are actually used to make up other data structures like hash tables

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;

    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;

    // My version ---- It works
    // let currentNode = this.head;
    // for (let i = 0; i < this.length; i++) {
    //   if (index === i + 1) {
    //     newNode.next = currentNode.next;
    //     currentNode.next = newNode;
    //     this.length++
    //     return this;
    //   }
    //   currentNode = currentNode.next;
    // }
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this;
  }

  traverseToIndex(index) {
    // check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  reverse() {
    // Check for one
    if (!this.head.length) {
      return this;
    }

    // 1 - 2 - 3 - 4

    //  = 1
    let first = this.head;

    // Since the first value will now be the end set it to the tail
    this.tail = this.head;

    // = 2
    let second = first.next;

    while (second) {
      // = 3
      const temp = second.next;

      // 1
      second.next = first;

      // 2
      first = second;

      // 3
      second = temp;
    }

    this.head.next = null;
    this.head = first;

    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);

console.log(JSON.stringify(myLinkedList));

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    console.log(newNode);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    console.log(this);
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

let myLinkedList = new DoublyLinkedList(10);
