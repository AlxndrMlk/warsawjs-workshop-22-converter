import utils from './utils';

test('Shpould round num to 2 decimal points ', () => {
  expect(utils.rounder(5.556)).toBe(5.56);
  expect(utils.rounder(9.133)).toBe(9.13);
  expect(utils.rounder(11.001)).toBe(11.00);
});
