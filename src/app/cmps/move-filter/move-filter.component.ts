import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.modal';

@Component({
  selector: 'app-move-filter',
  templateUrl: './move-filter.component.html',
  styleUrls: ['./move-filter.component.scss']
})
export class MoveFilterComponent implements OnInit {
  @Input() contactName: string
  @Output('onChangeFilter') changeFilter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onChangeFilter(term) {
    this.changeFilter.emit(term);
  }

}
