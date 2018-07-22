class Converter {

 constructor(conversionTable, rateList) {
   this.conversionTable = conversionTable;
   this.rateList = rateList;
   console.log(':squid: hello! ');
 }

 convert(targetCurrency, sourceCurrency, value) {
   sourceCurrency = sourceCurrency.toLowerCase();
   targetCurrency = targetCurrency.toLowerCase();
   if(!this.conversionTable[targetCurrency] || !this.conversionTable[sourceCurrency]) {
     return null;
   }

   const rate = targetCurrency === sourceCurrency ?
     1 :
     this.conversionTable[targetCurrency][sourceCurrency];
   return Number((rate * value).toFixed(2));
 }

 generateConvertTable(currentRateContainer, inputCurrency) {
   currentRateContainer.innerText = inputCurrency.value;
   this.rateList.innerHTML = null;
   Object.keys(this.conversionTable[inputCurrency.value.toLowerCase()]).map(currencyName => {
     const listElement = document.createElement('li');
     const currencyNameContainer = document.createElement('span');
     const currencyRate = document.createElement('span');
     currencyNameContainer.innerText = currencyName;
     currencyRate.innerText = this.conversionTable[inputCurrency.value.toLowerCase()][currencyName];
     listElement.appendChild(currencyNameContainer);
     listElement.appendChild(currencyRate);
     this.rateList.appendChild(listElement);
   });
 }
};



export default Converter;
