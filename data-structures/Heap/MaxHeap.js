export default class MaxHeap {

	constructor(array = []) {
		this.heapContainer = array;
		if (this.getHeapSize() > 1) {
			this.buildMaxHeap();
		} 
	}

	getHeapSize() {
		return this.heapContainer.length;
	}

	buildMaxHeap() {
		for (let i = Math.floor((this.getHeapSize() - 1) / 2); i >= 0; i--) {
			this.maxHeapify(i);
		}
	}

	getLeftChildIndex(index) {
		return (2 * index) + 1; 
	}

	getRightChildIndex(index) {
		return (2 * index) + 2;
	}

	getParentIndex(index) {
		return Math.floor((index - 1) / 2);
	}

	hasLeftChild(index) {
		return this.getLeftChildIndex(index) < this.getHeapSize();
	}

	hasRightChild(index) {
		return this.getRightChildIndex(index) < this.getHeapSize();
	}

	hasParent(index) {
		return this.getParentIndex(index) >= 0;
	}

	getValueByIndex(index) {
		return this.heapContainer[index];
	}

	getLeftChild(index) {
		return this.getValueByIndex(this.getLeftChildIndex(index));
	}

	getRightChild(index) {
		return this.getValueByIndex(this.getRightChildIndex(index));
	}

	getParent(index) {
		return this.getValueByIndex(this.getParentIndex(index));
	}

	sort() {
		if (this.getHeapSize() <= 1) return;

		for (let i = this.getHeapSize() - 1; i >= 1; i--) {
			let temp = this.heapContainer[i];
			this.heapContainer[i] = this.heapContainer[0];
			this.heapContainer[0] = temp;
			this.maxHeapify(0, i);
		}
	}

	getSortedArray(a) {
		this.sort();
		return this.heapContainer;
	}

	toArray() {
		return this.heapContainer;
	}

	maxHeapify(index, heapSize = this.getHeapSize()) {
		// let leftIndex = this.hasLeftChild(index) && this.getLeftChildIndex(index);
		// let rightIndex = this.hasRightChild(index) && this.getRightChildIndex(index);
		let leftIndex = this.getLeftChildIndex(index);	
		let rightIndex = this.getRightChildIndex(index);
		// let currentValue = getValueByIndex(index);
		let largestIndex = index;

		if (rightIndex < heapSize && this.getValueByIndex(rightIndex) > this.getValueByIndex(largestIndex)) {
			largestIndex = rightIndex;
		}
		if (leftIndex < heapSize && this.getValueByIndex(leftIndex) > this.getValueByIndex(largestIndex)) {
			largestIndex = leftIndex;
		}

		if (largestIndex != index) {
			let temp = this.heapContainer[index];
			this.heapContainer[index] = this.heapContainer[largestIndex];
			this.heapContainer[largestIndex] = temp;
			this.maxHeapify(largestIndex, heapSize);
		}
	}
}