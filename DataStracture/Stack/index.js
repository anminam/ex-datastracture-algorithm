class Stack {
  constructor() {
    this.data = [];
  }

  push(data) {
    if (!data) {
      return;
    }
    this.data.push(data);
  }
  pop() {
    return this.data.pop();
  }
  size() {
    return this.data.length;
  }
  print() {
    this.data.forEach((i) => console.log(i));
  }
}
const stack = new Stack();
stack.push(2);
stack.push(4);
stack.push(1234);
stack.push(4);
stack.push(123);
stack.push(4);
stack.push(666);
// stack.pop();
stack.print();
