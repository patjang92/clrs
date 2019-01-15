import Heap from './MaxHeap';

describe('Maxheap', () => {

	it('should create empty heap', () => {
		const heap = new Heap([]);
		expect(heap.toArray()).toEqual([]);
		expect(heap.getHeapSize()).toEqual(0);
	})
	
	it('should create heap with one element', () => {
		const heap = new Heap([1]);
		expect(heap.toArray()).toEqual([1]);
		expect(heap.getHeapSize()).toEqual(1);
	})
	
	it('should create heap with 2 elements in decreasing order', () => {
		const heap = new Heap([2, 1]);
		expect(heap.toArray()).toEqual([2, 1]);
		expect(heap.getHeapSize()).toEqual(2);
	})
	
	it('should create heap with 2 elements in increasing order', () => {
		const heap = new Heap([1, 2]);
		expect(heap.toArray()).toEqual([2, 1]);
		expect(heap.getHeapSize()).toEqual(2);
	})
	
	it('should create heap with 3 elements in decreasing order', () => {
		const heap = new Heap([3, 2, 1]);
		expect(heap.toArray()).toEqual([3, 2, 1]);
		expect(heap.getHeapSize()).toEqual(3);
	})
	
	it('should create heap with 3 elements in increasing order', () => {
		const heap = new Heap([1, 2, 3]);
		expect(heap.toArray()).toEqual([3, 2, 1]);
		expect(heap.getHeapSize()).toEqual(3);
	})
	
	it('should create heap with 4 elements in decreasing order', () => {
		const heap = new Heap([4, 3, 2, 1]);
		expect(heap.toArray()).toEqual([4, 3, 2, 1]);
		expect(heap.getHeapSize()).toEqual(4);
	})
	
	it('should create heap with 4 elements in increasing order', () => {
		const heap = new Heap([1, 2, 3, 4]);
		expect(heap.toArray()).toEqual([4, 2, 3, 1]);
		expect(heap.getHeapSize()).toEqual(4);
	})
	
	it('should create heap with 8 elements in decreasing order', () => {
		const heap = new Heap([8, 7, 6, 5, 4, 3, 2, 1]);
		expect(heap.toArray()).toEqual([8, 7, 6, 5, 4, 3, 2, 1]);
		expect(heap.getHeapSize()).toEqual(8);
	})
	
	it('should create heap with 8 elements in increasing order', () => {
		const heap = new Heap([1, 2, 3, 4, 5, 6, 7, 8]);
		expect(heap.toArray()).toEqual([8, 5, 7, 4, 1, 6, 3, 2]);
		expect(heap.getHeapSize()).toEqual(8);
	})

	it('should push elements to heap and maintain heap properties', () => {
		const heap = new Heap([]);
		heap.add(1); // [1]
		heap.add(2); // [2, 1]
		heap.add(3); // [3, 1, 2]
		heap.add(4); // [4, 3, 2, 1]
		heap.add(2); // [4, 3, 2, 1, 2]
		expect(heap.toArray()).toEqual([4, 3, 2, 1, 2]);

	})

	it('should remove elements and maintain heap properties', () => {
		const heap = new Heap([4, 3, 2, 1, 2]);
		heap.remove(2);
		expect(heap.toArray()).toEqual([4, 3, 1])
		heap.remove(4);
		expect(heap.toArray()).toEqual([3, 1])
	})

	it('should find all instances of value', () => {
		const heap = new Heap([4, 3, 2, 1, 2]);
		expect(heap.find(2)).toEqual([2, 4])
	})
})

