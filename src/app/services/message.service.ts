import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message$ = new BehaviorSubject<Message>(null);

  constructor() { }

  addMsg(msg: Message) {
    this.message$.next(msg);
  }
}
