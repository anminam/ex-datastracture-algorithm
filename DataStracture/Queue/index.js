class Queue {
  constructor() {
    this.data = [];
  }

  size() {
    return this.data.length;
  }

  enqueue(data) {
    if (!data) {
      return;
    }
    this.data.push(data);
  }

  dequeue() {
    return this.data.shift();
  }
  print() {
    for (let i = 0; i < this.data.length; i++) {
      console.log(this.data[i]);
    }
  }
}

const queue = new Queue();
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(1234);
queue.enqueue(4);
queue.enqueue(123);
queue.enqueue(4);
queue.enqueue(666);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.print();
