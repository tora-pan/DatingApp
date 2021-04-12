import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Local } from 'protractor/built/driverProviders';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any; //Temp

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.setCurrentUser();
  }

  //this is how we persist the user
  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }
}


