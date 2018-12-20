var assert = require('assert')


function insertionSort(a) {
	// Instantiate for loop to iterate through elements of array
	// Set i (index of array) to start with second element
	for (let i = 1; i < a.length; i++) {
		// Set a[i] as key
		let key = a[i];

		// Start iterating from right to left that compares key to previous elements whose index < i (call this j)
		let j = i-1;
	
		// While j is greater than -1
		while (j > -1 && a[j] > a[i]) {
			// If a[j] is greater than key, set a[j+1] = a[j] and set j--
			a[j+1] = a[j];
			j--;
		}
		// Else a[j] = key and break
		a[j] = key;
	}
}

// Tests
assert([1,2,3] == insertionSort([1,2,3]));