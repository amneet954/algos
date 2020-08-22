class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return this;
    let current = this.head;
    let previousNode = current;
    while (current.next) {
      previousNode = current;
      current = current.next;
    }
    this.tail = previousNode;
    console.log(this.tail);
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }

  shift() {
    if (!this.head) return this;
    this.head = this.head.next;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let currentHead = this.head;
      this.head = newNode;
      this.head.next = currentHead;
    }
    this.length += 1;
    return this;
  }
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("Bye");
console.log(list);

list.pop();

console.log(list);
