class HashMap {
  constructor(size = 16) {
    this.size = size;
    this.items = [];
    this.list = new Array(size);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode % this.size;
  }
  set(key, value) {
    let hashKey = this.hash(key);

    if (this.list[hashKey] == undefined) {
      this.list[hashKey] = value;
    } else {
      const item = new Node(value, this.list[hashKey], key);
      this.list[hashKey] = item.value + " " + "next: " + item.next;
    }
    this.items.push(key);
  }
  get(key) {
    let hashkey = this.hash(key);
    console.log(this.list[hashkey]);
  }
  has(key) {
    let hashkey = this.hash(key);
    if (this.list[hashkey] != undefined) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  remove(key) {
    let hashkey = this.hash(key);
    if (this.list[hashkey] != undefined) {
      this.list[hashkey] = undefined;
      console.log(this.list);
    } else {
      console.log("Dont exist");
    }
  }
  length() {
    let sum = 0;
    this.list.forEach((item) => {
      if (item != undefined) {
        sum++;
      }
    });
    console.log(`Length: ${sum}`);
  }
  clear() {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] !== undefined) {
        console.log(this.list[i]);
        this.list[i] = undefined;
      }
    }
    console.log(this.list);
  }
  keys() {
    let array = this.items;
    let uniqueArray = [];
    for (let item of array) {
      if (!uniqueArray.includes(item)) {
        uniqueArray.push(item);
      }
    }
    console.log(uniqueArray);
  }
  values() {
    this.list.forEach((item) => {
      if (item != undefined) {
        console.log(item);
      }
    });
  }
  entries() {
    let array = this.items;
    let uniqueArray = [];
    for (let item of array) {
      if (!uniqueArray.includes(item)) {
        uniqueArray.push(item);
      }
    }
    for (let i = 0; i < uniqueArray.length; i++) {
      let hashed = this.hash(uniqueArray[i]);
      console.log(`[Key: ${uniqueArray[i]}, value: ${this.list[hashed]}]`);
    }
  }
}
class Node {
  constructor(value = null, nextNode = null, key) {
    this.value = value;
    this.key = key;
    this.next = nextNode;
  }
}
const map = new HashMap(16);
map.set("z", "zoe");
map.set("z", "zoro");
map.entries();
map.length();
console.log(map.list);

map.remove("z");
console.log(map.list);
