function left(i) {
	return 2 * i;
}
function right(i) {
	return (2 * i) + 1
}
function parent(i) {
	return i > 0 ? Math.floor(i / 2) : i;
}


function maxHeapify(A, i) {
	const leftNode = left(i);
	const rightNode = right(i);

	let largest = i;
	if (A[leftNode] > A[i]) largest = leftNode;
	if (A[rightNode] > A[largest]) largest = rightNode;

	if (largest != i) {
		let temp = A[i];
		A[i] = A[largest];
		A[largest] = temp;
	} 
}

function buildMaxHeap(A) {
	const heapSize = A.length;
	for (let i = Math.floor(A.length-1 / 2); i >= 0; i--) {
		maxHeapify(A, i);
	}
}

function heapSort(A) {
	if (A.length <= 1) return A;
	buildMaxHeap(A);
	for (let i = A.length - 1; i >= 1; i--) {
		let temp = A[1];
		A[1] = A[i];
		A[i] = temp;
		// A.heapSize--;
		// MaxHeapify(A, 1);
	}
}