import WJSConverter from './converter';

import Mocks from "./mocks";
// import convTable from './tableMaker'

const inputCurrency = document.querySelector('#input-currency');
const outputCurrency = document.querySelector('#output-currency');
const rateList = document.querySelector('section.rate ul');
const Converter = new WJSConverter(Mocks.currenciesTable, rateList);
const currentRateContainer = document.querySelector('#current-rate');

Converter.generateConvertTable(currentRateContainer, inputCurrency);
const input = document.querySelector('#input-value');
const resultContainer = document.querySelector('#result');

inputCurrency.addEventListener('change', () => {
 resultContainer.innerText = Converter.convert(outputCurrency.value, inputCurrency.value, input.value);
 console.log(':squid: heelo inputCurrency');
 Converter.generateConvertTable(currentRateContainer, inputCurrency);
});

outputCurrency.addEventListener('change', () => {
 resultContainer.innerText = Converter.convert(outputCurrency.value, inputCurrency.value, input.value);
 console.log(':squid: heelo outputCurrency');
 Converter.generateConvertTable(currentRateContainer, inputCurrency);
});

input.addEventListener('keyup', () => {
 resultContainer.innerText = Converter.convert(outputCurrency.value, inputCurrency.value, input.value);
});
