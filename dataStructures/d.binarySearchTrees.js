class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return this;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        }
        if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return null;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value > current.value) current = current.right;
      else if (value < current.value) current = current.left;
      else found = true;
    }

    return found;
  }

  BFS() {
    let final = [];
    let first = this.root;
    let queue = [];
    queue.push(first);

    while (queue.length) {
      first = queue.shift();
      final.push(first);
      if (first.left) final.push(first.left);
      if (first.right) final.push(first.right);
    }

    return final;
  }

  DFSPreOrder() {
    const final = [];

    const traverse = (value) => {
      final.push(value);
      if (value.left) traverse(value.left);
      if (value.right) traverse(value.right);
    };

    traverse(this.root);
    return final;
  }

  DFSPostOrder() {
    let final = [];

    const traverse = (value) => {
      if (value.left) traverse(value.left);
      if (value.right) traverse(value.right);
      final.push(value);
    };

    traverse(this.root);
    return final;
  }

  DFSInOrder() {
    let final = [];

    const traverse = (value) => {
      if (value.left) traverse(value.left);
      final.push(value);
      if (value.right) traverse(value.right);
    };

    traverse(this.root);
    return final;
  }
}

let tree = new BinarySearchTree();
