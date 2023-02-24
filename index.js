class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// create LinkedList
class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // remove item from the end
  pop() {
    // if there is no item
    if (!this.head) {
      return undefined;
    }
    // if there is more item
    let temp = this.tail;
    this.tail = temp.prev;
    this.tail.next == null;
    temp.prev = null;
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
      this.head.prev = newNode;
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
    this.head = temp.next;
    this.head.prev = null;
    temp.next = null;
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

    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.next;
      }
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
    let newNode = new Node(value);
    let temp = this.get(index - 1);
    if (temp) {
      let actualIndex = temp.next;
      temp.next = newNode;
      newNode.next = actualIndex;
      actualIndex.prev = newNode;
      newNode.prev = temp;
      this.length++;
      return true;
    }
    return false;
  }

  // remove item at particular index
  remove(index) {
    // if index is less than 0 or more than length
    // if index is 0
    if (index == 0) return this.shift();
    // if index is equal to length
    if (index == this.length - 1) return this.pop();

    // if remove from middle
    let temp = this.get(index);
    if (temp) {
      temp.prev.next = temp.next;
      temp.next.prev = temp.prev;
      temp.prev = temp.next = null;
      this.length--;
      return temp;
    }
    return undefined;
  }
}

const myLinkedList = new DoublyLinkedList(16);
myLinkedList.push(12);
myLinkedList.push(25);
// myLinkedList.pop();
// myLinkedList.unshift(75);
// myLinkedList.unshift(750);
// myLinkedList.shift();
// myLinkedList.pop();
// myLinkedList.pop();
// console.log(myLinkedList.pop());
// console.log(myLinkedList.unshift(5));
// console.log(myLinkedList.get(4));
// console.log(myLinkedList.set(11, 1));
// console.log(myLinkedList.insert(77, -4));
console.log(myLinkedList.remove(0));
// myLinkedList.reverse();
console.log(myLinkedList);
