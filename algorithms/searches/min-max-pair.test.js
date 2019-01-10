import minMaxSearch from './min-max-pair';

test('searches [] and returns null', () => {
	expect(minMaxSearch([])).toEqual(null);
})

test('searches null and returns null', () => {
	expect(minMaxSearch([])).toEqual(null);
})

test('searches [0] and returns min = 0, max = 0', () => {
	expect(minMaxSearch([0])).toEqual([0, 0]);
})

test('searches [0, 1] and returns min = 0, max = 1', () => {
	expect(minMaxSearch([0, 1])).toEqual([0, 1]);
})

test('searches [1, 0] and returns min = 1, max = 0', () => {
	expect(minMaxSearch([1, 0])).toEqual([0, 1]);
})

test('searches [0, 1, 2] and returns min = 0, max = 2', () => {
	expect(minMaxSearch([0, 1, 2])).toEqual([0, 2]);
})

test('searches [2, 1, 0] and returns min = 0, max = 2', () => {
	expect(minMaxSearch([2, 1, 0])).toEqual([0, 2]);
})

test('searches [0, 1, 2, 3] and returns min = 0, max = 3', () => {
	expect(minMaxSearch([0, 1, 2, 3])).toEqual([0, 3]);
})

test('searches [3, 2, 1, 0] and returns min = 3, max = 0', () => {
	expect(minMaxSearch([3, 2, 1, 0])).toEqual([0, 3]);
})

test('searches [20, 59, 199, 1, 4, 60, 88, 76, 125, 21] and returns min = 3, max = 8', () => {
	expect(minMaxSearch([20, 59, 199, 1, 4, 60, 88, 76, 125, 21])).toEqual([1, 199]);
})