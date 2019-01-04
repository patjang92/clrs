import Heap from './MaxHeap';

test('create empty heap', () => {
	const heap = new Heap([]);
	expect(heap.toArray()).toEqual([]);
	expect(heap.getHeapSize()).toEqual(0);
})

test('create heap with one element', () => {
	const heap = new Heap([1]);
	expect(heap.toArray()).toEqual([1]);
	expect(heap.getHeapSize()).toEqual(1);
})

test('create heap with 2 elements in decreasing order', () => {
	const heap = new Heap([2, 1]);
	expect(heap.toArray()).toEqual([2, 1]);
	expect(heap.getHeapSize()).toEqual(2);
})

test('create heap with 2 elements in increasing order', () => {
	const heap = new Heap([1, 2]);
	expect(heap.toArray()).toEqual([2, 1]);
	expect(heap.getHeapSize()).toEqual(2);
})

test('create heap with 3 elements in decreasing order', () => {
	const heap = new Heap([3, 2, 1]);
	expect(heap.toArray()).toEqual([3, 2, 1]);
	expect(heap.getHeapSize()).toEqual(3);
})

test('create heap with 3 elements in increasing order', () => {
	const heap = new Heap([1, 2, 3]);
	expect(heap.toArray()).toEqual([3, 2, 1]);
	expect(heap.getHeapSize()).toEqual(3);
})

test('create heap with 4 elements in decreasing order', () => {
	const heap = new Heap([4, 3, 2, 1]);
	expect(heap.toArray()).toEqual([4, 3, 2, 1]);
	expect(heap.getHeapSize()).toEqual(4);
})

test('create heap with 4 elements in increasing order', () => {
	const heap = new Heap([1, 2, 3, 4]);
	expect(heap.toArray()).toEqual([4, 2, 3, 1]);
	expect(heap.getHeapSize()).toEqual(4);
})

test('create heap with 8 elements in decreasing order', () => {
	const heap = new Heap([8, 7, 6, 5, 4, 3, 2, 1]);
	expect(heap.toArray()).toEqual([8, 7, 6, 5, 4, 3, 2, 1]);
	expect(heap.getHeapSize()).toEqual(8);
})

test('create heap with 8 elements in increasing order', () => {
	const heap = new Heap([1, 2, 3, 4, 5, 6, 7, 8]);
	expect(heap.toArray()).toEqual([8, 5, 7, 4, 1, 6, 3, 2]);
	expect(heap.getHeapSize()).toEqual(8);
})