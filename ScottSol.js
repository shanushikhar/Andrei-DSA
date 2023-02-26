class HashMap {
  constructor(length = 7) {
    this.dataMap = new Array(length);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    let hashValue = this._hash(key);
    if (!this.dataMap[hashValue]) {
      this.dataMap[hashValue] = [];
    }
    this.dataMap[hashValue].push([key, value]);
    return this;
  }

  get(key) {
    let hashValue = this._hash(key);
    let data = this.dataMap[hashValue];
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i][0] === key) {
          return data[i][1];
        }
      }
    }

    return undefined;
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          keys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return keys;
  }
}

const myHashMap = new HashMap();
myHashMap.set("nails", 1000);
myHashMap.set("iron", 200);
myHashMap.set("soil", 398);
myHashMap.set("cement", 23);
// console.log(myHashMap.get("soil"));
console.log(myHashMap.keys());
