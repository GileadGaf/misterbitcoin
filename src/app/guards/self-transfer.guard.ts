import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.modal';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class SelfTransferGuard implements CanActivate {
  constructor(private userService: UserService, private rotuer: Router) {}
  loggedinUser: User = null;
  contact: User = null;
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    this.loggedinUser = this.userService.loggedinUser;
    const { id } = route.params;
    this.contact = await this.userService.getUserById(id).toPromise();
    const isSameUser = this.contact?._id === this.loggedinUser._id;
    if (isSameUser)
      this.rotuer.navigate(['contact']);
    return !isSameUser;
  }
}
