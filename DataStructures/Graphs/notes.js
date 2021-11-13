// Graphs

// Pros: Relationships
// Cons: Scaling is hard

// One of the most useful and used when it comes to modeling real life
// A set of values that are related in a pair wise fashion

// Each item is called a node or vertex
// Each node is connected by edges

// Can be used for modeling roads, relationships on a social media website

// Linked lists are type of tree which a type of graph

// Directed vs Undirected
// Directed is used with direction, can only go one way
// You don't neccessarily follow your Twitter followers
// Undirected can go any way
// FB friends both follow each other

// Weighted Graphs vs Unweighted Graphs
// Can store magnitude on the edges
// Google maps uses this to find optimal paths

// Cyclic vs Acyclic
// Cyclic creates a circle where you can link back to the start
// Acyclic means there is no connection to restart

// Directed Acyclic Graph: DAG
// Made up of trees and linked lists

// Edge list
const edgeGraph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];
// The arrays state the connections: 0 connects to 2, 2 connected to 3

// Adjacent List
const adjacentGraph = [[2], [2, 3], [0, 1, 3], [1, 2]];
// Values are the nodes neighbors
// The index of the array is the value of the actual Graph node
// Could use a hash table if you don't have sequential values like we do for the index of an array

// Adjacent Matrix
const matrixGraph = [
  [0, 0, 1, 0], // Index 0 is connected to value 2
  [0, 0, 1, 1], // Index 1 is connected to values 2, 3
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];

// These are complex and may not have as much attention dedicated to them

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
    return this;
  }
  addEdge(node1, node2) {
    //undirected Graph
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
    return this;
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = '';
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + ' ';
      }
      console.log(node + '-->' + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

myGraph.showConnections();
