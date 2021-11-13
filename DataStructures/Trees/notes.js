// Trees

// Binary Search Tree
// lookup   O(log N)
// Insert   O(log N)
// Delete   O(log N)

// Olog(n)
// Level  0: 2^0 = 1
// Level  1: 2^1 = 2
// Level  2: 2^2 = 4
// Level  3: 2^3 = 8

// # of node = 2^h - 1 (Where h is the height of the tree)
// log nodes = steps
// log 100 = 2
// 10^2 = 100

// Allows us to divide and conquer

//     1
// 2   3   4
//   6   7

// Root: 1
// Parent: 1, 3
// Child [2, 3, 4], [6, 7]
// Leaf [2, 4, 6, 7]
// Sibling [2, 3, 4], [6, 7]

// The dom is a tree data structure

// Linked lists are a type of tree, except they are linear

// Tree nodes point to thier children

// Binary Trees
// Rules: Each node can only have 0, 1, or 2 children

// Perfect Binary Trees
// All the nodes have two children
// Bottom layer of tree is completely filled

//         1
//     2       3
//   4   5   6   7

// Full Binary Tree
//  Every node has 0 or 2 children
//         1
//     2       3
// 4       5
//       6   7

// Perfect Binary Trees are very desirable
// Super efficient
// Number of nodes doubles as we move down the tree
// Number of nodes on the last level is equal to the sum of all the other nodes + 1
// We alway have half of the data in the bottom level

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// ==================
// Binary Search Tree
// ==================

// Pros: Better than O(n), Ordered, Flexible size (can place anywhere in memory)
// Cons: No O(1) operations (This means faster in some instances and slower in other)

//         101
//     33      105
//   9   37  104   144

// Preserves relationships

// All children to the right of the root node must be larger than the parent node, to the left decreases
// Can/must only have two children

// Allows for rapid searching
// Don't need to iterate, just search the nodes
// Inserting is slower since you need to traverse the tree

// one downside is that we can create an unbalanced tree
// Everything could be added to one side and just create a linked list

// Why are unbalanced BST bad?
// It can get to a point where you must iterate to get through the tree which defeats the whole purpose

// Balanced Vs. Unbalanced
// 101
//     105
// 102     144
//             231

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      let done = false;
      while (!done) {
        if (value < currentNode.value) {
          // Go Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Go Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

// const tree = new BST();
// tree.insert(9);
// tree.insert(4);
// tree.insert(6);
// tree.insert(20);
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);
// console.log(JSON.stringify(tree.lookup(10)));

// =====================
// AVL & Red Black Trees
// =====================

// These help balance a BST
// Automatically rebalances itself
// Don't need to build exactly ourselves just know how it works

// AVL is faster at lookup
// Red/Black is faster at insert

// ============
// Binary Heaps
// ============

// Pros: Better than O(n), Priority, Flexible size, Fast insert
// Cons: Slow lookup

// In a binary heap everything follows a max heap where everything below the root is smaller
// There is also a min heap where the root is the smallest

// The left and right don't need to have any sort of standard placement, only that they are smaller than the root

// Binary heaps are great at comparitive operations
// If you want to find a number that is bigger than a certain number than you can just stop at whichever root number you look at

// Commonly used in priority queues

// Heaps don't have O(1)

// Lookup O(n) This becomes slower because you now must iterate since there is no logic in the order of where numbers go
// Insert O(logN)
// Delete O(logN)

// Memory heap != Heap Data Structure

// Priority queues
// take up the least amount of space possible because only insert left to right
// can implement with arrays
// Memory effecient

// Emergency rooms should treat those with the most severe probelms first rather than those with less severe problems
// Night clubs allow those that spend more money in over those that have been waiting in line longer

// ====
// Trie
// ====

//  A specialized tree used in searching most often with text
//  Can outperform most other data structures depending on the type of search you are doing
//  Tries allow you to know if a word (or part of a word) exists in a body of text

// Empty root node
// Not binary
