// TODO: make test suite
import insertionSort from './insertion-sort';
// const insertionSort = require('./insertion-sort');

test('sorts input [1, 2, 3] to output [1, 2, 3]', () => {
	expect(insertionSort([1, 2, 3])).toEqual([1, 2, 3]);
})

test('sorts input [1] to output [1]', () => {
	expect(insertionSort([1])).toEqual([1]);
})

test('sorts input [3, 2, 1] to output [1, 2, 3]', () => {
	expect(insertionSort([3, 2, 1])).toEqual([1, 2, 3]);
})

test('sorts input [3, 2, 1] to output [1, 2, 3]', () => {
	expect(insertionSort([3, 2, 1])).toEqual([1, 2, 3]);
})

test('sorts input [2, 4, 1, 3] to output [1, 2, 3, 4]', () => {
	expect(insertionSort([2, 4, 1, 3])).toEqual([1, 2, 3, 4]);
})