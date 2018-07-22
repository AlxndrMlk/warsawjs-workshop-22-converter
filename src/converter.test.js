import Converter from './converter'
import Mocks from './mocks.js'

test('Add function should add numbers ', () => {
  const convTable = Mocks.currenciesTable;
  const myConv = new Converter(convTable);
  expect(myConv.convert('pln', 'usd', 100.00)).toBe(359.00);
  expect(myConv.convert('pln', 'pln', 100.00)).toBe(100.00)
});
