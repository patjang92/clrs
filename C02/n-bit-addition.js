/*
	Input: Takes 2 n-bit integers stored in 2 n-element arrays a and b
	Output: Sum of A + B in array C of length n+1
*/
export default function nBitAddition(a, b) {
	if (a.length !== b.length) throw Error("Arrays a and b are not the same length");
	let n = a.length;

	// set carry = 0
	let carry = 0;

	// when iterating, start at end of arrays A, B, and C
		// index of C will be index of (A, B) + 1
	for (let i = 0; i < n; i++) {
		let index = n - i;
		let cIndex = index + 1;

		// since this is bitwise addition, sum of A[i] + B[i] can be 0, 1, 2, or 3
		let sum = a[index] + b[index] + carry;

		// if sum is 2 or greater, then set carry = 1; else carry = 0;
		if (sum >= 2) 
			carry = 1; 
		else 
			carry = 0;

		// set C[i+1] to sum % 2, as we only want a 1 or 0
		sum = sum % 2;
		c[cIndex] = sum;
	}
	c[0] = carry;
	return c;
}