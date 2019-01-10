import MaxPriorityQueue from './MaxPriorityQueue';

test('create empty priority queue', () => {
	const pq = new MaxPriorityQueue([]);
	expect(pq.toArray()).toEqual([]);
	expect(pq.getSize()).toEqual(0);
	expect(pq.pop).toThrowError();
	expect(pq.peek).toThrowError();
})

test('create priority queue with one element and pop', () => {
	const pq = new MaxPriorityQueue([1]);
	expect(pq.toArray()).toEqual([1]);
	expect(pq.getSize()).toEqual(1);
	expect(pq.peek()).toEqual(1);
	expect(pq.pop()).toEqual(1);
	expect(pq.pop).toThrowError();	
	expect(pq.peek).toThrowError();
	expect(pq.toArray()).toEqual([]);	
	expect(pq.getSize()).toEqual(0);
})

test('create priority queue with one element and pop', () => {
	const pq = new MaxPriorityQueue([1]);
	expect(pq.toArray()).toEqual([1]);
	expect(pq.getSize()).toEqual(1);
	expect(pq.peek()).toEqual(1);
	expect(pq.pop()).toEqual(1);
	expect(pq.pop).toThrowError();	
	expect(pq.peek).toThrowError();
	expect(pq.toArray()).toEqual([]);	
	expect(pq.getSize()).toEqual(0);
})

test('create priority queue with array and pop in descending order', () => {
	const pq = new MaxPriorityQueue([1, 5, 9, 4, 2]);
	// expect(pq.toArray()).toEqual([1]);
	expect(pq.getSize()).toEqual(5);
	expect(pq.pop()).toEqual(9);
	expect(pq.pop()).toEqual(5);
	expect(pq.pop()).toEqual(4);
	expect(pq.pop()).toEqual(2);
	expect(pq.pop()).toEqual(1);
	expect(pq.pop).toThrowError();	
	expect(pq.peek).toThrowError();
	expect(pq.getSize()).toEqual(0);
})

test('create an empty priority queue, push elements, and pop in descending order', () => {
	const pq = new MaxPriorityQueue([]);
	pq.push(1)
	pq.push(9)
	pq.push(4)
	pq.push(12)
	pq.push(3)
	expect(pq.getSize()).toEqual(5);

	expect(pq.pop()).toEqual(12);
	expect(pq.pop()).toEqual(9);
	expect(pq.pop()).toEqual(4);
	expect(pq.pop()).toEqual(3);
	expect(pq.pop()).toEqual(1);
	expect(pq.pop).toThrowError();	
	expect(pq.peek).toThrowError();
	expect(pq.getSize()).toEqual(0);
})