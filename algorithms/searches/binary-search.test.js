import binarySearch from './binary-search';

test('searches array [1] to find v = 1 and returns index 0', () => {
	expect(binarySearch([1], 1, 0, 0)).toEqual(0);
})

test('searches array [0] to find v = 1 and returns null', () => {
	expect(binarySearch([0], 1, 0, 0)).toEqual(null);
})

test('searches array [0, 1] to find v = 1 and returns 1', () => {
	expect(binarySearch([0, 1], 1, 0, 1)).toEqual(1);
})

test('searches array [0, 1] to find v = 0 and returns 0', () => {
	expect(binarySearch([0, 1], 0, 0, 1)).toEqual(0);
})

test('searches array [0, 1] to find v = 2 and returns null', () => {
	expect(binarySearch([0, 1], 2, 0, 1)).toEqual(null);
})

test('searches array [0, 1, 2] to find v = 2 and returns 2', () => {
	expect(binarySearch([0, 1, 2], 2, 0, 2)).toEqual(2);
})

test('searches array [0, 1, 2] to find v = 1 and returns 1', () => {
	expect(binarySearch([0, 1, 2], 1, 0, 2)).toEqual(1);
})

test('searches array [0, 1, 2] to find v = 0 and returns 0', () => {
	expect(binarySearch([0, 1, 2], 0, 0, 2)).toEqual(0);
})