import { LinkedList } from "./LinkedList.js";

export class Node {
  constructor(data) {
    this.isMarked = false;
    this.data = data;
    this.adjustList = new LinkedList();
  }
}
