/*
	A is input array with values [0, k]
	k is largest integer in A
*/
export default function CountSort(A, k) {
	if (!A || A.length <= 1 || k == 0) return A;

	let count = [];
	let output = [];

	for (let i = 0; i <= k; i++) {
		count[i] = 0;
	}	

	for (let i = 0; i < A.length; i++) {
		count[A[i]]++;
		output[i] = 0;
	}

	for (let i = 1; i < count.length; i++) {
		count[i] = count[i] + count[i-1];
	}

	for (let i = A.length-1; i >= 0; i--) {
		output[count[A[i]] - 1] = A[i];
		count[A[i]]--;
	}

	return output;
}