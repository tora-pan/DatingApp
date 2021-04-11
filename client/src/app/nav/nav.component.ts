import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // declare vars here
  model: any = {}

  //constructor
  constructor(public accountService: AccountService) { }

  //angular init method
  ngOnInit(): void {
  }

  //functions
  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  logout() {
    this.accountService.logout();
  }
}
