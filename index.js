class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Trees {
  constructor() {
    this.root = null;
  }

  // insert item in a tree
  insert(value) {
    const newNode = new Node(value);
    // if there is no node
    if (this.root === null) {
      this.root = newNode;
      return true;
    }

    let temp = this.root;
    while (true) {
      // if newNode value is same as insert value
      if (temp.value === newNode.value) return undefined;
      // checking if new value is less than root
      if (temp.value > newNode.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return true;
        }
        temp = temp.left;
      } else {
        // checking if new value is greater than root
        if (temp.right === null) {
          temp.right = newNode;
          return true;
        }
        temp = temp.right;
      }
    }
  }

  // check if the tree contains the value
  contains(value) {
    if (this.root == null) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // get the minimum value of a tree
  minValueinTree() {
    let temp = this.root;
    if (!temp) return undefined;
    while (temp.left) {
      temp = temp.left;
    }
    return temp;
  }
  // get the maximum value from a tree
  maxValueinTree() {
    let temp = this.root;
    if (!temp) return undefined;
    while (temp.right) {
      temp = temp.right;
    }
    return temp;
  }
  // get the minimum value based on node
  minValueNode(currentNode) {
    // console.log({ currentNode });
    while (currentNode.left != null) {
      currentNode = currentNode.left;
      //currentNode = currentNode.right; => will give 27
    }
    return currentNode;
  }

  getOnlyLeftSide() {
    let leftSideValue = [];
    let temp = this.root;
    leftSideValue.push(temp.value);
    while (temp.left) {
      temp = temp.left;
      leftSideValue.push(temp.value);
    }

    return leftSideValue;
  }
}

const myTree = new Trees();
myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);
myTree.insert(27);
myTree.insert(52);
myTree.insert(82);
// console.log(myTree.contains(52));
// console.log(myTree);
// console.log(myTree.minValueinTree());
// console.log(myTree.maxValueinTree());
console.log(myTree.minValueNode(myTree.root)); // passing this way because we need to pass a node tree, here we are not assigning value to newNode like in insert
// console.log(myTree.minValueNode(myTree.root.right));
// console.log(myTree.minValueNode(myTree.root.left));
// console.log(myTree.getOnlyLeftSide());
console.log(myTree.getALlLeftSideNode(myTree.root));
