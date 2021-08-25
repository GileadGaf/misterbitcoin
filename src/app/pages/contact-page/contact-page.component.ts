import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user.modal';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  users$: Observable<User[]>;
  subscription?: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.loadUsers();
    this.users$ = this.userService.users$;
  }
  searchContact(term) {
    const filterBy = { term };
    this.userService.loadUsers(filterBy);
  }
}
