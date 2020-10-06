import { LinkedList } from "./LinkedList.js";
import { Stack } from "./Stack.js";

export class Grape {
  constructor(number) {
    this.nodes = [];
    for (let i = 0; i < number; i++) {
      this.nodes.push(new Node(i));
    }
  }

  reset() {
    this.nodes.forEach((i) => (i.isMakred = false));
  }

  add(a1, a2) {
    const index1 = this.nodes.findIndex((i) => i.data === a1);
    const index2 = this.nodes.findIndex((i) => i.data === a2);

    const node1 = this.nodes[index1];
    const node2 = this.nodes[index2];

    if (!node1.adjustList.contain(node2)) {
      node1.adjustList.add(node2);
    }

    if (!node2.adjustList.contain(node1)) {
      node2.adjustList.add(node1);
    }
  }

  print() {
    this.nodes.forEach((i) => console.log(i));
  }

  dfs(index) {
    if (!index) {
      index = 0;
    }

    this._dfs(index);
    this.reset();
  }
  _dfs(index) {
    const stack = new Stack();

    const root = this.nodes[index];
    root.isMakred = true;
    stack.push(root);

    while (!stack.empty()) {
      const node = stack.pop();
      console.log(node.data);

      let linkNode = node.adjustList.root;

      while (linkNode) {
        if (linkNode.data.isMakred === false) {
          linkNode.data.isMakred = true;
          stack.push(linkNode.data);
        }
        linkNode = linkNode.next;
      }
    }
  }

  dfsR(index) {
    index = index ? index : 0;
    this._dfsR(this.nodes[index]);
  }
  _dfsR(node) {
    if (node === null) {
      return;
    }

    console.log(node);
    node.isMakred = true;
    let linkNode = node.adjustList.root;
    while (linkNode) {
      if (linkNode.data.isMakred === false) {
        this._dfsR(linkNode.data);
      }
      linkNode = linkNode.next;
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.isMakred = false;
    this.adjustList = new LinkedList();
  }
}
