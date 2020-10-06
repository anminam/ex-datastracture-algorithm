class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(data, priority) {
    const node = new Node(data, priority);

    const length = this.queue.length;
    let isQueue = false;
    for (let i = 0; i < length; i++) {
      if (this.queue[i].priority < priority) {
        this.queue.splice(i, 0, node);
        isQueue = true;
        break;
      }
    }

    if (!isQueue) {
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
queue.enqueue(1, 5);
queue.enqueue(3, 2);
queue.enqueue(4, 3);
queue.enqueue(1, 1);
queue.enqueue("가나다", 20);

console.log(queue);
