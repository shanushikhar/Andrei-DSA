// create Hashmap

class Hashmap {
  constructor(val) {
    this.myArray = new Array(val);
  }

  // create hash-Value
  _hash(input) {
    let hashedValue = 0;
    for (let x = 0; x < input.length; x++) {
      hashedValue =
        (hashedValue + input.charCodeAt(x) * x) % this.myArray.length;
      //console.log(hashedValue);
    }
    return hashedValue;
  }

  // insert Item
  set(key, value) {
    let hashedValue = this._hash(key);
    if (!this.myArray[hashedValue]) {
      this.myArray[hashedValue] = [];
    }
    this.myArray[hashedValue].push([key, value]);
    return this.myArray;
  }

  // get item
  get(key) {
    let hashedValue = this._hash(key);
    let index = this.myArray[hashedValue];
    console.log(index);
    //console.log({ hashedValue }, { index }, this.myArray);
    if (index) {
      for (let i = 0; i < index.length; i++) {
        if (index[i][0] === key) {
          console.log(`value of ${index[i][0]} is - `, index[i][1]);
        }
      }
    } else {
      console.log("not found..");
    }
  }

  // get all item
  getAllKeys() {
    let allKeys = [];
    // console.log(this.myArray);
    for (let x = 0; x < this.myArray.length; x++) {
      if (this.myArray[x]) {
        for (let y = 0; y < this.myArray[x].length; y++) {
          allKeys.push(this.myArray[x][y][0]);
        }
      }
    }
    return allKeys;
  }
}

const hashMap = new Hashmap(3);
//console.log(hashMap._hash("hello"));
hashMap.set("apple", 20);
hashMap.set("grapes", 70);
hashMap.set("grapes2", 80);
hashMap.set("Mango", 1000);
// console.log(hashMap.set("orange", 110));
//hashMap.get("Mango");
console.log(hashMap.getAllKeys());
