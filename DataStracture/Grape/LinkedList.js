class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.root = null;
    this.count = 0;
  }

  add(data) {
    if (this.root === null) {
      this.root = new Node(data);
    } else {
      let node = this.root;
      while (node.next) {
        node = node.next;
      }
      node.next = new Node(data);
    }
  }

  contains(data) {
    let node = this.root;
    if (node === null) return false;
    while (node.next) {
      if (node.data === data) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  print() {
    let node = this.root;
    if (!node) {
      return;
    }

    while (node.next) {
      console.log(node.data);
      node = node.next;
    }
  }
}
