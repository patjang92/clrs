const insertionSort = require('./insertion-sort');

test('sorts [1, 2, 3] to [1, 2, 3]', () => {
	expect(insertionSort([1, 2, 3])).toEqual([1, 2, 3]);
})