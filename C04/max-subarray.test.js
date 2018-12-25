import findMaxSubarray from './max-subarray';

test('should return single element if given single element array', () => {
	expect(findMaxSubarray([1], 0, 0)).toEqual([0, 0, 1]);
})

test('searches [-1, 2] to find max subarray from indices 1 to 1 with sum 2', () => {
	expect(findMaxSubarray([-1, 2], 0, 1)).toEqual([1, 1, 2]);
})

test('searches [2, -1] to find max subarray from indices 0 to 0 with sum 2', () => {
	expect(findMaxSubarray([2, -1], 0, 1)).toEqual([0, 0, 2]);
})

test('searches [2, 2] to find max subarray from indices 0 to 1 with sum 4', () => {
	expect(findMaxSubarray([2, 2], 0, 1)).toEqual([0, 1, 4]);
})

test('searches [2, 2] to find max subarray from indices 0 to 1 with sum 4', () => {
	expect(findMaxSubarray([2, 2], 0, 1)).toEqual([0, 1, 4]);
})

test('searches [-1, 2, 3, -4, 5, 10] to find max subarray from indices 1 to 5 with sum 16', () => {
	expect(findMaxSubarray([-1, 2, 3, -4, 5, 10], 0, 5)).toEqual([1, 5, 16]);
})

test('searches [-2, -5, 6, -2, -3, 1, 5] to find max subarray from indices 0 to 6 with sum 7', () => {
	expect(findMaxSubarray([-2, -5, 6, -2, -3, 1, 5], 0, 6)).toEqual([2, 6, 7]);
})
