import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor() { }

  public async getRate(coins) {
    const url='https://blockchain.info/tobtc?currency=USD&value=1';
    const ratio = (await axios.get(url)).data;
    return coins/ratio;
  }
  public async getMarketPrice(){
const url='https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true';
const data= (await axios.get(url)).data;
return data;
  }
  public async getConfirmedTransactions(){
    const url = 'https://api.blockchain.info/charts/n-transactions?format=json&cors=true';
    const data = (await axios.get(url)).data;
    return data;
  }
}
