import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { SocketService } from 'src/app/services/socket.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent implements OnInit {
  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService,
    private socketService: SocketService,
    private cd:ChangeDetectorRef
  ) {}

  loggedinUser = null;
  bitcoinRate = 0;
  movesFilterTerm = '';
  ngOnInit(): void {
    this.loggedinUser = this.userService.loggedinUser;
    //TODO:Make as observeble
    this.loadBitcoinRate();
    this.socketService.on('recieved money', ({reciever}) => {
      this.loggedinUser = this.userService.loggedinUser;
      this.cd.markForCheck();

    });
  }

  async loadBitcoinRate() {
    try {
      this.bitcoinRate = await this.bitcoinService.getRate(
        this.loggedinUser.coins
      );
    } catch (err) {
      console.log(err);
    }
  }
  get moves() {
    const userMoves = this.loggedinUser.moves;
    return userMoves;
    // const contactMoves = this.contact.moves.filter(
    //   (move) => move.toId === this.loggedinUser._id
    // );
    // if (this.movesFilterTerm) {
    //   if (this.movesFilterTerm === 'from') return contactMoves;
    //   return userMoves;
    // }
    // return userMoves.concat(contactMoves);
  }

  changeFilter(term) {
    this.movesFilterTerm = term;
  }

  resetDb() {
    this.userService.resetDb();
  }
}
