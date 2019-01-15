/**
 * Implements MaxHeap using array
 */
export default class MaxHeap {

  /**
   * 
   * @param {*} array 
   */
  constructor(array = []) {
    this.heapContainer = array;
    if (this.getHeapSize() > 1) {
      this.buildHeap();
    } 
  }

  /**
   * @returns {number}
   */
  getHeapSize() {
    return this.heapContainer.length;
  }

  /**
   * 
   * @param {number} index 
   * @returns {number}
   */
  getLeftChildIndex(index) {
    return (2 * index) + 1; 
  }

  /**
   * 
   * @param {number} index 
   * @returns {number}
   */
  getRightChildIndex(index) {
    return (2 * index) + 2;
  }

  /**
   * 
   * @param {number} index 
   * @returns {number}
   */
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  /**
   * 
   * @param {number} index 
   * @returns {boolean}
   */
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.getHeapSize();
  }

  /**
   * 
   * @param {number} index 
   * @returns {boolean}
   */
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.getHeapSize();
  }

  /**
   * 
   * @param {number} index 
   * @returns {boolean}
   */
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  /**
   * 
   * @param {number} index 
   * @returns {*}
   */
  getValueByIndex(index) {
    return this.heapContainer[index];
  }

  /**
   * 
   * @param {number} index 
   * @returns {*}
   */
  getLeftChild(index) {
    return this.getValueByIndex(this.getLeftChildIndex(index));
  }

  /**
   * 
   * @param {number} index 
   * @returns {*}
   */
  getRightChild(index) {
    return this.getValueByIndex(this.getRightChildIndex(index));
  }

  /**
   * 
   * @param {number} index 
   * @returns {*}
   */
  getParent(index) {
    return this.getValueByIndex(this.getParentIndex(index));
  }

  /**
   * Builds heap by enforcing heap properties
   */
  buildHeap() {
    for (let i = Math.floor((this.getHeapSize() - 1) / 2); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  /**
   * Sorts heap array to ascending order
   */
  sort() {
    if (this.getHeapSize() <= 1) return;

    for (let i = this.getHeapSize() - 1; i >= 1; i--) {
      this.swap(0, i);
      this.heapifyDown(0, i);
    }
  }

  /**
   * Takes root index and enforces heap properties down
   * 
   * @param {number} index 
   * @param {number} heapSize 
   */
  heapifyDown(index, heapSize = this.getHeapSize()) {
    let leftIndex = this.getLeftChildIndex(index);	
    let rightIndex = this.getRightChildIndex(index);
    let largestIndex = index;

    if (rightIndex < heapSize && this.getValueByIndex(rightIndex) > this.getValueByIndex(largestIndex)) {
      largestIndex = rightIndex;
    }
    if (leftIndex < heapSize && this.getValueByIndex(leftIndex) > this.getValueByIndex(largestIndex)) {
      largestIndex = leftIndex;
    }

    if (largestIndex != index) {
      this.swap(index, largestIndex);
      this.heapifyDown(largestIndex, heapSize);
    }
  }

  /**
   * Takes root index and enforces heap properteis up
   * 
   * @param {number} index 
   */
  heapifyUp(index) {
    let currentIndex = index;
    while (this.hasParent(currentIndex) && this.getParent(currentIndex) < this.getValueByIndex(currentIndex)) {
      this.swap(this.getParentIndex(currentIndex), currentIndex);
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  /**
   * Add element to heap
   * 
   * @param {*} x 
   */
  add(x) {
    this.heapContainer.push(x);
    this.heapifyUp(this.getHeapSize() - 1);
  }

  /**
   * Removes all instances of x from heap
   * 
   * @param {*} x 
   */
  remove(x) {
    let deleteCount = this.find(x).length;

    for (let i = 0; i < deleteCount; i++) {
      const deleteIndex = this.find(x)[0];

      if (deleteIndex === (this.getHeapSize() - 1)) {
        this.heapContainer.pop();
      } else {
        this.heapContainer[deleteIndex] = this.heapContainer.pop();

        const parent = this.getParent(deleteIndex);

        // Case where has children AND no parent OR parent is in correct order -> heapify down
        if (this.hasLeftChild(deleteIndex) && (!parent || parent > this.getValueByIndex(deleteIndex))) {
          this.heapifyDown(deleteIndex);
        }
        // Otherwise, parent < current -> heapify up
        else {
          this.heapifyUp(deleteIndex)
        }
      }
    }
  }

  /**
   * Finds all indics of element in heap
   * 
   * @param {*} x 
   * @returns {*|array} indices of x
   */
  find(x) {
    let foundIndices = [];
    for (let i = 0; i < this.getHeapSize(); i++) {
      if (this.getValueByIndex(i) == x) {
        foundIndices.push(i);
      }
    }
    return foundIndices;
  }

  /**
   * Swaps indices a and b in heapContainer array
   * 
   * @param {number} a 
   * @param {number} b 
   */
  swap(a, b) {
    const tmp = this.heapContainer[a];
    this.heapContainer[a] = this.heapContainer[b];
    this.heapContainer[b] = tmp;
  }

  /**
   * 
   * @returns {*|array} sorted array
   */
  getSortedArray() {
    this.sort();
    return this.heapContainer;
  }

  /**
   * @returns {*|array}
   */
  toArray() {
    return this.heapContainer;
  }
}