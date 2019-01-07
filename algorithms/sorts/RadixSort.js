import CountSort from './CountSort';

export default function RadixSort(A, radix=10) {
	if (A.length <= 1) {
		return A;
	}

	// find max value
	let max = A[0];
	for (let i = 0; i < A.length; i++) {
		if (A[i] > max) { 
			max = A[i];
		}
	}

	let exponent = 1;
	while (max / exponent >= 1) {
		A = CountSort(A, radix, exponent)
		exponent *= radix;
	}

	return A;
}