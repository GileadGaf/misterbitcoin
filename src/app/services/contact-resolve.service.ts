import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user.modal';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class ContactResolveService implements Resolve<Observable<User>> {

  constructor(private userService:UserService) { }

  resolve(route:ActivatedRouteSnapshot){
    const {id}=route.params;
    return this.userService.getUserById(id);
}
}
