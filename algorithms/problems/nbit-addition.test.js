import nBitAddition from './nbit-addition';

test('adds [1] and [1] to get sum [1, 0]', () => {
	expect(nBitAddition([1], [1])).toEqual([1, 0]);
})

test('adds [1, 0] and [0, 1] to get sum [0, 1, 1]', () => {
	expect(nBitAddition([1, 0], [0, 1])).toEqual([0, 1, 1]);
})

test('adds [1, 1] and [1, 1] to get sum [0, 1, 1]', () => {
	expect(nBitAddition([1, 1], [1, 1])).toEqual([1, 1, 0]);
})