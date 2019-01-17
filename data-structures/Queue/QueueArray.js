export default class Queue {

  constructor(array = []) {
    this.queue = array;
    this.offset = 0;
  }

  getLength() {
    return this.queue.length - this.offset;
  }

  isEmpty() {
    return this.queue.length == 0;
  }

  enqueue(x) {
    this.queue.push(x);
  }

  dequeue() {
    if (this.queue.length == 0) {
      throw new Error("Queue Underflow - Queue is empty")
    }

    let item = this.queue[this.offset];
    this.offset++;

    if (this.offset * 2 >= this.queue.length) {
      this.queue = this.queue.slice(this.offset);
      this.offset = 0;
    }

    return item;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue Underflow - Queue is empty")
    }
    return this.queue[this.offset];
  }

  toArray() {
    return this.queue;
  }

}