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
    }
      this.length++;
      return this;
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

    // other solution
    // if (!this.head) {
    //   return undefined;
    // }
    // // if more item
    // let temp = this.head;
    // this.head = this.head.next;
    // temp.next = null
    // this.length--
    // if(this.length == 0){
    //   this.tail = null
    // }
    // return temp
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

  // insert item at particular index
  // 10--> 16 --> (11) --> 2 --> 23 --> 29
  insert(value, index) {
    // if index is 0
    if (index == 0) {
      return this.unshift(value);
    }
    // if index is equal to length
    if (index == this.length) {
      return this.push(value);
    }
    // if index is less than 0 or more than length
    const newNode = new Node(value);
    // passed (index - 1) because need the previous node to do the addition of new node
    let nodeBeforeIndex = this.get(index - 1);
    if (!nodeBeforeIndex) return undefined;

    // newNode.next = nodeBeforeIndex.next
    let restNode = nodeBeforeIndex.next;
    newNode.next = restNode;
    nodeBeforeIndex.next = newNode;

    this.length++;
    return this;
  }

  // remove item at particular index
  remove(index) {
    // if index is less than 0 or more than length
    // if index is 0
    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();
    // if index is equal to length

    let previousNode = this.get(index - 1);
    let actualItem = previousNode.next;
    if (!previousNode || !actualItem) return undefined;
    previousNode.next = actualItem.next;
    actualItem.next = null;
    this.length--;
    return actualItem;
  }

  // reverse the entire linkedlist
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
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
//console.log(myLinkedList.set(11, 2));
// console.log(myLinkedList.insert(77, 1));
// console.log(myLinkedList.remove(1));
myLinkedList.reverse();
console.log(myLinkedList);
