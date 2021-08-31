import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.modal';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  newUser = this.userService.getEmptyUser();

  users$: Observable<User[]>;

  ngOnInit(): void {
    this.loadUsers$();
  }

  loadUsers$() {
    this.userService.loadUsers();
    this.users$ = this.userService.users$;
  }

  async onSignup() {
    const { name, email, phone } = this.newUser;
    if (!name || !email || !phone) return;
    this.newUser.password = '12345';
    const user = await this.userService.signup(this.newUser);
    this.router.navigate(['/']);
  }
 async onLogin(email) {
    const password = '12345';
    await this.userService.login(email,password);
    this.router.navigate(['/']);
  }
}
