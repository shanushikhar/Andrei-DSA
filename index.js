// create Array

class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // get all data
  get(index) {
    return this.data[index];
  }

  // push
  pushItem(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  // pop
  popFromItem() {
    if (this.length == 0) return "no item remaining..";

    let lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    let valuess = this.length;
    return { valuess, lastItem };
  }

  // delete
  deleteFromItem(index) {
    if (this.length == 0) return "no item remaining..";
    this.shiftItem(index);
  }
  shiftItem(item) {
    for (let i = item; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  // insert
  insertItem(item, index) {
    this.addItem(item, index);
  }

  addItem(item, index) {
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;
    return this.data;
  }
}

const myArray = new Array();
myArray.pushItem("hi");
myArray.pushItem("helo");
myArray.pushItem("heyaa");
myArray.pushItem("!");
//const alldata = myArray.get(1);
// console.log(myArray.popFromItem());
// console.log(myArray.popFromItem());
// myArray.deleteFromItem(1);
// myArray.deleteFromItem(1);
myArray.insertItem("test", 1);
myArray.removeItwmFro(1);
console.log(myArray);
