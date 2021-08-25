import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  @Output() onSearch = new EventEmitter();
  public term = '';
  constructor() { }

  ngOnInit(): void {
  }

  filter = () => {
    console.log(this.term);
    this.onSearch.emit(this.term);
  }

 

}
