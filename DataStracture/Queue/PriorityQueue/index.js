class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(data, priority) {
    const node = new Node(data, priority);

    const len = this.queue.length;
    for (let i = 0; i < len; i++) {
      if (this.queue[i].priority < node.priority) {
        this.queue.splice(i, 0, node);
        break;
      }
    }

    if (len === this.queue.length) {
      this.queue.push(node);
    }
  }
}

class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}

const queue = new PriorityQueue();
queue.enqueue(1, 20);
queue.enqueue(4, 21);
queue.enqueue(10, 1);
console.log(queue);
