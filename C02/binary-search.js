export default function binarySearch(A, v, start, end) {
	if (end - start < 0) return null;
	const mid = start + Math.floor((end - start) / 2);
	if (A[mid] === v) return mid;
	else if (v < A[mid]) return binarySearch(A, v, start, mid - 1);
	else return binarySearch(A, v, mid + 1, end); 
}