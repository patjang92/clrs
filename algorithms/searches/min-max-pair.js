/**
 * Finds min and max element of input array A
 * 
 * @param {*} A input array
 * 
 * @returns {[number, number]} min and max values
 */
export default function minMaxPair(A) {
	if (!A || !A.length) return null;

	const length = A.length;
	if (length === 1) return [A[0], A[0]];

	let minIndex = 0;
	let maxIndex = 0;
	let index = 1;

	if (length % 2 === 0) {
		if (A[0] > A[1]) {
			minIndex = 1;
		} else {
			maxIndex = 1;
		}
		index++;
  }

	while (index + 1 < A.length) {
		let lesserIndex = index;
		let greaterIndex = index + 1; 
		if (A[index] > A[index + 1]) {
			greaterIndex = index;
			lesserIndex = index + 1;
		}
		if (A[greaterIndex] > A[maxIndex]) {
			maxIndex = greaterIndex;
		}
		if (A[lesserIndex] < A[minIndex]) {
			minIndex = lesserIndex;
		}
		index += 2;
	}

	return [ A[minIndex], A[maxIndex] ]
}