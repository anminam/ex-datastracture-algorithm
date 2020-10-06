export class LinkedList {
  constructor() {
    this.root = null;
    this.count = 0;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let node = this.root;
      while (node.next) {
        node = node.next;
      }
      node.next = newNode;
    }
    this.count++;
  }

  contain(data) {
    let result = false;
    let node = this.root;
    while (node) {
      if (node.data === data) {
        result = true;
        break;
      }
      node = node.next;
    }

    return result;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
