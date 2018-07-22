import examples from './examples';

test('Add function should add numbers ', () => {
  expect(examples.add(1,2)).toBe(3);
});

test('Should return hello + name', () => {
  expect(examples.hello('John')).toBe('hello John')
});

// test('Should ret. next fibo num.', () => {
//   expect(examples.fib(1)).toEqual(1);
//   expect(examples.fib(2)).toEqual(1)
// });
