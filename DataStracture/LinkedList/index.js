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

const list = new LinkedList();
list.add("1");
list.add("2");
list.add("3");
list.add("4");
list.add("5");
list.print();
