class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = new Node(data);
    }
    this.length++;
  }
  appendAt(data, pos) {
    if (!data) {
      return;
    }

    if (pos < 0 || pos >= this.length) {
      return;
    }

    if (pos === 0) {
      const temp = this.head;
      this.head = new Node(data);
      this.head.next = temp;
    } else {
      let beforNode = this.head;
      let tempNode = this.head.next;
      let temp = 1;
      while (temp < pos) {
        beforNode = tempNode;
        tempNode = tempNode.next;
        temp++;
      }

      beforNode.next = new Node(data);
      beforNode.next.next = tempNode;
    }
    this.length++;
  }
  removeAt(pos) {
    if (pos < 0 || pos >= this.length) {
      return;
    }

    let removedData;
    if (pos === 0) {
      removedData = this.head;
      this.head = this.head.next;
    } else {
      let beforNode = this.head;
      let tempNode = this.head.next;
      let temp = 1;
      while (temp < pos) {
        beforNode = tempNode;
        tempNode = tempNode.next;
        temp++;
      }

      removedData = tempNode;
      beforNode.next = tempNode.next;
    }

    return removedData;
  }

  print() {
    console.log("----------------------------");
    let temp = this.head;
    while (temp) {
      console.log(temp);
      temp = temp.next;
    }
  }
}

const list = new LinkedList();
list.append("a");
list.append("123");
list.append({ a: 12 });
list.append(888888);
list.append({ a: 15234 });
list.append(444);
console.log(list.length);

list.print();
list.removeAt(2);
list.print();

list.removeAt(1);
list.print();

list.removeAt(0);
list.print();
debugger;

list.appendAt("지금이순간", 1);
list.print();
