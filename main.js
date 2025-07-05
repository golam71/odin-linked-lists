import { Node } from "./node.js";

class LinkedList {
  constructor() {
    this.headNode = null;
  }
  append(value) {
    let newNode = new Node(value);

    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }
    let currentNode = this.headNode;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newNode;
  }
  prepend(value) {
    let newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }
  size() {
    let length = 0;
    if (!this.headNode) {
      return length;
    }
    let currentNode = this.headNode;
    while (currentNode.nextNode !== null) {
      length++;
      currentNode = currentNode.nextNode;
    }
    return length;
  }
  head() {
    if (!this.headNode) {
      return null;
    }
    return this.headNode;
  }
  tail() {
    if (!this.headNode) return null;
    let currentNode = this.headNode;

    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }
  at(index) {
    if (!this.headNode) return null;

    let currentNode = this.headNode;
    let currentIndex = 0;

    while (currentNode !== null) {
      if (currentIndex === index) {
        return currentNode;
      }
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return null;
  }
}
