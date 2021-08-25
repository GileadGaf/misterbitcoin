import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.modal';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
})
export class ContactEditComponent implements OnInit {
  contact: User;
  subscription: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.subscription = this.route.data.subscribe((data) => {
    //   this.contact = data.contact || this.contactService.getEmptyContact();
    // });
  }

  // async onSaveContact({ value }) {
  //   for (const field in value) {
  //     this.contact[field] = value[field];
  //   }
  //   try {
  //     await this.contactService.saveContact(this.contact).toPromise();
  //     this.router.navigateByUrl('contact');
  //   } catch (err) {
  //     console.log('We had error saving this contact!');
  //   }
  // }

  // get actionTitle() {
  //   return this.contact._id ? 'Update Contact' : 'Add a New Contact';
  // }

  // get returnUrl() {
  //   if (this.contact._id) {
  //     return ['/contact', this.contact._id];
  //   }
  //   return '/contact';
  // }

  // onDeleteContact() {
  //   this.contactService.deleteContact(this.contact._id);
  //   this.router.navigateByUrl('/contact');
  // }

  // ngOnDestroy(): void {
  //   //Called once, before the instance is destroyed.
  //   this.subscription.unsubscribe();
  // }
}
