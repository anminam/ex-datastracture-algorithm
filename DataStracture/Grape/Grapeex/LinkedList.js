export class LinkedList {
  constructor() {
    this.root = null;
    this.count = 0;
  }

  add(data) {
    if (this.root === null) {
      this.root = new Node(data);
      this.count++;
    } else {
      let node = this.root;
      while (node.next) {
        node = node.next;
      }
      node.next = new Node(data);
      this.count++;
    }
  }

  contains(data) {
    let result = false;
    let node = this.root;
    // debugger;
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
