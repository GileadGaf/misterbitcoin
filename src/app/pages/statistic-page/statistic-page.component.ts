import { Component, OnInit } from '@angular/core';
import { ChartType,Row } from 'angular-google-charts';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'app-statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
  
  
export class StatisticPageComponent {
  chartSize: number;
  constructor(private bitcoinService: BitcoinService) { }
  type = ChartType.Line;
  marketPrice = {
    title: 'Market Price',
    data: null,
    height:500,
    width:500
}
  transactionsCount = {
    title: 'Trasactions Count',
    data: null,
    height: 500,
    width:500
}


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
    this.chartSize = window.innerWidth / 3;

    this.marketPrice.height = this.chartSize;
    this.marketPrice.width = this.chartSize;
    this.transactionsCount.height = this.chartSize;
    this.transactionsCount.width = this.chartSize;
    console.log(this.chartSize);
    this.getDataMarket();
    this.getDataTransactions();
    
  }

}
