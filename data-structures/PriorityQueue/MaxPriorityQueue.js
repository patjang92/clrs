import MaxHeap from '../Heap/MaxHeap';

export default class MaxPriorityQueue extends MaxHeap {
	
	constructor(array = []) {
		super(array);
	}

	getSize() {
		return this.getHeapSize();
	}

	peek() {
		if (this.heapContainer.length < 1) {
			throw new Error("Queue is empty");
		}
		return this.heapContainer[0];
	}

	pop() {
		if (this.heapContainer.length < 1) {
			throw new Error("Queue is empty");
		}
		const max = this.heapContainer[0];
		this.heapContainer[0] = this.heapContainer[this.heapContainer.length - 1];
		this.heapContainer.length--;
		this.maxHeapify(0);
		return max;
	}

	increaseKey(index, key) {
		if (this.heapContainer[index] === undefined || this.heapContainer[index] <= key) {
			this.heapContainer[index] = key;
		} else {
			throw new Error("New key is smaller than current key");
		}
		while (index > 0 && this.heapContainer[index] > this.getParent(index)) {
			let parentIndex = this.getParentIndex(index);
			let tmp = this.heapContainer[parentIndex];
			this.heapContainer[parentIndex] = this.heapContainer[index];
			this.heapContainer[index] = tmp;
			// this.heapContainer[index] = this.get
			index = parentIndex;
		}
	}

	push(key) {
		this.heapContainer.length++;
		this.increaseKey(this.heapContainer.length - 1, key);
	}

}