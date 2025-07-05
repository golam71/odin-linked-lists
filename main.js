class LinkedList {
  constructor() {
    this.list = [];
  }

  append(value) {
    this.list.push(value);
  }

  prepend(value) {
    this.list.unshift(value);
  }

  size() {
    return this.list.length;
  }

  head() {
    return this.list[0];
  }

  tail() {
    return this.list.at(-1);
  }

  at(index) {
    return this.list.at(index);
  }

  pop() {
    return this.list.pop();
  }

  contains(value) {
    return this.list.includes(value);
  }

  find(value) {
    return this.list.indexOf(value);
  }

  toString() {
    let string = "";
    for (const item of this.list) {
      string += `( ${item} ) -> `;
    }
    string += "null";
    return string;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log("toString:", list.toString());
console.log("size:", list.size());
console.log("head:", list.head());
console.log("tail:", list.tail());
console.log("at(2):", list.at(2));
console.log("contains('cat'):", list.contains("cat"));
console.log("find('parrot'):", list.find("parrot"));
console.log("pop:", list.pop());
console.log("toString after pop:", list.toString());
list.prepend("rabbit");
console.log("toString after prepend:", list.toString());
