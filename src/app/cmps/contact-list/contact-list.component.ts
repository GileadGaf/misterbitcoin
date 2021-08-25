import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.modal';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @Input() contacts?:User[]

  ngOnInit(): void {
  }

}
