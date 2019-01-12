import LinkedList from '../LinkedList/LinkedList';

export default class Queue {

  constructor() {
    this.list = new LinkedList();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  enqueue(x) {
    this.list.append(x);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue Underflow - Queue is empty")
    }
    const value = this.list.head.value;
    this.list.deleteNode(this.list.head);
    return value;
    
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue Underflow - Queue is empty")
    }
    const value = this.list.head.value;
    return value;
  }

  toArray() {
    return this.list.toArray();
  }

}



