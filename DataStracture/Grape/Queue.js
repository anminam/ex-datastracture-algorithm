export class Queue {
  constructor() {
    this.datas = [];
  }

  enqueue(data) {
    this.datas.push(data);
  }

  dequeue() {
    const nodeList = this.datas.splice(0, 1);
    if (nodeList.length > 0) {
      return nodeList[0];
    }
    return null;
  }

  empty() {
    return this.datas.length === 0;
  }
}
