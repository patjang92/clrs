import InsertionSort from './insertion-sort';

export default function BucketSort(A, bucketSize = 5) {
	
	function getBucketIndex(element, min, bucketSize) {
		return Math.floor((element - min) / bucketSize)
	}

	if (!A || A.length <= 1) return A;

	const n = A.length;
	let min = A[0];
	let max = A[0];

	for (let i = 0; i < n; i++) {
		if (A[i] > max) {
			max = A[i];
		}
		if (A[i] < min) {
			min = A[i];
		}
	}
	
	let numBuckets = Math.floor((max - min) / bucketSize) + 1;

	let buckets = [];
	for (let i = 0; i < numBuckets; i++) {
		buckets[i] = [];
	}

	for (let i = 0; i < n; i++) {
		buckets[getBucketIndex(A[i], min, bucketSize)].push(A[i]);
	}

	let result = [];

	for (let i = 0; i < numBuckets; i++) {
		buckets[i] = InsertionSort(buckets[i]);
		for (let j = 0; j < buckets[i].length; j++) {
			result.push(buckets[i][j]);
		}
	}

	return result;
}