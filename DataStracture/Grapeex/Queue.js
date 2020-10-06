export class Queue {
  constructor() {
    this.arr = [];
  }

  enqueue(data) {
    this.arr.push(data);
  }

  dequeue() {
    if (this.arr.length === 0) {
      return null;
    }
    return this.arr.splice(0, 1)[0];
  }

  empty() {
    return this.arr.length === 0;
  }
}
