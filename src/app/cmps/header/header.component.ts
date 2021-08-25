import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  get loggedinUser() {
    return this.userService.getLoggedinUser();
  }

  onLogOut() {
    this.userService.logout();
    this.router.navigate(['signup']);
  }

}
