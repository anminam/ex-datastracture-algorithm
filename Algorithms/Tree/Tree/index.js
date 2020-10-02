function solution(numbers) {
  var answer = 0;
  const bst = new Bst();
  const strList = numbers.split("");
  strList.forEach((i) => bst.insert(i));
  console.log(strList);

  return answer;
}

class Bst {
  constructor() {
    this.root = null;
    this.count = 0;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(newNode, root);
    }
  }

  insertNode(node, parent) {
    if (parent.data > node.data) {
      if (parent.left === null) {
        parent.left = node;
      } else {
        this.insertNode(node, parent.left);
      }
    } else {
      if (parent.right === null) {
        parent.right = node;
      } else {
        this.insertNode(node, parent.left);
      }
    }
  }

  getRoot() {
    return this.root;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const tree = new Bst();
tree.insert(15);
tree.insert(25);
tree.insert(10);
