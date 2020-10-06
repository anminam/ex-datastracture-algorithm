export class Stack {
  constructor() {
    this.arr = [];
  }

  push(data) {
    this.arr.push(data);
  }

  pop() {
    return this.arr.pop();
  }

  empty() {
    return this.arr.length === 0;
  }
}
