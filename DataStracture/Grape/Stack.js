export class Stack {
  constructor() {
    this.datas = [];
  }

  push(data) {
    this.datas.push(data);
  }

  pop() {
    return this.datas.pop();
  }

  empty() {
    return this.datas.length === 0;
  }
}
