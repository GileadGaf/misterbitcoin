import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.modal';
@Component({
  selector: 'app-contact-preview',
  template:`
  <article class="contact-preview" *ngIf="contact">
  <img [src]="'https://www.robohash.org/'+contact._id" alt="" />
  <h3>{{contact.name}}</h3>
  </article>
  `, 
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  @Input() contact?:User;

  ngOnInit(): void {
  }

}
