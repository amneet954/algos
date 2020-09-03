//Last In, First Out
// The last element added in the stack will be the first element removed from the stack
//Used for: manage function innvoations, Undo/Redo functionality(MS Word), history(React)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = first;
    } else {
      let originalFirst = this.first;
      this.first = newNode;
      this.first.next = originalFirst;
    }
    this.length += 1;
    return this.length;
  }

  pop() {
    if (!this.head) return null;
    let placeHolder = this.first;

    if (this.length === 1) {
      this.first = null;
      this.last = this.first;
    } else {
      this.first = placeHolder.next;
    }

    this.length -= 1;
    return placeholder.value;
  }
}
