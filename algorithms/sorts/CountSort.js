/*
	A is input array with values [0, k]
	k is largest integer in A, also radix
*/
export default function CountSort(A, k, exponent=null) {

	function getCountIndex (element, k, exponent) {
		if (!exponent) return element;
		return Math.floor((element / exponent) % k);
	}

	if (!A || A.length <= 1 || k == 0) return A;

	let count = [];
	let output = [];

	for (let i = 0; i <= k; i++) {
		count[i] = 0;
	}	

	for (let i = 0; i < A.length; i++) {
		count[getCountIndex(A[i], k, exponent)]++;
		output[i] = 0;
	}

	for (let i = 1; i < count.length; i++) {
		count[i] = count[i] + count[i-1];
	}

	for (let i = A.length-1; i >= 0; i--) {
		let countIndex = getCountIndex(A[i], k, exponent)
		output[count[countIndex] - 1] = A[i];
		count[countIndex]--;
	}

	return output;
}