import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Move } from 'src/app/models/move.model';
import { User } from 'src/app/models/user.modal';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class MoveListComponent implements OnInit {
  @Input() moves: Move[];
  @Input() loggedinUserId: string;
  @Input() contact?: User;

  constructor() { }

  get sortedMoves() {
    return [...this.moves].sort((move1, move2) => move2.at - move1.at);
  }

  ngOnInit(): void {
  }


}
