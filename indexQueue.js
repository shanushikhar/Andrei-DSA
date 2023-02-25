class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  // add item in the queue (just like push in LinkedList)
  enQueue(value) {
    const newNode = new Node(value);

    // if there is no item
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // if there is more item
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  // remove item from the queue (just like shift in LinkedList)
  deQueue() {
    // if there is no item
    if (this.length === 0) {
      return undefined;
    }
    // if there is one item
    if (this.length === 1) {
      this.first = this.last = null;
    } else {
      // if there is more item
      let temp = this.first;
      this.first = this.first.next;
      temp.next = null;
    }

    this.length--;
    return temp;
  }
}

const myQueue = new Queue(5);
myQueue.enQueue(11);
console.log(myQueue.deQueue());
