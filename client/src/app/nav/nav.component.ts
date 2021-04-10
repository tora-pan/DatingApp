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
    this.loggedIn = false;
  }

}
