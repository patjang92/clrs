export default function HeapSort(A) {
	buildMaxHeap(A);
	sortMaxHeap(A);
	return A;
}

function maxHeapify(A, rootIndex, heapSize = A.length){
	let leftIndex = (2 * rootIndex) + 1;
	let rightIndex = (2 * rootIndex) + 2;
	let largestIndex = rootIndex;

	if (leftIndex < heapSize && A[leftIndex] > A[largestIndex]) {
		largestIndex = leftIndex;
	}

	if (rightIndex < heapSize && A[rightIndex] > A[largestIndex]) {
		largestIndex = rightIndex;
	}

	if (largestIndex != rootIndex) {
    swap(A, rootIndex, largestIndex)
		maxHeapify(A, largestIndex, heapSize);
	}
}

function buildMaxHeap(A) {
	let heapSize = A.length;
	for (let i = Math.floor((heapSize - 1) / 2); i >= 0; i--) {
		maxHeapify(A, i);
	}
}

function sortMaxHeap(A) {
	for (let i = A.length - 1; i >= 1; i--) {
    swap(A, i, 0);
		maxHeapify(A, 0, i);
	}
}

function swap(A, i, j) {
  const tmp = A[i];
  A[i] = A[j];
  A[j] = tmp;
}