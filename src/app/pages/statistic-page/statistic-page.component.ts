import { Component, OnInit } from '@angular/core';
import { ChartType,Row } from 'angular-google-charts';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'app-statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
  
  
export class StatisticPageComponent {
  constructor(private bitcoinService: BitcoinService) { }
  type = ChartType.Line;
  marketPrice = {
    title: 'Market Price',
    data:null,
    width: 500,
    height:500
}
  transactionsCount = {
    title: 'Trasactions Count',
    data:null,
    width: 500,
    height:500
}
//   [
//     ['Firefox', 45.0],
//     ['IE', 26.8],
//     ['Chrome', 12.8],
//     ['Safari', 8.5],
//     ['Opera', 6.2],
//     ['Others', 0.7] 
//  ];


  async getDataMarket() {
    const data = await this.bitcoinService.getMarketPrice();
const chartData=data.values.map(val=>[new Date(val.x).toLocaleTimeString(),val.y])
    this.marketPrice.data = chartData;
  }
  async getDataTransactions() {
    const data = await this.bitcoinService.getConfirmedTransactions();
const chartData=data.values.map(val=>[new Date(val.x).toLocaleTimeString(),val.y])
    this.transactionsCount.data = chartData;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.getDataMarket();
    this.getDataTransactions();
    
  }

}
