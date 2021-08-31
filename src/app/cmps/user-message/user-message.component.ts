import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/services/message.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          transform: 'translateY(100px)',
        })
      ),
      state(
        'closed',
        style({
          transform: 'translateY(-150%)',
        })
      ),
      transition('open => closed', [animate('1s ease-in')]),
      transition('closed <=> open', [animate('1s')]),
    ]),
  ],
})
export class UserMessageComponent implements OnInit {
  message: Message = null;
  subscription: Subscription;
  timeOutId: number;
  isMsgShown = false;
  constructor(private msgService: MessageService) {}
  ngOnInit(): void {
    this.subscription = this.msgService.message$?.subscribe((msg) => {
      this.message = msg;
      //When the component is first loaded
      if (msg) {
        clearTimeout(this.timeOutId)
        this.isMsgShown = true;
      }
      this.hideMsgTimeout();
    });
  }

  hideMsgTimeout() {
    this.timeOutId = window.setTimeout(() => {
      this.isMsgShown = false;
      clearTimeout(this.timeOutId);
    }, 5 * 1000);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.timeOutId) {
      clearTimeout(this.timeOutId);
      this.timeOutId = null;
    }
  }
}
