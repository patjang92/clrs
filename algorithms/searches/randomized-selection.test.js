import randomizedSelection from './randomized-selection';

test('base case null returns null', () => {
	expect(randomizedSelection(null, 0, 0, 0)).toEqual(null);
})

test('base case [] returns null', () => {
	expect(randomizedSelection([], 0, 0, 0)).toEqual(null);
})

test('checks if i is out of bounds and returns null', () => {
	expect(randomizedSelection([0], 1, 0, 0)).toEqual(null);
})

test('searches array [0] to find i = 0 and returns  0', () => {
	expect(randomizedSelection([0], 0, 0, 0)).toEqual(0);
})

test('searches array [0, 1] to find i = 0 and returns 0', () => {
	expect(randomizedSelection([0, 1], 0, 0, 1)).toEqual(0);
})

test('searches array [1, 0] to find i = 0 and returns 1', () => {
	expect(randomizedSelection([1, 0], 0, 0, 1)).toEqual(0);
})

test('searches array [1, 0] to find i = 1 and returns 0', () => {
	expect(randomizedSelection([1, 0], 1, 0, 1)).toEqual(1);
})

test('searches array [0, 1] to find i = 1 and returns 1', () => {
	expect(randomizedSelection([0, 1], 1, 0, 1)).toEqual(1);
})

test('searches array [0, 1, 2, 3] to find i = 1 and returns 1', () => {
	expect(randomizedSelection([0, 1, 2, 3], 1, 0, 3)).toEqual(1);
})

test('searches array [3, 2, 1, 0] to find i = 1 and returns 1', () => {
	expect(randomizedSelection([3, 2, 1, 0], 1, 0, 3)).toEqual(1);
})

test('searches array [5, 2, 3, 10, 1, 4, 9] to find i = 3 and returns 4', () => {
	expect(randomizedSelection([5, 2, 3, 10, 1, 4, 9], 3, 0, 6)).toEqual(4);
})