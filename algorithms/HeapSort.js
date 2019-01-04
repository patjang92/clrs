import Heap from '../data-structures/MaxHeap'

export default function HeapSort(A) {
	const heap = new Heap(A);
	heap.sort();
	return heap.toArray();
}