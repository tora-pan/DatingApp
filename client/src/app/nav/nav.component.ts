import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // declare vars here
  model: any = {}
  loggedIn: boolean;

  //constructor
  constructor(private accountService: AccountService) { }

  //angular init method
  ngOnInit(): void {
    this.getCurrentUser();
  }

  //functions
  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.loggedIn = true;
    }, error => {
      console.log(error);
    });
  }

  logout() {
    this.accountService.logout();
    this.loggedIn = false;
  }

  getCurrentUser() {
    this.accountService.currentUser$.subscribe(user => {
      this.loggedIn = !!user; //!! turns object into a bool (if null = false etc..)
    }, error => {
        console.log(error);
    })
  }

}
