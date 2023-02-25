class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// create Stack
class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  // add item to the top ( its like unshift in LinkedList)
  push(value) {
    const newNode = new Node(value);
    // if there is no node
    if (this.length == 0) {
      this.top = newNode;
    } else {
      // more than 1 node
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  // remove item from the top ( its like shift in LinkedList)
  pop() {
    // if there is no item
    if (this.length === 0) {
      return undefined;
    }
    // if there is more item
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    // if there is 1 item
    // if (this.length === 1) {
    //   this.top = null;
    // }
    this.length--;
    return temp;
  }
}

const myStack = new Stack(16);
myStack.push(12);
myStack.push(25);
// myStack.pop();
console.log(myStack.pop());
console.log(myStack);
