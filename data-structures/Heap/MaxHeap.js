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

	buildMaxHeap() {
		for (let i = Math.floor((this.getHeapSize() - 1) / 2); i >= 0; i--) {
			this.maxHeapifyDown(i);
		}
	}

	sort() {
		if (this.getHeapSize() <= 1) return;

		for (let i = this.getHeapSize() - 1; i >= 1; i--) {
			this.swap(0, i);
			// let temp = this.heapContainer[i];
			// this.heapContainer[i] = this.heapContainer[0];
			// this.heapContainer[0] = temp;
			this.maxHeapifyDown(0, i);
		}
	}

	maxHeapifyDown(index, heapSize = this.getHeapSize()) {
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
			this.swap(index, largestIndex);
			// let temp = this.heapContainer[index];
			// this.heapContainer[index] = this.heapContainer[largestIndex];
			// this.heapContainer[largestIndex] = temp;
			this.maxHeapifyDown(largestIndex, heapSize);
		}
	}

	maxHeapifyUp(index) {
		let currentIndex = index;
		while (this.hasParent(currentIndex) && this.getParent(currentIndex) < this.getValueByIndex(currentIndex)) {
			swap(this.getParentIndex(currentIndex), currentIndex);
			currentIndex = this.getParentIndex(currentIndex);
		}
	}

	add(x) {
		this.heapContainer.push(x);
		this.maxHeapifyUp(this.getHeapSize() - 1);
	}

	remove(x) {
		let deleteCount = this.find(x).length;

		for (let i = 0; i < deleteCount; i++) {
			const deleteIndex = this.find(x)[0];

			if (deleteIndex === (this.getHeapSize() - 1)) {
				this.heapContainer.pop();
			} else {
				this.heapContainer[deleteIndex] = this.heapContainer.pop();

				const parent = this.parent(deleteIndex);

				// Case where has children AND no parent OR parent is in correct order -> heapify down
				if (this.hasLeftChild(deleteIndex) && (!parent || parent > this.getValueByIndex(deleteIndex))) {
					this.maxHeapifyDown(deleteIndex);
				}
				// Otherwise, parent < current -> heapify up
				else {
					this.maxHeapifyUp(deleteIndex)
				}
			}
		}
	}

	find(x) {
		let foundIndices = [];
		for (let i = 0; i < this.getHeapSize(); i++) {
			if (this.getValueByIndex(i) == x) {
				foundIndices.push(i);
			}
		}
		return foundIndices;
	}

	swap(a, b) {
		const tmp = this.heapContainer[a];
		this.heapContainer[a] = this.heapContainer[b];
		this.heapContainer[b] = tmp;
	}

	getSortedArray() {
		this.sort();
		return this.heapContainer;
	}

	toArray() {
		return this.heapContainer;
	}
}