function solution(priorities, location) {
  var answer = 0;
  var len = priorities.length;
  var queue = new Queue();

  for (let i = 0; i < len; i++) {
    queue.add(i, priorities[i]);
  }
  debugger;
  answer = queue.findLocationIndex(location) + 1;
  return answer;
}

class Queue {
  constructor() {
    this.queue = [];
  }

  add(location, value) {
    const node = new Node(location, value);
    let index = this.queue.findIndex((v) => {
      return v.value <= value;
    });
    if (index === -1) {
      this.queue.push(node);
    } else {
      this.queue.splice(index, 0, node);
    }
  }

  findLocationIndex(location) {
    return this.queue.findIndex((v) => v.location === location);
  }
}

class Node {
  constructor(location, value) {
    this.location = location;
    this.value = value;
  }
}

// solution([2, 1, 3, 2], 2);
solution([1, 1, 9, 1, 1, 1], 0);
