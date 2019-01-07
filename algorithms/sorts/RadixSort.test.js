import sort from './RadixSort';
// const insertionSort = require('./insertion-sort');

test('sorts input [1] to output [1]', () => {
	expect(sort([1], 10)).toEqual([1]);
})

test('sorts input [1, 2] to output [1, 2]', () => {
	expect(sort([1, 2], 10)).toEqual([1, 2]);
})

test('sorts input [2, 1] to output [1, 2]', () => {
	expect(sort([2, 1], 10)).toEqual([1, 2]);
})

test('sorts input [3, 2, 1] to output [1, 2, 3]', () => {
	expect(sort([3, 2, 1], 10)).toEqual([1, 2, 3]);
})

test('sorts input [3, 2, 1] to output [1, 2, 3]', () => {
	expect(sort([3, 2, 1], 10)).toEqual([1, 2, 3]);
})

test('sorts input [1, 2, 3, 4] to output [1, 2, 3, 4]', () => {
	expect(sort([1, 2, 3, 4], 10)).toEqual([1, 2, 3, 4]);
})

test('sorts input [2, 4, 1, 3] to output [1, 2, 3, 4]', () => {
	expect(sort([2, 4, 1, 3], 10)).toEqual([1, 2, 3, 4]);
})

test('sorts input [8, 4, 6, 2, 3, 5, 7, 1] to output [1, 2, 3, 4, 5, 6, 7, 8]', () => {
	expect(sort([8, 4, 6, 2, 3, 5, 7, 1], 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
})

test('sorts input ([10, 74, 23, 62, 95, 21] to output [10, 21, 23, 62, 74, 95]', () => {
	expect(sort([10, 74, 23, 62, 95, 21], 10)).toEqual([10, 21, 23, 62, 74, 95]);
})

test('sorts input [130, 754, 283, 622, 975, 201, 6, 41, 1003, 29, 54, 2] to output [2, 6, 29, 41, 54, 130, 201, 283, 622, 754, 975, 1003]', () => {
	expect(sort([130, 754, 283, 622, 975, 201, 6, 41, 1003, 29, 54, 2], 10)).toEqual([2, 6, 29, 41, 54, 130, 201, 283, 622, 754, 975, 1003]);
})

test('sorts input [130, 754, 283, 622, 975, 201, 6, 41, 1003, 29, 54, 2] with radix 2 to output [2, 6, 29, 41, 54, 130, 201, 283, 622, 754, 975, 1003]', () => {
	expect(sort([130, 754, 283, 622, 975, 201, 6, 41, 1003, 29, 54, 2], 2)).toEqual([2, 6, 29, 41, 54, 130, 201, 283, 622, 754, 975, 1003]);
})