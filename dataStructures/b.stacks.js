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

  add(value) {
    let newNode = new Node(value);
    if (this.first === null) {
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

  remove() {
    if (this.head === null) return null;
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

//Big O of Stacks
//Insertion - O(1)
//Removal - O(1)
//Search - O(N)
//Access - O(N)
