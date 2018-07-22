import rounder from './utils'

const tables = {

  'pln': {'eur': '4.25', 'usd': '3.59', 'gbp': '4.62', 'chf': '3.69'},

  'eur': {'usd': rounder(Number(pln['usd']) / Number(pln['eur'])),
               'gbp': rounder(Number(pln['gbp']) / Number(pln['eur'])),
               'chf': rounder(Number(pln['chf']) / Number(pln['eur'])),
               'pln': rounder(1 / Number(pln['eur']))},

  'gbp': {'usd': rounder(Number(pln['usd']) / Number(pln['gbp'])),
               'eur': rounder(Number(pln['eur']) / Number(pln['gbp'])),
               'chf': rounder(Number(pln['chf']) / Number(pln['gbp'])),
               'pln': rounder(1 / Number(pln['gbp']))},

  'chf': {'usd': rounder(Number(pln['usd']) / Number(pln['chf'])),
               'eur': rounder(Number(pln['eur']) / Number(pln['chf'])),
               'gbp': rounder(Number(pln['gbp']) / Number(pln['chf'])),
               'pln': rounder(1 / Number(pln['chf']))},

  'usd': {'gbp': rounder(Number(pln['gbp']) / Number(pln['usd'])),
               'eur': rounder(Number(pln['eur']) / Number(pln['usd'])),
               'chf': rounder(Number(pln['chf']) / Number(pln['usd'])),
               'pln': rounder(1 / Number(pln['usd']))},
  makeTable: () => {

    return {'pln': pln, 'eur': eur, 'usd': usd, 'gbp': gbp, 'chf': chf}
}
}


export default convTable
