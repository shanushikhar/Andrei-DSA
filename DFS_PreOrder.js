// Depth First Search
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return true;
    }

    let temp = this.root;
    while (true) {
      if (newNode.value == temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left == null) {
          temp.left = newNode;
          return true;
        }
        temp = temp.left;
      } else {
        if (temp.right == null) {
          temp.right = newNode;
          return true;
        }
        temp = temp.right;
      }
    }
  }

  DFS() {
    let results = [];
    function preOrder(currentNode) {
      results.push(currentNode.value);
      if (currentNode.left) preOrder(currentNode.left);
      if (currentNode.right) preOrder(currentNode.right);
    }

    preOrder(this.root);
    return results;
  }
}

const myTree = new Tree();
myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);
myTree.insert(27);
myTree.insert(52);
myTree.insert(82);
console.log(myTree.DFS());
// console.log(myTree);
