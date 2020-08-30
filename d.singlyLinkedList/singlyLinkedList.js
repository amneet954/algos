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

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let currentHead = this.head;
    while (index !== counter) {
      currentHead = currentHead.next;
      counter += 1;
    }
    return currentHead;
  }

  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return foundNode;
    }
    return null;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return null;
    else if (index === this.length) this.push(value);
    else if (index === 0) this.unshift(value);

    let newNode = new Node(value);
    let previousNode = this.get(index - 1);

    let placeholder = previousNode.next;
    previousNode.next = newNode;
    newNode.next = placeholder;
    
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
