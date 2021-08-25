import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.modal';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss'],
})
export class TransferFundComponent implements OnInit {
  @Input() contact: User;
  @Input() maxCoins: number;
  @Output('onTransferCoins') transferCoins = new EventEmitter();
  constructor() {}
  coinsAmount = 0;
  ngOnInit(): void {
    if (this.maxCoins) this.coinsAmount = 1;
  }

  onTransferCoins() {
    if (!this.coinsAmount) return;
    this.transferCoins.emit(this.coinsAmount);
    const amountAfterTransaction = this.maxCoins - this.coinsAmount;
    if (this.coinsAmount > amountAfterTransaction) {
      this.coinsAmount = amountAfterTransaction;
    }
  }
  //Input event
  // change(ev) {
  //   const { value } = ev.target;
  //   if (+value > this.maxCoins) {
  //     ev.target.value = this.maxCoins;
  //     ev.preventDefault();
  //     this.coinsAmount = this.maxCoins;
  //   }
  // }
}
