import Queue from '../Queue';

describe('Queue', () => {

  it('should create empty queue', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toEqual(true);  
    expect(queue.peek).toThrowError();
    expect(queue.dequeue).toThrowError();
  })

  it('should enqueue and dequeue one element', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.isEmpty()).toEqual(false);  
    expect(queue.peek()).toBe(1);
    expect(queue.dequeue()).toBe(1);
    expect(queue.isEmpty()).toEqual(true);  
    expect(queue.peek).toThrowError();
    expect(queue.dequeue).toThrowError();
  })

  it('should enqueue and dequeue multiple elements in FIFO order', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.isEmpty()).toEqual(false);  
    expect(queue.peek()).toBe(1);
    expect(queue.dequeue()).toBe(1);
    expect(queue.peek()).toBe(2);
    expect(queue.dequeue()).toBe(2);
    expect(queue.peek()).toBe(3);
    expect(queue.dequeue()).toBe(3);
    expect(queue.isEmpty()).toEqual(true);  
    expect(queue.peek).toThrowError();
    expect(queue.dequeue).toThrowError();
  })
})