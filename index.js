class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// create LinkedList
class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }

  // add item in the last
  push(value) {
    const newNode = new Node(value);
    // if there is no node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // more than 1 node
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // remove item from the end
  pop() {
    // if there is no item
    if (!this.head) {
      return null;
    }
    let temp = this.head;
    let pre = this.head;
    // if there is more item
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    // if there is 1 item
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return temp;
  }

  // add item in the beginning
  unshift(value) {
    const newNode = new Node(value);
    // if no item
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if there is item
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
  }

  // remove from the beginning
  shift() {
    // if no item
    if (!this.head) {
      return undefined;
    }
    // if more item
    let temp = this.head;
    this.head = this.head.next;
    // if 1 item
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return temp;
  }

  // get item
  get(index) {
    // if index is less than 0 or more than length
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  // set value at particular index
  set(value, index) {
    // if index is less than 0 or more than length
    const valueToChange = this.get(index);
    if (valueToChange) {
      valueToChange.value = value;
      return true;
    }

    return false;
  }

  // insert
  // 10--> 16 --> (11) --> 2 --> 23 --> 29
  insert(value, index) {
    // if index is less than 0 or more than length
    // if index is 0
    // if index is equal to length
  }

  // remove
  remove(index) {
    // if index is less than 0 or more than length
    // if index is 0
    // if index is equal to length
  }

  // reverse
  reverse() {}
}

const myLinkedList = new LinkedList(16);
myLinkedList.push(12);
myLinkedList.push(25);
// myLinkedList.unshift(75);
// myLinkedList.shift();
// myLinkedList.pop();
// myLinkedList.pop();
// myLinkedList.pop();
// console.log(myLinkedList.pop());
// console.log(myLinkedList.unshift(5));
// console.log(myLinkedList.get(2));
console.log(myLinkedList.set(11, 2));
console.log(myLinkedList);
// console.log(myLinkedList.insert(77, 1));
