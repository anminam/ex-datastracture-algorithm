import { Node } from "./Node.js";
import { Stack } from "./Stack.js";
import { Queue } from "./Queue.js";

class Grape {
  constructor(initNumber) {
    this.root = null;
    this.nodes = [];
    for (let i = 0; i < initNumber; i++) {
      this.nodes.push(new Node(i));
    }
  }

  indexOf(data) {
    return this.nodes.indexOf(data);
  }

  add(a1, a2) {
    const node1Index = this.nodes.findIndex((obj) => obj.data === a1);
    const node2Index = this.nodes.findIndex((obj) => obj.data === a2);
    const node1 = this.nodes[node1Index];
    const node2 = this.nodes[node2Index];

    if (!node1.adjustList.contains(a2)) {
      node1.adjustList.add(node2);
    }
    if (!node2.adjustList.contains(a1)) {
      node2.adjustList.add(node1);
    }
  }

  print() {
    console.log("이걸로시작", this.nodes);
  }

  bfs(index) {
    if (!index) {
      index = 0;
    }
    console.log("bfs시작", this.nodes);

    const queue = new Queue();
    const rootNode = this.nodes[index];
    queue.enqueue(rootNode);
    rootNode.isMarked = true;

    let temp = 0;
    while (!queue.empty()) {
      const node = queue.dequeue();
      console.log(node.data);
      let linkRootNode = node.adjustList.root;
      if (temp++ > 100) {
        break;
      }
      if (linkRootNode) {
        do {
          if (linkRootNode.data.isMarked === false) {
            linkRootNode.data.isMarked = true;
            queue.enqueue(linkRootNode.data);
          }
          linkRootNode = linkRootNode.next;
        } while (linkRootNode);
      }
    }
  }

  dfsR(index) {
    index = index ? index : 0;
    const node = this.nodes[index];
    this._dfs(node);
  }

  _dfs(node) {
    if (node === null) {
      return;
    }
    console.log(node.data);
    node.isMarked = true;
    let temp = 0;
    let linkNode = node.adjustList;
    if (linkNode) {
      linkNode = linkNode.root;
      while (linkNode) {
        if (linkNode.data.isMarked === false) {
          linkNode.data.isMarked = true;
          this._dfs(linkNode.data);
        }
        linkNode = linkNode.next;
        if (temp++ > 100) {
          break;
        }
      }
    }
  }

  dfs(index) {
    if (!index) {
      index = 0;
    }
    console.log("dfs시작", this.nodes);

    const stack = new Stack();
    const rootNode = this.nodes[index];
    stack.push(rootNode);
    rootNode.isMarked = true;
    console.log(rootNode);

    let temp = 0;
    while (!stack.empty()) {
      const node = stack.pop();
      console.log(node.data);
      let linkRootNode = node.adjustList.root;
      if (temp++ > 100) {
        break;
      }
      if (linkRootNode) {
        do {
          if (linkRootNode.data.isMarked === false) {
            linkRootNode.data.isMarked = true;
            stack.push(linkRootNode.data);
          }
          linkRootNode = linkRootNode.next;
        } while (linkRootNode);
      }
    }
  }
}

const g = new Grape(9);

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

g.print();

// g.bfs();
// g.dfs();

g.dfsR();
