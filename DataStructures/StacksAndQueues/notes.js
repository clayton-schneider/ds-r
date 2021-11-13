// =================
// Stacks and Queues
// =================

// ======
// Stacks
// ======

// Lookup 0(n)  => Heavy operation
// Pop    O(n)  => Remove the last item
// Push   O(n)  => Add item to the top
// Peek   O(n)  => View the top most plate

// Both are linear data structures
// Only one item can be accessed at a time

// Almost only can access first or last element of the data structure
// Fewer methods to act on the data structure

// LIFO
// Like stacking plates
// Really good at when you need to know the last object added

// -----------
// -----------
// -----------

// Functions are usually added to a stack
// Browser history can be an example of a stack

// ======
// Queues
// ======

// Lookup           O(n)
// Enqueue (Push)   O(1)
// Dequeue (Pop)    O(1)
// Peek             O(1)

// Arrays are not optimal to build a queue with
// Unshifting (removing the first item in the array) is a time consuming task that requires you to move everything else

// FIFO

// Think of it like a line at an amusement park

// Waitlisting or reservations at a restaurant or Uber/Lyft all use queues

// exercise #!

// Stacks

// Google
// Udemy
// Youtube

// Why would we want to use either arrays over linked lists (or vice versa)

// We could use either one
// Arrays could be faster due to caching

// Queues

// Matt -- Joy -- Samir -- Pavel

// Same question

// You would want to use linked lists

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LLStack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const popped = this.top;
    this.top = this.top.next;
    this.length--;

    if (this.length === 0) {
      this.bottom = null;
    }

    return popped;
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

// const myLLStack = new LLStack();
// myLLStack.push('Udemy');
// myLLStack.push('Random');
// myLLStack.push('Other');
// myLLStack.pop();
// myLLStack.pop();
// myLLStack.pop();
// console.log(myLLStack.peek());

class ArrStack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(val) {
    this.array.push(val);
    return this;
  }

  pop() {
    this.array.pop();
    return this;
  }
}

const myArrStack = new ArrStack();
myArrStack.push('Udemy');
myArrStack.push('Random');
myArrStack.push('Other');
// myArrStack.pop();
// myArrStack.pop();
// myArrStack.pop();
console.log(myArrStack);

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.length === 1) {
      this.last = null;
    }

    this.first = this.first.next;
    this.length--;
    return this;
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }
}

// const myQ = new Queue();
// myQ.enqueue(1);
// myQ.enqueue(2);
// myQ.enqueue(3);
// myQ.enqueue(4);
// myQ.dequeue();
// console.log(myQ.peek());
