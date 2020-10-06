import { LinkedList } from "./LinkedList.js";
import { Queue } from "./Queue.js";
import { Stack } from "./Stack.js";

class Grape {
  constructor(number) {
    this.nodes = [];

    for (let i = 0; i < number; i++) {
      this.nodes.push(new Node(i));
    }
  }

  add(a1, a2) {
    const index1 = this.nodes.findIndex((i) => i.data === a1);
    const index2 = this.nodes.findIndex((i) => i.data === a2);

    const node1 = this.nodes[index1];
    const node2 = this.nodes[index2];

    if (node1 && !node1.adjustList.contains(node2)) {
      node1.adjustList.add(node2);
    }

    if (node2 && !node2.adjustList.contains(node1)) {
      node2.adjustList.add(node1);
    }
  }

  print() {
    const nodes = this.nodes;
    nodes.forEach((node) => console.log(node));
  }

  resetMark() {
    this.nodes.forEach((i) => (i.isMarked = false));
  }

  bfs(index) {
    if (!index) {
      index = 0;
    }

    const root = this.nodes[index];
    const queue = new Queue();
    root.isMarked = true;
    queue.enqueue(root);

    while (!queue.empty()) {
      const node = queue.dequeue();
      console.log(node.data);

      let linkNode = node.adjustList.root;
      while (linkNode) {
        if (linkNode.data.isMarked === false) {
          linkNode.data.isMarked = true;
          queue.enqueue(linkNode.data);
        }
        linkNode = linkNode.next;
      }
    }

    this.resetMark();
  }

  dfs(index) {
    if (!index) {
      index = 0;
    }

    const rootNode = this.nodes[index];

    const stack = new Stack();
    rootNode.isMarked = true;
    stack.push(rootNode);

    while (!stack.empty()) {
      const node = stack.pop();
      console.log(node.data);

      let linkNode = node.adjustList.root;

      while (linkNode) {
        if (linkNode.data.isMarked === false) {
          linkNode.data.isMarked = true;
          stack.push(linkNode.data);
        }
        linkNode = linkNode.next;
      }
    }

    this.resetMark();
  }

  _dfsR(node) {
    if (node === null) {
      return;
    }

    node.isMarked = true;
    console.log(node.data);

    let linkedNode = node.adjustList.root;
    while (linkedNode) {
      if (linkedNode.data.isMarked === false) {
        this._dfsR(linkedNode.data);
      }
      linkedNode = linkedNode.next;
    }
  }
  dfsR(index) {
    if (!index) {
      index = 0;
    }
    this._dfsR(this.nodes[index]);
  }
}
class Node {
  constructor(data) {
    this.data = data;
    this.isMarked = false;
    this.adjustList = new LinkedList();
  }
}
const g = new Grape(9);

g.add(0, 1);
g.add(0, 1);
g.add(1, 2);
g.add(1, 3);
g.add(2, 4);
g.add(2, 3);
g.add(3, 4);
g.add(3, 5);
g.add(5, 6);
g.add(5, 7);
g.add(6, 8);

// g.print();

console.log("시작전");

console.log("bfs");
g.bfs();
console.log("dfs");
// 013576842;
g.dfs();
console.log("dfsR");
// 012435687
g.dfsR();
