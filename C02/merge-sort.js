/*
	Subfunction to merge two sorted arrays indexed by A[p.. q], A[q+1.. r]
*/
function merge(A, p, q, r) {
	// Get lengths of each side from indices
	const leftLength = q - p + 1;
	const rightLength = r - q;

	// create left and right subarrays
	const left = []; const right = [];

	for (let i = 0; i < leftLength; i++) {
		left[i] = A[p + i];
	}

	for (let j = 0; j < rightLength; j++) {
		right[j] = A[q + j + 1];
	}

	// iterate from p to r
	let leftIndex = 0;
	let rightIndex = 0;
	let arrayIndex = p;

	while (leftIndex < leftLength && rightIndex < rightLength && arrayIndex <= r) {
		if (left[leftIndex] <= right[rightIndex]) {
			A[arrayIndex] = left[leftIndex];
			leftIndex++;
		} else {
			A[arrayIndex] = right[rightIndex];
			rightIndex++;
		}
		arrayIndex++;
	}

	while (arrayIndex <= r && leftIndex < leftLength) {
		A[arrayIndex] = left[leftIndex];
		arrayIndex++;
		leftIndex++;
	}

	while (arrayIndex <= r && rightIndex < rightLength) {
		A[arrayIndex] = right[rightIndex];
		arrayIndex++;
		rightIndex++;
	}

	return A;
}

/*
	Takes in array A and sorts using merge sort algorithm
*/
export default function mergeSort(A, p, r) {
	// if subarray length of A[p.. r] is <= 1, then we can just return A
	if (r <= p) return A;
	const midOffset = Math.floor((r - p) / 2);
	const middleIndex = p + midOffset;
	mergeSort(A, p, middleIndex);
	mergeSort(A, middleIndex + 1, r);
	merge(A, p, middleIndex, r);
	return A;
}