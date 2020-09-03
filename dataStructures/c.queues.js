//First In, First Out
// The first element in the stack will be the first element out
// Used for Background Task, Uploading/Downloading, Printing, Task Processing

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  add(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length += 1;
    return this.length;
  }
  remove() {
    let placeHolder = this.first;
    if (!this.first) return null;

    if (this.length === 1) {
      this.first = null;
      this.last = this.first;
    } else {
      this.first = this.first.next;
    }

    this.length -= 1;
    return placeHolder.value;
  }
}

//Big O:
//Insertion: O(1)
//Removal: O(1)
//Search: O(N)
//Access: O(N)
