import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import { Message } from './models/message';
import { SinglePlurPipe } from './pipes/single-plur.pipe';
import { MessageService } from './services/message.service';
import { SocketService } from './services/socket.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mister-bitcoin';

  constructor(
    private socketService: SocketService,
    private msgService: MessageService,
    private userService: UserService,
    private singlePlurPipe:SinglePlurPipe
  ) {}

  ngOnInit(): void {
    this.socketService.setup();
    const user = this.userService.loggedinUser;
    if(user)this.socketService.emit('set-user-socket', user._id);
    this.socketService.on('recieved money', ({reciever,sender,amount,transferReason}) => {
      const message = new Message(`You got ${amount} ${this.singlePlurPipe.transform(amount,'coin')} from ${sender.name}`,transferReason);
      this.msgService.addMsg(message);
      this.userService._updateLoggedinUser(reciever);
    });
  }
}
