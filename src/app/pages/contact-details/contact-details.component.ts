import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.modal';
import { Move } from 'src/app/models/move.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  contact: User;
  loggedinUser = null;
  subscription: Subscription;
  movesFilterTerm = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe((data) => {
      this.contact = data.contact;
      this.loggedinUser = this.userService.getLoggedinUser();
    });
  }

  async transferCoins(amount) {
    const newMove = new Move(
      this.contact._id,
      this.contact.name,
      this.loggedinUser._id,
      this.loggedinUser.name,
      amount,
      Date.now()
    );

    this.loggedinUser = await this.userService.addNewMove(newMove);
  }

  get moves() {
    const userMoves = this.loggedinUser.moves.filter(
      (move) => move.toId === this.contact._id
    );
    const contactMoves = this.contact.moves.filter(
      (move) => move.toId === this.loggedinUser._id
    );
    if (this.movesFilterTerm) {
      if (this.movesFilterTerm === 'from') return contactMoves;
      return userMoves;
    }
    return userMoves.concat(contactMoves);
  }

  changeFilter(term) {
    this.movesFilterTerm = term;
  }

  get prevPage() {
    let prevPage = '';
    const isHeadingContactList = this.route.snapshot.params.backToContacts;
    if (isHeadingContactList) prevPage += 'contact';
    return prevPage;
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    this.subscription.unsubscribe();
  }
}
