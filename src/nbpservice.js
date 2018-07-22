import axios from 'axios';

class NBPService {
  // constructor() {
  //   // this.url = ''
  // }
  async fetchCurrentRate(currency) {
    try {
      return await axios.get('http://api.nbp.pl/api/exchangerates/rates/a/usd/last/?format=json')
      } catch(error) {
        console.log('error.message', error.message);
      }
  }
  async getCurrentRate(currency) {
    const { data } = await this.fetchCurrentRate(currency);
    return data.rates[0].mid;
      }
    }
    static convertCurrency(base, target, rates) {
      return rounder((rates[target] || 1) / (rates[base] || 1));
    }

    getRate(base, rates, destCurrencies) {
      return destCurrencies.reduce((all, cur) => {
        all[cur] = NBPService.convertCurrency(base, cur, rates);
        return all;
      }, {});
    };

    generateCurrencyTable(rates) {
      const currencies = Object.keys(rates)
        .map(rate => rate.toLowerCase());
      currencies.push('pln');
      return currencies.reduce((all, currency) => {
        const destCurrencies = currencies.filter(cur => cur !== currency);
        all[currency] = this.getRate(currency, rates, destCurrencies);
        return all;
      }, {});

    }


export default NBPService;
