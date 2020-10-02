class Bst {
  constructor() {
    this.root = null;
    this.length = 0;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(newNode, this.root);
    }
  }

  insertNode(node, parentNode) {
    if (node.data < parentNode.data) {
      if (parentNode.left === null) {
        parentNode.left = node;
      } else {
        this.insertNode(node, parentNode.left);
      }
    } else {
      if (parentNode.right === null) {
        parentNode.right = node;
      } else {
        this.insertNode(node, parentNode.right);
      }
    }
  }

  getRoot() {
    return this.root;
  }

  inorder(parentNode) {
    if (parentNode === null) {
      return;
    }

    this.inorder(parentNode.left);
    this.inorder(parentNode.right);
    console.log(parentNode.data);
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
tree.insert(7);
tree.insert(22);
tree.insert(17);
tree.insert(13);
tree.insert(5);
tree.insert(9);
tree.insert(27);

let rootNode = tree.getRoot();
tree.inorder(rootNode);
