import sort from './CountSort';
// const insertionSort = require('./insertion-sort');

test('sorts input [1] to output [1]', () => {
	expect(sort([1], 1)).toEqual([1]);
})

test('sorts input [1, 2] to output [1, 2]', () => {
	expect(sort([1, 2], 2)).toEqual([1, 2]);
})

test('sorts input [2, 1] to output [1, 2]', () => {
	expect(sort([2, 1],2)).toEqual([1, 2]);
})

test('sorts input [3, 2, 1] to output [1, 2, 3]', () => {
	expect(sort([3, 2, 1], 3)).toEqual([1, 2, 3]);
})

test('sorts input [3, 2, 1] to output [1, 2, 3]', () => {
	expect(sort([3, 2, 1], 3)).toEqual([1, 2, 3]);
})

test('sorts input [1, 2, 3, 4] to output [1, 2, 3, 4]', () => {
	expect(sort([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
})

test('sorts input [2, 4, 1, 3] to output [1, 2, 3, 4]', () => {
	expect(sort([2, 4, 1, 3], 4)).toEqual([1, 2, 3, 4]);
})

test('sorts input [8, 4, 6, 2, 3, 5, 7, 1 to output [1, 2, 3, 4, 5, 6, 7, 8]', () => {
	expect(sort([8, 4, 6, 2, 3, 5, 7, 1], 8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
})

