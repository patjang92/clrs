import Stack from './Stack';

test('create empty stack', () => {
	const stack = new Stack();
  expect(stack.toArray()).toEqual([]);
  expect(stack.isEmpty()).toEqual(true);  
  expect(stack.pop).toThrowError();
})

test('create stack with one element', () => {
	const stack = new Stack([1]);
  expect(stack.toArray()).toEqual([1]);
  expect(stack.isEmpty()).toEqual(false); 
})

test('push elements onto stack in order', () => {
  const stack = new Stack([]);
  stack.push(1);
  expect(stack.toArray()).toEqual([1]);
  expect(stack.isEmpty()).toEqual(false); 
  stack.push(2);
  expect(stack.toArray()).toEqual([2, 1]);
  stack.push(3);
  expect(stack.toArray()).toEqual([3, 2, 1]);
})

test('pop elements off of stack in order', () => {
  const stack = new Stack([3, 2, 1]);
  expect(stack.pop()).toEqual(3);
  expect(stack.toArray()).toEqual([2, 1]);
  expect(stack.pop()).toEqual(2);
  expect(stack.toArray()).toEqual([1]);
  expect(stack.pop()).toEqual(1);
  expect(stack.toArray()).toEqual([]);
  expect(stack.isEmpty()).toEqual(true);
  expect(stack.pop).toThrowError();
})