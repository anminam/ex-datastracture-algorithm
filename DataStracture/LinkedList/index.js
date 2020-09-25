class LinkedList {
  head = null;
  count = 0;

  constructor() {
    this.head = null;
    this.count = 0;
  }

  add(data) {
    if (this.head === null) {
      this.head = new Node(data);
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = new Node(data);
    }

    this.count++;
  }

  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  addAt(data, at) {
    let currentNode = this.head;
    if (at == 0) {
      this.head = new Node(data);
      this.head.next = currentNode;
    } else {
      //
      let count = 1;
      while (at > count++) {
        currentNode = currentNode.next;
      }
      const tempNode = currentNode.next;
      currentNode.next = new Node(data);
      currentNode.next.next = tempNode;
    }
  }

  // add
  // addAt
  // removeAt
}
class Node {
  data = null;
  next = null;

  constructor(data) {
    this.data = data;
  }
}

const linkedList = new LinkedList();
linkedList.add("1");
linkedList.add("2");
linkedList.add("3");
linkedList.add("4");
linkedList.add("5");
linkedList.addAt("100", 1);
linkedList.print();

window.linkedList = linkedList;
